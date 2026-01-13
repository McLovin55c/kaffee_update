import { TRANSLATIONS, CAT_STRUCT, DATA, MEASURE_DEFS } from './data.js';

export const game = {
    lang: 'de',
    step: 1,
    sorte: '',
    sum: 0,
    multipliers: { Instant: {}, Filter: {}, Kapsel: {} },
    elecFactor: 1.0,
    charts: {},

    setLang: function(l) {
        this.lang = l;
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        document.querySelector(`.lang-btn[onclick*="${l}"]`).classList.add('active');
        this.updateTexts();
        if(this.step === 2) this.initPhase2();
        if(this.step === 3) this.initPhase3();
        if(this.step === 4) this.initPhase4();
        if(this.step === 5) this.initPhase5();
    },

    t: function(key) {
        const parts = key.split('.');
        let obj = TRANSLATIONS[this.lang];
        for(let p of parts) obj = obj ? obj[p] : null;
        return obj || key;
    },

    updateTexts: function() {
        const mapping = {
            'ui_title': 'title', 'ui_type_instant': 'type_instant', 'ui_desc_instant': 'desc_instant',
            'ui_type_filter': 'type_filter', 'ui_desc_filter': 'desc_filter', 'ui_type_kapsel': 'type_kapsel', 'ui_desc_kapsel': 'desc_kapsel',
            'ui_p1_title': 'p1_title', 'ui_p2_instr': 'p2_instr', 'ui_lexikon': 'lexikon', 'btnCheckSort': 'btn_check', 'btnSkip': 'btn_skip',
            'ui_zone_mat': 'zone_mat', 'ui_zone_prod': 'zone_prod', 'ui_zone_use': 'zone_use', 'ui_zone_eol': 'zone_eol',
            'ui_p3_title': 'p3_title', 'ui_p3_instr': 'p3_instr', 'btnFinishGuess': 'btn_result',
            'ui_p4_title': 'p4_title', 'ui_details': 'details', 'btnSim': 'btn_sim',
            'ui_p5_title': 'p5_title', 'ui_elec': 'elec', 'ui_measures': 'measures', 'btnRestart': 'btn_restart'
        };
        for(let id in mapping) {
            const el = document.getElementById(id);
            if(el) el.innerText = this.t(mapping[id]);
        }
        this.updateSum();
    },

    start: function(s, sorte) {
        this.sorte = sorte;
        this.nextStep(s);
    },

    nextStep: function(s) {
        document.querySelectorAll('.phase').forEach(e => e.classList.add('hidden'));
        document.getElementById('phase'+s).classList.remove('hidden');
        document.getElementById('progress').innerText = `Phase ${s}/5`;
        this.step = s;
        if(s === 2) this.initPhase2();
        if(s === 3) this.initPhase3();
        if(s === 4) this.initPhase4();
        if(s === 5) this.initPhase5();
        lucide.createIcons();
    },

    initPhase2: function() {
        const src = document.getElementById('sourceContainer');
        const lex = document.getElementById('lexikonShort');
        src.innerHTML = ""; lex.innerHTML = "";
        
        CAT_STRUCT.forEach(c => {
            const el = document.createElement('div');
            el.className = 'card'; el.dataset.phase = c.phase; el.dataset.id = c.id;
            el.innerHTML = `<i data-lucide="${c.icon}" size="14"></i> ${this.t('cats.'+c.id+'.l')}`;
            if(c.phase === "Material") el.style.borderLeftColor = "var(--col-mat)";
            if(c.phase === "Herstellung") el.style.borderLeftColor = "var(--col-prod)";
            if(c.phase === "Nutzung") el.style.borderLeftColor = "var(--col-use)";
            if(c.phase === "EoL") el.style.borderLeftColor = "var(--col-eol)";
            src.appendChild(el);
            lex.innerHTML += `<div class="info-detail"><strong>${this.t('cats.'+c.id+'.l')}:</strong> ${this.t('cats.'+c.id+'.s')}</div>`;
        });
        [src, ...document.querySelectorAll('.drop-zone')].forEach(el => { new Sortable(el, { group: 'g', animation: 150 }); });
    },

    checkSort: function() {
        const zones = ['Material', 'Herstellung', 'Nutzung', 'EoL'];
        let correct = 0; let wrong = 0;
        zones.forEach(z => {
            const cards = document.getElementById('zone_'+z).querySelectorAll('.card');
            cards.forEach(c => {
                if(c.dataset.phase === z) { c.style.background = "#dcedc8"; correct++; }
                else { c.style.background = "#ffcdd2"; wrong++; }
            });
        });
        const fb = document.getElementById('sortFeedback');
        fb.style.display = "block";
        if(wrong === 0 && correct === CAT_STRUCT.length) {
            fb.innerText = this.t('feedback_ok'); fb.style.background="#dcedc8";
            setTimeout(() => this.nextStep(3), 1500);
        } else {
            fb.innerText = this.t('feedback_err'); fb.style.background="#ffcdd2";
        }
    },

    initPhase3: function() {
        const box = document.getElementById('sliderBox'); box.innerHTML = "";
        CAT_STRUCT.slice(0, 10).forEach(c => {
            box.innerHTML += `
            <div class="slider-row">
                <div class="slider-label"><i data-lucide="${c.icon}" size="16"></i> ${this.t('cats.'+c.id+'.l')}</div>
                <input type="range" class="guess" data-id="${c.id}" min="0" max="60" step="2" value="0" oninput="game.handleSlider(this)">
                <span id="val_${c.id}" style="font-weight:bold; width:35px; text-align:right">0%</span>
            </div>`;
        });
        this.sum = 0; this.updateSum();
    },

    handleSlider: function(el) {
        let s = 0; document.querySelectorAll('.guess').forEach(i => s += parseInt(i.value));
        if(s > 100) { el.value -= (s - 100); s = 100; }
        document.getElementById('val_'+el.dataset.id).innerText = el.value + "%";
        this.sum = s; this.updateSum();
    },

    updateSum: function() {
        const d = document.getElementById('sumDisplay');
        d.innerText = `${this.t('sum')}: ${this.sum} / 100`;
        d.style.color = this.sum === 100 ? "var(--col-mat)" : "var(--col-prod)";
        const btn = document.getElementById('btnFinishGuess');
        if(btn) btn.disabled = (this.sum !== 100);
    },

    initPhase4: function() {
        const user = Array.from(document.querySelectorAll('.guess')).map(i => parseInt(i.value));
        const real = DATA[this.sorte].values;
        const colors = CAT_STRUCT.slice(0,10).map(c => {
            if(c.phase === "Material") return "#558B2F";
            if(c.phase === "Herstellung") return "#795548";
            if(c.phase === "Nutzung") return "#0277BD";
            return "#aaa";
        });
        
        if(this.charts.res) this.charts.res.destroy();
        this.charts.res = new Chart(document.getElementById('resChart'), {
            type: 'bar',
            data: {
                labels: CAT_STRUCT.slice(0,10).map(c => this.t('cats.'+c.id+'.l')),
                datasets: [
                    { label: this.t('chart_guess'), data: user, backgroundColor: '#ccc' },
                    { label: this.t('chart_real'), data: real, backgroundColor: colors }
                ]
            }, options: { scales: { y: { beginAtZero: true, max: 60 } } }
        });

        const box = document.getElementById('longDescBox'); box.innerHTML = "";
        CAT_STRUCT.forEach(c => {
            box.innerHTML += `<div class="info-detail"><strong><i data-lucide="${c.icon}" size="12"></i> ${this.t('cats.'+c.id+'.l')}:</strong> ${this.t('cats.'+c.id+'.d')}</div>`;
        });

        const d = DATA[this.sorte];
        const absKg = ((d.abs + d.afterlife)/1000).toFixed(3);
        document.getElementById('absVal').innerText = absKg;
        
        const eol = document.getElementById('eolBox');
        let eolText = "";
        if(this.sorte === "Instant") eolText = this.t('eol.text_glass');
        if(this.sorte === "Filter") eolText = this.t('eol.text_grounds');
        if(this.sorte === "Kapsel") eolText = this.t('eol.text_waste');

        eol.innerHTML = `End-of-Life: ${eolText} <br> <span style="font-size:1.5em">${d.afterlife > 0 ? '+' : ''}${d.afterlife}</span>`;
        eol.style.color = d.afterlife < 0 ? "var(--col-mat)" : "#C62828";
        eol.style.background = d.afterlife < 0 ? "#E8F5E9" : "#FFEBEE";
        eol.style.borderColor = d.afterlife < 0 ? "var(--col-mat)" : "#C62828";
    },

    initPhase5: function() {
        ['Instant','Filter','Kapsel'].forEach(s => CAT_STRUCT.forEach(c => this.multipliers[s][c.id] = 1));
        this.elecFactor = 1.0;
        
        const box = document.getElementById('measuresBox'); box.innerHTML = "";
        MEASURE_DEFS.forEach(m => {
            if(m.scope !== 'all' && m.scope !== this.sorte) return;
            box.innerHTML += `<button class="measure-btn" onclick="game.toggleMeasure(this, '${m.id}')">${this.t('measures.'+m.id)}</button>`;
        });
        this.updateSim();
    },

    toggleMeasure: function(btn, id) {
        btn.classList.toggle('active');
        const active = btn.classList.contains('active');
        const m = MEASURE_DEFS.find(x => x.id === id);
        const scopes = m.scope === 'all' ? ['Instant','Filter','Kapsel'] : [m.scope];
        const targets = Array.isArray(m.target) ? m.target : [m.target];
        scopes.forEach(s => targets.forEach(t => this.multipliers[s][t] = active ? m.f : 1));
        this.updateSim();
    },

    updateSim: function() {
        this.elecFactor = parseFloat(document.getElementById('elecMix').value);
        const getKg = (s) => {
            let sum = 0;
            DATA[s].values.forEach((v, i) => {
                let catId = CAT_STRUCT[i].id;
                let val = v * this.multipliers[s][catId];
                if(CAT_STRUCT[i].phase === "Nutzung") val *= this.elecFactor;
                sum += val;
            });
            let total = DATA[s].abs * (sum / 100) + DATA[s].afterlife;
            return (total/1000).toFixed(3);
        };

        const val = getKg(this.sorte);
        const startVal = ((DATA[this.sorte].abs + DATA[this.sorte].afterlife)/1000).toFixed(3);
        const saving = (100 - (val/startVal*100)).toFixed(1);
        document.getElementById('savingText').innerText = `${this.t('saving')}: -${saving}%`;

        const ctx = document.getElementById('simChart');
        if(this.charts.sim) this.charts.sim.destroy();
        this.charts.sim = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [this.t('type_instant'), this.t('type_filter'), this.t('type_kapsel')],
                datasets: [{ 
                    label: 'kg CO₂e', 
                    data: [getKg('Instant'), getKg('Filter'), getKg('Kapsel')],
                    backgroundColor: ['#D7CCC8', '#795548', '#5D4037']
                }]
            }, options: { plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
        });
    }
};

// Damit HTML onclick="game.xyz()" funktioniert:
window.game = game;

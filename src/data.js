export const TRANSLATIONS = {
    de: {
        title: "☕ Kaffee LCA Expert",
        p1_title: "Welches System möchtest du analysieren?",
        type_instant: "Instant-Kaffee", desc_instant: "Effizient & Schnell",
        type_filter: "Filterkaffee", desc_filter: "Der Klassiker",
        type_kapsel: "Kapselkaffee", desc_kapsel: "Portionssystem",
        
        p2_instr: "Ordne die Prozessschritte der richtigen Phase zu.",
        zone_mat: "Material", zone_prod: "Herstellung", zone_use: "Nutzung", zone_eol: "End-of-Life",
        lexikon: "Lexikon", btn_check: "Prüfen", btn_skip: "Überspringen ⏩",
        feedback_ok: "Perfekt! Alles korrekt.", feedback_err: "Einige Zuordnungen sind falsch (Rot).",
        
        p3_title: "Impact Schätzung (%)", p3_instr: "Verteile 100 Punkte:", sum: "Summe", btn_result: "Auswertung",
        
        p4_title: "Analyse & Realität", details: "Hintergrundwissen:", footprint: "CO₂-Fußabdruck", unit: "kg CO₂e / Tasse", btn_sim: "Zur Simulation",
        
        p5_title: "Szenarien & Optimierung", elec: "Strommix wählen", measures: "Maßnahmen aktivieren:", btn_restart: "Neues Spiel ↺",
        saving: "Ersparnis",
        
        // ZERTIFIKAT TEXTE
        cert: {
            title: "Nachhaltigkeits-Zertifikat",
            prefix: "Du hast den CO₂-Fußabdruck für",
            reduced: "gesenkt!",
            rank: "Rang",
            print: "🖨️ Zertifikat drucken",
            facts: [
                "Wusstest du? Ziegen entdeckten den Kaffee, weil sie nach dem Fressen der Beeren tanzten.",
                "Wusstest du? Kaffee ist eigentlich eine Frucht (Kaffeekirsche). Du trinkst den Kern.",
                "Wusstest du? Finnen sind Weltmeister im Kaffeetrinken (ca. 12 kg pro Kopf/Jahr).",
                "Wusstest du? Im 16. Jh. war Kaffee in Mekka kurzzeitig verboten wegen 'politischer Gefahr'.",
                "Wusstest du? Hellen Röstungen enthalten oft mehr Koffein als dunkle Röstungen."
            ]
        },

        cats: {
            Anbau: { l: "Anbau", s: "Düngung & Pflege.", d: "Lachgas-Emissionen durch Dünger." },
            Bewässerung: { l: "Bewässerung", s: "Wasserpumpen.", d: "Energie für Bewässerung in Trockengebieten." },
            Aufbereitung: { l: "Aufbereitung", s: "Waschen & Trocknen.", d: "Mechanische Prozesse nach der Ernte." },
            Logistik1: { l: "Transport", s: "Schiff & LKW.", d: "Transport der Rohbohnen nach Europa." },
            Verarbeitung: { l: "Röstung", s: "Rösten & Mahlen.", d: "Hoher Gasverbrauch beim Rösten." },
            Verpackung: { l: "Verpackung", s: "Materialien.", d: "Herstellung von Glas, Alu oder Plastik." },
            Logistik2: { l: "Handel", s: "Supermarktweg.", d: "Verteilung und Einkaufsfahrt." },
            Geräte: { l: "Maschine", s: "Herstellung.", d: "Graue Energie der Kaffeemaschine." },
            Zubereitung: { l: "Zubereitung", s: "Strombedarf.", d: "Wasser kochen & Warmhalten." },
            Reinigung: { l: "Reinigung", s: "Spülen.", d: "Warmwasser für den Abwasch." },
            Recycling: { l: "Recycling", s: "Material-Bonus.", d: "Gutschrift für recycelte Materialien." },
            Verwertung: { l: "Verbrennung", s: "Energie-Bonus.", d: "Thermische Verwertung von Restmüll." }
        },
        measures: {
            bio: "Bio-Anbau", öko: "Ökostrom", spülen: "Eco-Spülen", thermos: "Thermoskanne", beutel: "Nachfüllpack", mehrweg: "Mehrweg-System"
        },
        eol: { text_glass: "Glas-Recycling", text_grounds: "Kaffeesatz-Energie", text_waste: "Kapselmüll" }
    },
    en: {
        title: "☕ Coffee LCA Expert",
        p1_title: "Which system to analyze?",
        type_instant: "Instant Coffee", desc_instant: "Fast & Efficient",
        type_filter: "Filter Coffee", desc_filter: "The Classic",
        type_kapsel: "Capsule Coffee", desc_kapsel: "Single Serve",
        
        p2_instr: "Map the steps to the lifecycle phases.",
        zone_mat: "Material", zone_prod: "Production", zone_use: "Use Phase", zone_eol: "End-of-Life",
        lexikon: "Glossary", btn_check: "Check", btn_skip: "Skip ⏩",
        feedback_ok: "Perfect! All correct.", feedback_err: "Some errors found (Red).",
        
        p3_title: "Impact Estimation (%)", p3_instr: "Distribute 100 points:", sum: "Sum", btn_result: "Show Results",
        
        p4_title: "Analysis & Reality", details: "Scientific Background:", footprint: "Carbon Footprint", unit: "kg CO₂e / cup", btn_sim: "Simulation",
        
        p5_title: "Scenarios & Optimization", elec: "Electricity Mix", measures: "Active Measures:", btn_restart: "Restart ↺",
        saving: "Savings",
        
        cert: {
            title: "Sustainability Certificate",
            prefix: "You reduced the footprint for",
            reduced: "reduced!",
            rank: "Rank",
            print: "🖨️ Print Certificate",
            facts: [
                "Did you know? Goats discovered coffee by dancing after eating the berries.",
                "Did you know? The coffee bean is a seed of a cherry-like fruit.",
                "Did you know? Finland has the highest coffee consumption per capita (12kg/year).",
                "Did you know? Coffee was briefly banned in Mecca in the 16th century.",
                "Did you know? Light roasts often contain more caffeine than dark roasts."
            ]
        },

        cats: {
            Anbau: { l: "Farming", s: "Fertilizer.", d: "Nitrous oxide from synthetic fertilizers." },
            Bewässerung: { l: "Irrigation", s: "Pumps.", d: "Energy for water pumps." },
            Aufbereitung: { l: "Processing", s: "Washing.", d: "Mechanical separation and drying." },
            Logistik1: { l: "Transport", s: "Shipping.", d: "Overseas transport to roastery." },
            Verarbeitung: { l: "Roasting", s: "Roasting.", d: "Gas usage for roasting ovens." },
            Verpackung: { l: "Packaging", s: "Materials.", d: "Production of glass, alu, plastic." },
            Logistik2: { l: "Retail", s: "Distribution.", d: "Transport to shops and home." },
            Geräte: { l: "Machine", s: "Production.", d: "Embodied energy of the device." },
            Zubereitung: { l: "Brewing", s: "Electricity.", d: "Heating water and keeping warm." },
            Reinigung: { l: "Washing", s: "Cleaning.", d: "Hot water for dishwashing." },
            Recycling: { l: "Recycling", s: "Credit.", d: "Material recovery bonus." },
            Verwertung: { l: "Incineration", s: "Energy.", d: "Waste-to-energy bonus." }
        },
        measures: {
            bio: "Organic", öko: "Green Power", spülen: "Eco-Wash", thermos: "Thermos", beutel: "Refill Pouch", mehrweg: "Reusable"
        },
        eol: { text_glass: "Glass Recycling", text_grounds: "Grounds Energy", text_waste: "Capsule Waste" }
    }
};

export const CAT_STRUCT = [
    { id: "Anbau", phase: "Material", icon: "sprout" },
    { id: "Bewässerung", phase: "Material", icon: "droplet" },
    { id: "Aufbereitung", phase: "Material", icon: "settings-2" },
    { id: "Logistik1", phase: "Herstellung", icon: "ship" },
    { id: "Verarbeitung", phase: "Herstellung", icon: "factory" },
    { id: "Verpackung", phase: "Herstellung", icon: "package" },
    { id: "Logistik2", phase: "Herstellung", icon: "truck" },
    { id: "Geräte", phase: "Herstellung", icon: "coffee" },
    { id: "Zubereitung", phase: "Nutzung", icon: "zap" },
    { id: "Reinigung", phase: "Nutzung", icon: "waves" },
    { id: "Recycling", phase: "EoL", icon: "recycle" },
    { id: "Verwertung", phase: "EoL", icon: "flame" }
];

export const DATA = {
    Instant: { values: [14, 4, 4, 2, 10, 10, 2, 4, 20, 30], abs: 74, afterlife: -2 },
    Filter:  { values: [20, 6, 8, 2, 2, 2, 2, 2, 38, 18], abs: 110, afterlife: -4 },
    Kapsel:  { values: [18, 4, 6, 2, 4, 22, 0, 6, 16, 22], abs: 109, afterlife: 6 }
};

export const MEASURE_DEFS = [
    { id: 'bio', target: 'Anbau', f: 0.75, scope: 'all' },
    { id: 'öko', target: ['Zubereitung', 'Reinigung'], f: 0.20, scope: 'all' },
    { id: 'spülen', target: 'Reinigung', f: 0.50, scope: 'all' },
    { id: 'thermos', target: 'Zubereitung', f: 0.60, scope: 'Filter' },
    { id: 'beutel', target: 'Verpackung', f: 0.30, scope: 'Instant' },
    { id: 'mehrweg', target: 'Verpackung', f: 0.15, scope: 'Kapsel' }
];

export const TRANSLATIONS = {
    de: {
        title: "☕ Kaffee LCA Expert",
        type_instant: "Instant-Kaffee", desc_instant: "Effizient & Schnell",
        type_filter: "Filterkaffee", desc_filter: "Der Klassiker",
        type_kapsel: "Kapselkaffee", desc_kapsel: "Portionssystem",
        p1_title: "Welches System möchtest du analysieren?",
        p2_instr: "Ziehe die Kärtchen in die richtige Lebenszyklus-Phase.",
        zone_mat: "Material", zone_prod: "Herstellung", zone_use: "Nutzung", zone_eol: "End-of-Life",
        lexikon: "Lexikon", btn_check: "Zuordnung prüfen", btn_skip: "Phase überspringen ⏩",
        feedback_ok: "Perfekt! Alles richtig.", feedback_err: "Fehler gefunden (Rot).",
        p3_title: "Impact Schätzung (in %)", p3_instr: "Verteile 100 Punkte.", sum: "Summe", btn_result: "Auswertung anzeigen",
        p4_title: "Analyse & Hintergründe", details: "Wissenschaftliche Details:", footprint: "CO₂-Fußabdruck", unit: "kg CO₂e pro Tasse", btn_sim: "Zur Simulation",
        chart_guess: "Deine Schätzung", chart_real: "Realität",
        p5_title: "Szenarien simulieren", elec: "Regionaler Strommix", measures: "Maßnahmen wählen:", btn_restart: "Neues Spiel ↺",
        saving: "Ersparnis",
        cats: {
            Anbau: { l: "Anbau", s: "Pflanzenzucht & Düngung.", d: "Synthetische Stickstoffdünger setzen Lachgas frei." },
            Bewässerung: { l: "Bewässerung", s: "Wasserzufuhr.", d: "Energieaufwand für Pumpen in trockenen Regionen." },
            Aufbereitung: { l: "Aufbereitung", s: "Trennen von Kirsche & Bohne.", d: "Mechanische Prozesse und Trocknung." },
            Logistik1: { l: "Rohstoff-Logistik", s: "Schiffstransport.", d: "Schweröl-Emissionen durch Hochseeschifffahrt." },
            Verarbeitung: { l: "Verarbeitung", s: "Rösten & Mahlen.", d: "Hoher Erdgasbedarf für Röstöfen (ca. 200°C)." },
            Verpackung: { l: "Verpackung", s: "Tüte, Glas oder Kapsel.", d: "Energieintensive Schmelzprozesse (Glas/Alu)." },
            Logistik2: { l: "Handels-Logistik", s: "LKW & Einkauf.", d: "Transport zum Supermarkt und Kundenfahrt." },
            Geräte: { l: "Geräte", s: "Maschine & Tasse.", d: "Graue Energie der Hardware-Herstellung." },
            Zubereitung: { l: "Zubereitung", s: "Wasser erhitzen.", d: "Stromverbrauch ist dominant (Warmhalten!)." },
            Reinigung: { l: "Reinigung", s: "Abwaschen.", d: "Erhitzen von Spülwasser (Hand vs. Maschine)." },
            Recycling: { l: "Recycling", s: "Stoffliche Verwertung.", d: "Rückgewinnung von Rohstoffen (Gutschrift)." },
            Verwertung: { l: "Therm. Verwertung", s: "Müllverbrennung.", d: "Energiegewinnung aus Abfall." }
        },
        measures: {
            bio: "Bioanbau", öko: "Ökostrom", spülen: "Eco-Spülung", thermos: "Thermoskanne", beutel: "Nachfüllbeutel", mehrweg: "Mehrweg-Kapsel"
        },
        eol: { bonus: "Bonus", malus: "Malus", text_glass: "Glas-Recycling", text_grounds: "Kaffeesatz-Energie", text_waste: "Kapselmüll" }
    },
    en: {
        title: "☕ Coffee LCA Expert",
        type_instant: "Instant Coffee", desc_instant: "Efficient & Fast",
        type_filter: "Filter Coffee", desc_filter: "The Classic",
        type_kapsel: "Capsule Coffee", desc_kapsel: "Single Serve",
        p1_title: "Which system do you want to analyze?",
        p2_instr: "Drag the cards into the correct lifecycle phase.",
        zone_mat: "Material", zone_prod: "Production", zone_use: "Use Phase", zone_eol: "End-of-Life",
        lexikon: "Glossary", btn_check: "Check Sorting", btn_skip: "Skip Phase ⏩",
        feedback_ok: "Perfect! All correct.", feedback_err: "Errors found (Red).",
        p3_title: "Impact Estimation (in %)", p3_instr: "Distribute 100 points.", sum: "Sum", btn_result: "Show Results",
        p4_title: "Analysis & Background", details: "Scientific Details:", footprint: "Carbon Footprint", unit: "kg CO₂e per cup", btn_sim: "Go to Simulation",
        chart_guess: "Your Guess", chart_real: "Reality",
        p5_title: "Simulate Scenarios", elec: "Regional Electricity Mix", measures: "Choose Measures:", btn_restart: "Restart ↺",
        saving: "Savings",
        cats: {
            Anbau: { l: "Cultivation", s: "Farming & Fertilizing.", d: "Synthetic fertilizers release nitrous oxide." },
            Bewässerung: { l: "Irrigation", s: "Water supply.", d: "Energy for pumps in dry regions." },
            Aufbereitung: { l: "Treatment", s: "Cherry separation.", d: "Mechanical processes and drying." },
            Logistik1: { l: "Green Logistics", s: "Shipping beans.", d: "Heavy fuel emissions from ocean shipping." },
            Verarbeitung: { l: "Processing", s: "Roasting & Grinding.", d: "High gas demand for roasting ovens." },
            Verpackung: { l: "Packaging", s: "Bag, Glass or Capsule.", d: "Energy intensive melting (Glass/Alu)." },
            Logistik2: { l: "Distribution", s: "Truck & Shopping.", d: "Transport to retail and consumer driving." },
            Geräte: { l: "Appliances", s: "Machine & Cup.", d: "Embodied energy of hardware manufacturing." },
            Zubereitung: { l: "Preparation", s: "Heating water.", d: "Electricity consumption dominates." },
            Reinigung: { l: "Washing", s: "Cleaning cup.", d: "Heating washing water (Hand vs Machine)." },
            Recycling: { l: "Recycling", s: "Material Recovery.", d: "Recovery of raw materials (Credit)." },
            Verwertung: { l: "Incineration", s: "Waste to Energy.", d: "Energy generation from waste." }
        },
        measures: {
            bio: "Organic Farming", öko: "Green Power", spülen: "Eco-Wash", thermos: "Thermos Flask", beutel: "Refill Pouch", mehrweg: "Reusable Capsule"
        },
        eol: { bonus: "Bonus", malus: "Malus", text_glass: "Glass Recycling", text_grounds: "Coffee Grounds Energy", text_waste: "Capsule Waste" }
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

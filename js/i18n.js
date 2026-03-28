export let lang = "en";
export function setLang(newLang) { lang = newLang; }
const ui = {
  en: {
    appTitle: "General Baptist Heritage", appSubtitle: "Interactive Historical Atlas",
    splashVerse: '"For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."', splashVerseRef: "John 3:16",
    chipAll: "All Eras", chip1: "Origins", chip2: "Persecution", chip3: "Decline", chip4: "Revival",
    btnTimeline: "Timeline", btnFigures: "Figures", btnNames: "Names",
    infoTitle: "About This Map", infoLegendTitle: "Four Eras", infoFeaturesTitle: "Features",
    infoFeature1: "30+ historical locations across England and beyond",
    infoFeature2: "Click any location to read detailed historical narratives",
    infoFeature3: "Filter by era to explore specific periods",
    infoFeature4: "Navigate between stops with Previous / Next buttons",
    infoFeature5: "Toggle between historical and modern place names",
    infoVerse: '"One Lord, one faith, one baptism." — Ephesians 4:5',
    donateTitle: "Support This Project",
    donateText: "This interactive map was built to preserve and share the heritage of the General Baptists.",
    donateButton: "Donate", donateEmailLabel: "Feedback or questions?",
    sheetModernLabel: "Modern:", sheetRegionLabel: "Region:",
    showingHistorical: "Showing: Historical Names", showingModern: "Showing: Modern Names",
  },
  es: {
    appTitle: "Herencia Bautista General", appSubtitle: "Atlas Histórico Interactivo",
    splashVerse: '"Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna."', splashVerseRef: "Juan 3:16",
    chipAll: "Todas las Eras", chip1: "Orígenes", chip2: "Persecución", chip3: "Declive", chip4: "Avivamiento",
    btnTimeline: "Cronología", btnFigures: "Figuras", btnNames: "Nombres",
    infoTitle: "Sobre Este Mapa", infoLegendTitle: "Cuatro Eras", infoFeaturesTitle: "Características",
    infoFeature1: "Más de 30 ubicaciones en Inglaterra y más allá",
    infoFeature2: "Haga clic en cualquier ubicación para leer narrativas detalladas",
    infoFeature3: "Filtre por era para explorar períodos específicos",
    infoFeature4: "Navegue entre paradas con Anterior / Siguiente",
    infoFeature5: "Alterne entre nombres históricos y modernos",
    infoVerse: '"Un Señor, una fe, un bautismo." — Efesios 4:5',
    donateTitle: "Apoya Este Proyecto",
    donateText: "Este mapa fue creado para preservar y compartir la herencia de los Bautistas Generales.",
    donateButton: "Donar", donateEmailLabel: "¿Comentarios o preguntas?",
    sheetModernLabel: "Moderno:", sheetRegionLabel: "Región:",
    showingHistorical: "Mostrando: Nombres Históricos", showingModern: "Mostrando: Nombres Modernos",
  },
};
export function t(key) { return ui[lang]?.[key] || ui.en[key] || key; }
const eraTranslations = {
  en: {
    1: { name: "Origins in Amsterdam & England", shortName: "Origins", dateRange: "1609–1660", description: "Smyth and Helwys establish the first Baptist churches." },
    2: { name: "Growth & Persecution", shortName: "Persecution", dateRange: "1660–1689", description: "The Clarendon Code, Bunyan's imprisonment, and Grantham's theology." },
    3: { name: "Decline & Division", shortName: "Decline", dateRange: "1689–1770", description: "Toleration, the Caffyn controversy, and Socinian drift." },
    4: { name: "New Connexion & Revival", shortName: "Revival", dateRange: "1770–1891", description: "Dan Taylor's New Connexion, missions to India, and union." },
  },
  es: {
    1: { name: "Orígenes en Ámsterdam e Inglaterra", shortName: "Orígenes", dateRange: "1609–1660", description: "Smyth y Helwys establecen las primeras iglesias bautistas." },
    2: { name: "Crecimiento y Persecución", shortName: "Persecución", dateRange: "1660–1689", description: "El Código Clarendon, Bunyan encarcelado y la teología de Grantham." },
    3: { name: "Declive y División", shortName: "Declive", dateRange: "1689–1770", description: "Tolerancia, la controversia Caffyn y la deriva sociniana." },
    4: { name: "Nueva Conexión y Avivamiento", shortName: "Avivamiento", dateRange: "1770–1891", description: "La Nueva Conexión de Dan Taylor, misiones a India y la unión." },
  },
};
export function eraText(eraId, field) { return eraTranslations[lang]?.[eraId]?.[field] || eraTranslations.en[eraId]?.[field] || ""; }
const locationTranslations = { es: {} };
export function locationText(locId, field) { return locationTranslations[lang]?.[locId]?.[field] || null; }
export function eventText(locId, year, field) { return null; }
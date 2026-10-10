type Language = "es" | "en";

const translations: Record<Language, Record<string, string>> = {
  es: {
    "accessibility.skip": "Saltar al contenido",
    "header.home": "Hotel Casa Theo, ir al inicio",
    "header.navigation": "Navegación principal",
    "header.openMenu": "Abrir menú",
    "header.mobileNavigation": "Navegación móvil",
    "nav.house": "La casa",
    "nav.rooms": "Habitaciones",
    "nav.experiences": "Experiencias",
    "nav.gallery": "Galería",
    "nav.location": "Ubicación",
    "nav.reserve": "Reservar",
    "nav.reserveStay": "Reservar estancia",
    "hero.eyebrow": "Hospitalidad en el corazón de Arequipa",
    "hero.title1": "Una casa para",
    "hero.title2": "sentir la ciudad.",
    "hero.rooms": "Descubrir habitaciones",
    "hero.copy": "Arquitectura de sillar, calma cotidiana y una mirada íntima a la Ciudad Blanca.",
    "booking.direct": "Reserva directa",
    "booking.arrival": "Llegada",
    "booking.departure": "Salida",
    "booking.guests": "Huéspedes",
    "booking.oneGuest": "1 huésped",
    "booking.twoGuests": "2 huéspedes",
    "booking.threeGuests": "3 huéspedes",
    "booking.fourGuests": "4 huéspedes",
    "booking.availability": "Ver disponibilidad",
    "booking.form": "Consultar disponibilidad",
    "house.eyebrow": "La casa",
    "house.quote": "Aquí, la historia no se exhibe. Se habita.",
    "house.title": "Una pausa luminosa entre el sillar y el cielo arequipeño.",
    "house.copy1": "Casa Theo recupera el espíritu de una antigua casona y lo transforma en una experiencia sencilla, cálida y contemporánea.",
    "house.copy2": "A pocos pasos del centro histórico, cada patio invita a bajar el ritmo y a mirar Arequipa desde un lugar más íntimo.",
    "experience.eyebrow": "El arte de quedarse",
    "experience.title": "Días lentos. Recuerdos vivos.",
    "experience.copy": "Del primer café en el patio a una caminata entre conventos y picanterías, diseñamos cada recomendación para acercarte al carácter real de la ciudad.",
    "experience.cta": "Explorar Arequipa",
    "rooms.eyebrow": "Descansa a tu ritmo",
    "rooms.title": "Espacios serenos, detalles con historia.",
    "rooms.copy": "Cada habitación conserva la textura de la casa y suma lo esencial para descansar bien: luz natural, materiales honestos y silencio.",
    "rooms.room": "Habitación",
    "rooms.patio": "Patio",
    "rooms.sillar": "Sillar",
    "rooms.misti": "Misti",
    "rooms.detail1": "2 huéspedes · Cama king",
    "rooms.detail2": "1 huésped · Vista al patio",
    "rooms.detail3": "3 huéspedes · Camas independientes",
    "rooms.reserve": "Reservar habitación",
    "gallery.eyebrow": "Un vistazo a la casa",
    "gallery.title": "Espacios con carácter propio.",
    "gallery.copy": "Rincones sencillos, luz natural y una casa pensada para sentirse cercana desde el primer día.",
    "gallery.garden": "El jardín",
    "gallery.living": "La sala",
    "gallery.cafe": "El café",
    "gallery.reception": "La recepción",
    "gallery.loft": "Habitación loft",
    "gallery.swipe": "Desliza para explorar",
    "gallery.controls": "Controles de la galería",
    "gallery.aria": "Galería fotográfica del Hotel Casa Theo",
    "gallery.previous": "Ver imagen anterior",
    "gallery.next": "Ver imagen siguiente",
    "services.eyebrow": "Todo lo esencial",
    "services.title": "Cuidado en cada detalle.",
    "services.copy": "Servicios pensados para que tu estancia se sienta ligera desde antes de llegar.",
    "services.breakfast": "Desayuno local",
    "services.breakfastCopy": "Productos de temporada y sabores arequipeños cada mañana.",
    "services.hosts": "Anfitriones cercanos",
    "services.hostsCopy": "Recomendaciones honestas para descubrir la ciudad a tu manera.",
    "services.transfer": "Traslado coordinado",
    "services.transferCopy": "Te ayudamos a organizar tu llegada desde el aeropuerto o terminal.",
    "services.wifi": "Wi-Fi de alta velocidad",
    "services.wifiCopy": "Conexión estable en habitaciones y espacios comunes.",
    "location.eyebrow": "Nuestra ubicación",
    "location.title": "Arequipa comienza al abrir la puerta.",
    "location.copy": "Estamos en un barrio sereno, conectado con la Plaza de Armas, el Monasterio de Santa Catalina y las mesas que mejor cuentan la cocina local.",
    "location.square": "Plaza de Armas",
    "location.airport": "Aeropuerto",
    "location.map": "Ver en Google Maps",
    "location.caption": "A pasos del centro histórico.",
    "cta.eyebrow": "Tu casa en Arequipa",
    "cta.title": "Haz espacio para unos días diferentes.",
    "footer.copy": "Una casa tranquila desde donde descubrir el carácter, la arquitectura y los sabores de Arequipa.",
    "footer.explore": "Explora",
    "footer.contact": "Contacto",
    "footer.address": "Arequipa, Perú",
    "footer.rights": "© 2026 Casa Theo. Todos los derechos reservados.",
    "footer.place": "Hotel boutique · Arequipa, Perú",
    "whatsapp.aria": "Contactar con Hotel Casa Theo por WhatsApp",
    "whatsapp.tooltip": "Escríbenos por WhatsApp",
    "test.eyebrow": "Integración de prueba",
    "test.title": "Reserva con Hotel Link.",
    "test.copy": "Este entorno utiliza exclusivamente el Search Widget y los datos de demostración publicados en la documentación oficial de Hotel Link. No contiene información real de Casa Theo.",
    "test.noticeTitle": "Solo para validación técnica.",
    "test.notice": "El identificador de demostración deberá sustituirse antes de una integración real.",
  },
  en: {
    "accessibility.skip": "Skip to content",
    "header.home": "Hotel Casa Theo, go to homepage",
    "header.navigation": "Main navigation",
    "header.openMenu": "Open menu",
    "header.mobileNavigation": "Mobile navigation",
    "nav.house": "The house",
    "nav.rooms": "Rooms",
    "nav.experiences": "Experiences",
    "nav.gallery": "Gallery",
    "nav.location": "Location",
    "nav.reserve": "Book now",
    "nav.reserveStay": "Book your stay",
    "hero.eyebrow": "Hospitality in the heart of Arequipa",
    "hero.title1": "A house to",
    "hero.title2": "feel the city.",
    "hero.rooms": "Discover our rooms",
    "hero.copy": "Sillar architecture, everyday calm, and an intimate perspective on the White City.",
    "booking.direct": "Book direct",
    "booking.arrival": "Check-in",
    "booking.departure": "Check-out",
    "booking.guests": "Guests",
    "booking.oneGuest": "1 guest",
    "booking.twoGuests": "2 guests",
    "booking.threeGuests": "3 guests",
    "booking.fourGuests": "4 guests",
    "booking.availability": "Check availability",
    "booking.form": "Check availability",
    "house.eyebrow": "The house",
    "house.quote": "Here, history is not displayed. It is lived.",
    "house.title": "A luminous pause between sillar stone and the Arequipa sky.",
    "house.copy1": "Casa Theo revives the spirit of a historic home and turns it into a simple, warm, and contemporary experience.",
    "house.copy2": "Just steps from the historic center, every courtyard invites you to slow down and experience Arequipa more intimately.",
    "experience.eyebrow": "The art of staying",
    "experience.title": "Slow days. Vivid memories.",
    "experience.copy": "From your first coffee in the courtyard to a walk among convents and picanterías, every recommendation brings you closer to the city’s true character.",
    "experience.cta": "Explore Arequipa",
    "rooms.eyebrow": "Rest at your own pace",
    "rooms.title": "Serene spaces, details with a story.",
    "rooms.copy": "Each room preserves the texture of the house and adds everything you need to rest well: natural light, honest materials, and silence.",
    "rooms.room": "Room",
    "rooms.patio": "Patio",
    "rooms.sillar": "Sillar",
    "rooms.misti": "Misti",
    "rooms.detail1": "2 guests · King bed",
    "rooms.detail2": "1 guest · Courtyard view",
    "rooms.detail3": "3 guests · Separate beds",
    "rooms.reserve": "Book room",
    "gallery.eyebrow": "A glimpse of the house",
    "gallery.title": "Spaces with a character of their own.",
    "gallery.copy": "Simple corners, natural light, and a house designed to feel welcoming from your very first day.",
    "gallery.garden": "The garden",
    "gallery.living": "The lounge",
    "gallery.cafe": "The café",
    "gallery.reception": "Reception",
    "gallery.loft": "Loft room",
    "gallery.swipe": "Swipe to explore",
    "gallery.controls": "Gallery controls",
    "gallery.aria": "Hotel Casa Theo photo gallery",
    "gallery.previous": "View previous image",
    "gallery.next": "View next image",
    "services.eyebrow": "Everything essential",
    "services.title": "Care in every detail.",
    "services.copy": "Services designed to make your stay feel effortless before you even arrive.",
    "services.breakfast": "Local breakfast",
    "services.breakfastCopy": "Seasonal produce and Arequipa flavors every morning.",
    "services.hosts": "Local hosts",
    "services.hostsCopy": "Honest recommendations to discover the city your own way.",
    "services.transfer": "Coordinated transfer",
    "services.transferCopy": "We help arrange your arrival from the airport or bus terminal.",
    "services.wifi": "High-speed Wi-Fi",
    "services.wifiCopy": "Reliable connection in rooms and shared spaces.",
    "location.eyebrow": "Our location",
    "location.title": "Arequipa begins at your doorstep.",
    "location.copy": "We are in a peaceful neighborhood connected to the Plaza de Armas, Santa Catalina Monastery, and the tables that best tell the story of local cuisine.",
    "location.square": "Main Square",
    "location.airport": "Airport",
    "location.map": "View on Google Maps",
    "location.caption": "Steps from the historic center.",
    "cta.eyebrow": "Your home in Arequipa",
    "cta.title": "Make room for a different kind of stay.",
    "footer.copy": "A peaceful house from which to discover Arequipa’s character, architecture, and flavors.",
    "footer.explore": "Explore",
    "footer.contact": "Contact",
    "footer.address": "Arequipa, Peru",
    "footer.rights": "© 2026 Casa Theo. All rights reserved.",
    "footer.place": "Boutique hotel · Arequipa, Peru",
    "whatsapp.aria": "Contact Hotel Casa Theo on WhatsApp",
    "whatsapp.tooltip": "Message us on WhatsApp",
    "test.eyebrow": "Integration test",
    "test.title": "Book with Hotel Link.",
    "test.copy": "This environment uses only the Search Widget and demonstration data published in Hotel Link’s official documentation. It contains no real Casa Theo information.",
    "test.noticeTitle": "For technical validation only.",
    "test.notice": "The demonstration identifier must be replaced before a real integration.",
  },
};

const storageKey = "casa-theo-language";
const root = document.documentElement;
const toggles = document.querySelectorAll<HTMLButtonElement>("[data-language-toggle]");

const applyLanguage = (language: Language, persist = false) => {
  const dictionary = translations[language];
  root.lang = language;
  root.dataset.language = language;

  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (key && dictionary[key]) element.textContent = dictionary[key];
  });

  document.querySelectorAll<HTMLElement>("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (key && dictionary[key]) element.setAttribute("aria-label", dictionary[key]);
  });

  const pageTitle = language === "en" ? root.dataset.titleEn : root.dataset.titleEs;
  const pageDescription = language === "en" ? root.dataset.descriptionEn : root.dataset.descriptionEs;
  if (pageTitle) document.title = pageTitle;
  if (pageDescription) document.querySelector('meta[name="description"]')?.setAttribute("content", pageDescription);
  if (pageTitle) document.querySelector('meta[property="og:title"]')?.setAttribute("content", pageTitle);
  if (pageDescription) document.querySelector('meta[property="og:description"]')?.setAttribute("content", pageDescription);
  document.querySelector('meta[property="og:locale"]')?.setAttribute("content", language === "en" ? "en_US" : "es_PE");

  toggles.forEach((toggle) => {
    const isEnglish = language === "en";
    toggle.setAttribute("aria-label", isEnglish ? "Switch language to Spanish" : "Cambiar idioma a inglés");
    const label = toggle.querySelector<HTMLElement>("[data-language-label]");
    if (label) label.textContent = isEnglish ? "ES" : "EN";
  });

  if (persist) localStorage.setItem(storageKey, language);
  window.dispatchEvent(new CustomEvent("languagechange", { detail: { language } }));
};

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    applyLanguage(root.dataset.language === "en" ? "es" : "en", true);
  });
});

applyLanguage(root.dataset.language === "en" ? "en" : "es");

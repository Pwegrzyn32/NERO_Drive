export type Lang = 'pl' | 'en';
export type Translations = Record<string, Record<Lang, string>>;

export const TRANSLATIONS: Translations = {

  // ── Navbar ────────────────────────────────────────────────────
  'nav.home':      { pl: 'Strona Główna', en: 'Home' },
  'nav.car':       { pl: 'Samochód',      en: 'The Car' },
  'nav.packages':  { pl: 'Pakiety',       en: 'Packages' },
  'nav.services':  { pl: 'Usługi',        en: 'Services' },
  'nav.gallery':   { pl: 'Galeria',       en: 'Gallery' },
  'nav.contact':   { pl: 'Kontakt',       en: 'Contact' },
  'nav.langLabel': { pl: 'EN',            en: 'PL' },

  // ── Hero ──────────────────────────────────────────────────────
  'hero.tagline': { pl: 'Wedding & Event Car Experience', en: 'Wedding & Event Car Experience' },

  // ── About Car ─────────────────────────────────────────────────
  'about.label':  { pl: 'Samochód',       en: 'The Vehicle' },
  'about.stat1Label': { pl: 'Pakiet Sportowy',  en: 'Sports Package' },
  'about.stat2Label': { pl: 'Moc',     en: 'Pure Performance' },
  'about.quote':  {
    pl: '"Nie tylko transport.\nWyraz charakteru w Twoim najważniejszym dniu."',
    en: '"Not just transportation.\nA statement piece for your most important day."',
  },
  'about.desc': {
    pl: 'Giulia Veloce Q4 uosabia włoską filozofię piękna w ruchu. Jej rzeźbiona czarna sylwetka, sportowy wygląd i głęboko emocjonalny charakter sprawiają, że każde przybycie staje się niezapomnianym momentem.',
    en: 'The Giulia Veloce Q4 embodies the Italian philosophy of beauty in motion. Its sculpted black silhouette, athletic stance and deeply emotional character transform every arrival into an unforgettable moment.',
  },
  'about.f1': { pl: 'Pakiet Veloce',                  en: 'Veloce Package' },
  'about.f2': { pl: 'Czarny lakier',                  en: 'Black exterior' },
  'about.f3': { pl: 'Czarne felgi diamentowe',        en: 'Black diamond-cut wheels' },
  'about.f4': { pl: 'Czerwone zaciski',               en: 'Red brake calipers' },
  'about.f5': { pl: 'Czarna skórzana tapicerka premium', en: 'Black premium leather interior' },
  'about.f6': { pl: 'Panoramiczny dach otwierany',    en: 'Panoramic opening glass roof' },
  'about.f7': { pl: 'Aktywny układ wydechowy',        en: 'Active performance exhaust' },
  'about.f8': { pl: 'Dwustrefowa klimatyzacja',       en: 'Dual-zone climate control' },

  // ── Packages ──────────────────────────────────────────────────
  'pkg.label':   { pl: 'Pakiety Usług',   en: 'Service Packages' },
  'pkg.title1':  { pl: 'Wybierz Swoje',   en: 'Choose Your' },
  'pkg.title2':  { pl: 'Doświadczenie',   en: 'Experience' },
  'pkg.desc':    {
    pl: 'Każdy pakiet stworzony jest tak, aby zapewnić niezapomniane przeżycie. Ceny zawierają w pełni przygotowane Alfa Romeo Giulia Veloce Q4 z profesjonalnym kierowcą.',
    en: 'Each package is crafted to provide a flawless, memorable experience. All prices include a fully prepared Alfa Romeo Giulia Veloce Q4 with professional driver.',
  },
  'pkg.popular': { pl: 'Najpopularniejszy', en: 'Most Popular' },
  'pkg.select':  { pl: 'Wybierz Pakiet',    en: 'Select Package' },
  'pkg.book':    { pl: 'Zarezerwuj Ten Pakiet', en: 'Book This Package' },
  'pkg.note':    {
    pl: 'Wszystkie pakiety obejmują pojazd w pełni przygotowany samochód oraz profesjonalnego kierowcę w stroju formalnym. Indywidualne życzenia mile widziane – skontaktuj się, aby omówić Twoje potrzeby.',
    en: 'All packages include a fully prepared vehicle, and professional driver in formal attire. Custom requests are welcome — contact us to discuss your individual needs.',
  },
  // INTRO items
  'pkg.intro.desc': { pl: 'Idealny start – eleganckie przybycie na Twoją ceremonię.', en: 'The perfect start – an elegant arrival for your ceremony.' },
  'pkg.i1': { pl: 'Profesjonalny kierowca',                    en: 'Professional driver' },
  'pkg.i2': { pl: 'Obsługa wybranej trasy',                    en: 'Selected route service' },
  'pkg.i3': { pl: 'Transfer na ceremonię i/lub miejsce wesela', en: 'Ceremony and/or venue transfer' },
  'pkg.i4': { pl: 'Do 3 godzin obsługi',                       en: 'Up to 3 hours service' },
  'pkg.i5': { pl: 'Tablice "Młoda Para"',                       en: 'Wedding "Bride & Groom" plates' },
  'pkg.i6': { pl: 'Możliwość dekoracji osobistych',             en: 'Personal decorations allowed' },
  'pkg.i7': { pl: 'Prosecco dla pary młodej',                   en: 'Prosecco for the couple' },
  // GOLD items
  'pkg.gold.desc': { pl: 'Nasz najpopularniejszy pakiet – pełne pokrycie najważniejszych chwil.', en: 'Our most popular package – full day coverage for the most important moments.' },
  'pkg.g1': { pl: 'Do 6 godzin obsługi',                       en: 'Up to 6 hours service' },
  'pkg.g2': { pl: 'Odbiór Pana Młodego',                       en: 'Groom pickup' },
  'pkg.g3': { pl: 'Odbiór Panny Młodej',                       en: 'Bride pickup' },
  'pkg.g4': { pl: 'Transfer na ceremonię',                     en: 'Ceremony transfer' },
  'pkg.g5': { pl: 'Transfer na miejsce wesela',                en: 'Wedding venue transfer' },
  'pkg.g6': { pl: 'Sesja fotograficzna z samochodem',          en: 'Photo session with the car' },
  'pkg.g7': { pl: 'Indywidualne planowanie trasy',             en: 'Individual route planning' },
  'pkg.g8': { pl: 'Tablice ślubne',                            en: 'Wedding plates' },
  'pkg.g9': { pl: 'Możliwość dekoracji osobistych',            en: 'Personal decorations allowed' },
  'pkg.g10': { pl: 'Prosecco dla pary młodej',                 en: 'Prosecco for the couple' },
  // NERO items
  'pkg.nero.desc': { pl: 'Całkowite oddanie – każda chwila Twojego dnia, perfekcyjnie skoordynowana.', en: 'Total dedication – every moment of your day, perfectly coordinated.' },
  'pkg.n1': { pl: 'Pełna dyspozycyjność kierowcy',             en: 'Full driver availability' },
  'pkg.n2': { pl: 'Dodatkowe transfery',                       en: 'Additional transfers' },
  'pkg.n3': { pl: 'Rozszerzona sesja fotograficzna',           en: 'Extended photo session' },
  'pkg.n4': { pl: 'Koordynacja całego dnia',                   en: 'Full day coordination' },
  'pkg.n5': { pl: 'Tablice ślubne',                            en: 'Wedding plates' },
  'pkg.n6': { pl: 'Możliwość dekoracji osobistych',            en: 'Personal decorations allowed' },
  'pkg.n7': { pl: 'Prosecco dla pary młodej',                  en: 'Prosecco for the couple' },

  // ── Additional Services ───────────────────────────────────────
  'svc.label':  { pl: 'Poza Weselami',  en: 'Beyond Weddings' },
  'svc.title1': { pl: 'Każda Okazja',   en: 'Every Occasion' },
  'svc.title2': { pl: 'Zasługuje',      en: 'Deserves' },
  'svc.title3': { pl: 'na Wyjątkowość', en: 'Extraordinary' },

  'svc.s1.title': { pl: 'Sesje Ślubne',           en: 'Wedding Sessions' },
  'svc.s1.desc':  {
    pl: 'Idealny towarzysz Twoich zdjęć ślubnych. Giulia tworzy oszałamiające tło dla ponadczasowych wspomnień.',
    en: 'The perfect companion for your wedding photos. The Giulia creates a stunning backdrop for timeless memories.',
  },
  'svc.s2.title': { pl: 'Studniówki & Bale',      en: 'Graduation Balls & Proms' },
  'svc.s2.desc':  {
    pl: 'Przyjedź z klasą na swój najważniejszy wieczór. Wejście, o którym będą mówić latami.',
    en: 'Arrive in style at your most memorable evening. Make an entrance that will be talked about for years.',
  },
  'svc.s3.title': { pl: 'Eventy Korporacyjne',    en: 'Corporate Events' },
  'svc.s3.desc':  {
    pl: 'Ekskluzywny transport dla kadry zarządzającej i gości VIP. Zaimponuj klientom i współpracownikom włoską klasą.',
    en: 'Premium transportation for executives and VIP guests. Impress clients and colleagues with a touch of Italian class.',
  },
  'svc.s4.title': { pl: 'Produkcje Foto & Video', en: 'Photo & Video Productions' },
  'svc.s4.desc':  {
    pl: 'Wyróżniający się rekwizyt do reklam komercyjnych, edycji modowych i produkcji kinematograficznych.',
    en: 'An outstanding prop for commercial shoots, fashion editorials, and cinematic productions.',
  },
  'svc.s5.title': { pl: 'Eventy Prywatne',        en: 'Private Events' },
  'svc.s5.desc':  {
    pl: 'Urodziny, rocznice, zaręczyny i każda okazja warta świętowania w wyjątkowy sposób.',
    en: 'Birthdays, anniversaries, proposals, and any occasion worth celebrating in an exceptional way.',
  },

  // ── Why Choose ────────────────────────────────────────────────
  'why.label':  { pl: 'Dlaczego NERO DRIVE',    en: 'Why NERO DRIVE' },
  'why.title1': { pl: 'Różnica, Którą',          en: 'The Difference You' },
  'why.title2': { pl: 'Poczujesz',               en: 'Can Feel' },

  'why.r1.title': { pl: 'Wyjątkowy Pojazd',              en: 'One-of-a-Kind Vehicle' },
  'why.r1.desc':  {
    pl: 'Alfa Romeo Giulia Veloce Q4 w kolorze czarnym to rzadki widok na jakimkolwiek wydarzeniu. Jej włoski charakter i wizualna obecność wyróżniają ją spośród każdego standardowego samochodu ślubnego.',
    en: 'The Alfa Romeo Giulia Veloce Q4 in black is a rare sight at any event. Its Italian character and visual presence set it apart from any standard wedding car.',
  },
  'why.r2.title': { pl: 'Profesjonalny Kierowca',         en: 'Professional Driver' },
  'why.r2.desc':  {
    pl: 'Kierowca przyjeżdża nienagannie ubrany i utrzymuje najwyższe standardy dyskrecji, uprzejmości i punktualności przez całe Twoje wydarzenie.',
    en: 'Your driver arrives impeccably dressed and maintains the highest standards of discretion, courtesy, and punctuality throughout your entire event.',
  },
  'why.r3.title': { pl: 'Każdy Detal Przemyślany',        en: 'Every Detail Considered' },
  'why.r3.desc':  {
    pl: 'Od momentu rezerwacji do ostatniego transferu – każdy aspekt usługi jest skrupulatnie zaplanowany i realizowany z troską i precyzją.',
    en: 'From the moment of booking to the final transfer, every aspect of the service is meticulously planned and executed with care and precision.',
  },
  'why.r4.title': { pl: 'Doświadczenie Premium',          en: 'Premium Experience' },
  'why.r4.desc':  {
    pl: 'Nie dostarczamy tylko pojazdu – tworzymy moment. Przybycie, atmosfera, uczucie wyjścia z Giulii – to staje się częścią Twojej historii.',
    en: 'We don\'t just provide a vehicle – we craft a moment. The arrival, the atmosphere, the feeling of stepping out of a Giulia – it becomes part of your story.',
  },
  'why.r5.title': { pl: 'Przygotowany do Perfekcji',      en: 'Prepared to Perfection' },
  'why.r5.desc':  {
    pl: 'Pojazd przechodzi pełne profesjonalny detailing przed każdym wydarzeniem. Nieskazitelny wygląd zewnętrzny, nienaganne wnętrze – zawsze gotowy na Twój wyjątkowy dzień.',
    en: 'The vehicle undergoes a full professional detailing before every event. Spotless exterior, pristine interior – always ready for your special day.',
  },
  'why.r6.title': { pl: 'Spersonalizowana Obsługa',       en: 'Personalized Service' },
  'why.r6.desc':  {
    pl: 'Żadne dwa wydarzenia nie są identyczne. Słuchamy, planujemy i dostosowujemy naszą usługę do Twojej wizji, trasy i harmonogramu – czyniąc ją wyjątkowo Twoją.',
    en: 'No two events are identical. We listen, plan, and adapt our service to your specific vision, route, and schedule – making it uniquely yours.',
  },

  // ── Gallery ───────────────────────────────────────────────────
  'gal.label':   { pl: 'Galeria',          en: 'Gallery' },
  'gal.title1':  { pl: 'Uchwycone',        en: 'Captured' },
  'gal.title2':  { pl: 'Chwile',           en: 'Moments' },
  'gal.all':     { pl: 'wszystkie',  en: 'all' },
  'gal.ext':     { pl: 'zewnątrz',    en: 'exterior' },
  'gal.int':     { pl: 'wnętrze',     en: 'interior' },
  'gal.det':     { pl: 'detale',      en: 'detail' },

  // ── Contact ───────────────────────────────────────────────────
  'con.label':   { pl: 'Zarezerwuj Termin',           en: 'Book Your Date' },
  'con.title1':  { pl: 'Zaplanujmy Twój',              en: "Let's Plan Your" },
  'con.title2':  { pl: 'Wyjątkowy Dzień',              en: 'Perfect Day' },
  'con.intro':   {
    pl: 'Gotowy, aby uczynić swoje wydarzenie niezapomnianym? Skontaktuj się z nami, a stworzymy dla Ciebie idealne doświadczenie dopasowane do Twojej wizji.',
    en: 'Ready to make your event unforgettable? Reach out to us and we\'ll craft the perfect experience around your vision.',
  },
  'con.phone':   { pl: 'Telefon',      en: 'Phone' },
  'con.email':   { pl: 'E-mail',       en: 'Email' },
  'con.follow':  { pl: 'Obserwuj nas', en: 'Follow Us' },

  'con.f.name':       { pl: 'Imię i Nazwisko *',     en: 'Full Name *' },
  'con.f.phone':      { pl: 'Numer Telefonu *',       en: 'Phone Number *' },
  'con.f.email':      { pl: 'Adres E-mail *',         en: 'Email Address *' },
  'con.f.date':       { pl: 'Data Wydarzenia *',      en: 'Event Date *' },
  'con.f.type':       { pl: 'Rodzaj Wydarzenia *',    en: 'Event Type *' },
  'con.f.typeSelect': { pl: 'Wybierz rodzaj wydarzenia', en: 'Select event type' },
  'con.f.msg':        { pl: 'Wiadomość',              en: 'Message' },
  'con.f.msgHint':    { pl: 'Opowiedz nam o swoim wydarzeniu – trasa, życzenia specjalne, pytania...', en: 'Tell us about your event – route, special requests, questions...' },
  'con.f.submit':     { pl: 'Wyślij Zapytanie',       en: 'Request Booking' },
  'con.f.sending':    { pl: 'Wysyłanie…',             en: 'Sending…' },

  'con.consent.pre':  {
    pl: 'Wyrażam zgodę na przetwarzanie moich danych osobowych w celu udzielenia odpowiedzi na przesłane zapytanie zgodnie z ',
    en: 'I consent to the processing of my personal data for the purpose of responding to my enquiry in accordance with the ',
  },
  'con.consent.link': { pl: 'Polityką Prywatności',   en: 'Privacy Policy' },
  'con.consent.post': { pl: '.',                      en: '.' },

  'con.err.name':  { pl: 'Proszę podać imię i nazwisko.',     en: 'Please enter your name.' },
  'con.err.phone': { pl: 'Proszę podać numer telefonu.',      en: 'Please enter your phone number.' },
  'con.err.email': { pl: 'Proszę podać prawidłowy adres e-mail.', en: 'Please enter a valid email address.' },
  'con.err.date':  { pl: 'Proszę wybrać datę.',               en: 'Please select a date.' },
  'con.err.type':  { pl: 'Proszę wybrać rodzaj wydarzenia.',  en: 'Please select an event type.' },
  'con.err.consent': {
    pl: 'Zgoda jest wymagana, aby wysłać zapytanie.',
    en: 'Consent is required in order to submit the enquiry.',
  },

  'con.success.title': { pl: 'Wiadomość Wysłana',         en: 'Message Sent' },
  'con.success.text':  {
    pl: 'Dziękujemy za zapytanie. Odezwiemy się w ciągu 24 godzin, aby omówić Twoje wydarzenie.',
    en: 'Thank you for your inquiry. We will be in touch within 24 hours to discuss your event.',
  },
  'con.success.again': { pl: 'Wyślij Kolejną Wiadomość', en: 'Send Another Message' },

  // Event types
  'evt.wedding':    { pl: 'Wesele',               en: 'Wedding' },
  'evt.prom':       { pl: 'Studniówka / Bal',     en: 'Graduation Ball / Prom' },
  'evt.corporate':  { pl: 'Event Korporacyjny',   en: 'Corporate Event' },
  'evt.photo':      { pl: 'Produkcja Foto / Video', en: 'Photo / Video Production' },
  'evt.private':    { pl: 'Event Prywatny',       en: 'Private Event' },
  'evt.other':      { pl: 'Inne',                 en: 'Other' },

  // Footer
  'footer.tagline': { pl: 'Wedding & Event Car Experience', en: 'Wedding & Event Car Experience' },
  'footer.privacy': { pl: 'Polityka Prywatności',           en: 'Privacy Policy' },
  'footer.contact': { pl: 'Kontakt',                        en: 'Contact' },
  'footer.rights':  { pl: 'Wszelkie prawa zastrzeżone.',    en: 'All rights reserved.' },
};

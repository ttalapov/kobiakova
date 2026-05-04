/* ===================================================
   script.js — Dasha Kobiakova Landing Page
   Handles: i18n, burger nav, scroll effects, form
   =================================================== */

// ===========================
// TRANSLATIONS
// ===========================
const translations = {
  uk: {
    page_title: "Дар'я Кобякова — Логопед-дефектолог у Празі",
    page_desc: "Логопед-дефектолог Дар'я Кобякова у Празі. ADOS-2, ABA-терапія, сенсорна інтеграція. Прийом дітей з 2 років.",
    nav_about: "Про мене",
    nav_services: "Послуги",
    nav_methods: "Методики",
    nav_working: "З ким працюю",
    nav_contact: "Записатись",
    hero_badge: "Логопед-дефектолог • Прага",
    hero_name: "Дар'я",
    hero_surname: "Кобякова",
    hero_sub: "Фахова допомога дітям з порушеннями мовлення та розвитку. Сертифікований фахівець ADOS-2 · Олігофренопедагог",
    tag_si: "Сенсорна інтеграція",
    tag_online: "Онлайн / Офлайн",
    cta_book: "Записатись на прийом",
    cta_more: "Дізнатись більше",
    stat_years: "років досвіду",
    stat_children: "дітей",
    cert_ados: "Сертифікат ADOS-2",
    about_label: "Про спеціаліста",
    about_title: "Серце та наука — разом для вашої дитини",
    about_p1: "Я — Дар'я Кобякова, логопед-олігофренопедагог з понад 10-річним досвідом. Співзасновниця та методист корекційного центру <strong>STARTUM</strong> у Харкові. Зараз приймаю дітей у <strong>Празі</strong>.",
    about_p2: "Спеціалізуюся на роботі з дітьми з розладами аутистичного спектру (РАС), затримкою мовленнєвого та психічного розвитку, синдромом Дауна та іншими особливостями розвитку. Мій підхід — завжди індивідуальний, доказовий і з любов'ю до кожної дитини.",
    about_p3: "Постійно підвищую кваліфікацію, навчаюсь у провідних міжнародних фахівців. Сертифікований спеціаліст з діагностики ADOS-2 — стандарту 'золотого рівня' для діагностики аутизму.",
    about_edu: "Вища педагогічна освіта — логопедія та олігофренопедагогіка",
    about_cert: "Сертифікований спеціаліст ADOS-2",
    about_startum: "Методист та співзасновник центру STARTUM, Харків",
    about_prague: "Зараз приймаю у Празі, Чехія",
    about_online: "Також консультую онлайн",
    services_label: "Послуги",
    services_title: "Чим я можу допомогти",
    services_desc: "Комплексний підхід до корекції та розвитку дитини",
    serv1_title: "Діагностика ADOS-2",
    serv1_desc: "Золотий стандарт діагностики розладів аутистичного спектру. Точна оцінка комунікативних навичок і поведінки дитини.",
    serv2_title: "Логопедична корекція",
    serv2_desc: "Постановка звуків, розвиток мовлення, корекція дислалії, дисграфії, дислексії. Від немовленнєвих дітей до школярів.",
    serv3_title: "Дефектологічні заняття",
    serv3_desc: "Розвиток пізнавальних процесів, уваги, пам'яті, мислення. Підготовка до школи для дітей з особливими потребами.",
    serv4_title: "Робота з РАС",
    serv4_desc: "Запуск і розвиток мовлення у дітей з аутизмом. ABA-підхід, PECS, Floortime, розвиток комунікації.",
    serv5_title: "Рання інтервенція",
    serv5_desc: "Робота з дітьми від 1,5 року. Раннє виявлення та корекція порушень розвитку — ключ до найкращого результату.",
    serv6_title: "Онлайн-консультації",
    serv6_desc: "Дистанційна діагностика, консультації для батьків, онлайн-заняття. Доступно з будь-якої точки світу.",
    methods_label: "Технології та методики",
    methods_title: "Сучасний арсенал фахівця",
    methods_desc: "Використовую лише науково обґрунтовані, доказові методики міжнародного рівня",
    m_ados: "Autism Diagnostic Observation Schedule — золотий стандарт діагностики РАС. Структуроване напівстандартизоване спостереження для точної оцінки соціальної взаємодії, комунікації та поведінки дитини.",
    badge_gold: "Золотий стандарт",
    m_aba: "Applied Behavior Analysis — поведінкова терапія, найефективніший науково доведений метод корекції аутизму та розвитку функціональних навичок.",
    m_pecs: "Picture Exchange Communication System — система комунікації з використанням карток для дітей з обмеженим або відсутнім мовленням.",
    m_floortime: "Developmental Individual Difference Relationship-based Model — ігрова терапія, що розвиває емоційний інтелект та комунікацію через взаємодію.",
    m_tomatis: "Аудіо-вокальні тренування для розвитку слухового сприйняття, мовлення, концентрації уваги та оперативної пам'яті.",
    m_si_title: "Сенсорна інтеграція",
    m_si: "Терапевтичний підхід для дітей із сенсорною дисрегуляцією. Допомагає мозку правильно обробляти сенсорну інформацію.",
    m_aac_title: "AAC (Альтернативна комунікація)",
    m_aac: "Засоби і стратегії альтернативної та додаткової комунікації: від жестів і карток до High-tech пристроїв та додатків.",
    m_game_title: "Ігрова терапія",
    m_game: "Основний метод роботи з дітьми від 2 до 12 років. Через гру дитина вчиться спілкуватися, встановлювати правила та будувати стосунки.",
    m_moxo: "Комп'ютеризована діагностика СДУГ з точністю 95%. Визнана в Ізраїлі, США та Європі.",
    m_massage_title: "Логопедичний масаж",
    m_massage: "Мануальний логомасаж та зондовий масаж для корекції м'язового тонусу артикуляційного апарату при дизартрії та порушеннях звуковимови.",
    m_verbal_title: "Вербальна поведінка (VB)",
    m_verbal: "Аналіз вербальної поведінки за Скіннером — ефективний підхід для запуску і розвитку функціонального мовлення у дітей з РАС.",
    m_rdi_title: "RDI (Relationship Development Intervention)",
    m_rdi: "Втручання з розвитку відносин — метод, що допомагає дітям з аутизмом розвивати динамічне мислення та гнучкість.",
    working_label: "Напрямки роботи",
    working_title: "З ким я працюю",
    wc1_title: "РАС / Аутизм",
    wc1_desc: "Діти з розладами аутистичного спектру різного рівня. Діагностика ADOS-2, запуск мовлення, соціальна адаптація.",
    wc2_title: "ЗПР / ЗНМ",
    wc2_desc: "Затримка психічного та мовленнєвого розвитку. Розвиток пізнавальних процесів та комунікативних навичок.",
    wc3_title: "Синдром Дауна",
    wc3_desc: "Мовленнєва корекція, розвиток інтелектуальних навичок, підготовка до навчання та соціальна інтеграція.",
    wc4_title: "СДУГ",
    wc4_desc: "Синдром дефіциту уваги та гіперактивності. Діагностика MOXO, розвиток довільної уваги, поведінкова корекція.",
    wc5_title: "Дислалія / Дизартрія",
    wc5_desc: "Порушення звуковимови — від простих дефектів до складних форм дизартрії при неврологічних патологіях.",
    wc6_title: "Дислексія / Дисграфія",
    wc6_desc: "Порушення читання та письма у дітей шкільного віку. Нейропсихологічний підхід до корекції.",
    contact_label: "Контакти",
    contact_title: "Записатись на прийом",
    contact_desc: "Напишіть або зателефонуйте — разом знайдемо найкращий час для вашої дитини. Приймаю у Празі та онлайн.",
    ci_phone: "Телефон",
    ci_city: "Місто",
    ci_city_val: "Прага, Чехія",
    form_title: "Залишити заявку",
    form_name: "Ім'я",
    form_name_ph: "Ваше ім'я",
    form_phone: "Телефон / Месенджер",
    form_phone_ph: "+420 або +380...",
    form_age: "Вік дитини",
    form_age_ph: "Наприклад: 4 роки",
    form_msg: "Повідомлення",
    form_msg_ph: "Опишіть запит...",
    form_submit: "Надіслати",
    form_ok: "✅ Дякуємо! Ми зв'яжемося з вами найближчим часом.",
    footer_desc: "Логопед-дефектолог у Празі • Сертифікований фахівець ADOS-2",
    footer_copy: "© 2025 Дар'я Кобякова. Всі права захищено.",
    social_ig: "Instagram",
  },

  ru: {
    page_title: "Дарья Кобякова — Логопед-дефектолог в Праге",
    page_desc: "Логопед-дефектолог Дарья Кобякова в Праге. ADOS-2, ABA-терапия, сенсорная интеграция. Приём детей с 2 лет.",
    nav_about: "Обо мне",
    nav_services: "Услуги",
    nav_methods: "Методики",
    nav_working: "С кем работаю",
    nav_contact: "Записаться",
    hero_badge: "Логопед-дефектолог • Прага",
    hero_name: "Дарья",
    hero_surname: "Кобякова",
    hero_sub: "Профессиональная помощь детям с нарушениями речи и развития. Сертифицированный специалист ADOS-2 · Олигофренопедагог",
    tag_si: "Сенсорная интеграция",
    tag_online: "Онлайн / Оффлайн",
    cta_book: "Записаться на приём",
    cta_more: "Узнать больше",
    stat_years: "лет опыта",
    stat_children: "детей",
    cert_ados: "Сертификат ADOS-2",
    about_label: "О специалисте",
    about_title: "Сердце и наука — вместе для вашего ребёнка",
    about_p1: "Я — Дарья Кобякова, логопед-олигофренопедагог с более чем 10-летним опытом. Сооснователь и методист коррекционного центра <strong>STARTUM</strong> в Харькове. Сейчас принимаю детей в <strong>Праге</strong>.",
    about_p2: "Специализируюсь на работе с детьми с расстройствами аутистического спектра (РАС), задержкой речевого и психического развития, синдромом Дауна и другими особенностями развития. Мой подход — всегда индивидуальный, доказательный и с любовью к каждому ребёнку.",
    about_p3: "Постоянно повышаю квалификацию, обучаюсь у ведущих международных специалистов. Сертифицированный специалист по диагностике ADOS-2 — стандарту 'золотого уровня' для диагностики аутизма.",
    about_edu: "Высшее педагогическое образование — логопедия и олигофренопедагогика",
    about_cert: "Сертифицированный специалист ADOS-2",
    about_startum: "Методист и сооснователь центра STARTUM, Харьков",
    about_prague: "Сейчас принимаю в Праге, Чехия",
    about_online: "Также консультирую онлайн",
    services_label: "Услуги",
    services_title: "Чем я могу помочь",
    services_desc: "Комплексный подход к коррекции и развитию ребёнка",
    serv1_title: "Диагностика ADOS-2",
    serv1_desc: "Золотой стандарт диагностики расстройств аутистического спектра. Точная оценка коммуникативных навыков и поведения ребёнка.",
    serv2_title: "Логопедическая коррекция",
    serv2_desc: "Постановка звуков, развитие речи, коррекция дислалии, дисграфии, дислексии. От неговорящих детей до школьников.",
    serv3_title: "Дефектологические занятия",
    serv3_desc: "Развитие познавательных процессов, внимания, памяти, мышления. Подготовка к школе для детей с особыми потребностями.",
    serv4_title: "Работа с РАС",
    serv4_desc: "Запуск и развитие речи у детей с аутизмом. ABA-подход, PECS, Floortime, развитие коммуникации.",
    serv5_title: "Ранняя интервенция",
    serv5_desc: "Работа с детьми от 1,5 лет. Раннее выявление и коррекция нарушений развития — ключ к лучшему результату.",
    serv6_title: "Онлайн-консультации",
    serv6_desc: "Дистанционная диагностика, консультации для родителей, онлайн-занятия. Доступно из любой точки мира.",
    methods_label: "Технологии и методики",
    methods_title: "Современный арсенал специалиста",
    methods_desc: "Использую только научно обоснованные, доказательные методики международного уровня",
    m_ados: "Autism Diagnostic Observation Schedule — золотой стандарт диагностики РАС. Структурированное полустандартизированное наблюдение для точной оценки социального взаимодействия, коммуникации и поведения ребёнка.",
    badge_gold: "Золотой стандарт",
    m_aba: "Applied Behavior Analysis — поведенческая терапия, наиболее эффективный научно доказанный метод коррекции аутизма и развития функциональных навыков.",
    m_pecs: "Picture Exchange Communication System — система коммуникации с использованием карточек для детей с ограниченной или отсутствующей речью.",
    m_floortime: "Developmental Individual Difference Relationship-based Model — игровая терапия, развивающая эмоциональный интеллект и коммуникацию через взаимодействие.",
    m_tomatis: "Аудио-вокальные тренировки для развития слухового восприятия, речи, концентрации внимания и оперативной памяти.",
    m_si_title: "Сенсорная интеграция",
    m_si: "Терапевтический подход для детей с сенсорной дисрегуляцией. Помогает мозгу правильно обрабатывать сенсорную информацию.",
    m_aac_title: "AAC (Альтернативная коммуникация)",
    m_aac: "Средства и стратегии альтернативной и дополнительной коммуникации: от жестов и карточек до High-tech устройств и приложений.",
    m_game_title: "Игровая терапия",
    m_game: "Основной метод работы с детьми от 2 до 12 лет. Через игру ребёнок учится общаться, устанавливать правила и строить отношения.",
    m_moxo: "Компьютеризированная диагностика СДВГ с точностью 95%. Признана в Израиле, США и Европе.",
    m_massage_title: "Логопедический массаж",
    m_massage: "Мануальный логомассаж и зондовый массаж для коррекции мышечного тонуса артикуляционного аппарата при дизартрии.",
    m_verbal_title: "Вербальное поведение (VB)",
    m_verbal: "Анализ вербального поведения по Скиннеру — эффективный подход для запуска и развития функциональной речи у детей с РАС.",
    m_rdi_title: "RDI (Relationship Development Intervention)",
    m_rdi: "Вмешательство по развитию отношений — метод, помогающий детям с аутизмом развивать динамическое мышление и гибкость.",
    working_label: "Направления работы",
    working_title: "С кем я работаю",
    wc1_title: "РАС / Аутизм",
    wc1_desc: "Дети с расстройствами аутистического спектра. Диагностика ADOS-2, запуск речи, социальная адаптация.",
    wc2_title: "ЗПР / ЗНМ",
    wc2_desc: "Задержка психического и речевого развития. Развитие познавательных процессов и коммуникативных навыков.",
    wc3_title: "Синдром Дауна",
    wc3_desc: "Речевая коррекция, развитие интеллектуальных навыков, подготовка к обучению и социальная интеграция.",
    wc4_title: "СДВГ",
    wc4_desc: "Синдром дефицита внимания и гиперактивности. Диагностика MOXO, развитие произвольного внимания.",
    wc5_title: "Дислалия / Дизартрия",
    wc5_desc: "Нарушения звукопроизношения — от простых дефектов до сложных форм дизартрии при неврологических патологиях.",
    wc6_title: "Дислексия / Дисграфия",
    wc6_desc: "Нарушения чтения и письма у детей школьного возраста. Нейропсихологический подход к коррекции.",
    contact_label: "Контакты",
    contact_title: "Записаться на приём",
    contact_desc: "Напишите или позвоните — вместе найдём лучшее время для вашего ребёнка. Принимаю в Праге и онлайн.",
    ci_phone: "Телефон",
    ci_city: "Город",
    ci_city_val: "Прага, Чехия",
    form_title: "Оставить заявку",
    form_name: "Имя",
    form_name_ph: "Ваше имя",
    form_phone: "Телефон / Мессенджер",
    form_phone_ph: "+420 или +380...",
    form_age: "Возраст ребёнка",
    form_age_ph: "Например: 4 года",
    form_msg: "Сообщение",
    form_msg_ph: "Опишите запрос...",
    form_submit: "Отправить",
    form_ok: "✅ Спасибо! Мы свяжемся с вами в ближайшее время.",
    footer_desc: "Логопед-дефектолог в Праге • Сертифицированный специалист ADOS-2",
    footer_copy: "© 2025 Дарья Кобякова. Все права защищены.",
    social_ig: "Instagram",
  },

  cs: {
    page_title: "Daria Kobiakova — Logoped-defektolog v Praze",
    page_desc: "Logoped-defektolog Daria Kobiakova v Praze. ADOS-2, ABA terapie, senzorická integrace. Přijímám děti od 2 let.",
    nav_about: "O mně",
    nav_services: "Služby",
    nav_methods: "Metodiky",
    nav_working: "S kým pracuji",
    nav_contact: "Objednat se",
    hero_badge: "Logoped-defektolog • Praha",
    hero_name: "Daria",
    hero_surname: "Kobiakova",
    hero_sub: "Odborná pomoc dětem s poruchami řeči a vývoje. Certifikovaný specialista ADOS-2 · Speciální pedagog",
    tag_si: "Senzorická integrace",
    tag_online: "Online / Offline",
    cta_book: "Objednat se na konzultaci",
    cta_more: "Zjistit více",
    stat_years: "let zkušeností",
    stat_children: "dětí",
    cert_ados: "Certifikát ADOS-2",
    about_label: "O specialistce",
    about_title: "Srdce a věda — společně pro vaše dítě",
    about_p1: "Jsem Daria Kobiakova, logoped a speciální pedagog s více než 10 lety zkušeností. Spoluzakladatelka a metodička korekčního centra <strong>STARTUM</strong> v Charkově. Nyní přijímám děti v <strong>Praze</strong>.",
    about_p2: "Specializuji se na práci s dětmi s poruchami autistického spektra (PAS), opožděným řečovým a mentálním vývojem, Downovým syndromem a dalšími vývojovými zvláštnostmi. Můj přístup je vždy individuální, na důkazech založený a s láskou ke každému dítěti.",
    about_p3: "Neustále zvyšuji svou kvalifikaci a učím se od předních mezinárodních odborníků. Certifikovaná specialistka ADOS-2 — zlatého standardu pro diagnostiku autismu.",
    about_edu: "Vysokoškolské pedagogické vzdělání — logopedie a speciální pedagogika",
    about_cert: "Certifikovaná specialistka ADOS-2",
    about_startum: "Metodička a spoluzakladatelka centra STARTUM, Charkov",
    about_prague: "Nyní přijímám v Praze, Česká republika",
    about_online: "Také konzultuji online",
    services_label: "Služby",
    services_title: "Jak mohu pomoci",
    services_desc: "Komplexní přístup ke korekci a rozvoji dítěte",
    serv1_title: "Diagnostika ADOS-2",
    serv1_desc: "Zlatý standard diagnostiky poruch autistického spektra. Přesné hodnocení komunikačních dovedností a chování dítěte.",
    serv2_title: "Logopedická korekce",
    serv2_desc: "Nácvik výslovnosti, rozvoj řeči, korekce dyslalie, dysgrafie, dyslexie. Od nemluvících dětí po školáky.",
    serv3_title: "Speciálněpedagogická cvičení",
    serv3_desc: "Rozvoj kognitivních procesů, pozornosti, paměti, myšlení. Příprava na školu pro děti se zvláštními potřebami.",
    serv4_title: "Práce s PAS",
    serv4_desc: "Rozvoj řeči u dětí s autismem. ABA přístup, PECS, Floortime, rozvoj komunikace.",
    serv5_title: "Raná intervence",
    serv5_desc: "Práce s dětmi od 1,5 roku. Včasné odhalení a korekce vývojových poruch — klíč k nejlepším výsledkům.",
    serv6_title: "Online konzultace",
    serv6_desc: "Distanční diagnostika, konzultace pro rodiče, online cvičení. Dostupné odkudkoli na světě.",
    methods_label: "Technologie a metodiky",
    methods_title: "Moderní arzenál odborníka",
    methods_desc: "Používám pouze vědecky podložené, na důkazech založené metodiky mezinárodní úrovně",
    m_ados: "Autism Diagnostic Observation Schedule — zlatý standard diagnostiky PAS. Strukturované polostrukturované pozorování pro přesné hodnocení sociální interakce, komunikace a chování dítěte.",
    badge_gold: "Zlatý standard",
    m_aba: "Applied Behavior Analysis — behaviorální terapie, nejúčinnější vědecky prokázaná metoda korekce autismu a rozvoje funkčních dovedností.",
    m_pecs: "Picture Exchange Communication System — systém komunikace pomocí obrázků pro děti s omezenou nebo chybějící řečí.",
    m_floortime: "Developmental Individual Difference Relationship-based Model — herní terapie rozvíjející emoční inteligenci a komunikaci prostřednictvím interakce.",
    m_tomatis: "Audio-vokální tréninky pro rozvoj sluchového vnímání, řeči, soustředění a pracovní paměti.",
    m_si_title: "Senzorická integrace",
    m_si: "Terapeutický přístup pro děti se senzorickou dysregulací. Pomáhá mozku správně zpracovávat smyslové informace.",
    m_aac_title: "AAC (Augmentativní a alternativní komunikace)",
    m_aac: "Prostředky a strategie AAC: od gest a karet po high-tech zařízení a aplikace.",
    m_game_title: "Herní terapie",
    m_game: "Hlavní metoda práce s dětmi od 2 do 12 let. Prostřednictvím hry se dítě učí komunikovat a budovat vztahy.",
    m_moxo: "Počítačová diagnostika ADHD s přesností 95%. Uznávaná v Izraeli, USA a Evropě.",
    m_massage_title: "Logopedická masáž",
    m_massage: "Manuální a sondová masáž pro korekci svalového tonu artikulačního aparátu při dysartrii.",
    m_verbal_title: "Verbální chování (VB)",
    m_verbal: "Analýza verbálního chování podle Skinnera — efektivní přístup pro rozvoj funkční řeči u dětí s PAS.",
    m_rdi_title: "RDI (Relationship Development Intervention)",
    m_rdi: "Intervence pro rozvoj vztahů — metoda pomáhající dětem s autismem rozvíjet dynamické myšlení a flexibilitu.",
    working_label: "Oblasti práce",
    working_title: "S kým pracuji",
    wc1_title: "PAS / Autismus",
    wc1_desc: "Děti s poruchami autistického spektra různé úrovně. Diagnostika ADOS-2, rozvoj řeči, sociální adaptace.",
    wc2_title: "Opožděný vývoj",
    wc2_desc: "Opožděný mentální a řečový vývoj. Rozvoj kognitivních procesů a komunikačních dovedností.",
    wc3_title: "Downův syndrom",
    wc3_desc: "Řečová korekce, rozvoj intelektuálních dovedností, příprava na vzdělávání a sociální integrace.",
    wc4_title: "ADHD",
    wc4_desc: "Syndrom poruchy pozornosti s hyperaktivitou. Diagnostika MOXO, rozvoj pozornosti, behaviorální korekce.",
    wc5_title: "Dyslalie / Dysartrie",
    wc5_desc: "Poruchy výslovnosti — od jednoduchých vad po složité formy dysartrie při neurologických patologiích.",
    wc6_title: "Dyslexie / Dysgrafie",
    wc6_desc: "Poruchy čtení a psaní u dětí školního věku. Neuropsychologický přístup ke korekci.",
    contact_label: "Kontakt",
    contact_title: "Objednat se na konzultaci",
    contact_desc: "Napište nebo zavolejte — společně najdeme nejlepší čas pro vaše dítě. Přijímám v Praze a online.",
    ci_phone: "Telefon",
    ci_city: "Město",
    ci_city_val: "Praha, Česká republika",
    form_title: "Zanechat žádost",
    form_name: "Jméno",
    form_name_ph: "Vaše jméno",
    form_phone: "Telefon / Messenger",
    form_phone_ph: "+420 nebo +380...",
    form_age: "Věk dítěte",
    form_age_ph: "Například: 4 roky",
    form_msg: "Zpráva",
    form_msg_ph: "Popište dotaz...",
    form_submit: "Odeslat",
    form_ok: "✅ Děkujeme! Ozveme se vám co nejdříve.",
    footer_desc: "Logoped-defektolog v Praze • Certifikovaná specialistka ADOS-2",
    footer_copy: "© 2025 Daria Kobiakova. Všechna práva vyhrazena.",
    social_ig: "Instagram",
  },

  en: {
    page_title: "Daria Kobiakova — Speech Therapist & Defectologist in Prague",
    page_desc: "Speech therapist and defectologist Daria Kobiakova in Prague. ADOS-2, ABA therapy, sensory integration. Children from 2 years old.",
    nav_about: "About",
    nav_services: "Services",
    nav_methods: "Methods",
    nav_working: "Specializations",
    nav_contact: "Book Now",
    hero_badge: "Speech Therapist & Defectologist • Prague",
    hero_name: "Daria",
    hero_surname: "Kobiakova",
    hero_sub: "Expert help for children with speech and developmental disorders. Certified ADOS-2 specialist · Special Education Teacher",
    tag_si: "Sensory Integration",
    tag_online: "Online / In-Person",
    cta_book: "Book a Consultation",
    cta_more: "Learn More",
    stat_years: "years of experience",
    stat_children: "children helped",
    cert_ados: "ADOS-2 Certified",
    about_label: "About the Specialist",
    about_title: "Heart & Science — Together for Your Child",
    about_p1: "I am Daria Kobiakova, a speech therapist and special education teacher with over 10 years of experience. Co-founder and methodologist of the <strong>STARTUM</strong> correction center in Kharkiv, Ukraine. Currently accepting children in <strong>Prague</strong>.",
    about_p2: "I specialize in working with children with Autism Spectrum Disorders (ASD), speech and mental developmental delays, Down syndrome, and other developmental features. My approach is always individual, evidence-based, and filled with love for every child.",
    about_p3: "I continuously improve my qualifications and study under leading international specialists. I am a certified ADOS-2 specialist — the gold standard for autism diagnostics.",
    about_edu: "Higher pedagogical education — speech therapy and special education",
    about_cert: "Certified ADOS-2 specialist",
    about_startum: "Methodologist and co-founder of STARTUM center, Kharkiv",
    about_prague: "Currently accepting in Prague, Czech Republic",
    about_online: "Also consulting online",
    services_label: "Services",
    services_title: "How I Can Help",
    services_desc: "A comprehensive approach to child correction and development",
    serv1_title: "ADOS-2 Diagnostics",
    serv1_desc: "The gold standard for ASD diagnostics. Accurate assessment of the child's communication skills and behavior.",
    serv2_title: "Speech Therapy",
    serv2_desc: "Sound production, speech development, correction of dyslalia, dysgraphia, dyslexia. From non-verbal toddlers to school-age children.",
    serv3_title: "Defectology Sessions",
    serv3_desc: "Development of cognitive processes, attention, memory and thinking. School readiness for children with special needs.",
    serv4_title: "ASD Work",
    serv4_desc: "Speech launch and development for children with autism. ABA approach, PECS, Floortime, communication development.",
    serv5_title: "Early Intervention",
    serv5_desc: "Working with children from 1.5 years old. Early detection and correction of developmental disorders.",
    serv6_title: "Online Consultations",
    serv6_desc: "Remote diagnostics, parent consultations, online sessions. Available from anywhere in the world.",
    methods_label: "Technologies & Methods",
    methods_title: "Modern Specialist's Arsenal",
    methods_desc: "I use only evidence-based, scientifically proven methodologies of international standard",
    m_ados: "Autism Diagnostic Observation Schedule — the gold standard for ASD diagnostics. Structured semi-standardized observation for accurate assessment of social interaction, communication and child behavior.",
    badge_gold: "Gold Standard",
    m_aba: "Applied Behavior Analysis — behavioral therapy, the most effective scientifically proven method for autism correction and functional skills development.",
    m_pecs: "Picture Exchange Communication System — a card-based communication system for children with limited or absent speech.",
    m_floortime: "Developmental Individual Difference Relationship-based Model — play therapy developing emotional intelligence and communication through interaction.",
    m_tomatis: "Audio-vocal training for developing auditory perception, speech, concentration and working memory.",
    m_si_title: "Sensory Integration",
    m_si: "A therapeutic approach for children with sensory dysregulation. Helps the brain correctly process sensory information.",
    m_aac_title: "AAC (Augmentative & Alternative Communication)",
    m_aac: "AAC tools and strategies: from gestures and picture cards to high-tech devices and apps.",
    m_game_title: "Play Therapy",
    m_game: "The primary method for working with children aged 2 to 12. Through play, children learn to communicate, follow rules and build relationships.",
    m_moxo: "Computerized ADHD diagnostics with 95% accuracy. Recognized in Israel, the USA and Europe.",
    m_massage_title: "Speech Therapy Massage",
    m_massage: "Manual and probe massage to correct muscle tone of the articulatory apparatus in dysarthria and articulation disorders.",
    m_verbal_title: "Verbal Behavior (VB)",
    m_verbal: "Skinner's verbal behavior analysis — an effective approach for launching and developing functional speech in children with ASD.",
    m_rdi_title: "RDI (Relationship Development Intervention)",
    m_rdi: "An approach helping children with autism develop dynamic thinking and flexibility.",
    working_label: "Specializations",
    working_title: "Who I Work With",
    wc1_title: "ASD / Autism",
    wc1_desc: "Children with autism spectrum disorders at various levels. ADOS-2 diagnostics, speech development, social adaptation.",
    wc2_title: "Developmental Delays",
    wc2_desc: "Mental and speech developmental delays. Development of cognitive processes and communication skills.",
    wc3_title: "Down Syndrome",
    wc3_desc: "Speech correction, intellectual skills development, school preparation and social integration.",
    wc4_title: "ADHD",
    wc4_desc: "Attention deficit hyperactivity disorder. MOXO diagnostics, attention development, behavioral correction.",
    wc5_title: "Dyslalia / Dysarthria",
    wc5_desc: "Articulation disorders — from simple defects to complex dysarthria in neurological pathologies.",
    wc6_title: "Dyslexia / Dysgraphia",
    wc6_desc: "Reading and writing disorders in school-age children. Neuropsychological approach to correction.",
    contact_label: "Contact",
    contact_title: "Book a Consultation",
    contact_desc: "Write or call — together we'll find the best time for your child. I accept in Prague and online.",
    ci_phone: "Phone",
    ci_city: "City",
    ci_city_val: "Prague, Czech Republic",
    form_title: "Send a Request",
    form_name: "Name",
    form_name_ph: "Your name",
    form_phone: "Phone / Messenger",
    form_phone_ph: "+420 or +380...",
    form_age: "Child's age",
    form_age_ph: "For example: 4 years",
    form_msg: "Message",
    form_msg_ph: "Describe your inquiry...",
    form_submit: "Send",
    form_ok: "✅ Thank you! We'll get back to you shortly.",
    footer_desc: "Speech Therapist & Defectologist in Prague • Certified ADOS-2 Specialist",
    footer_copy: "© 2025 Daria Kobiakova. All rights reserved.",
    social_ig: "Instagram",
  }
};

// ===========================
// I18N ENGINE
// ===========================
let currentLang = 'uk';

function applyTranslations(lang) {
  currentLang = lang;
  const t = translations[lang];
  if (!t) return;

  // Update page title & meta desc
  document.title = t.page_title || document.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && t.page_desc) metaDesc.setAttribute('content', t.page_desc);

  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) {
      el.setAttribute('placeholder', t[key]);
    }
  });

  // Update html lang attr
  document.documentElement.lang = lang;

  // Update active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Save preference
  try { localStorage.setItem('lang', lang); } catch(e) {}
}

function initLang() {
  let saved;
  try { saved = localStorage.getItem('lang'); } catch(e) {}
  const browserLang = navigator.language.slice(0, 2);
  const preferred = saved || (['uk','ru','cs','en'].includes(browserLang) ? browserLang : 'uk');
  applyTranslations(preferred);
}

// ===========================
// BURGER MENU
// ===========================
function initBurger() {
  const btn = document.getElementById('burgerBtn');
  const links = document.getElementById('navLinks');
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    btn.classList.toggle('is-open', open);
  });

  // Close on link click
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      btn.classList.remove('is-open');
      btn.setAttribute('aria-expanded', false);
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !links.contains(e.target)) {
      links.classList.remove('open');
      btn.classList.remove('is-open');
    }
  });
}

// ===========================
// SCROLL EFFECTS
// ===========================
function initScrollEffects() {
  // Back to top
  const btt = document.getElementById('backToTop');
  if (btt) {
    window.addEventListener('scroll', () => {
      btt.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
  }

  // Reveal on scroll
  const reveals = document.querySelectorAll(
    '.service-card, .method-item, .working-card, .about-grid, .contact-wrap, .hero-stat'
  );

  reveals.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Staggered delay for sibling cards
        const siblings = Array.from(entry.target.parentElement.children);
        const index = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = `${Math.min(index * 80, 400)}ms`;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));
}

// ===========================
// FORM HANDLING
// ===========================
function initForm() {
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('fname');
    if (!name || !name.value.trim()) {
      name && name.focus();
      return;
    }

    // Simulate submission
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      btn.disabled = true;
      btn.textContent = '⏳';
    }

    setTimeout(() => {
      form.reset();
      if (btn) { btn.disabled = false; btn.innerHTML = translations[currentLang].form_submit || 'Надіслати'; }
      if (success) { success.classList.add('show'); }
      setTimeout(() => { if (success) success.classList.remove('show'); }, 5000);
    }, 900);
  });
}

// ===========================
// SMOOTH ACTIVE NAV
// ===========================
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a[href^="#"]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    links.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }, { passive: true });
}

// ===========================
// INIT
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  // Language switcher
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyTranslations(btn.getAttribute('data-lang')));
  });

  initLang();
  initBurger();
  initScrollEffects();
  initForm();
  initActiveNav();
});

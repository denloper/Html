// Медицинская база лабораторных тестов (расширенная)
const labTests = [
  // ========================= ОАК / CBC =========================
  {
    id: "cbc_hemoglobin",
    canonicalName: "Гемоглобин",
    shortName: "HGB",
    category: "ОАК",
    resultType: "numeric",
    units: ["г/л", "g/L", "г/дл", "g/dL"],
    aliases: [
      "гемоглобин",
      "hb",
      "hgb",
      "hemoglobin",
      "haemoglobin",
      "гемоглобин крови"
    ],
    references: [
      { sex: "male", ageMin: 18, ageMax: 120, min: 130, max: 170, unit: "г/л" },
      { sex: "female", ageMin: 18, ageMax: 120, min: 120, max: 150, unit: "г/л" }
    ]
  },
  {
    id: "cbc_rbc",
    canonicalName: "Эритроциты",
    shortName: "RBC",
    category: "ОАК",
    resultType: "numeric",
    units: ["×10^12/л", "10^12/L", "млн/мкл"],
    aliases: [
      "эритроциты",
      "rbc",
      "red blood cells",
      "эр",
      "эритроциты крови",
      "красные кровяные клетки"
    ],
    references: [
      { sex: "male", ageMin: 18, ageMax: 120, min: 4.3, max: 5.7, unit: "×10^12/л" },
      { sex: "female", ageMin: 18, ageMax: 120, min: 3.8, max: 5.1, unit: "×10^12/л" }
    ]
  },
  {
    id: "cbc_hematocrit",
    canonicalName: "Гематокрит",
    shortName: "HCT",
    category: "ОАК",
    resultType: "numeric",
    units: ["%", "л/л", "L/L"],
    aliases: [
      "гематокрит",
      "hct",
      "hematocrit",
      "packed cell volume",
      "pcv"
    ],
    references: [
      { sex: "male", ageMin: 18, ageMax: 120, min: 40, max: 50, unit: "%" },
      { sex: "female", ageMin: 18, ageMax: 120, min: 36, max: 46, unit: "%" }
    ]
  },
  {
    id: "cbc_mcv",
    canonicalName: "Средний объём эритроцита",
    shortName: "MCV",
    category: "ОАК",
    resultType: "numeric",
    units: ["фл", "fL"],
    aliases: [
      "mcv",
      "средний объем эритроцита",
      "средний объём эритроцита",
      "mean corpuscular volume",
      "mean cell volume"
    ],
    references: [
      { sex: "any", ageMin: 18, ageMax: 120, min: 80, max: 100, unit: "фл" }
    ]
  },
  {
    id: "cbc_mch",
    canonicalName: "Среднее содержание гемоглобина в эритроците",
    shortName: "MCH",
    category: "ОАК",
    resultType: "numeric",
    units: ["пг", "pg"],
    aliases: [
      "mch",
      "среднее содержание гемоглобина",
      "среднее содержание hb",
      "mean corpuscular hemoglobin",
      "mean cell hemoglobin"
    ],
    references: [
      { sex: "any", ageMin: 18, ageMax: 120, min: 27, max: 34, unit: "пг" }
    ]
  },
  {
    id: "cbc_mchc",
    canonicalName: "Средняя концентрация гемоглобина в эритроците",
    shortName: "MCHC",
    category: "ОАК",
    resultType: "numeric",
    units: ["г/л", "g/L", "г/дл", "g/dL"],
    aliases: [
      "mchc",
      "средняя концентрация гемоглобина",
      "средняя концентрация hb",
      "mean corpuscular hemoglobin concentration"
    ],
    references: [
      { sex: "any", ageMin: 18, ageMax: 120, min: 320, max: 360, unit: "г/л" }
    ]
  },
  {
    id: "cbc_rdw_cv",
    canonicalName: "Ширина распределения эритроцитов по объёму",
    shortName: "RDW-CV",
    category: "ОАК",
    resultType: "numeric",
    units: ["%"],
    aliases: [
      "rdw",
      "rdw-cv",
      "индекс распределения эритроцитов",
      "ширина распределения эритроцитов",
      "red cell distribution width"
    ],
    references: [
      { sex: "any", ageMin: 18, ageMax: 120, min: 11.5, max: 14.5, unit: "%" }
    ]
  },
  {
    id: "cbc_rdw_sd",
    canonicalName: "Ширина распределения эритроцитов RDW-SD",
    shortName: "RDW-SD",
    category: "ОАК",
    resultType: "numeric",
    units: ["фл", "fL"],
    aliases: [
      "rdw-sd",
      "ширина распределения эритроцитов sd",
      "red cell distribution width sd"
    ],
    references: [
      { sex: "any", ageMin: 18, ageMax: 120, min: 35, max: 56, unit: "фл" }
    ]
  },
  {
    id: "cbc_platelets",
    canonicalName: "Тромбоциты",
    shortName: "PLT",
    category: "ОАК",
    resultType: "numeric",
    units: ["×10^9/л", "10^9/L"],
    aliases: [
      "тромбоциты",
      "plt",
      "platelets",
      "platelet count",
      "тромбоциты крови"
    ],
    references: [
      { sex: "any", ageMin: 18, ageMax: 120, min: 150, max: 400, unit: "×10^9/л" }
    ]
  },
  {
    id: "cbc_wbc",
    canonicalName: "Лейкоциты",
    shortName: "WBC",
    category: "ОАК",
    resultType: "numeric",
    units: ["×10^9/л", "10^9/L"],
    aliases: [
      "лейкоциты",
      "wbc",
      "white blood cells",
      "лейкоциты крови",
      "белые кровяные клетки"
    ],
    references: [
      { sex: "any", ageMin: 18, ageMax: 120, min: 4.0, max: 9.0, unit: "×10^9/л" }
    ]
  },
  {
    id: "cbc_neutrophils_percent",
    canonicalName: "Нейтрофилы, %",
    shortName: "NEUT%",
    category: "ОАК",
    resultType: "numeric",
    units: ["%"],
    aliases: [
      "нейтрофилы",
      "neut",
      "neut%",
      "neutrophils",
      "нейтрофилы %",
      "сегментоядерные",
      "палочкоядерные"
    ],
    references: [
      { sex: "any", ageMin: 18, ageMax: 120, min: 40, max: 75, unit: "%" }
    ]
  },
  {
    id: "cbc_neutrophils_abs",
    canonicalName: "Нейтрофилы, абсолютное количество",
    shortName: "NEUT#",
    category: "ОАК",
    resultType: "numeric",
    units: ["×10^9/л", "10^9/L"],
    aliases: [
      "нейтрофилы abs",
      "нейтрофилы абсолютные",
      "neut#",
      "anc",
      "absolute neutrophil count",
      "абсолютное число нейтрофилов"
    ],
    references: [
      { sex: "any", ageMin: 18, ageMax: 120, min: 1.8, max: 7.5, unit: "×10^9/л" }
    ]
  },
  {
    id: "cbc_lymphocytes_percent",
    canonicalName: "Лимфоциты, %",
    shortName: "LYMPH%",
    category: "ОАК",
    resultType: "numeric",
    units: ["%"],
    aliases: [
      "лимфоциты",
      "lymph",
      "lym",
      "lymph%",
      "лимфоциты %",
      "lymphocytes"
    ],
    references: [
      { sex: "any", ageMin: 18, ageMax: 120, min: 20, max: 45, unit: "%" }
    ]
  },
  {
    id: "cbc_lymphocytes_abs",
    canonicalName: "Лимфоциты, абсолютное количество",
    shortName: "LYMPH#",
    category: "ОАК",
    resultType: "numeric",
    units: ["×10^9/л", "10^9/L"],
    aliases: [
      "лимфоциты abs",
      "лимфоциты абсолютные",
      "lymph#",
      "lym#",
      "absolute lymphocyte count"
    ],
    references: [
      { sex: "any", ageMin: 18, ageMax: 120, min: 1.0, max: 4.0, unit: "×10^9/л" }
    ]
  },
  {
    id: "cbc_monocytes_percent",
    canonicalName: "Моноциты, %",
    shortName: "MONO%",
    category: "ОАК",
    resultType: "numeric",
    units: ["%"],
    aliases: [
      "моноциты",
      "mono",
      "mon%",
      "моноциты %",
      "monocytes"
    ],
    references: [
      { sex: "any", ageMin: 18, ageMax: 120, min: 2, max: 10, unit: "%" }
    ]
  },
  {
    id: "cbc_eosinophils_percent",
    canonicalName: "Эозинофилы, %",
    shortName: "EO%",
    category: "ОАК",
    resultType: "numeric",
    units: ["%"],
    aliases: [
      "эозинофилы",
      "eosinophils",
      "eo",
      "eos",
      "эозинофилы %",
      "eo%"
    ],
    references: [
      { sex: "any", ageMin: 18, ageMax: 120, min: 0, max: 5, unit: "%" }
    ]
  },
  {
    id: "cbc_basophils_percent",
    canonicalName: "Базофилы, %",
    shortName: "BASO%",
    category: "ОАК",
    resultType: "numeric",
    units: ["%"],
    aliases: [
      "базофилы",
      "baso",
      "bas",
      "basophils",
      "базофилы %",
      "baso%"
    ],
    references: [
      { sex: "any", ageMin: 18, ageMax: 120, min: 0, max: 1, unit: "%" }
    ]
  },
  {
    id: "cbc_esr",
    canonicalName: "СОЭ",
    shortName: "ESR",
    category: "ОАК",
    resultType: "numeric",
    units: ["мм/ч", "mm/h"],
    aliases: [
      "соэ",
      "скорость оседания эритроцитов",
      "esr",
      "erythrocyte sedimentation rate",
      "роэ"
    ],
    references: [
      { sex: "male", ageMin: 18, ageMax: 50, min: 0, max: 15, unit: "мм/ч" },
      { sex: "female", ageMin: 18, ageMax: 50, min: 0, max: 20, unit: "мм/ч" }
    ]
  },
  // ========================= Биохимия =========================
  {
    id: "biochem_glucose_fasting",
    canonicalName: "Глюкоза натощак",
    shortName: "GLU",
    category: "Биохимия",
    resultType: "numeric",
    units: ["ммоль/л", "mg/dL"],
    aliases: [
      "глюкоза",
      "глюкоза крови",
      "сахар",
      "сахар крови",
      "glu",
      "glucose",
      "fasting glucose",
      "глюкоза натощак"
    ],
    references: [
      { sex: "any", ageMin: 18, ageMax: 120, min: 3.9, max: 5.5, unit: "ммоль/л" }
    ]
  },
  {
    id: "biochem_hba1c",
    canonicalName: "Гликированный гемоглобин",
    shortName: "HbA1c",
    category: "Углеводный обмен",
    resultType: "numeric",
    units: ["%", "ммоль/моль"],
    aliases: [
      "гликированный гемоглобин",
      "гликозилированный гемоглобин",
      "hba1c",
      "hb a1c",
      "a1c",
      "glycated hemoglobin",
      "glycosylated hemoglobin"
    ],
    references: [
      { sex: "any", ageMin: 18, ageMax: 120, min: 4.0, max: 5.6, unit: "%" }
    ],
    interpretationBands: [
      { label: "норма", max: 5.6, unit: "%" },
      { label: "предиабетический диапазон", min: 5.7, max: 6.4, unit: "%" },
      { label: "диабетический диапазон", min: 6.5, unit: "%" }
    ]
  },
  {
    id: "biochem_total_cholesterol",
    canonicalName: "Холестерин общий",
    shortName: "TC",
    category: "Липидограмма",
    resultType: "numeric",
    units: ["ммоль/л", "mg/dL"],
    aliases: [
      "общий холестерин",
      "холестерин общий",
      "холестерин",
      "total cholesterol",
      "cholesterol total",
      "tc",
      "chol"
    ],
    references: [
      { sex: "any", ageMin: 18, ageMax: 120, min: 0, max: 5.2, unit: "ммоль/л" }
    ]
  },
  {
    id: "biochem_ldl",
    canonicalName: "Холестерин ЛПНП",
    shortName: "LDL-C",
    category: "Липидограмма",
    resultType: "numeric",
    units: ["ммоль/л", "mg/dL"],
    aliases: [
      "лпнп",
      "холестерин лпнп",
      "липопротеины низкой плотности",
      "ldl",
      "ldl-c",
      "low density lipoprotein cholesterol",
      "хс лпнп"
    ],
    references: [
      { sex: "any", ageMin: 18, ageMax: 120, min: 0, max: 3.0, unit: "ммоль/л" }
    ]
  },
  {
    id: "biochem_hdl",
    canonicalName: "Холестерин ЛПВП",
    shortName: "HDL-C",
    category: "Липидограмма",
    resultType: "numeric",
    units: ["ммоль/л", "mg/dL"],
    aliases: [
      "лпвп",
      "холестерин лпвп",
      "липопротеины высокой плотности",
      "hdl",
      "hdl-c",
      "high density lipoprotein cholesterol",
      "хс лпвп"
    ],
    references: [
      { sex: "male", ageMin: 18, ageMax: 120, min: 1.0, max: null, unit: "ммоль/л" },
      { sex: "female", ageMin: 18, ageMax: 120, min: 1.2, max: null, unit: "ммоль/л" }
    ]
  },
  {
    id: "biochem_triglycerides",
    canonicalName: "Триглицериды",
    shortName: "TG",
    category: "Липидограмма",
    resultType: "numeric",
    units: ["ммоль/л", "mg/dL"],
    aliases: [
      "триглицериды",
      "тг",
      "tg",
      "triglycerides",
      "trig"
    ],
    references: [
      { sex: "any", ageMin: 18, ageMax: 120, min: 0, max: 1.7, unit: "ммоль/л" }
    ]
  },
  {
    id: "biochem_alt",
    canonicalName: "Аланинаминотрансфераза",
    shortName: "АЛТ",
    category: "Печёночные ферменты",
    resultType: "numeric",
    units: ["Ед/л", "U/L"],
    aliases: [
      "алт",
      "аланинаминотрансфераза",
      "аланин аминотрансфераза",
      "alt",
      "alat",
      "sgpt"
    ],
    references: [
      { sex: "male", ageMin: 18, ageMax: 120, min: 0, max: 41, unit: "Ед/л" },
      { sex: "female", ageMin: 18, ageMax: 120, min: 0, max: 33, unit: "Ед/л" }
    ]
  },
  {
    id: "biochem_ast",
    canonicalName: "Аспартатаминотрансфераза",
    shortName: "АСТ",
    category: "Печёночные ферменты",
    resultType: "numeric",
    units: ["Ед/л", "U/L"],
    aliases: [
      "аст",
      "аспартатаминотрансфераза",
      "аспартат аминотрансфераза",
      "ast",
      "asat",
      "sgot"
    ],
    references: [
      { sex: "male", ageMin: 18, ageMax: 120, min: 0, max: 40, unit: "Ед/л" },
      { sex: "female", ageMin: 18, ageMax: 120, min: 0, max: 32, unit: "Ед/л" }
    ]
  },
  {
    id: "biochem_ggt",
    canonicalName: "Гамма-глутамилтрансфераза",
    shortName: "ГГТ",
    category: "Печёночные ферменты",
    resultType: "numeric",
    units: ["Ед/л", "U/L"],
    aliases: [
      "ггт",
      "гамма-гт",
      "гамма гт",
      "гамма-глутамилтрансфераза",
      "ggt",
      "ggtp",
      "gamma gt",
      "gamma-glutamyl transferase"
    ],
    references: [
      { sex: "male", ageMin: 18, ageMax: 120, min: 0, max: 60, unit: "Ед/л" },
      { sex: "female", ageMin: 18, ageMax: 120, min: 0, max: 40, unit: "Ед/л" }
    ]
  },
  {
    id: "biochem_alp",
    canonicalName: "Щелочная фосфатаза",
    shortName: "ЩФ",
    category: "Печёночные ферменты",
    resultType: "numeric",
    units: ["Ед/л", "U/L"],
    aliases: [
      "щелочная фосфатаза",
      "щф",
      "alp",
      "alkaline phosphatase",
      "alk phos"
    ],
    references: [
      { sex: "any", ageMin: 18, ageMax: 120, min: 40, max: 150, unit: "Ед/л" }
    ]
  },
  {
    id: "biochem_total_bilirubin",
    canonicalName: "Билирубин общий",
    shortName: "TBIL",
    category: "Билирубин",
    resultType: "numeric",
    units: ["мкмоль/л", "µmol/L", "mg/dL"],
    aliases: [
      "билирубин общий",
      "общий билирубин",
      "tbil",
      "total bilirubin",
      "bilirubin total"
    ],
    references: [
      { sex: "any", ageMin: 18, ageMax: 120, min: 3.4, max: 20.5, unit: "мкмоль/л" }
    ]
  },
  {
    id: "biochem_direct_bilirubin",
    canonicalName: "Билирубин прямой",
    shortName: "DBIL",
    category: "Билирубин",
    resultType: "numeric",
    units: ["мкмоль/л", "µmol/L", "mg/dL"],
    aliases: [
      "билирубин прямой",
      "прямой билирубин",
      "билирубин конъюгированный",
      "конъюгированный билирубин",
      "dbil",
      "direct bilirubin",
      "conjugated bilirubin"
    ],
    references: [
      { sex: "any", ageMin: 18, ageMax: 120, min: 0, max: 5.1, unit: "мкмоль/л" }
    ]
  },
  {
    id: "biochem_creatinine",
    canonicalName: "Креатинин",
    shortName: "CREA",
    category: "Почки",
    resultType: "numeric",
    units: ["мкмоль/л", "µmol/L", "mg/dL"],
    aliases: [
      "креатинин",
      "crea",
      "creatinine",
      "креатинин крови",
      "сывороточный креатинин"
    ],
    references: [
      { sex: "male", ageMin: 18, ageMax: 120, min: 62, max: 106, unit: "мкмоль/л" },
      { sex: "female", ageMin: 18, ageMax: 120, min: 44, max: 80, unit: "мкмоль/л" }
    ]
  },
  {
    id: "biochem_urea",
    canonicalName: "Мочевина",
    shortName: "UREA",
    category: "Почки",
    resultType: "numeric",
    units: ["ммоль/л", "mg/dL"],
    aliases: [
      "мочевина",
      "urea",
      "blood urea",
      "азот мочевины",
      "bun",
      "blood urea nitrogen"
    ],
    references: [
      { sex: "any", ageMin: 18, ageMax: 120, min: 2.5, max: 8.3, unit: "ммоль/л" }
    ]
  },
  // ========================= Электролиты =========================
  {
    id: "electrolytes_potassium",
    canonicalName: "Калий",
    shortName: "K",
    category: "Электролиты",
    resultType: "numeric",
    units: ["ммоль/л", "mEq/L"],
    aliases: [
      "калий",
      "k",
      "k+",
      "potassium",
      "калий крови"
    ],
    references: [
      { sex: "any", ageMin: 18, ageMax: 120, min: 3.5, max: 5.1, unit: "ммоль/л" }
    ]
  },
  {
    id: "electrolytes_sodium",
    canonicalName: "Натрий",
    shortName: "Na",
    category: "Электролиты",
    resultType: "numeric",
    units: ["ммоль/л", "mEq/L"],
    aliases: [
      "натрий",
      "na",
      "na+",
      "sodium",
      "натрий крови"
    ],
    references: [
      { sex: "any", ageMin: 18, ageMax: 120, min: 136, max: 145, unit: "ммоль/л" }
    ]
  },
  {
    id: "electrolytes_chloride",
    canonicalName: "Хлор",
    shortName: "Cl",
    category: "Электролиты",
    resultType: "numeric",
    units: ["ммоль/л", "mEq/L"],
    aliases: [
      "хлор",
      "хлориды",
      "cl",
      "cl-",
      "chloride",
      "chlorides"
    ],
    references: [
      { sex: "any", ageMin: 18, ageMax: 120, min: 98, max: 107, unit: "ммоль/л" }
    ]
  },
  // ========================= Железо =========================
  {
    id: "iron_ferritin",
    canonicalName: "Ферритин",
    shortName: "Ferritin",
    category: "Обмен железа",
    resultType: "numeric",
    units: ["нг/мл", "µg/L", "мкг/л"],
    aliases: [
      "ферритин",
      "ferritin",
      "сывороточный ферритин"
    ],
    references: [
      { sex: "male", ageMin: 18, ageMax: 120, min: 30, max: 400, unit: "нг/мл" },
      { sex: "female", ageMin: 18, ageMax: 120, min: 15, max: 150, unit: "нг/мл" }
    ]
  },
  {
    id: "iron_serum_iron",
    canonicalName: "Железо сывороточное",
    shortName: "Fe",
    category: "Обмен железа",
    resultType: "numeric",
    units: ["мкмоль/л", "µmol/L"],
    aliases: [
      "железо",
      "железо сывороточное",
      "сывороточное железо",
      "fe",
      "serum iron",
      "iron"
    ],
    references: [
      { sex: "male", ageMin: 18, ageMax: 120, min: 11.6, max: 31.3, unit: "мкмоль/л" },
      { sex: "female", ageMin: 18, ageMax: 120, min: 9.0, max: 30.4, unit: "мкмоль/л" }
    ]
  },
  // ========================= Щитовидная железа =========================
  {
    id: "thyroid_tsh",
    canonicalName: "Тиреотропный гормон",
    shortName: "ТТГ",
    category: "Щитовидная железа",
    resultType: "numeric",
    units: ["мМЕ/л", "mIU/L", "мкМЕ/мл"],
    aliases: [
      "ттг",
      "тиреотропный гормон",
      "thyroid stimulating hormone",
      "tsh",
      "thyrotropin"
    ],
    references: [
      { sex: "any", ageMin: 18, ageMax: 120, min: 0.4, max: 4.0, unit: "мМЕ/л" }
    ]
  },
  {
    id: "thyroid_ft4",
    canonicalName: "Тироксин свободный",
    shortName: "св. Т4",
    category: "Щитовидная железа",
    resultType: "numeric",
    units: ["пмоль/л", "ng/dL"],
    aliases: [
      "свободный т4",
      "т4 свободный",
      "св т4",
      "ft4",
      "free t4",
      "free thyroxine",
      "тироксин свободный"
    ],
    references: [
      { sex: "any", ageMin: 18, ageMax: 120, min: 10, max: 22, unit: "пмоль/л" }
    ]
  },
  // ========================= Витамины =========================
  {
    id: "vitamin_d_25oh",
    canonicalName: "25-гидроксивитамин D",
    shortName: "25(OH)D",
    category: "Витамины",
    resultType: "numeric",
    units: ["нг/мл", "нмоль/л"],
    aliases: [
      "витамин d",
      "витамин д",
      "25-oh витамин d",
      "25 oh витамин d",
      "25(oh)d",
      "25-гидроксивитамин d",
      "25 hydroxy vitamin d",
      "25-hydroxyvitamin d",
      "calcidiol",
      "кальцидиол"
    ],
    interpretationBands: [
      { label: "дефицит", max: 20, unit: "нг/мл" },
      { label: "недостаточность", min: 20, max: 29, unit: "нг/мл" },
      { label: "достаточный уровень", min: 30, max: 100, unit: "нг/мл" },
      { label: "возможная токсичность", min: 100, unit: "нг/мл" }
    ],
    references: [
      { sex: "any", ageMin: 18, ageMax: 120, min: 30, max: 100, unit: "нг/мл" }
    ]
  },
  {
    id: "vitamin_b12",
    canonicalName: "Витамин B12",
    shortName: "B12",
    category: "Витамины",
    resultType: "numeric",
    units: ["пг/мл", "пмоль/л"],
    aliases: [
      "витамин b12",
      "витамин в12",
      "b12",
      "cyanocobalamin",
      "цианокобаламин",
      "кобаламин",
      "cobalamin"
    ],
    references: [
      { sex: "any", ageMin: 18, ageMax: 120, min: 200, max: 900, unit: "пг/мл" }
    ]
  },
  {
    id: "vitamin_folate",
    canonicalName: "Фолиевая кислота",
    shortName: "Folate",
    category: "Витамины",
    resultType: "numeric",
    units: ["нг/мл", "нмоль/л"],
    aliases: [
      "фолиевая кислота",
      "фолат",
      "фолаты",
      "folate",
      "folic acid",
      "витамин b9",
      "витамин в9"
    ],
    references: [
      { sex: "any", ageMin: 18, ageMax: 120, min: 3, max: 17, unit: "нг/мл" }
    ]
  },
  // ========================= Коагулограмма =========================
  {
    id: "coag_inr",
    canonicalName: "Международное нормализованное отношение",
    shortName: "МНО",
    category: "Коагулограмма",
    resultType: "numeric",
    units: [""],
    aliases: [
      "мно",
      "inr",
      "international normalized ratio",
      "международное нормализованное отношение"
    ],
    references: [
      { sex: "any", ageMin: 18, ageMax: 120, min: 0.8, max: 1.2, unit: "" }
    ]
  },
  {
    id: "coag_d_dimer",
    canonicalName: "D-димер",
    shortName: "D-dimer",
    category: "Коагулограмма",
    resultType: "numeric",
    units: ["мкг/мл FEU", "нг/мл FEU", "мг/л FEU"],
    aliases: [
      "д-димер",
      "d-димер",
      "d dimer",
      "d-dimer",
      "ddimer",
      "димер"
    ],
    references: [
      { sex: "any", ageMin: 18, ageMax: 50, min: 0, max: 0.5, unit: "мкг/мл FEU" }
    ]
  },
  // ========================= Онкомаркеры =========================
  {
    id: "tumor_psa_total",
    canonicalName: "ПСА общий",
    shortName: "tPSA",
    category: "Онкомаркеры",
    resultType: "numeric",
    units: ["нг/мл"],
    aliases: [
      "пса общий",
      "общий пса",
      "psa total",
      "total psa",
      "tpsa",
      "простатспецифический антиген общий",
      "простатический специфический антиген"
    ],
    references: [
      { sex: "male", ageMin: 18, ageMax: 120, min: 0, max: 4.0, unit: "нг/мл" }
    ]
  },
  // ========================= Моча =========================
  {
    id: "urine_specific_gravity",
    canonicalName: "Удельный вес мочи",
    shortName: "SG",
    category: "Общий анализ мочи",
    resultType: "numeric",
    units: [""],
    aliases: [
      "удельный вес",
      "относительная плотность мочи",
      "specific gravity",
      "sg",
      "плотность мочи"
    ],
    references: [
      { sex: "any", ageMin: 18, ageMax: 120, min: 1.010, max: 1.025, unit: "" }
    ]
  },
  {
    id: "urine_ph",
    canonicalName: "pH мочи",
    shortName: "pH",
    category: "Общий анализ мочи",
    resultType: "numeric",
    units: [""],
    aliases: [
      "ph мочи",
      "pH мочи",
      "реакция мочи",
      "кислотность мочи",
      "urine ph"
    ],
    references: [
      { sex: "any", ageMin: 18, ageMax: 120, min: 5.0, max: 7.5, unit: "" }
    ]
  },
  // ========================= Кал =========================
  {
    id: "stool_calprotectin",
    canonicalName: "Кальпротектин в кале",
    shortName: "Calprotectin",
    category: "Кал",
    resultType: "numeric",
    units: ["мкг/г"],
    aliases: [
      "кальпротектин",
      "фекальный кальпротектин",
      "кальпротектин в кале",
      "fecal calprotectin",
      "faecal calprotectin"
    ],
    references: [
      { sex: "any", ageMin: 18, ageMax: 120, min: 0, max: 50, unit: "мкг/г" }
    ]
  }
];

// Диагностические правила
const diagnosticRules = [
    { id: 1, name: "Железодефицитная анемия", danger: "medium", doctors: ["Терапевт", "Гематолог"], results: { "Ферритин": "low", "Железо сывороточное": "low" } },
    { id: 2, name: "Анемия", danger: "medium", doctors: ["Терапевт", "Гематолог"], results: { "Гемоглобин": "low" } },
    { id: 3, name: "Гипотиреоз", danger: "medium", doctors: ["Эндокринолог"], results: { "Тиреотропный гормон": "high", "Тироксин свободный": "low" } },
    { id: 4, name: "Гипертиреоз", danger: "high", doctors: ["Эндокринолог"], results: { "Тиреотропный гормон": "low", "Тироксин свободный": "high" } },
    { id: 5, name: "Сахарный диабет", danger: "high", doctors: ["Эндокринолог"], results: { "Глюкоза натощак": "high", "Гликированный гемоглобин": "high" } },
    { id: 6, name: "Дефицит витамина D", danger: "low", doctors: ["Терапевт"], results: { "25-гидроксивитамин D": "low" } },
    { id: 7, name: "Воспаление", danger: "medium", doctors: ["Терапевт"], results: { "Лейкоциты": "high" } },
    { id: 8, name: "Тромбоцитопения", danger: "high", doctors: ["Гематолог"], results: { "Тромбоциты": "low" } },
];

const supplementMap = {
    "25-гидроксивитамин D": {
        low: {
            supplement: "Витамин D3 2000–4000 МЕ/сут",
            doctors: ["Терапевт"],
            duration: "2–3 месяца, затем контроль анализа",
            danger: "low",
            note: "Поддерживает иммунитет и кости.",
            description: "Витамин D помогает усваивать кальций, нужен для костей и иммунитета.",
            dangerDesc: "Низкий уровень повышает риск остеопороза, частых инфекций, мышечной слабости."
        }
    },
    "Витамин B12": {
        low: {
            supplement: "Витамин B12 1000–2000 мкг/сут",
            doctors: ["Терапевт", "Невролог"],
            duration: "1–2 месяца, далее по результатам",
            danger: "low",
            note: "Необходим для нервной системы и кроветворения.",
            description: "Участвует в образовании эритроцитов и работе нервов.",
            dangerDesc: "Дефицит вызывает анемию, онемение, покалывание, проблемы с памятью."
        }
    },
    "Фолиевая кислота": {
        low: {
            supplement: "Фолиевая кислота 400–800 мкг/сут",
            doctors: ["Терапевт"],
            duration: "1–2 месяца",
            danger: "low",
            note: "Важна для кроветворения.",
            description: "Необходима для деления клеток и синтеза ДНК.",
            dangerDesc: "Недостаток приводит к анемии, утомляемости, особенно опасен при беременности."
        }
    },
    "Ферритин": {
        low: {
            supplement: "Препараты железа (после консультации врача)",
            doctors: ["Терапевт", "Гематолог"],
            duration: "1–2 месяца под контролем анализов",
            danger: "medium",
            note: "Скрытый железодефицит.",
            description: "Ферритин показывает запасы железа в организме.",
            dangerDesc: "Низкий ферритин ведёт к железодефицитной анемии, слабости, выпадению волос."
        }
    },
    "Железо сывороточное": {
        low: {
            supplement: "Препараты железа",
            doctors: ["Терапевт", "Гематолог"],
            duration: "1–2 месяца",
            danger: "medium",
            note: "Может потребоваться дополнительная диагностика.",
            description: "Транспортная форма железа в крови.",
            dangerDesc: "Снижение говорит о железодефиците, вызывает бледность, одышку, утомляемость."
        }
    },
    "Гемоглобин": {
        low: {
            supplement: "Препараты железа + витамин C",
            doctors: ["Терапевт"],
            duration: "1–3 месяца",
            danger: "medium",
            note: "Анемия.",
            description: "Белок, переносящий кислород в крови.",
            dangerDesc: "Низкий гемоглобин — анемия, риск гипоксии органов, слабость, головокружение."
        }
    },
    "Глюкоза натощак": {
        high: {
            supplement: "Контроль углеводов, консультация эндокринолога",
            doctors: ["Эндокринолог", "Терапевт"],
            duration: "постоянный контроль",
            danger: "high",
            note: "Риск сахарного диабета.",
            description: "Основной источник энергии, регулируется инсулином.",
            dangerDesc: "Повышенная глюкоза повреждает сосуды, нервы, почки, зрение. Ведёт к диабету."
        }
    },
    "Тиреотропный гормон": {
        high: {
            supplement: "Левотироксин (тироксин) по назначению врача",
            doctors: ["Эндокринолог"],
            duration: "длительно, под контролем ТТГ",
            danger: "medium",
            note: "Гипотиреоз.",
            description: "ТТГ стимулирует щитовидную железу. Высокий ТТГ — признак её недостаточности.",
            dangerDesc: "Замедляет обмен веществ, вызывает утомляемость, отёки, набор веса, сухость кожи."
        },
        low: {
            supplement: "Обследование щитовидной железы (УЗИ, сцинтиграфия)",
            doctors: ["Эндокринолог"],
            duration: "до выяснения причины",
            danger: "high",
            note: "Гипертиреоз опасен для сердца.",
            description: "Низкий ТТГ означает избыток гормонов щитовидной железы.",
            dangerDesc: "Ускоряет сердцебиение, вызывает тревожность, потерю веса, может привести к аритмии."
        }
    },
    "Аланинаминотрансфераза": {
        high: {
            supplement: "Гепатопротекторы (по назначению врача)",
            doctors: ["Гастроэнтеролог", "Гепатолог"],
            duration: "до нормализации ферментов",
            danger: "high",
            note: "Повреждение печени.",
            description: "Фермент печени, повышается при повреждении гепатоцитов.",
            dangerDesc: "Высокий уровень указывает на гепатит, жировую болезнь или токсическое поражение печени."
        }
    },
    "Аспартатаминотрансфераза": {
        high: {
            supplement: "Гепатопротекторы (по назначению врача)",
            doctors: ["Гастроэнтеролог", "Кардиолог"],
            duration: "до нормализации ферментов",
            danger: "high",
            note: "Повреждение печени или сердца.",
            description: "Фермент, содержащийся в печени, сердце, мышцах.",
            dangerDesc: "Повышение возможно при инфаркте, миокардите, болезнях печени."
        }
    },
    "Креатинин": {
        high: {
            supplement: "Консультация нефролога, контроль давления и диета",
            doctors: ["Нефролог", "Терапевт"],
            duration: "постоянный мониторинг",
            danger: "high",
            note: "Снижение функции почек.",
            description: "Продукт распада мышечной ткани, выводится почками.",
            dangerDesc: "Рост креатинина говорит о почечной недостаточности, накоплении токсинов."
        }
    },
    "Лейкоциты": {
        high: {
            supplement: "Противовоспалительная терапия (по назначению врача)",
            doctors: ["Терапевт"],
            duration: "до нормализации",
            danger: "medium",
            note: "Воспалительный процесс.",
            description: "Белые кровяные клетки, защищают организм от инфекций.",
            dangerDesc: "Повышение указывает на бактериальную инфекцию, воспаление, реже — лейкоз."
        },
        low: {
            supplement: "Иммуностимуляторы, консультация гематолога",
            doctors: ["Гематолог", "Терапевт"],
            duration: "до выяснения причины",
            danger: "high",
            note: "Снижение лейкоцитов (лейкопения).",
            description: "Пониженный уровень лейкоцитов ослабляет иммунную защиту.",
            dangerDesc: "Повышен риск тяжёлых инфекций, может быть следствием вирусных заболеваний или патологии костного мозга."
        }
    },
    "Тромбоциты": {
        low: {
            supplement: "Консультация гематолога, лечение основного заболевания",
            doctors: ["Гематолог"],
            duration: "срочно",
            danger: "high",
            note: "Риск кровотечений.",
            description: "Клетки, отвечающие за свёртываемость крови.",
            dangerDesc: "Тромбоцитопения приводит к синякам, длительным кровотечениям, опасным при травмах."
        }
    },
    "D-димер": {
        high: {
            supplement: "Срочное обследование на тромбоз (УЗИ вен, КТ)",
            doctors: ["Терапевт", "Кардиолог"],
            duration: "немедленно",
            danger: "high",
            note: "Опасность тромбоза.",
            description: "Продукт распада фибрина, показатель свёртывания.",
            dangerDesc: "Высокий D-димер — подозрение на тромбоз глубоких вен или тромбоэмболию лёгочной артерии."
        }
    },
    "ПСА общий": {
        high: {
            supplement: "Консультация уролога, повторный анализ, возможно биопсия",
            doctors: ["Уролог"],
            duration: "повтор анализа через 1–3 мес.",
            danger: "high",
            note: "Онкомаркер простаты.",
            description: "Простатспецифический антиген, вырабатывается предстательной железой.",
            dangerDesc: "Повышение может указывать на рак простаты, аденому или воспаление."
        }
    },
    "Эритроциты": {
        low: {
            supplement: "Препараты железа, витамин B12, фолиевая кислота — после диагностики",
            doctors: ["Терапевт", "Гематолог"],
            duration: "1–3 месяца",
            danger: "medium",
            description: "Красные кровяные клетки, переносят кислород.",
            dangerDesc: "Снижение (анемия) вызывает слабость, бледность, одышку."
        }
    },
    "Гематокрит": {
        low: {
            supplement: "Лечение анемии, коррекция питания",
            doctors: ["Терапевт"],
            duration: "1–3 месяца",
            danger: "medium",
            description: "Доля эритроцитов в объёме крови.",
            dangerDesc: "Снижение — анемия, повышение — сгущение крови (риск тромбозов)."
        }
    },
    "Средний объём эритроцита (MCV)": {
        low: {
            supplement: "Витамин B12, фолиевая кислота, железо — по результатам диагностики",
            doctors: ["Терапевт"],
            duration: "1–2 месяца",
            danger: "low",
            description: "Показывает размер эритроцитов.",
            dangerDesc: "Низкий MCV — микроцитарная анемия (дефицит железа), высокий — макроцитарная (B12/фолат)."
        }
    },
    "Ширина распределения эритроцитов (RDW-CV)": {
        high: {
            supplement: "Диагностика анемии, возможен приём железа, B12",
            doctors: ["Терапевт"],
            duration: "до нормализации",
            danger: "medium",
            description: "Показывает разброс размеров эритроцитов.",
            dangerDesc: "Повышение — признак смешанной анемии или нарушения кроветворения."
        }
    },
    "Нейтрофилы, %": {
        high: {
            supplement: "Противовоспалительное лечение, антибиотики (по назначению)",
            doctors: ["Терапевт"],
            duration: "до нормализации",
            danger: "medium",
            description: "Основные клетки защиты от бактерий.",
            dangerDesc: "Повышение — бактериальная инфекция, воспаление, стресс."
        }
    },
    "Лимфоциты, %": {
        high: {
            supplement: "Исключение вирусных инфекций, консультация гематолога",
            doctors: ["Терапевт"],
            duration: "до нормализации",
            danger: "medium",
            description: "Клетки иммунной системы (вирусы, опухоли).",
            dangerDesc: "Повышение — вирусная инфекция (грипп, гепатит), хронические заболевания."
        }
    },
    "Моноциты, %": {
        high: {
            supplement: "Исключение хронических инфекций",
            doctors: ["Терапевт"],
            duration: "до нормализации",
            danger: "low",
            description: "Макрофаги, борются с хроническими инфекциями.",
            dangerDesc: "Повышение — инфекционный мононуклеоз, туберкулёз, аутоиммунные болезни."
        }
    },
    "Эозинофилы, %": {
        high: {
            supplement: "Антигистаминные препараты, исключение паразитов",
            doctors: ["Аллерголог", "Терапевт"],
            duration: "до нормализации",
            danger: "low",
            description: "Участвуют в аллергических реакциях и борьбе с паразитами.",
            dangerDesc: "Повышение — аллергия, астма, глистная инвазия."
        }
    },
    "Базофилы, %": {
        high: {
            supplement: "Исключение аллергии, миелопролиферативных заболеваний",
            doctors: ["Гематолог"],
            duration: "до нормализации",
            danger: "medium",
            description: "Редкие клетки, содержат гистамин.",
            dangerDesc: "Повышение — аллергия, воспаление, иногда лейкоз."
        }
    },
    "СОЭ": {
        high: {
            supplement: "Лечение основного заболевания (воспаление, инфекция)",
            doctors: ["Терапевт"],
            duration: "до нормализации",
            danger: "medium",
            description: "Скорость оседания эритроцитов — неспецифический маркер воспаления.",
            dangerDesc: "Повышение — любое воспаление, аутоиммунные болезни, онкология."
        }
    },
    "Общий холестерин": {
        high: {
            supplement: "Диета, физическая активность, статины (по назначению)",
            doctors: ["Кардиолог", "Терапевт"],
            duration: "длительно",
            danger: "high",
            description: "Жироподобное вещество, необходимое для клеточных мембран.",
            dangerDesc: "Высокий уровень — атеросклероз, риск инфаркта и инсульта."
        }
    },
    "ЛПНП": {
        high: {
            supplement: "Диета, статины",
            doctors: ["Кардиолог"],
            duration: "длительно",
            danger: "high",
            description: "«Плохой» холестерин, откладывается в сосудах.",
            dangerDesc: "Главный фактор риска атеросклероза и сердечно-сосудистых катастроф."
        }
    },
    "ЛПВП": {
        low: {
            supplement: "Физическая нагрузка, омега-3, отказ от курения",
            doctors: ["Кардиолог"],
            duration: "3–6 месяцев",
            danger: "medium",
            description: "«Хороший» холестерин, удаляет излишки холестерина из сосудов.",
            dangerDesc: "Низкий уровень повышает риск атеросклероза."
        }
    },
    "Триглицериды": {
        high: {
            supplement: "Диета с низким содержанием сахара и жиров, омега-3",
            doctors: ["Кардиолог", "Терапевт"],
            duration: "3 месяца",
            danger: "high",
            description: "Основной тип жира в крови, источник энергии.",
            dangerDesc: "Повышение увеличивает риск панкреатита и сердечно-сосудистых болезней."
        }
    },
    "Мочевина": {
        high: {
            supplement: "Контроль белка в пище, консультация нефролога",
            doctors: ["Нефролог"],
            duration: "до нормализации",
            danger: "high",
            description: "Конечный продукт белкового обмена, выводится почками.",
            dangerDesc: "Рост указывает на почечную недостаточность или обезвоживание."
        }
    },
    "Калий": {
        high: {
            supplement: "Ограничение калийсодержащих продуктов, консультация врача",
            doctors: ["Терапевт", "Кардиолог"],
            duration: "срочно",
            danger: "high",
            description: "Электролит, важный для сердца и мышц.",
            dangerDesc: "Гиперкалиемия опасна остановкой сердца."
        },
        low: {
            supplement: "Продукты с калием (бананы, курага), препараты калия",
            doctors: ["Терапевт"],
            duration: "до нормализации",
            danger: "medium",
            description: "Недостаток калия вызывает слабость, аритмию.",
            dangerDesc: "Гипокалиемия нарушает сердечный ритм, вызывает мышечные судороги."
        }
    },
    "Натрий": {
        high: {
            supplement: "Ограничение соли, контроль водного баланса",
            doctors: ["Терапевт"],
            duration: "до нормализации",
            danger: "medium",
            description: "Электролит, регулирует водный баланс.",
            dangerDesc: "Гипернатриемия ведёт к отёкам, жажде, повышению давления."
        }
    },
    "Магний (Mg)": {
        low: {
            supplement: "Магний цитрат 300–400 мг/сут",
            doctors: ["Терапевт"],
            duration: "1–2 месяца",
            danger: "low",
            description: "Участвует в работе мышц и нервной системы.",
            dangerDesc: "Дефицит вызывает судороги, утомляемость, раздражительность."
        }
    },
    "Кальций общий": {
        low: {
            supplement: "Кальций 500–1000 мг/сут, витамин D",
            doctors: ["Терапевт"],
            duration: "1–3 месяца",
            danger: "low",
            description: "Основа костной ткани, участвует в сокращении мышц.",
            dangerDesc: "Гипокальциемия приводит к остеопорозу, судорогам."
        }
    }
};

const preventiveRecommendations = [
    { supplement: "Витамин D3 1000–2000 МЕ/сут", doctors: ["Терапевт"], duration: "1–2 месяца", note: "Профилактика дефицита." },
    { supplement: "Магний 200–300 мг/сут", doctors: ["Терапевт"], duration: "1 месяц", note: "От стресса и утомляемости." },
    { supplement: "Омега-3 1000–2000 мг/сут", doctors: ["Терапевт"], duration: "3 месяца", note: "Для сердца и сосудов." }
];

// ====== ФУНКЦИИ ======
function findTestByAlias(line) {
    const lowerLine = line.toLowerCase();
    for (const test of labTests) {
        for (const alias of test.aliases) {
            if (lowerLine.includes(alias.toLowerCase())) {
                return test;
            }
        }
    }
    return null;
}

function getReference(test, sex, age) {
    const refs = test.references;
    if (!refs || refs.length === 0) return null;
    let bestRef = refs.find(r => r.sex === sex && age >= r.ageMin && age <= r.ageMax);
    if (!bestRef) {
        bestRef = refs.find(r => r.sex === "any" && age >= r.ageMin && age <= r.ageMax);
    }
    if (!bestRef) {
        bestRef = refs[0];
    }
    return bestRef;
}

function extractNumericResult(line, test, patientSex, patientAge) {
    const numbersInLine = line.match(/([0-9]+[.,]?[0-9]*)/g);
    if (!numbersInLine) return null;

    let value = null;
    const rangeMatch = line.match(/([0-9]+[.,]?[0-9]*)\s*[–\-]\s*([0-9]+[.,]?[0-9]*)/);
    if (rangeMatch) {
        const val1 = parseFloat(rangeMatch[1].replace(',', '.'));
        const val2 = parseFloat(rangeMatch[2].replace(',', '.'));
        for (const numStr of numbersInLine) {
            const v = parseFloat(numStr.replace(',', '.'));
            if (v !== val1 && v !== val2 && v > 0 && v < 10000) {
                value = v;
                break;
            }
        }
    } else {
        for (const numStr of numbersInLine) {
            const v = parseFloat(numStr.replace(',', '.'));
            if (v > 0 && v < 10000) {
                value = v;
                break;
            }
        }
    }

    if (value === null) return null;

    const ref = getReference(test, patientSex || "any", patientAge || 30);
    if (!ref) return { value, unit: test.units[0], status: "unknown" };

    let status = "normal";
    if (ref.min !== null && value < ref.min) status = "low";
    if (ref.max !== null && value > ref.max) status = "high";
    return { value, unit: ref.unit || test.units[0], status };
}

// ====== ГЛОБАЛЬНЫЙ ЭКСПОРТ ======
window.labTests = labTests;
window.diagnosticRules = diagnosticRules;
window.supplementMap = supplementMap;
window.preventiveRecommendations = preventiveRecommendations;
window.findTestByAlias = findTestByAlias;
window.getReference = getReference;
window.extractNumericResult = extractNumericResult;

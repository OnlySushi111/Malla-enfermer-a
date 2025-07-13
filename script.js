// --- Estructura de la malla ---
const malla = [
  {
    semestre: "1° Semestre",
    asignaturas: [
      "Anatomía",
      "Introducción a ciencias básicas",
      "Bioquímica y biología celular",
      "Antropología filosófica del cuidado",
      "Psicología del Desarrollo",
      "Identidad personal"
    ]
  },
  {
    semestre: "2° Semestre",
    asignaturas: [
      "Microbiología",
      "Salud y Sociedad Contemporánea",
      "Prevención de Infecciones Asociadas a la Atención en Salud",
      "Fundamentos de Enfermería",
      "Introducción al pensamiento filosófico",
      "Inglés I",
      "Comunicación Efectiva",
      "Primeros Auxilios"
    ]
  },
  {
    semestre: "3° Semestre",
    asignaturas: [
      "Fisiología",
      "Ciclo vital",
      "Cuidados de Enfermería I",
      "Introducción a la Metodología de la Investigación Cuantitativa",
      "Educación para la Salud",
      "Apreciación de los Lenguajes Artísticos",
      "Inglés II"
    ]
  },
  {
    semestre: "4° Semestre",
    asignaturas: [
      "Farmacología Clínica para Enfermería",
      "Fisiopatología",
      "Cuidados de Enfermería II",
      "Estadística y Bioestadística",
      "Administración General y en Salud",
      "Inglés III"
    ]
  },
  {
    semestre: "5° Semestre",
    asignaturas: [
      "Enfermería Ambiental",
      "Cuidados de Enfermería del Adulto Médico Quirúrgico",
      "Cuidados de Enfermería en la Mujer y Recién Nacido",
      "Epidemiología y Salud Pública",
      "Informática para Enfermería I",
      "Ética General"
    ]
  },
  {
    semestre: "6° Semestre",
    asignaturas: [
      "Cuidados de Enfermería en Salud Mental",
      "Cuidados de Enfermería en la Persona Mayor",
      "Introducción a la metodología de la Investigación Cualitativa",
      "Informática para Enfermería II",
      "Persona y Trascendencia"
    ]
  },
  {
    semestre: "7° Semestre",
    asignaturas: [
      "Bioética",
      "Cuidados Paliativos Universales",
      "Cuidados de Enfermería en Salud Familiar y Comunitaria I",
      "Cuidados de Enfermería en el Niño y Adolescente",
      "Gestión de Calidad y Acreditación en salud",
      "Liderazgo en Salud"
    ]
  },
  {
    semestre: "8° Semestre",
    asignaturas: [
      "Cuidados de Enfermería en Situación de Urgencia",
      "Cuidados de Enfermería en Salud Familiar y Comunitaria II",
      "Enfermería Basada en Evidencia"
    ]
  },
  {
    semestre: "9° Semestre",
    asignaturas: ["Internado de Enfermería I"]
  },
  {
    semestre: "10° Semestre",
    asignaturas: ["Internado de Enfermería II"]
  }
];

// --- Botón para reiniciar malla ---
const reiniciarBtn = document.createElement("button");
reiniciarBtn.textContent = "Reiniciar malla";
reiniciarBtn.id = "reiniciarBtn";
reiniciarBtn.addEventListener("click", reiniciarMalla);
document.body.insertBefore(reiniciarBtn, document.body.firstChild);

// --- Prerrequisitos ---
const prerrequisitos = {
  "Fisiología": ["Anatomía", "Introducción a ciencias básicas", "Bioquímica y biología celular", "Microbiología"],
  "Ciclo vital": ["Anatomía", "Psicología del Desarrollo"],
  "Cuidados de Enfermería I": ["Anatomía", "Microbiología", "Prevención de Infecciones Asociadas a la Atención en Salud"],
  "Microbiología": ["Introducción a ciencias básicas", "Bioquímica y biología celular"],
  "Introducción a la Metodología de la Investigación Cuantitativa": ["Introducción a ciencias básicas"],
  "Educación para la Salud": ["Fundamentos de Enfermería", "Salud y Sociedad Contemporánea"],
  "Inglés II": ["Inglés I"],
  "Farmacología Clínica para Enfermería": ["Fisiología", "Microbiología"],
  "Fisiopatología": ["Fisiología", "Microbiología"],
  "Cuidados de Enfermería II": ["Fisiología", "Cuidados de Enfermería I"],
  "Estadística y Bioestadística": ["Introducción a la Metodología de la Investigación Cuantitativa"],
  "Administración General y en Salud": ["Introducción a ciencias básicas", "Fundamentos de Enfermería"],
  "Enfermería Ambiental": ["Educación para la Salud", "Salud y Sociedad Contemporánea", "Fundamentos de Enfermería"],
  "Cuidados de Enfermería del Adulto Médico Quirúrgico": ["Farmacología Clínica para Enfermería", "Fisiopatología", "Cuidados de Enfermería II"],
  "Cuidados de Enfermería en la Mujer y Recién Nacido": ["Farmacología Clínica para Enfermería", "Fisiopatología", "Cuidados de Enfermería II", "Ciclo vital"],
  "Epidemiología y Salud Pública": ["Estadística y Bioestadística", "Administración General y en Salud"],
  "Informática para Enfermería I": ["Administración General y en Salud"],
  "Introducción a la metodología de la Investigación Cualitativa": ["Enfermería Ambiental"],
  "Informática para Enfermería II": ["Informática para Enfermería I"],
  "Cuidados de Enfermería en Salud Mental": ["Cuidados de Enfermería del Adulto Médico Quirúrgico"],
  "Cuidados de Enfermería en la Persona Mayor": ["Cuidados de Enfermería del Adulto Médico Quirúrgico"],
  "Bioética": ["Cuidados de Enfermería en Salud Mental", "Cuidados de Enfermería en la Persona Mayor"],
  "Cuidados Paliativos Universales": ["Cuidados de Enfermería en Salud Mental", "Cuidados de Enfermería en la Persona Mayor"],
  "Cuidados de Enfermería en Salud Familiar y Comunitaria I": ["Cuidados de Enfermería en Salud Mental", "Cuidados de Enfermería en la Persona Mayor", "Epidemiología y Salud Pública"],
  "Cuidados de Enfermería en el Niño y Adolescente": ["Cuidados de Enfermería en la Mujer y Recién Nacido"],
  "Gestión de Calidad y Acreditación en salud": ["Epidemiología y Salud Pública", "Informática para Enfermería II"],
  "Cuidados de Enfermería en Situación de Urgencia": ["Cuidados de Enfermería en Salud Mental", "Cuidados de Enfermería en la Persona Mayor"],
  "Cuidados de Enfermería en Salud Familiar y Comunitaria II": ["Cuidados de Enfermería en Salud Familiar y Comunitaria I", "Cuidados Paliativos Universales", "Cuidados de Enfermería en el Niño y Adolescente"],
  "Enfermería Basada en Evidencia": ["Epidemiología y Salud Pública", "Introducción a la metodología de la Investigación Cualitativa"],
  "Internado de Enfermería I": ["Bioética", "Gestión de Calidad y Acreditación en salud", "Cuidados de Enfermería en Situación de Urgencia", "Cuidados de Enfermería en Salud Familiar y Comunitaria II", "Enfermería Basada en Evidencia"],
  "Internado de Enfermería II": ["Bioética", "Gestión de Calidad y Acreditación en salud", "Cuidados de Enfermería en Situación de Urgencia", "Cuidados de Enfermería en Salud Familiar y Comunitaria II", "Enfermería Basada en Evidencia"]
};

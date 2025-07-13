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

const prerrequisitos = {
  "Fisiología": ["Anatomía", "Introducción a ciencias básicas", "Bioquímica y biología celular", "Microbiología"],
  "Ciclo vital": ["Anatomía", "Psicología del Desarrollo"],
  "Cuidados de Enfermería I": ["Anatomía", "Microbiología", "Prevención de Infecciones Asociadas a la Atención en Salud"],
  "Farmacología Clínica para Enfermería": ["Fisiología", "Microbiología"],
  "Fisiopatología": ["Fisiología", "Microbiología"],
  "Cuidados de Enfermería II": ["Cuidados de Enfermería I", "Fisiología"],
  "Estadística y Bioestadística": ["Introducción a la Metodología de la Investigación Cuantitativa"],
  "Administración General y en Salud": ["Fundamentos de Enfermería", "Introducción a ciencias básicas"],
  "Inglés II": ["Inglés I"],
  "Inglés III": ["Inglés II"],
  "Educación para la Salud": ["Fundamentos de Enfermería", "Salud y Sociedad Contemporánea"],
  "Enfermería Ambiental": ["Educación para la Salud", "Salud y Sociedad Contemporánea", "Fundamentos de Enfermería"],
  "Cuidados de Enfermería en la Mujer y Recién Nacido": ["Ciclo vital", "Fisiopatología", "Cuidados de Enfermería II", "Farmacología Clínica para Enfermería"],
  "Cuidados de Enfermería del Adulto Médico Quirúrgico": ["Cuidados de Enfermería II", "Farmacología Clínica para Enfermería", "Fisiopatología"],
  "Cuidados de Enfermería en Salud Mental": ["Cuidados de Enfermería del Adulto Médico Quirúrgico"],
  "Cuidados de Enfermería en la Persona Mayor": ["Cuidados de Enfermería del Adulto Médico Quirúrgico"],
  "Informática para Enfermería II": ["Informática para Enfermería I"],
  "Introducción a la metodología de la Investigación Cualitativa": ["Enfermería Ambiental"],
  "Epidemiología y Salud Pública": ["Estadística y Bioestadística", "Administración General y en Salud"],
  "Bioética": ["Cuidados de Enfermería en Salud Mental", "Cuidados de Enfermería en la Persona Mayor"],
  "Cuidados Paliativos Universales": ["Cuidados de Enfermería en Salud Mental", "Cuidados de Enfermería en la Persona Mayor"],
  "Cuidados de Enfermería en Salud Familiar y Comunitaria I": ["Cuidados de Enfermería en Salud Mental", "Cuidados de Enfermería en la Persona Mayor", "Epidemiología y Salud Pública"],
  "Cuidados de Enfermería en el Niño y Adolescente": ["Cuidados de Enfermería en la Mujer y Recién Nacido"],
  "Gestión de Calidad y Acreditación en salud": ["Informática para Enfermería II", "Epidemiología y Salud Pública"],
  "Cuidados de Enfermería en Situación de Urgencia": ["Cuidados de Enfermería en Salud Mental", "Cuidados de Enfermería en la Persona Mayor"],
  "Cuidados de Enfermería en Salud Familiar y Comunitaria II": ["Cuidados de Enfermería en Salud Familiar y Comunitaria I", "Cuidados de Enfermería en el Niño y Adolescente", "Cuidados Paliativos Universales"],
  "Enfermería Basada en Evidencia": ["Introducción a la metodología de la Investigación Cualitativa", "Epidemiología y Salud Pública"],
  "Internado de Enfermería I": ["Bioética", "Cuidados de Enfermería en Salud Familiar y Comunitaria II", "Cuidados de Enfermería en Situación de Urgencia", "Gestión de Calidad y Acreditación en salud", "Enfermería Basada en Evidencia"],
  "Internado de Enfermería II": ["Bioética", "Cuidados de Enfermería en Salud Familiar y Comunitaria II", "Cuidados de Enfermería en Situación de Urgencia", "Gestión de Calidad y Acreditación en salud", "Enfermería Basada en Evidencia"]
};

const estadoAsignaturas = JSON.parse(localStorage.getItem("estadoAsignaturas")) || {};

function crearMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  malla.forEach(({ semestre, asignaturas }) => {
    const columna = document.createElement("div");
    columna.classList.add("semestre");

    const titulo = document.createElement("h2");
    titulo.textContent = semestre;
    columna.appendChild(titulo);

    asignaturas.forEach(nombre => {
      const asignatura = document.createElement("div");
      asignatura.textContent = nombre;
      asignatura.classList.add("asignatura");
      asignatura.dataset.nombre = nombre;
      asignatura.addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();
        toggleAsignatura(nombre);
      });

      if (estadoAsignaturas[nombre]) {
        asignatura.classList.add("activa");
      } else if (!puedeActivarse(nombre)) {
        asignatura.classList.add("bloqueada");
      }

      columna.appendChild(asignatura);
    });

    contenedor.appendChild(columna);
  });

  localStorage.setItem("estadoAsignaturas", JSON.stringify(estadoAsignaturas));
}

function puedeActivarse(nombre) {
  const reqs = prerrequisitos[nombre];
  if (!reqs) return true;
  return reqs.every(req => estadoAsignaturas[req]);
}

function toggleAsignatura(nombre) {
  if (estadoAsignaturas[nombre]) {
    desactivarAsignatura(nombre);
  } else if (puedeActivarse(nombre)) {
    estadoAsignaturas[nombre] = true;
  }
  crearMalla();
}

function desactivarAsignatura(nombre) {
  estadoAsignaturas[nombre] = false;
  for (let [asig, reqs] of Object.entries(prerrequisitos)) {
    if (reqs.includes(nombre)) {
      desactivarAsignatura(asig);
    }
  }
}

function reiniciarMalla() {
  for (let nombre in estadoAsignaturas) {
    estadoAsignaturas[nombre] = false;
  }
  crearMalla();
}

window.onload = crearMalla;

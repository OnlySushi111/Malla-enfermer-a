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
      "Prevención de Infecciones",
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
      "Ciclo Vital",
      "Cuidados de Enfermería I",
      "Metodología Cuantitativa",
      "Educación para la Salud",
      "Lenguajes Artísticos",
      "Inglés II"
    ]
  },
  {
    semestre: "4° Semestre",
    asignaturas: [
      "Farmacología Clínica",
      "Fisiopatología",
      "Cuidados de Enfermería II",
      "Estadística y Bioestadística",
      "Administración General",
      "Inglés III"
    ]
  },
  {
    semestre: "5° Semestre",
    asignaturas: [
      "Enfermería Ambiental",
      "Cuidados del Adulto Médico Quirúrgico",
      "Cuidados en la Mujer y RN",
      "Epidemiología y Salud Pública",
      "Informática para Enfermería I",
      "Ética General"
    ]
  },
  {
    semestre: "6° Semestre",
    asignaturas: [
      "Cuidados en Salud Mental",
      "Cuidados en la Persona Mayor",
      "Metodología Cualitativa",
      "Informática para Enfermería II",
      "Persona y Trascendencia"
    ]
  }
];

const prerrequisitos = {
  "Farmacología Clínica": ["Fisiología"],
  "Fisiopatología": ["Fisiología"],
  "Cuidados de Enfermería II": ["Cuidados de Enfermería I"],
  "Epidemiología y Salud Pública": ["Metodología Cuantitativa"],
  "Cuidados en la Mujer y RN": ["Cuidados de Enfermería II"],
  "Cuidados del Adulto Médico Quirúrgico": ["Cuidados de Enfermería II"],
  "Cuidados en Salud Mental": ["Cuidados de Enfermería II"],
  "Cuidados en la Persona Mayor": ["Cuidados de Enfermería II"],
  "Informática para Enfermería II": ["Informática para Enfermería I"],
};

const estadoAsignaturas = {};

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
      asignatura.onclick = () => toggleAsignatura(nombre);

      if (estadoAsignaturas[nombre]) {
        asignatura.classList.add("activa");
      } else if (!puedeActivarse(nombre)) {
        asignatura.classList.add("bloqueada");
      }

      columna.appendChild(asignatura);
    });

    contenedor.appendChild(columna);
  });
}

function puedeActivarse(nombre) {
  const reqs = prerrequisitos[nombre];
  if (!reqs) return true;
  return reqs.every(req => estadoAsignaturas[req]);
}

function toggleAsignatura(nombre) {
  if (estadoAsignaturas[nombre]) {
    // Desactivar y también desactivar las que dependan de esta
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

window.onload = () => {
  crearMalla();
};

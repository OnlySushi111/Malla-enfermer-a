const malla = {
  "1° Semestre": [
    "Anatomía",
    "Introducción a ciencias básicas",
    "Bioquímica y biología celular",
    "Antropología filosófica del cuidado",
    "Psicología del Desarrollo",
    "Identidad personal"
  ],
  "2° Semestre": [
    "Microbiología",
    "Salud y Sociedad Contemporánea",
    "Prevención de Infecciones Asociadas a la Atención en Salud",
    "Fundamentos de Enfermería",
    "Introducción al pensamiento filosófico",
    "Inglés I",
    "Comunicación Efectiva",
    "Primeros Auxilios"
  ],
  "3° Semestre": [
    "Fisiología",
    "Ciclo Vital",
    "Cuidados de Enfermería I",
    "Introducción a la Metodología de la Investigación Cuantitativa",
    "Educación para la Salud",
    "Apreciación de los Lenguajes Artísticos",
    "Inglés II"
  ],
  "4° Semestre": [
    "Farmacología Clínica para Enfermería",
    "Fisiopatología",
    "Cuidados de Enfermería II",
    "Estadística y Bioestadística",
    "Administración General y en Salud",
    "Inglés III"
  ],
  "5° Semestre": [
    "Enfermería Ambiental",
    "Cuidados de Enfermería del Adulto Médico Quirúrgico",
    "Cuidados de Enfermería en la Mujer y Recién Nacido",
    "Epidemiología y Salud Pública",
    "Informática para Enfermería I",
    "Ética General"
  ],
  "6° Semestre": [
    "Cuidados de Enfermería en Salud Mental",
    "Cuidados de Enfermería en la Persona Mayor",
    "Introducción a la metodología de la Investigación Cualitativa",
    "Informática para Enfermería II",
    "Persona y Trascendencia"
  ],
  "7° Semestre": [
    "Bioética",
    "Cuidados Paliativos Universales",
    "Cuidados de Enfermería en Salud Familiar y Comunitaria I",
    "Cuidados de Enfermería en el Niño y Adolescente",
    "Gestión de Calidad y Acreditación en salud",
    "Liderazgo en Salud"
  ],
  "8° Semestre": [
    "Cuidados de Enfermería en Situación de Urgencia",
    "Cuidados de Enfermería en Salud Familiar y Comunitaria II",
    "Enfermería Basada en Evidencia"
  ],
  "9° Semestre": [
    "Internado de Enfermería I"
  ],
  "10° Semestre": [
    "Internado de Enfermería II"
  ]
};

function crearMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  Object.entries(malla).forEach(([semestre, ramos], index) => {
    const columna = document.createElement("div");
    columna.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.textContent = semestre;
    columna.appendChild(titulo);

    ramos.forEach((ramo) => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.textContent = ramo;

      // Bloquear 2° semestre si 1° no está completo
      if (index === 1) {
        div.classList.add("bloqueado");
      }

      div.addEventListener("click", () => {
        if (!div.classList.contains("bloqueado")) {
          div.classList.toggle("completado");
          verificarDesbloqueo();
        }
      });

      columna.appendChild(div);
    });

    contenedor.appendChild(columna);
  });
}

function verificarDesbloqueo() {
  const primerSemestre = document.querySelectorAll(".semestre:nth-child(1) .ramo");
  const segundoSemestre = document.querySelectorAll(".semestre:nth-child(2) .ramo");

  const todosCompletados = [...primerSemestre].every((div) =>
    div.classList.contains("completado")
  );

  segundoSemestre.forEach((div) => {
    if (todosCompletados) {
      div.classList.remove("bloqueado");
    } else {
      div.classList.add("bloqueado");
      div.classList.remove("completado");
    }
  });
}

document.getElementById("reiniciar").addEventListener("click", () => {
  localStorage.clear();
  crearMalla();
});

crearMalla();

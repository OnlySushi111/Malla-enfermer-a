document.addEventListener("DOMContentLoaded", function () {
  const asignaturas = document.querySelectorAll(".asignatura");

  const dependencias = {
    "Anatomía": ["Fisiología", "Ciclo vital", "Cuidados de Enfermería I"],
    "Introducción a ciencias básicas": ["Fisiología", "Microbiología", "Introducción a la Metodología de la Investigación Cuantitativa", "Administración General y en Salud"],
    "Bioquímica y biología celular": ["Microbiología", "Fisiología"],
    "Antropología filosófica del cuidado": ["Salud y Sociedad Contemporánea", "Fundamentos de Enfermería"],
    "Psicología del Desarrollo": ["Ciclo vital"],
    "Microbiología": ["Fisiología", "Cuidados de Enfermería I", "Farmacología Clínica para Enfermería", "Fisiopatología"],
    "Salud y Sociedad Contemporánea": ["Educación para la Salud", "Enfermería Ambiental"],
    "Prevención de Infecciones Asociadas a la Atención en Salud": ["Cuidados de Enfermería I"],
    "Fundamentos de Enfermería": ["Educación para la Salud", "Administración General y en Salud", "Enfermería Ambiental"],
    "Inglés I": ["Inglés II"],
    "Fisiología": ["Farmacología Clínica para Enfermería", "Fisiopatología", "Cuidados de Enfermería II"],
    "Ciclo vital": ["Cuidados de Enfermería en la Mujer y Recién Nacido"],
    "Cuidados de Enfermería I": ["Cuidados de Enfermería II"],
    "Introducción a la Metodología de la Investigación Cuantitativa": ["Estadística y Bioestadística"],
    "Educación para la Salud": ["Enfermería Ambiental"],
    "Inglés II": ["Inglés III"],
    "Farmacología Clínica para Enfermería": ["Cuidados de Enfermería del Adulto Médico Quirúrgico", "Cuidados de Enfermería en la Mujer y Recién Nacido"],
    "Fisiopatología": ["Cuidados de Enfermería del Adulto Médico Quirúrgico", "Cuidados de Enfermería en la Mujer y Recién Nacido"],
    "Cuidados de Enfermería II": ["Cuidados de Enfermería del Adulto Médico Quirúrgico", "Cuidados de Enfermería en la Mujer y Recién Nacido"],
    "Estadística y Bioestadística": ["Epidemiología y Salud Pública"],
    "Administración General y en Salud": ["Epidemiología y Salud Pública", "Informática para Enfermería I"],
    "Enfermería Ambiental": ["Introducción a la metodología de la Investigación Cualitativa"],
    "Cuidados de Enfermería del Adulto Médico Quirúrgico": ["Cuidados de Enfermería en Salud Mental", "Cuidados de Enfermería en la Persona Mayor"],
    "Cuidados de Enfermería en la Mujer y Recién Nacido": ["Cuidados de Enfermería en el Niño y Adolescente"],
    "Epidemiología y Salud Pública": ["Cuidados de Enfermería en Salud Familiar y Comunitaria I", "Gestión de Calidad y Acreditación en salud", "Enfermería Basada en Evidencia"],
    "Informática para Enfermería I": ["Informática para Enfermería II"],
    "Cuidados de Enfermería en Salud Mental": ["Bioética", "Cuidados Paliativos Universales", "Cuidados de Enfermería en Salud Familiar y Comunitaria I", "Cuidados de Enfermería en Situación de Urgencia"],
    "Cuidados de Enfermería en la Persona Mayor": ["Bioética", "Cuidados Paliativos Universales", "Cuidados de Enfermería en Salud Familiar y Comunitaria I", "Cuidados de Enfermería en Situación de Urgencia"],
    "Introducción a la metodología de la Investigación Cualitativa": ["Enfermería Basada en Evidencia"],
    "Informática para Enfermería II": ["Gestión de Calidad y Acreditación en salud"],
    "Bioética": ["Internado de Enfermería I", "Internado de Enfermería II"],
    "Cuidados Paliativos Universales": ["Cuidados de Enfermería en Salud Familiar y Comunitaria II"],
    "Cuidados de Enfermería en Salud Familiar y Comunitaria I": ["Cuidados de Enfermería en Salud Familiar y Comunitaria II"],
    "Cuidados de Enfermería en el Niño y Adolescente": ["Cuidados de Enfermería en Salud Familiar y Comunitaria II"],
    "Gestión de Calidad y Acreditación en salud": ["Internado de Enfermería I", "Internado de Enfermería II"],
    "Cuidados de Enfermería en Situación de Urgencia": ["Internado de Enfermería I", "Internado de Enfermería II"],
    "Cuidados de Enfermería en Salud Familiar y Comunitaria II": ["Internado de Enfermería I", "Internado de Enfermería II"],
    "Enfermería Basada en Evidencia": ["Internado de Enfermería I", "Internado de Enfermería II"]
  };

  const estado = {}; // Para llevar registro de activadas

  function actualizarEstado() {
    asignaturas.forEach((asig) => {
      const nombre = asig.textContent.trim();
      if (!asig.classList.contains("activa")) {
        asig.classList.add("bloqueada");
      }
    });
  }

  function desbloquearDependientes(nombre) {
    for (const [asignatura, requisitos] of Object.entries(dependencias)) {
      if (requisitos.includes(nombre)) {
        const asigElement = [...asignaturas].find(
          (el) => el.textContent.trim() === asignatura
        );
        const requisitosCumplidos = dependencias[asignatura].every(
          (req) => estado[req]
        );
        if (requisitosCumplidos && asigElement) {
          asigElement.classList.remove("bloqueada");
        }
      }
    }
  }

  function bloquearDependientes(nombre) {
    for (const [asignatura, requisitos] of Object.entries(dependencias)) {
      if (requisitos.includes(nombre)) {
        const asigElement = [...asignaturas].find(
          (el) => el.textContent.trim() === asignatura
        );
        if (asigElement && asigElement.classList.contains("activa")) {
          asigElement.classList.remove("activa");
          estado[asignatura] = false;
          asigElement.classList.add("bloqueada");
          bloquearDependientes(asignatura);
        } else if (asigElement) {
          asigElement.classList.add("bloqueada");
        }
      }
    }
  }

  asignaturas.forEach((asig) => {
    const nombre = asig.textContent.trim();
    estado[nombre] = false;

    if ([
      "Identidad personal", "Introducción al pensamiento filosófico",
      "Comunicación Efectiva", "Primeros Auxilios", "Apreciación de los Lenguajes Artísticos",
      "Inglés III", "Ética General", "Persona y Trascendencia", "Liderazgo en Salud"
    ].includes(nombre)) {
      asig.classList.remove("bloqueada");
    }

    asig.addEventListener("click", () => {
      if (asig.classList.contains("bloqueada")) return;
      if (asig.classList.contains("activa")) {
        asig.classList.remove("activa");
        estado[nombre] = false;
        bloquearDependientes(nombre);
      } else {
        asig.classList.add("activa");
        estado[nombre] = true;
        desbloquearDependientes(nombre);
      }
    });
  });

  actualizarEstado();
});


const asignaturas = [...]; // Usa la misma lista que ya tienes con todos los "abre"

const malla = document.getElementById("malla");
const estadoAsignaturas = {};

function renderMalla() {
  malla.innerHTML = "";

  for (let s = 1; s <= 10; s++) {
    const columna = document.createElement("div");
    columna.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.textContent = `${s}° Semestre`;
    columna.appendChild(titulo);

    asignaturas.filter(a => a.semestre === s).forEach(asig => {
      const div = document.createElement("div");
      div.textContent = asig.nombre;
      div.className = "asignatura";
      if (!estadoAsignaturas[asig.nombre]) {
        div.classList.add("bloqueada");
      } else {
        div.classList.add("activa");
      }

      div.onclick = () => {
        if (estadoAsignaturas[asig.nombre]) {
          desactivar(asig.nombre);
        } else if (asignaturaDesbloqueada(asig.nombre)) {
          activar(asig.nombre);
        }
        renderMalla();
      };

      columna.appendChild(div);
    });

    malla.appendChild(columna);
  }
}

function asignaturaDesbloqueada(nombre) {
  const requisitos = asignaturas.filter(a => a.abre?.includes(nombre));
  return requisitos.every(req => estadoAsignaturas[req.nombre]);
}

function activar(nombre) {
  estadoAsignaturas[nombre] = true;
  const asignatura = asignaturas.find(a => a.nombre === nombre);
  if (asignatura.abre) {
    asignatura.abre.forEach(abierta => {
      if (asignaturaDesbloqueada(abierta)) {
        estadoAsignaturas[abierta] = false; // Solo marcarla como desbloqueable
      }
    });
  }
}

function desactivar(nombre) {
  delete estadoAsignaturas[nombre];
  const abre = asignaturas.find(a => a.nombre === nombre)?.abre || [];

  // Bloquea asignaturas dependientes
  abre.forEach(dep => {
    const otros = asignaturas.filter(a =>
      a.abre?.includes(dep) && estadoAsignaturas[a.nombre]
    );
    if (otros.length === 0) {
      desactivar(dep);
    }
  });
}

renderMalla();


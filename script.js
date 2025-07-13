<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Malla Curricular, Enfermería</title>
  <link rel="stylesheet" href="estilo.css">
</head>
<body>
  <h1 class="titulo animado">Malla Curricular, Enfermería</h1>
  <div id="malla"></div>
  <script>
    const ramos = [
      // 1° Semestre
      { id: 'anatomia', nombre: 'Anatomía', desbloquea: ['fisiologia', 'ciclo_vital', 'cuidados_1'] },
      { id: 'intro_ciencias', nombre: 'Introducción a ciencias básicas', desbloquea: ['fisiologia', 'microbiologia', 'metodologia_cuantitativa', 'admin_general'] },
      { id: 'bioquimica', nombre: 'Bioquímica y biología celular', desbloquea: ['microbiologia', 'fisiologia'] },
      { id: 'antropologia', nombre: 'Antropología filosófica del cuidado', desbloquea: ['salud_sociedad', 'fundamentos'] },
      { id: 'psicologia_desarrollo', nombre: 'Psicología del Desarrollo', desbloquea: ['ciclo_vital'] },
      { id: 'identidad', nombre: 'Identidad personal', desbloquea: [] },

      // 2° Semestre
      { id: 'microbiologia', nombre: 'Microbiología', desbloquea: ['fisiologia', 'cuidados_1', 'farmacologia', 'fisiopatologia'] },
      { id: 'salud_sociedad', nombre: 'Salud y Sociedad Contemporánea', desbloquea: ['educacion_salud', 'enfermeria_ambiental'] },
      { id: 'prevencion_iaas', nombre: 'Prevención de IAAS', desbloquea: ['cuidados_1'] },
      { id: 'fundamentos', nombre: 'Fundamentos de Enfermería', desbloquea: ['educacion_salud', 'admin_general', 'enfermeria_ambiental'] },
      { id: 'intro_filosofia', nombre: 'Introducción al pensamiento filosófico', desbloquea: [] },
      { id: 'ingles_1', nombre: 'Inglés I', desbloquea: ['ingles_2'] },
      { id: 'comunicacion', nombre: 'Comunicación Efectiva', desbloquea: [] },
      { id: 'primeros_auxilios', nombre: 'Primeros Auxilios', desbloquea: [] },

      // 3° Semestre
      { id: 'fisiologia', nombre: 'Fisiología', desbloquea: ['farmacologia', 'fisiopatologia', 'cuidados_2'] },
      { id: 'ciclo_vital', nombre: 'Ciclo Vital', desbloquea: ['cuidados_mujer'] },
      { id: 'cuidados_1', nombre: 'Cuidados de Enfermería I', desbloquea: ['cuidados_2'] },
      { id: 'metodologia_cuantitativa', nombre: 'Intro. a Metodología Cuantitativa', desbloquea: ['bioestadistica'] },
      { id: 'educacion_salud', nombre: 'Educación para la Salud', desbloquea: ['enfermeria_ambiental'] },
      { id: 'artes', nombre: 'Apreciación de los Lenguajes Artísticos', desbloquea: [] },
      { id: 'ingles_2', nombre: 'Inglés II', desbloquea: ['ingles_3'] },

      // 4° Semestre
      { id: 'farmacologia', nombre: 'Farmacología Clínica para Enfermería', desbloquea: ['cuidados_adulto', 'cuidados_mujer'] },
      { id: 'fisiopatologia', nombre: 'Fisiopatología', desbloquea: ['cuidados_adulto', 'cuidados_mujer'] },
      { id: 'cuidados_2', nombre: 'Cuidados de Enfermería II', desbloquea: ['cuidados_adulto', 'cuidados_mujer'] },
      { id: 'bioestadistica', nombre: 'Estadística y Bioestadística', desbloquea: ['epidemiologia'] },
      { id: 'admin_general', nombre: 'Administración General y en Salud', desbloquea: ['epidemiologia', 'informatica_1'] },
      { id: 'ingles_3', nombre: 'Inglés III', desbloquea: [] },

      // 5° Semestre
      { id: 'enfermeria_ambiental', nombre: 'Enfermería Ambiental', desbloquea: ['investigacion_cualitativa'] },
      { id: 'cuidados_adulto', nombre: 'Cuidados de Enfermería Adulto MQ', desbloquea: ['cuidados_mental', 'cuidados_mayor'] },
      { id: 'cuidados_mujer', nombre: 'Cuidados de Enfermería Mujer y RN', desbloquea: ['cuidados_nino'] },
      { id: 'epidemiologia', nombre: 'Epidemiología y Salud Pública', desbloquea: ['familiar_1', 'gestion_calidad', 'evidencia'] },
      { id: 'informatica_1', nombre: 'Informática para Enfermería I', desbloquea: ['informatica_2'] },
      { id: 'etica', nombre: 'Ética General', desbloquea: [] },

      // 6° Semestre
      { id: 'cuidados_mental', nombre: 'Cuidados de Enfermería en Salud Mental', desbloquea: ['bioetica', 'paliativos', 'familiar_1', 'urgencia'] },
      { id: 'cuidados_mayor', nombre: 'Cuidados de Enfermería en la Persona Mayor', desbloquea: ['bioetica', 'paliativos', 'familiar_1', 'urgencia'] },
      { id: 'investigacion_cualitativa', nombre: 'Investigación Cualitativa', desbloquea: ['evidencia'] },
      { id: 'informatica_2', nombre: 'Informática para Enfermería II', desbloquea: ['gestion_calidad'] },
      { id: 'trascendencia', nombre: 'Persona y Trascendencia', desbloquea: [] },

      // 7° Semestre
      { id: 'bioetica', nombre: 'Bioética', desbloquea: ['internado_1', 'internado_2'] },
      { id: 'paliativos', nombre: 'Cuidados Paliativos Universales', desbloquea: ['familiar_2'] },
      { id: 'familiar_1', nombre: 'Cuidados en Salud Familiar y Comunitaria I', desbloquea: ['familiar_2'] },
      { id: 'cuidados_nino', nombre: 'Cuidados de Enfermería Niño y Adolescente', desbloquea: ['familiar_2'] },
      { id: 'gestion_calidad', nombre: 'Gestión de Calidad y Acreditación', desbloquea: ['internado_1', 'internado_2'] },
      { id: 'liderazgo', nombre: 'Liderazgo en Salud', desbloquea: [] },

      // 8° Semestre
      { id: 'urgencia', nombre: 'Cuidados en Situación de Urgencia', desbloquea: ['internado_1', 'internado_2'] },
      { id: 'familiar_2', nombre: 'Salud Familiar y Comunitaria II', desbloquea: ['internado_1', 'internado_2'] },
      { id: 'evidencia', nombre: 'Enfermería Basada en Evidencia', desbloquea: ['internado_1', 'internado_2'] },

      // 9° y 10° Semestre
      { id: 'internado_1', nombre: 'Internado de Enfermería I', desbloquea: [] },
      { id: 'internado_2', nombre: 'Internado de Enfermería II', desbloquea: [] },
    ];

    const estado = {};
    const contenedor = document.getElementById('malla');

    ramos.forEach(ramo => {
      estado[ramo.id] = false;
      const div = document.createElement('div');
      div.className = 'ramo bloqueado';
      div.id = ramo.id;
      div.textContent = ramo.nombre;
      div.onclick = () => toggleRamo(ramo);
      contenedor.appendChild(div);
    });

    // Inicializa solo los del primer semestre desbloqueados
    [
      'anatomia', 'intro_ciencias', 'bioquimica',
      'antropologia', 'psicologia_desarrollo', 'identidad'
    ].forEach(id => desbloquear(id));

    function toggleRamo(ramo) {
      if (!document.getElementById(ramo.id).classList.contains('bloqueado')) {
        estado[ramo.id] = !estado[ramo.id];
        document.getElementById(ramo.id).classList.toggle('aprobado');
        if (estado[ramo.id]) {
          ramo.desbloquea.forEach(desbloquear);
        } else {
          ramo.desbloquea.forEach(bloquearSiCorresponde);
        }
      }
    }

    function desbloquear(id) {
      const el = document.getElementById(id);
      if (el) el.classList.remove('bloqueado');
    }

    function bloquearSiCorresponde(id) {
      const requisitos = ramos.filter(r => r.desbloquea.includes(id));
      const algunoAprobado = requisitos.some(r => estado[r.id]);
      if (!algunoAprobado) {
        const el = document.getElementById(id);
        if (el) {
          el.classList.add('bloqueado');
          el.classList.remove('aprobado');
          estado[id] = false;
          const sub = ramos.find(r => r.id === id);
          if (sub) sub.desbloquea.forEach(bloquearSiCorresponde);
        }
      }
    }
  </script>
</body>
</html>

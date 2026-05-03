---
marp: true
theme: default
paginate: true
html: true
footer: 'IngenIA: Inteligenia Artificial en la Ingeniería'
backgroundColor: #fff
style: |
  section {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  /* Forzar que la sección sea el marco de referencia */
  section {
    position: relative !important; /* Necesario para que el footer se ancle aquí */
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  /* Estilo para el footer de Marpit */
  section footer {
    position: absolute !important;
    bottom: 20px !important; /* Distancia desde el borde inferior */
    left: 40px !important;   /* Alineado con el padding lateral */
    right: 40px !important;
    font-size: 14px !important;
    color: #888 !important;
    border-top: 1px solid #eee !important; /* Opcional: una línea sutil */
    padding-top: 10px !important;
    height: auto !important;
  }
  h1 {
    color: #0f172a;
    border-left: 8px solid #0ea5e9;
    padding-left: 20px;
    font-size: 50px;
  }
  .columns {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin-top: 20px;
  }
  .card {
    background: #f8fafc;
    border-radius: 15px;
    padding: 0;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    border-bottom: 5px solid #0ea5e9;
  }
  .card.alt {
    border-bottom-color: #64748b;
  }
  .card img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  .card-text {
    padding: 20px;
  }
  .card-text h2 {
    margin: 0;
    font-size: 28px;
    color: #1e293b;
  }
  .card-text p {
    font-size: 17px;
    color: #475569;
    line-height: 1.4;
  }
  .compact {
    font-size: 28px;
    line-height: 1.3;
  }
  .compact h3 {
    font-size: 20px;
    margin: 5px 0;
  }
  .compact ul {
    margin: 5px 0;
    padding-left: 20px;
  }
  .compact li {
    margin: 2px 0;
  }
  table {
    table-layout: fixed;
    width: 100%;
  }
  table td, table th {
    width: 50%;
    vertical-align: top;
    font-weight: normal;
  }
  .demo-swap {
    margin-top: 10px;
  }
  .demo-launch {
    display: block;
    width: 100%;
    border: 0;
    padding: 0;
    background: transparent;
    cursor: pointer;
  }
  .demo-launch img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 18px;
    border: 2px solid #0ea5e9;
    box-shadow: 0 12px 30px rgba(15, 23, 42, 0.18);
  }
  .demo-frame {
    width: 100%;
    height: 500px;
    border: 0;
    border-radius: 18px;
    background: #000;
    box-shadow: 0 12px 30px rgba(15, 23, 42, 0.18);
  }
  section.course-table {
    background: linear-gradient(180deg, #f8fbff 0%, #eef6ff 100%);
  }
  section.course-table h1 {
    margin-top: -10px;
    margin-bottom: 4px;
    font-size: 44px;
  }
  section.course-table table {
    border-collapse: separate;
    border-spacing: 12px 8px;
    margin-top: 4px;
    font-size: 24px;
  }
  section.course-table table thead th,
  section.course-table table tbody td {
    padding: 11px 14px;
    background: rgba(255, 255, 255, 0.94);
    border: 1px solid rgba(148, 163, 184, 0.22);
    border-top-width: 5px;
    border-radius: 14px;
    box-shadow: 0 10px 22px rgba(15, 23, 42, 0.07);
    color: #334155;
    line-height: 1.22;
  }
  section.course-table table tr > *:nth-child(1) {
    border-top-color: #0ea5e9;
  }
  section.course-table table tr > *:nth-child(2) {
    border-top-color: #64748b;
  }
  section.course-table table strong {
    display: block;
    margin-bottom: 3px;
    font-size: 1.02em;
    color: #0f172a;
  }
  section.course-table table a {
    color: #0284c7;
    text-decoration: none;
  }
  section.full-image-slide {
    padding: 0;
    overflow: hidden;
    position: relative;
    background: #0f172a;
  }
  section.full-image-slide h1 {
    position: absolute;
    top: 32px;
    left: 32px;
    z-index: 1;
    margin: 0;
    padding: 14px 20px;
    border-left: 8px solid #0ea5e9;
    font-size: 46px;
    color: #f8fafc;
    background: rgba(15, 23, 42, 0.58);
    backdrop-filter: blur(6px);
    border-radius: 0 16px 16px 0;
  }
  .full-image-slide-image {
    width: 100%;
    height: 100%;
  }
  .full-image-slide-image img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
---


# IngenIA: Inteligenia Artificial en la Ingeniería

## Tecnun. Escuela de Ingeniería. Universidad de Navarra

----

## Noticias para la introducción

[Ver noticias](https://www.notion.so/Noticias-para-la-introducci-n-2f839c23f0168051a94bf33676dc1475?pvs=21)

----

## Evolución de los tests

- [Stanford Benchmarks](https://epoch.ai/benchmarks/hle?view=graph&tab=release-date)
- Progreso en capacidades de los modelos
- Métricas de rendimiento

---

# Fases de Adopción de la IA

## Esquema de Fases

**Fase 1**: Formación peronsal _[Completar]_

**Fase 2**: _[Completar]_

**Fase 3**: _[Completar]_

**Fase 4**: _[Completar]_

---

# Ejemplos de la IA en la Ingeniería

## Aplicaciones Prácticas

- **Tabla de amortización** - _[Completar descripción]_
- **Elementos finitos** - _[Completar descripción]_
- **Cuadrilátero articulado** - _[Completar descripción]_
- **Robot** [Abrir ejemplo →](https://gemini.google.com/share/aa59742a602b)

- **Puente grúa** - _[Completar descripción]_

---

# Ejemplo: Robot interactivo 2a1

<div class="demo-swap">
  <button
    class="demo-launch"
    type="button"
    onclick="this.parentElement.innerHTML='&lt;iframe class=&quot;demo-frame&quot; src=&quot;./ejemplos/robot.html&quot; loading=&quot;lazy&quot;&gt;&lt;/iframe&gt;'"
  >
    <img src="./ejemplos/robot-preview.png" alt="Abrir demo interactiva del robot" />
  </button>
</div>


---  

<!-- _class: course-table -->

# Fase 1: Curso IngenIA

| **Modelos**<br>◦ Empresas y modelos<br>◦ Multimedia y plataformas<br>◦ Chat y API (Tokens, Playground)<br>◦ Bases teóricas de los modelos | **Herramientas**<br>◦ GPTs, Gems, Proyectos, NotebookLM, tools, Hugging Face<br>◦ IDE (VSC, Copilot, skills, Cowork<br>◦ CLI, Agentes, entornos agénticos, MCP |
| :--- | :--- |
| **Formatos**<br>◦ JSON<br>◦ HTML, SVG, Mermaid,…<br>◦ Markdown, csv | **Scripting**<br>◦ Python<br>◦ JavaScript, Three.js<br>◦ [VBA, PowerShell, Blender] |


---

<!-- _class: full-image-slide -->

# Hacer menos

<div class="full-image-slide-image">
  <img src="https://media.licdn.com/dms/image/v2/C4E12AQHUz8KfSlvsmw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1520210091555?e=1779321600&v=beta&t=BDxKGnUf4-eyP0Cbm6IbH8VrsPx_57gkHScrRW2sfsQ" alt="Hacer menos" />
</div>

---

<!-- _class: full-image-slide -->

# Hacer más

<div class="full-image-slide-image">
  <img src="images/Filosofos_futuro.png" alt="Hacer más" />
</div>

---

# Elegir un futuro

<div class="columns">

<div class="card alt">
  <img src="https://media.licdn.com/dms/image/v2/C4E12AQHUz8KfSlvsmw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1520210091555?e=1779321600&v=beta&t=BDxKGnUf4-eyP0Cbm6IbH8VrsPx_57gkHScrRW2sfsQ" />
  <div class="card-text">
    <h2>Hacer menos</h2>
    <p>El riesgo de la atrofia cognitiva y la pérdida de autonomía al delegar nuestro futuro.</p>
  </div>
</div>

<div class="card">
  <!--<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/1280px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg" />   -->
  <img src="images/Filosofos_futuro.png" />
  <div class="card-text">
    <h2>Hacer más</h2>
    <p>Brindar una Eduación con Capacidad de Adapatación y Superación, a nivel personal y profesional.</p>
  </div>
</div>

</div>

---

# Grupos de Trabajo

## Áreas de Enfoque

### 🎓 Formación
Conocimientos de IA y LLMs para estudiantes y profesores

### 📚 Currículum
Áreas de conocimiento en Ingeniería
- Resultado del área: Perfil de salida o conocimientos para otra área
- Cual es la base necesaria, metodologías, herramientas
- Qué debe saber y poder hacer

### 📋 Plan de Estudios
Consideraciones a nivel de plan de estudios en la era de la IA (humanidades, business, competencias)

---

# Componentes de Cada Grupo y Plan de Trabajo

## ¿Cómo participar?

Invitamos a incorporarse como:

### 👀 Interesado
Mantenerme informado sobre el progreso y resultados

### 🤝 Participante en Grupo de Trabajo
Me gustaría participar activamente en las discusiones y propuestas

---

_[Contacto o próximos pasos]_---

---

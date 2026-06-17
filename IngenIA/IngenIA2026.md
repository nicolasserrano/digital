---
marp: true
theme: default
paginate: true
html: true
footer: 'Una educación integral en la era de la Inteligenia Artificial'
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
    justify-content: flex-start;
    padding-top: 80px;
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
    margin: 0 0 0.4em 0;
  }
  .columns {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin-top: 20px;
  }
  .image-compare-row,
  .image-compare-single {
    display: grid;
    gap: 30px;
    margin-top: 20px;
  }
  .image-compare-row {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: stretch;
  }
  .image-compare-single {
    grid-template-columns: 1fr;
  }
  .image-compare-row img,
  .image-compare-single img {
    width: 100%;
    height: 420px;
    max-height: 420px;
    object-fit: contain;
    border-radius: 18px;
    box-shadow: 0 12px 30px rgba(15, 23, 42, 0.12);
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
  .image-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    align-items: center;
    justify-items: center;
    margin-top: 20px;
  }
  .image-row img {
    width: auto;
    max-width: 320px;
    height: auto;
    border-radius: 18px;
    box-shadow: 0 12px 30px rgba(15, 23, 42, 0.12);
    max-height:86%;
  }
  .image-row .left {
    grid-column: 1;
  }
  .image-row .center {
    grid-column: 2;
  }
  .image-row .right {
    grid-column: 3;
  }
  .image-text {
    max-width: 280px;
    text-align: center;
    font-size: 28px;
    color: #0f172a;
    font-weight: 700;
    padding: 18px 22px;
    border-radius: 18px;
    background: rgba(14, 165, 233, 0.1);
    border: 2px solid rgba(14, 165, 233, 0.18);
  }
  .demo-frame-wrapper {
    width: 100%;
    height: 500px;
    overflow: hidden;
    border-radius: 18px;
    box-shadow: 0 12px 30px rgba(15, 23, 42, 0.18);
  }
  .demo-frame {
    width: 133.333%;
    height: 666.667px;
    transform: scale(0.75);
    transform-origin: top left;
    border: 0;
    background: #000;
    display: block;
  }
  .video-container {
    width: 100%;
    margin: 12px 0;
    height: auto;
    background: #000;
    overflow: hidden;
    border-radius: 12px;
  }
  .video-container video {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    margin: 0 auto;
  }
  section.course-table {
    background: linear-gradient(180deg, #f8fbff 0%, #eef6ff 100%);
  }
  section.course-table h1 {
    margin-top: 0;
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
    top: 80px;
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
  section.hle-slide {
    padding: 40px 40px 60px !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #f8fbff;
  }
  section.hle-slide h1 {
    width: 100%;
    text-align: left;
    align-self: flex-start;
    margin: 0 0 20px 0;
  }
  .hle-container {
    width: 100%;
    max-width: 1080px;
    padding: 18px;
    border-radius: 22px;
    background: rgba(255, 255, 255, 0.94);
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12);
  }
  .hle-container img {
    display: block;
    width: 100%;
    height: auto;
    max-height: 72vh;
    object-fit: contain;
    border-radius: 18px;
  }
  .hle-caption {
    margin-top: 16px;
    text-align: center;
    font-size: 20px;
    color: #475569;
    opacity: 0.9;
  }
---


# Una educación integral en la era de la Inteligenia Artificial

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

## GID IngenIA: Inteligenia Artificial en la Ingeniería<br> Tecnun. Escuela de Ingeniería. Universidad de Navarra

---

<!-- _class: hle-slide -->
# La era de la Inteligencia Artificial
<div class="hle-container">
  <img src="images/revoluciones_industriales.png" alt="Las 4 revoluciones industriales" />
</div>

---

<!-- _class: hle-slide -->
# La era de la Inteligencia Artificial
<div class="hle-container">
  <img src="images/Usted_se_encuentra_aqui_2.jpg" alt="Cartel Usted se encuentra aqui" />
</div>


---
<!-- _class: hle-slide -->
# La era de la Inteligencia Artificial
<div class="hle-container">
  <img id='youarehere' src="images/youarehere.svg" alt="You are here" />
  <style>
    img#youarehere {
      height: 18%;
      top: 2%;
      left: 33%;
      position: absolute;
    }
  </style>
  <img src="images/revoluciones_industriales.png" alt="Las 4 revoluciones industriales" />
</div>


---

<div class="video-container">
  <video controls preload="metadata">
    <source src="images/IndependenceSpaceship720.mp4" type="video/mp4" />
    Tu navegador no soporta reproducir video.
  </video>
</div>

---

<!-- _class: hle-slide -->
# Evolución de las capacidades de los LLMs
<div class="hle-container">
  <img src="images/IA_tests.png" alt="IA tests" />
  <p class="hle-caption"><a href="[https://agi.safe.ai](https://www.oneusefulthing.org/p/the-shape-of-the-thing)/">The Shape of the Thing</a></p>
</div>

---

<!-- _class: hle-slide -->
# Humanity's Last Exam
<div class="hle-container">
  <img src="images/difficulty_comparison_new.webp" alt="Humanity's Last Exam comparison" />
  <p class="hle-caption"><a href="https://agi.safe.ai/">Humanity's Last Exam</a></p>
</div>

---

<!-- _class: hle-slide -->
# Humanity's Last Exam
<div class="hle-container">
  <img src="images/HLE_May.png" alt="Humanity's Last Exam May" />
</div>

---

# Noticias del impacto de la IA

<div class="image-compare-row">
  <img src="images/nytimes_1-5.png" alt="NYTimes 1-5" />
  <img src="images/nytimes_6-10.png" alt="NYTimes 6-10" />
</div>
<div class="image-compare-row">
  <img src="images/nytimes_footer.png" alt="NYTimes footer" />
</div>

---

<!-- _class: hle-slide -->
# Rangings de MBA 2025 y 2026
<div class="hle-container">
  <img src="images/FinancialTimes_2025_2026.png" alt="Rangings de MBA 2025 y 2026" />
</div>

---

<!-- _class: hle-slide -->
# Cambio en el MBA del IESE
<div class="hle-container">
  <img src="images/Campus_IESE_IA.jpg" alt="IESE adapata su MBA a la era de la IA" />
</div>

---

<!-- _class: hle-slide -->
# Noticia en IESE
<div class="hle-container">
  <img src="images/IESE_IA.jpg" alt="Centrado en la inteligencia artificial" />
</div>

---

# Encíclica Magnifica humanitas
![enciclica Magnifica humanitas](images/enciclica_Magnifica_humanitas.jpg)

---

<iframe width="100%" height="100%" src="https://www.youtube.com/embed/uiZB4-Gh-t0?si=B0-wKDZSAx86Z2WR&amp;start=172" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

# Fases de IngenIA
![Fases](fases.svg)

---

# Curso IngenIA
<!-- _class: curso-slide -->
<div class="curso-slide">
  <img src="cursoIngenIA.svg" alt="Curso IngenIA" />
</div>

<style>
  div.curso-slide img {
    height: 161%;
    margin-top: -14em;
    margin-left: 4em;
  }
</style>

---

# Ejemplos de la IA en la Ingeniería

## Aplicaciones Prácticas

- **Tabla de amortización** - _[Completar descripción]_
- **Distribución de Gauss** [Abrir ejemplo](https://claude.ai/public/artifacts/7e49d32c-3563-4b0f-a412-e19ee1b865ba)]
- **Funciones** -[Abrir ejemplo](https://gemini.google.com/app/4c7a1bbbb504454c)
- **Cuadrilátero articulado** -[Abrir ejemplo](https://gemini.google.com/share/c0766efb05bd)
- **Robot** [Abrir ejemplo](https://gemini.google.com/share/aa59742a602b)
- **Puente grua** -[Abrir ejemplo](https://gemini.google.com/share/0244dfdbe4a5)

---

## Ejemplo: Curva de Gauss

<div class="demo-swap">
  <button
    class="demo-launch"
    type="button"
    onclick="this.parentElement.innerHTML='<div class=&quot;demo-frame-wrapper&quot;><iframe class=&quot;demo-frame&quot; src=&quot;./ejemplos/CurvaGauss.html&quot; loading=&quot;lazy&quot;></iframe></div>'"
  >
    <img src="./ejemplos/CurvaGauss.png" alt="Abrir demo interactiva del Curva de Gauss" />
  </button>
</div>

---

## Ejemplo: Hola de cálculo de amortización

<div class="demo-swap">
  <button
    class="demo-launch"
    type="button"
    onclick="this.parentElement.innerHTML='<div class=&quot;demo-frame-wrapper&quot;><iframe class=&quot;demo-frame&quot; src=&quot;./ejemplos/hoja_de_calculo_de_amortizacion.html&quot; loading=&quot;lazy&quot;></iframe></div>'"
  >
    <img src="./ejemplos/hoja_de_calculo_de_amortizacion.png" alt="Abrir demo interactiva de hoja de calculo de amortizacion" />
  </button>
</div>

---

## Ejemplo: Elementos Finitos

<div class="demo-swap">
  <button
    class="demo-launch"
    type="button"
    onclick="this.parentElement.innerHTML='<div class=&quot;demo-frame-wrapper&quot;><iframe class=&quot;demo-frame&quot; src=&quot;./ejemplos/ElementosFinitos.html&quot; loading=&quot;lazy&quot;></iframe></div>'"
  >
    <img src="./ejemplos/ElementosFinitos.png" alt="Abrir demo interactiva del Curva de Gauss" />
  </button>
</div>

---

## Ejemplo: Robot interactivo

<div class="demo-swap">
  <button
    class="demo-launch"
    type="button"
    onclick="this.parentElement.innerHTML='<div class=&quot;demo-frame-wrapper&quot;><iframe class=&quot;demo-frame&quot; src=&quot;./ejemplos/robot.html&quot; loading=&quot;lazy&quot;></iframe></div>'"
  >
    <img src="./ejemplos/robot-preview.png" alt="Abrir demo interactiva del robot" />
  </button>
</div>


---  

<!-- _class: full-image-slide -->

# Fase 2: Áreas de conocimiento

<div class="full-image-slide-image">
  <img src="images/Saber_Hacer_Ser.jpg" alt="Saber Hacer Ser" />
</div>

---  

# Fase 2: Áreas de conocimiento

## Qué saber, hacer y ser en la era de la IA
## Cómo evaluar en la era de la IA
## Cómo impartir en la era de la IA

<div class="image-row">
  <img class="left" src="images/Saber_Hacer_Ser.jpg" alt="Saber Hacer Ser" />
</div>

---

# Fase 3: Formación integral

<div class="image-row">
  <img class="left" src="images/Robot_proof_2017.jpg" alt="Robot proof 2017" />
</div>

---

# Fase 3: Formación integral

<div class="image-row">
  <img class="left" src="images/Robot_proof_2017.jpg" alt="Robot proof 2017" />
  <div class="center image-text">Resumen de la Universidad de la Sábana</div>
</div>

---

# Fase 3: Formación integral

<div class="image-row">
  <img class="left" src="images/Robot_proof_2017.jpg" alt="Robot proof 2017" />
  <div class="center image-text">Resumen de la Universidad de la Sábana</div>
  <img class="right" src="images/Robot_proof_2024.jpg" alt="Robot proof 2024" />
</div>

---

# Fase 3: Formación integral

<br><a target='_blank' href='https://unika.unav.edu/permalink/34UNAV_INST/ho003h/alma991011788723008016'>Robot-Proof online en Unika</a>    
<br><a target='_blank' href='https://intellectum.unisabana.edu.co/entities/publication/8ec88d95-5922-42e4-81ad-6216f77a1847'>Robot-Proof : una guía unificada, de la Universidad de la Sabana</a>


---

<!-- _class: hle-slide -->
<div class="hle-container">
  <img src="images/Robot-proof_ebsco.jpg" alt="Robot proof" />
</div>

---

<!-- _class: full-image-slide -->

# Hacer menos

<div class="full-image-slide-image">
  <img src="images/WallEHumans.avif" alt="Hacer menos" />
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
  <img src="images/WallEHumans.avif" />
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

<div class="video-container">
  <video controls preload="metadata">
    <source src="images/Atenas.mp4" type="video/mp4" />
    Tu navegador no soporta reproducir video.
  </video>
</div>

---

# Grupos de Trabajo

[Formulario: tinyurl.com/ingeniaform](https://docs.google.com/forms/d/e/1FAIpQLSdaIkDa-HKG3XSVZp81ImbLzS0K6hEbIIJb50lceAJ-5azRiQ/viewform?usp=publish-editor)
[Presentación: tinyurl.com/ingenia26](https://tinyurl.com/ingenia26)

### Formación
Conocimientos de IA y LLMs para estudiantes y profesores

### Currículum
Áreas de conocimiento en Ingeniería
- Resultado del área: Perfil de salida o conocimientos para otra área
- Cual es la base necesaria, metodologías, herramientas
- Qué debe saber y poder hacer

### Plan de Estudios
Consideraciones a nivel de plan de estudios en la era de la IA (humanidades, business, competencias)

---

## ¿Cómo participar?

### Interesado
Para mantenerse informado sobre el progreso y resultados, con newsletter mensual.

### Participante en Grupo de Trabajo
Formar parte de alguno de los grupos de trabajo o particpar ocasionalmente.

---

_[Contacto o próximos pasos]_---

---


## Noticias para la introducción

[Ver noticias](https://www.notion.so/Noticias-para-la-introducci-n-2f839c23f0168051a94bf33676dc1475?pvs=21)

----

## Evolución de los tests

- [Stanford Benchmarks](https://epoch.ai/benchmarks/hle?view=graph&tab=release-date)
- Progreso en capacidades de los modelos
- Métricas de rendimiento

---


<!-- _class: course-table -->

# Fase 1: Curso IngenIA

| **Modelos**<br>◦ Empresas y modelos<br>◦ Multimedia y plataformas<br>◦ Chat y API (Tokens, Playground)<br>◦ Bases teóricas de los modelos | **Herramientas**<br>◦ GPTs, Gems, Proyectos, NotebookLM, tools, Hugging Face<br>◦ IDE (VSC, Copilot, skills, Cowork<br>◦ CLI, Agentes, entornos agénticos, MCP |
| :--- | :--- |
| **Formatos**<br>◦ JSON<br>◦ HTML, SVG, Mermaid,…<br>◦ Markdown, csv | **Scripting**<br>◦ Python<br>◦ JavaScript, Three.js<br>◦ [VBA, PowerShell, Blender] |


---


---
marp: false
theme: default
paginate: true
header: ""
footer: "Curso GID. Formatos y simuladores"
style: |
  section {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 35px;
    font-size: 19px;
    line-height: 1.5;
    background-color: #fcfcfc;
  }
  h1 {
    color: #0f4c81;
    font-size: 30px;
    border-bottom: 2px solid #0f4c81;
    padding-bottom: 8px;
    margin-top: 0;
  }
  h2 {
    color: #1a5b8c;
    font-size: 24px;
    margin-top: 10px;
  }
  h3 {
    color: #2b6cb0;
    font-size: 20px;
  }
  strong {
    color: #0f4c81;
  }
  code {
    background-color: #edf2f7;
    color: #d63384;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 88%;
  }
  pre {
    background-color: #1e1e1e;
    color: #d4d4d4;
    padding: 12px;
    border-radius: 6px;
    font-size: 14px;
    overflow-x: auto;
  }
  blockquote {
    background: #eef6fc;
    border-left: 5px solid #0f4c81;
    padding: 8px 14px;
    margin: 10px 0;
    font-style: italic;
  }
  table {
    font-size: 15px;
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
  }
  th {
    background-color: #0f4c81;
    color: white;
    padding: 8px;
    text-align: left;
  }
  td {
    border-bottom: 1px solid #e2e8f0;
    padding: 6px 8px;
  }
  .highlight-box {
    background-color: #eeb03715;
    border: 1px solid #eeb037;
    border-radius: 6px;
    padding: 10px 15px;
    margin-top: 10px;
  }
  .columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }
---

<!-- slide 1 -->
# Curso GID. Formatos y simuladores

---

<!-- slide 2 -->
# Objetivos de la Sesión y Hoja de Ruta

### Lo que aprenderemos y practicaremos hoy:

1. **Comprender la naturaleza de los LLM**: Por qué operan con texto puro y cómo la tokenización condiciona las entradas y salidas.
2. **Conocer los formatos web esenciales**: Estructura (HTML), Estilo (CSS), Lógica (JavaScript), Documentación (Markdown) y Gráficos (SVG).
3. **Manejar la inspección e interacción web**: Editar el DOM en tiempo real desde las Herramientas de Desarrollador del navegador.
4. **Configurar un entorno de edición**: Usar Visual Studio Code con agentes de IA (Cline) conectando API Keys vía OpenRouter.
5. **Publicar y desplegar**: Alojar contenidos interactivos de forma autónoma con GitHub Pages.

---

<!-- slide 3 -->
# Marco del Programa

![](https://www.nicolasserrano.com/digital/IngenIA/fases.svg)

* **Fase 1: Formación personal (Sesión Actual)**
  * Explorar capacidades técnicas inmediatas: crear simuladores, rúbricas dinámicas y ejercicios autoevaluables.
* **Fase 2: Reflexión del área**
  * Reflexionar sobre cómo la presencia de la IA obliga a repensar qué y cómo enseñamos en cada disciplina.
* **Fase 3: Educación Integral**
  * Diseñar estrategias de formación humana, ética y crítica en la era de la IA.

---

<!-- slide 4 -->
# Modelos de Lenguaje (LLM)

### Que son
* Modelos como **GPT-4, Claude, Gemini o DeepSeek** son fundamentalmente **procesadores de texto**.
* Entienden, "razonan" y responden en texto. No procesan directamente interfaces gráficas sin convertirlas internamente.

> **Principios clave de funcionamiento:**
> 1. Toda instrucción (*prompt*) entra como texto.
> 2. Toda respuesta elaborada se genera en texto.
> 3. Al ser el código de programación texto plano, **el texto ordinario puede utilizarse directamente como código ejecutable**.

---

<!-- slide 5 -->
# Mecánica Interna: Tokenización y Costes

* **¿Qué es un Token?**
  * Un token es un fragmento de palabra (sub-palabra) o carácter que el modelo convierte en números para su procesamiento vectorial.
* **Regla empírica de conversión**:
  $$\text{Número de Tokens} \approx \text{Número de Palabras} \times \frac{4}{3}$$
* **Procesamiento de costes en APIs**:
  * Las llamadas a modelos se tarifan en relación con el número de tokens de entrada (*input*) y salida (*output*).
  * Las palabras cortas equivalen a 1 token; las palabras largas o compuestas se dividen en 2 o más tokens.

---

<!-- slide 6 -->
# Texto Puro vs. Interfaces Amigables

| Dimensión | Plataformas Cerradas (ej. NotebookLM) | Entornos Libres (ej. VS Code + HTML) |
| :--- | :--- | :--- |
| **Experiencia de usuario** | Muy cómoda, interfaz amigable inmediata. | Requiere configuración inicial y editores. |
| **Formato de salida** | Rígido (diapositivas convertidas en imágenes). | Flexible (código limpio, responsive y editable). |
| **Control del docente** | Depende de las actualizaciones del proveedor. | Control absoluto sobre cada línea de código. |
| **Extensibilidad** | Limitada al entorno del proveedor. | Integrable en cualquier servidor, LMS o GitHub. |

---

<!-- slide 7 -->
# Herramientas de programadores

### ¿Por qué utilizar herramientas de programadores sin ser programador?
* Referencia al artículo de **MIT Sloan School of Management**:
  * [*¿Por qué los directivos deben conocer las herramientas de desarrollo aunque no vayan a programar?*](https://sloanreview.mit.edu/article/ai-coding-tools-for-knowledge-work-what-executives-need-to-know/)

```
   +-----------------------------------------------------------------------+
   |  El código de software es TEXTO PLANO.                                |
   |  Los LLMs entienden y generan TEXTO PLANO con máxima precisión.       |
   |  --> Ergo: Los docentes pueden actuar como arquitectos de software    |
   |      escribiendo instrucciones en lenguaje natural.                    |
   +-----------------------------------------------------------------------+
```

---

<!-- slide 8 -->
# Formatos Digitales de Salida para LLMs

Para estructurar las respuestas de la IA en artefactos funcionales, utilizamos 6 formatos universales:

*WEB*
- **HTML (`.html`)**: Lenguaje de marcado que define la **estructura y contenidos** web.
- **CSS (`.css`)**: Reglas de hoja de estilo que aplican **diseño, colores y maquetación**.
- **JavaScript (`.js`)**: Lenguaje de programación que añade **dinamismo, cálculo e interacción**.

*Estructura*
- **Markdown (`.md`)**: Sintaxis ligera para **documentación estructurada y notas**.
- **JSON (`.json`)**: Estructura de datos estándar para **intercambio de información**.

*Imagen*
- **SVG (`.svg`)**: Formato vectorial en código plano para **gráficos y diagramas escalables**.

*Materiales de apoyo y vídeos*: Disponibles en `nicolasserrano.com` -> *Creación de contenido digital* -> *Publicación web*.

---

<!-- slide 9 -->
# Arquitectura Web: Modelo Cliente-Servidor

* **Origen histórico**: Creada en 1991 por **Tim Berners-Lee** en el **CERN** (Suiza) para facilitar el intercambio de documentos entre científicos.
* **Protocolos fundamentales**:
  * **HTTP / HTTPS**: *HyperText Transfer Protocol*, sobre TCP/IP.
* **Ciclo Petición-Respuesta (Request-Response)**:

```
  [ Navegador Web ]  ------ Petición HTTP (URL) ------>  [ Servidor Web ]
     (Cliente)       <----- Respuesta (HTML/CSS/JS) ----    (Data Center)
```

* **El Navegador como Triple Herramienta**:
  1. Motor de representación visual.
  2. Cliente de comunicaciones HTTP.
  3. **Entorno de desarrollo local e inspección**.

---

<!-- slide 10 -->
# Anatomía de un Documento HTML5

Todo archivo web estándar sigue esta estructura jerárquica obligatoria:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Título en la pestaña del navegador</title>
    <style>
        /* Reglas CSS de Estilo */
        body { font-family: sans-serif; background-color: #f4f4f4; }
    </style>
</head>
<body>
    <h1>Título Principal Visible</h1>
    <p>Este es un párrafo de contenido educativo.</p>
    <script>
        // Lógica JavaScript
        console.log("Página cargada con éxito");
    </script>
</body>
</html>
```

---

<!-- slide 11 -->
# Elementos Clave de HTML

* **Encabezados**: `<h1>` (título principal) a `<h6>` (subtítulo menor).
* **Párrafos**: `<p>Texto del párrafo...</p>`.
* **Hipervínculos**: `<a href="https://ejemplo.com">Texto del enlace</a>`.
  * Atributo `href`: Define la dirección de destino (relativa o absoluta).
* **Listas no ordenadas**:
  ```html
  <ul>
      <li>Primer elemento con viñeta</li>
      <li>Segundo elemento con viñeta</li>
  </ul>
  ```
* **Tolerancia a fallos**: El navegador es extremadamente permisivo; si falta una etiqueta de cierre, intenta reconstruir la estructura visual sin detenerse.
* **El "Lenguaje Nativo" de la IA**: Los LLM dominan HTML porque han sido entrenados procesando miles de millones de páginas web.

---

<!-- slide 12 -->
# Práctica Paso a Paso 1: Primera página HTML

### Objetivo: Generar y ejecutar un archivo web local.

1. **Solicitud a la IA**: Pide a Gemini o NotebookLM:
   > *"Crea una rúbrica de evaluación para un trabajo académico en formato HTML5 con Doctype."*
2. **Copiar el Código**: Selecciona desde `<!DOCTYPE html>` hasta `</html>`.
3. **Crear en Notepad (Bloc de Notas)**:
   * Abre Notepad (`Win + R` $\rightarrow$ `notepad`).
   * Pega el código HTML.
4. **Guardar Correctamente**:
   * Menú *Archivo* $\rightarrow$ *Guardar como...*
   * Tipo: **Todos los archivos (*.***)**.
   * Nombre: `mi_rubrica.html` (imprescindible la extensión `.html`).
5. **Ejecutar**: Haz doble clic sobre el archivo en el escritorio para abrirlo en tu navegador.

---

<!-- slide 13 -->
# Práctica Paso a Paso 2: Edición en Tiempo Real (DOM)

### Inspeccionar y modificar el DOM (Document Object Model) desde el Navegador

```
  [ Clic Derecho en la Web ]  --->  [ Seleccionar "Inspeccionar" (F12) ]  --->  [ Panel "Elementos" ]
```

1. **Abrir Herramientas de Desarrollo**: Presiona `F12` o haz clic derecho sobre cualquier texto y selecciona **Inspeccionar**.
2. **Explorar la Estructura DOM**: Observa cómo el navegador ha organizado las etiquetas `<head>` y `<body>`.
3. **Edición en Vivo**:
   * Haz doble clic sobre cualquier texto o etiqueta dentro del panel de inspección (o pulsa `F2`).
   * Modifica el texto y presiona `Enter`: verás cambiar la pantalla inmediatamente.
4. **Actualización local (`F5`)**: Recargar la página vuelve a leer el archivo original en el disco duro.

---

<!-- slide 14 -->
# La Estructura de ficheros de la Web

Cualquier aplicación interactiva web integra tres capas en un solo archivo o en archivos vinculados:

```
                  +-----------------------------------+
                  |        ESTRUCTURA (HTML)          |
                  |  Etiquetas, texto, tablas, divs   |
                  +-----------------------------------+
                                    |
                  +-----------------------------------+
                  |          ESTILO (CSS)             |
                  | Colores, márgenes, Tailwind CSS   |
                  +-----------------------------------+
                                    |
                  +-----------------------------------+
                  |          LÓGICA (JavaScript)      |
                  | Cálculos, eventos, simulaciones   |
                  +-----------------------------------+
```

---

<!-- slide 15 -->
# Formatos Ligeros: Markdown (`.md`) y SVG

### Markdown (`.md`)
Sintaxis simplificada ideal para documentación y apuntes rápidos:
* `# Título 1` $\rightarrow$ Equivale a `<h1>`
* `## Título 2` $\rightarrow$ Equivale a `<h2>`
* `- Elemento de lista` $\rightarrow$ Equivale a `<li>`
* `` `código` `` $\rightarrow$ Equivale a `<code>`

### SVG (Scalable Vector Graphics)
* Gráficos vectoriales definidos mediante código XML (coordenadas, líneas, polígonos).
* **Ventaja**: Son totalmente editables en texto plano y escalan sin perder calidad.
* **Fortaleza de la IA**: Modelos como Gemini destacan creando diagramas SVG limpios.

---

<!-- slide 16 -->
# Metodología CRUD para Interactivos Educativos

Adaptación del patrón clásico del software (CRUD) al flujo de trabajo con IA docente:

```
  [ CREATE ]  --->  [ READ ]  --->  [ UPDATE ]  --->  [ DEPLOY ]
  Generar con       Interpretar    Modificar y       Publicar en
  Prompts.          el Código.     Ajustar.          GitHub Pages.
```

1. **CREATE**: Pedir el artefacto a la IA (ej. *"Crea un simulador de la ley de Ohm en HTML/JS"*).
2. **READ**: Inspeccionar el código generado para entender su estructura básica.
3. **UPDATE**: Ajustar parámetros, modificar estilos o añadir fórmulas adicionales.
4. **DEPLOY**: Publicar la web para que los estudiantes accedan libremente sin barreras.

---

<!-- slide 17 -->
# Ejemplo Práctico: Simulador de Elementos Finitos

Un ejemplo de aplicación trimembre avanzada generada mediante prompt:

* **HTML**: Define el contenedor de la malla y los paneles de control.
* **CSS (Tailwind CSS)**: Aplica diseño profesional moderno importando la librería en una sola línea (`<script src="https://cdn.tailwindcss.com"></script>`).
* **JavaScript**: Ejecuta el bucle de cálculo numérico de transferencia térmica:

```javascript
// Bucle iterativo en JavaScript dentro de <script>
for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
        malla[i][j] = calcularTemperatura(i, j);
        dibujarCelda(i, j, malla[i][j]);
    }
}
```

---

<!-- slide 18 -->
# Evolución de Editores: De Notepad a VS Code

```
  Notepad (Básico)  --->  Notepad++ (Coloreado)  --->  Visual Studio Code (Entorno Profesional)
```

### ¿Por qué elegir Visual Studio Code (`code`)?
1. **Estándar de la industria**: Gratuito, multiplataforma y ligero.
2. **Gestión de proyectos por carpetas**: Permite trabajar con directorios enteros de archivos interconectados.
3. **Ecosistema de extensiones**: Permite integrar agentes de IA directamente en la ventana de edición.
4. **Acceso rápido**: Se abre desde la consola o menú de ejecución con el comando `code`.

---

<!-- slide 19 -->
# Estructura de Proyectos en VS Code

### Trabajar con Carpetas Locales (*Open Folder*)

* En lugar de abrir archivos sueltos, trabajamos sobre un directorio contenedor:
  1. *File* $\rightarrow$ *Open Folder...* (o crear `Pruebas_24`).
  2. Crear archivo nuevo: clic en el icono de nuevo archivo $\rightarrow$ `inicio.md` o `index.html`.

```
  MI_PROYECTO_EDUCATIVO/
  ├── index.html        (Página principal)
  ├── estilos.css       (Estilos CSS)
  ├── simulador.js      (Lógica del simulador)
  └── apuntes.md        (Documentación)
```

---

<!-- slide 20 -->
# Agentes de IA y Pasarelas API (OpenRouter)

* **¿Qué es un Agente de Código?**
  * Un programa integrado en VS Code que puede leer, crear y editar archivos de tu proyecto siguiendo tus instrucciones.
* **Pasarela OpenRouter**:
  * Servicio que unifica el acceso a **más de 300 modelos de IA** (OpenAI, Anthropic, DeepSeek, Google) mediante una única **API Key**.
* **Control Transparente de Costes**:
  * Permite seleccionar el modelo evaluando su precio exacto por millón de tokens:
    * Ej. *DeepSeek Flash*: ~0.10$ / M tokens de entrada (extremadamente económico).

---

<!-- slide 21 -->
# Práctica Paso a Paso 3: Configurar AI assistant "Cline"

### Guía de instalación del agente en VS Code:

1. **Abrir Extensiones**: Clic en el icono de ![ ](extension.png) en la barra lateral izquierda.
2. **Buscar e Instalar**: Escribir `Cline` y hacer clic en **Instalar** (icono del asistente ![alt text](cline.png)).
3. **Abrir Cline**: Hacer clic en el icono del asistente ![alt text](cline.png) que aparece en la barra lateral.
4. **Configurar Proveedor**:
   * Seleccionar **OpenRouter** en el desplegable de proveedores.
   * Pegar la **API Key** personal proporcionada.
5. **Seleccionar Modelo**: Elegir un modelo económico (ej. `DeepSeek V3` o `DeepSeek Flash`).

---

<!-- slide 22 -->
# Flujo de Trabajo Asistido con Cline

1. **Seleccionar Rol**: Cambiar el modo de *Architect* a **Code** en el panel inferior.
2. **Referenciar Archivos con `@`**:
   * Escribir `@inicio.md` en la caja de texto para incluir el archivo como contexto.
3. **Enviar la Instrucción**:
   > *"Escribe en @inicio.md la estructura completa de un curso de 4 capítulos sobre HTML para principiantes."*
4. **Revisar la Vista *Diff***:
   * **Verde**: Adiciones propuestas por la IA.
   * **Rojo**: Elimina o reemplaza código anterior.
5. **Aceptar Cambios**: Hacer clic en **Save** / **Accept** para consolidar los cambios en el disco duro.

---

<!-- slide 23 -->
# Despliegue e Independencia: GitHub Pages

### Autonomía docente sin barreras corporativas

```
  [ Archivo HTML en local ]  --->  [ Subir a GitHub Repository ]  --->  [ Activar GitHub Pages ]
                                                                             |
                                                                             v
                                                                 URL Pública Libre y Gratuita
```

* **Ventajas pedagógicas**:
  * Sin dependencia de cambios de versión o caídas de plataformas LMS (Blackboard/Moodle).
  * Sin marcas de agua ni publicidad.
  * Control de versión e independencia completa de tus materiales educativos.

---

<!-- slide 24 -->
# Encargo Práctico: Tu Cuaderno Digital de Simuladores

### Estructura de la Tarea Práctica para los Participantes:

1. **Crear 4 Simuladores Sencillos**:
   * Generar con prompts directos 4 interactivos breves (ej. Leyes de Newton, suma de vectores, circuito eléctrico, cilindro neumático).
2. **Crear 1 Simulador Complejo**:
   * Diseñar un simulador avanzado adaptado a tu asignatura específica (ej. elementos finitos, cinemática de un robot, modelo macroeconómico).
3. **Ensamblar la Página Principal HTML**:
   * Crear un archivo `cuaderno.html` que incruste los 4 simuladores pequeños en un panel superior de 2x2 y el simulador complejo en la sección inferior principal.

---

<!-- slide 25 -->
# Resumen de Comandos, Atajos y Recursos

### Comandos de Teclado Clave:
* `Win + R` $\rightarrow$ Ejecutar comandos (`notepad`, `code`).
* `F5` / `Ctrl + R` $\rightarrow$ Recargar página en el navegador.
* `F12` / `Ctrl + Shift + I` $\rightarrow$ Abrir Herramientas de Desarrollador (DOM / Inspeccionar).
* `Ctrl + S` $\rightarrow$ Guardar cambios en Notepad o VS Code.

### Enlaces de Referencia:
* **Web del Curso**: `nicolasserrano.com` (Sección *Publicación Web*).
* **Primera Web de la Historia**: CERN 1991 (`info.cern.ch`).
* **Pasarela API**: OpenRouter (`openrouter.ai`).

---

<!-- slide 26 -->
# Cierre y Próximos Pasos

> **"El código no es una barrera insuperable, sino el lenguaje de comunicación directa con los LLMs para construir el futuro de tus clases."**

### Tareas inmediatas:
* [ ] Explorar los vídeos de soporte de 30 minutos (HTML, CSS, JavaScript).
* [ ] Probar la creación de un archivo HTML local y editarlo con `F12`.
* [ ] Configurar VS Code + Cline con tu API Key de OpenRouter.
* [ ] Diseñar el Cuaderno Digital con los 5 simuladores interactivos.

**¡Nos vemos en la siguiente fase para revisar vuestras creaciones!**

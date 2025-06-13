var pyodideReadyPromise = loadPyodide();
console.log("type 106 github");

function createTextArea() {
    // Find the first element with class 'instanceHolder'
    var closeHolderDiv = document.querySelector('.instanceHolder');

    if (closeHolderDiv) {
      // Create the textarea
      var textarea = document.createElement('textarea');
      //textarea.id = 'console-output';
      
      // Optional: Set some default styles or attributes
      textarea.rows = 10;
      textarea.cols = 50;
      textarea.placeholder = 'Console output will appear here...';

      // Append the textarea to the div
      closeHolderDiv.appendChild(textarea);
    } else {
      console.warn('No element with class "instanceHolder" found.');
    }
}


function setItem_105(itemInstance, instanceObj) {
    console.log("File NoteBookInstance_Pyodide.js");
    console.log("id: " + instanceObj.iid);
    answerElement = itemInstance.querySelector(".answer");

    if (answerElement.value.trim() != "") {
        resp = JSON.parse(answerElement.value);
        answerElement.value = resp.code;
    }
    
    // create a div for the execution of the phython similar to the file NoteBookInstance_HTML.js
    itemid = itemInstance.id;
    comp = document.createElement("div");
    //comp.setAttribute("id", "d" + itemid);
    comp.id = "o" + itemInstance.id; //'console-output';
    comp.setAttribute("class", "itemContent viewAnswer");
    comp.setAttribute(
        "style",
        "background-color:white; width: 50%; float: right;"
    );
    answer = itemInstance.querySelector(".answer");
    answer.parentNode.insertBefore(comp, answer);
    answer.style.width = "44%";
    answer.setAttribute("id", "t" + itemid);
    
    problemElement = itemInstance.querySelector(".problem");

    pElement = document.createElement("P");
    problemElement.appendChild(pElement);

    runCodeButtonElement = document.createElement("button");
    runCodeButtonElement.setAttribute("type", "button");  // with default it sends the form
    runCodeButtonElement.addEventListener("click", async function () {
        var originalText = this.textContent;
        this.textContent = "Loading...";
        this.disabled = true;
        try {
            await runPython2(this);
        } finally {
            this.textContent = originalText;
            this.disabled = false;
            
            // Mover el canvas desde JavaScript
            setTimeout(() => {
                var divMatplotlib = obtenerUltimoDivMatplotlib();
                if (divMatplotlib) {
                    console.log('Encontrado div matplotlib:', divMatplotlib.id);
                    // Mover a donde necesites
                    instanceHolder
                    var contenedor = runCodeButtonElement.parentElement;
                    document.body.insertBefore(divMatplotlib, document.getElementsByClassName("banner")[0]);
                } else {
                    console.log('No se encontró div matplotlib');
                }
            }, 100); // Pequeña pausa para que se renderice el canvas
        }
    });
    runCodeButtonElement.innerHTML = "Run Code";
    
    if (answer && answer.parentNode) {
        answer.parentNode.insertBefore(runCodeButtonElement, answer.nextSibling);
    }
    
    
    //createTextArea();
}

function obtenerUltimoDivMatplotlib() {
    var divsEnBody = document.body.querySelectorAll('body > div');
    
    if (divsEnBody.length > 0) {
        var ultimoDiv = divsEnBody[divsEnBody.length - 1];
        
        if (ultimoDiv.id && ultimoDiv.id.startsWith('matplotlib')) {
            return ultimoDiv;
        }
    }
    
    return null;
}

async function runPython2(button) {
  var pyodide = await pyodideReadyPromise;
  await pyodide.loadPackage("numpy");
  await pyodide.loadPackage("matplotlib");
  //var code = document.getElementById("python-code").value;

    itemInstance = button.closest(".itemInstance");
    instanceID = itemInstance.getAttribute("id");
    pyCode = itemInstance.querySelector(".answer").value;

  // Redirige stdout
  //let outputDiv = document.getElementById("console-output");
  let outputDiv = document.getElementById("o" + instanceID);
  outputDiv.textContent = "";

  pyodide.setStdout({
    batched: (s) => outputDiv.textContent += s,
  });

  pyodide.setStderr({
    batched: (s) => outputDiv.textContent += s,
  });

  try {
    await pyodide.runPythonAsync(pyCode);
  } catch (err) {
    outputDiv.textContent += "\n" + err;
  }
}

function saveAnswer_105(button) {
    /* don't execute here because runPython2 is async 
    var originalText = button.textContent;
    button.textContent = "Executing...";
    button.disabled = true;

    await runPython2(button);
    console.log("executed runPython2");
    button.textContent = originalText;
    button.disabled = false;
    */
    var respObject = {};
    itemInstance = button.closest(".itemInstance");
    pyCode = itemInstance.querySelector(".answer").value;
    respObject.code = pyCode;

    //let outputDiv = document.getElementById("console-output");
    let outputDiv = document.getElementById("o" + itemInstance.id);
    output = outputDiv.textContent;
    respObject.output = output;
    resp = JSON.stringify(respObject);
    return resp;
}

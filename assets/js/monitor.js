function pause(s = 1) {
  return new Promise((resolve) => setTimeout(resolve, 1000 * Number(s)));
}
function getChar(char) {
  let result;
  if (typeof char === "string" ) {
    if (char === "\n" || char === "  ") {
      result = document.createElement("br");
    } else if (char === "\t") {
      let tab = document.createElement("span");
      tab.innerHTML = "&nbsp;&nbsp;&nbsp; ";
      result = tab;
    } else if (char === "  ") {
      let space = document.createElement("span");
      space.innerHTML = "&nbsp; ";
      space.classList.add("char");
      result = space;
    } else {
      let span = document.createElement("span");
      span.classList.add("char");
      span.textContent = char + " ";
      result = span;
    }
  }
  return result;
}
async function type(
  text,
  options = {},
  container = document.querySelector(".terminal")
) {
  if (!text) return Promise.resolve();

  let {
    wait = 10,
    initialWait = 10,
    finalWait = 50,
    lineWait = 10,
    typerClass = "",
    useContainer = false,
    stopBlinking = true,
    processChars = true,
    clearContainer = false,
  } = options;

  // If text is an array, e.g. type(['foo', 'bar'])
  if (processChars && Array.isArray(text)) {
    for (const t of text)
      await type(
        t,
        {
          ...options,
          initialWait: lineWait,
          finalWait: lineWait,
        },
        container
      );
    return;
  }

  let interval;
  return new Promise(async (resolve) => {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
    // Create a div where all the characters can be appended to (or use the given container)
    let typer = useContainer ? container : document.createElement("div");
    typer.classList.add("typer", "active");

    if (typerClass) {
      typer.classList.add(typerClass);
    }
    // Handy if reusing the same container
    if (clearContainer) {
      container.innerHTML = "&nbsp;";
    }

    if (!useContainer) {
      container.appendChild(typer);
    }

    if (initialWait) {
      await pause(initialWait / 1000);
    }

    let queue = text;
    if (processChars) {
      queue = text.split("\n");
    }

    let prev;

    // Use an interval to repeatedly pop a character from the queue and type it on screen
    interval = setInterval(async () => {
      if (queue.length) {
        let char = queue.shift();

        // This is an optimisation for typing a large number of characters on the screen.
        // It seems the performance degrades when trying to add 500+ DOM elements rapidly on the screen.
        // So the content of the previous element is moved to the typer container and removed, which
        // reduces the amount of DOM elements.
        // This may cause issues when the element is removed while the character is still animating (red screen)
        if (processChars && prev) {
          prev.remove();
          if (prev.firstChild && prev.firstChild.nodeType === Node.TEXT_NODE) {
            typer.innerText += prev.innerText;
          } else {
            typer.appendChild(prev);
          }
        }
        let element = processChars ? getChar(char) : char;
        if (element) {
          typer.appendChild(element);
          scrollToBottom();
        }
        prev = element;
      } else {
        // When the queue is empty, clean up the interval
        clearInterval(interval);
        await pause(finalWait / 1000);
        if (stopBlinking) {
          typer.classList.remove("active");
        }
        resolve();
      }
    }, wait);
  });
}
async function parse(input) {
  input = cleanInput(input);

  if (!input) {
    return;
  }
  // Only allow words, separated by space
  let matches = String(input).match(/^(\w+(?:(?:\s|-)\w+)*)$/);

  if (!matches) {
    throw new Error("Invalid command");
  }
  let command = matches[1];
  let args = matches[2];

  let naughty = ["fuck", "shit", "die", "ass", "cunt"];
  if (naughty.some((word) => command.includes(word))) {
    throw new Error("Please don't use that language");
  }

  let module;

  // Try to import the command function
  try {
    module = await import(`../commands/${command}/index.mjs`);
  } catch (e) {
    console.error(e);
    // Kinda abusing TypeError to check if the import failed
    if (e instanceof TypeError) {
      e.message = `Unknown command: ${command}`;
    }
    // E.g. syntax error
    else {
      e.message = "Error while executing command";
    }
    throw e;
  }

  module.stylesheets?.forEach((name) => {
    addStylesheet(`commands/${command}/${name}.css`);
  });

  // Try to import and parse any HTML templates that the command module s
  module.templates?.forEach(async (name) => {
    await loadTemplates(`commands/${command}/${name}.html`);
  });

  // Show any output if the command s any
  await type(module.output);
  await pause();

  // Execute the command (default )
  await module.default?.(args);

  return;
}
function scrollToBottom() {
  let terminal = document.querySelector(".terminal");
  terminal.scrollTo(0, terminal.scrollHeight);
}
async function boot() {
  clear();
  const response = await fetch("/assets/monitor-content.json");
  const content = await response.json();
  for (data in content) {
    let { text, lineWait = 10, stopBlinking = true } = content[data];
    await type(text, { lineWait, stopBlinking });
  }
  await pause();
}
function clear(screen = document.querySelector(".terminal")) {
  screen.innerHTML = "";
}

// boot();

async function loadmonitor() {
  const terminalElement = document.querySelector(".terminal");
  const lines = terminalElement.innerHTML.split('\n')
  clear();
  for (let i=0; i<lines.length; i++){
    let stopBlinking = true;
    await type(lines[i],{ lineWait:0, stopBlinking});
  }
 

  
}

loadmonitor();

// document.addEventListener("DOMContentLoaded", function () {
//     const monitor = document.getElementById("monitor");
//     monitor.classList.remove("off");
//     monitor.classList.add("theme-green");
//     const typewriterElement = document.getElementById("typewriter-content");
//     // const terminal = document.getElementsById("crt");
//     const lines = typewriterElement.innerHTML.split("\n");
//     typewriterElement.innerHTML = "";
//     let lineIndex = 0;

//     function typeLine() {
//         if (lineIndex < lines.length) {
//             typewriterElement.innerHTML += lines[lineIndex] + "\n";
//             lineIndex++;
//             setTimeout(typeLine, 500); // Adjust typing speed here
//         } else {
//             // Move the cursor to the end of the prompt
//             typewriterElement.innerHTML += " ";
//         }
//     }

//     typeLine();
// });

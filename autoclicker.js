(() => {
    const targetUrl = "https://scratch.mit.edu/projects/452800849/";
    if (window.location.href === targetUrl) {
        console.log("Not Supported due to detection");
        return;
    }

    let count = 0;
    let mouseDown = false;
    let active = false; 
    let variableType = null;

    const globals = getglobals();
    const variableExists = (name) => globals.some(globalName => globalName.toLowerCase() === name.toLowerCase());

    if (variableExists("Cookies")) {
        variableType = "Cookies";
    } else if (variableExists("Coins")) {
        variableType = "Coins";
    } else if (variableExists("Points")) {
        variableType = "Points";
    } else if (variableExists("Donuts")) {
        variableType = "Donuts";
    } else if (variableExists("Clicks")) {
        variableType = "Clicks";
    } else if (variableExists("Hot Dogs")) {
        variableType = "Hot Dogs";
    } else if (variableExists("Milk")) {
        variableType = "Milk";
    } else if (variableExists("Money")) {
        variableType = "Money";
    } else if (variableExists("Total Burgers")) {
        variableType = "Total Burgers";
    } else {
        console.log("Please request a var name in issues.");
        return;
    }

    const incrementCount = () => {
        if (active && mouseDown) {
            count += 2;
            setglobal(variableType, count);
            console.log(`${variableType}: ${count}`);
        }
    };

    const anticheatSprite = getsprite("Anticheat");
    if (anticheatSprite) {
        anticheatSprite.visible = false;
        const checkAnticheatVisibility = () => {
            anticheatSprite.visible = false;
            requestAnimationFrame(checkAnticheatVisibility);
        };
        requestAnimationFrame(checkAnticheatVisibility);
    }

    window.addEventListener("keydown", (event) => {
        if (event.code === "KeyA") {
            active = !active; 
            console.log(`Toggled: ${active}`);
        }
    });

    window.addEventListener("mousedown", () => {
        mouseDown = true;
    });

    window.addEventListener("mouseup", () => {
        mouseDown = false;
    });

    setInterval(incrementCount, 50);
})();

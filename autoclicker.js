(() => {
    let count = 0;
    let mouseDown = false;
    let variableType = null;

    const globals = getglobals();
    const variableExists = (name) => globals.some(globalName => globalName.toLowerCase() === name.toLowerCase());

    if (variableExists("cookies")) {
        variableType = "Cookies";
    } else if (variableExists("coins")) {
        variableType = "Coins";
    } else if (variableExists("points")) {
        variableType = "Points";
    } else if (variableExists("donuts")) {
        variableType = "Donuts";
    } else if (variableExists("clicks")) {
        variableType = "Clicks";
    } else if (variableExists("hot dogs")) {
        variableType = "Hot Dogs";
    } else if (variableExists("milk")) {
        variableType = "Milk";
    } else if (variableExists("money")) {
        variableType = "Money";
    } else if (variableExists("total burgers")) {
        variableType = "Total Burgers";
    } else if (variableExists("cursor money")) {
        variableType = "cursor money";
    } else if (variableExists("cookie (@vino11)")) {
        variableType = "Cookie (@Vino11)";
    } else if (variableExists("number")) {
        variableType = "number";
    } else if (variableExists(".energy")) {
        variableType = ".Energy";
    } else if (variableExists("$")) {
        variableType = "$";
    } else if (variableExists("score")) {
        variableType = "Score";
    } else if (variableExists("candy")) {
        variableType = "Candy";
    } else {
        console.log("no thingy found");
        return;
    }

    const incrementCount = () => {
        if (mouseDown) {
            count += 4;
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

    window.addEventListener("mousedown", () => {
        mouseDown = true;
    });

    window.addEventListener("mouseup", () => {
        mouseDown = false;
    });

    setInterval(incrementCount, 1);
})();

// https://scratch.mit.edu/projects/1084154072/
// CLICK KEY F THEN ARROW UP THEN F TO TURN OFF DO NOT FLY UP TOO HIGH ( MOSTLY FIXXED THAT CUS TIMER IS SLOWER NOW )
// ALSO WORKS WITH https://scratch.mit.edu/projects/1045162520/
(() => {
    let fPressed = false;
    let enabled = false;
    const initialTime = Date.now();

    const resetTimer = () => {
        const elapsedTime = Date.now() - initialTime;
        vm.runtime.ioDevices.clock._projectTimer.startTime = initialTime + Math.floor(elapsedTime / 100) * 100;
    };

    setInterval(resetTimer, 100);

    window.addEventListener("keydown", (event) => {
        if (event.code === "KeyF") {
            enabled = !enabled;
            fPressed = !enabled;
        }

        if (event.code === "ArrowUp" && enabled) {
            const intervalId = setInterval(() => {
                const randomValue = Math.random() * (5 - 4.9) + 4.9;
                setglobal("Yv", randomValue);
            }, 100);

            window.addEventListener("keyup", (upEvent) => {
                if (upEvent.code === "ArrowUp") {
                    clearInterval(intervalId);
                }
            });
        }
    });
})();

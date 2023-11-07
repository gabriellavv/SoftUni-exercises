function attachGradientEvents() {

    const gradient = document.getElementById("gradient");
    gradient.addEventListener("mousemove", gradientMove);  // когато курсора се движи вътре в полето
    gradient.addEventListener("mouseout", gradientOut);    // когато излезе извън полето

    function gradientMove(event) {

        const gradientBoxWidth = event.target.clientWidth;          // взима ширината на елемента, в който се е случило събитието - 300px зададени в css
        const positionOfTheMouse = event.offsetX / (gradientBoxWidth - 1);  // позицията на мишката върху елемента спрямо ширината му, разделено на самата ширина за да получим резултат между 0 и 1
        const percentage = Math.trunc(positionOfTheMouse * 100);
        document.getElementById("result").textContent = percentage + "%";
    }

    function gradientOut() {

        document.getElementById("result").textContent = "";

    }
}
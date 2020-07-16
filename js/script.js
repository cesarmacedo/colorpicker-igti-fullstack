    window.addEventListener('load', function() {
        displayColor()
    })

    document.getElementById("red-range").onchange = function() {
        setValueInInputs()
    };

    document.getElementById("green-range").onchange = function() {
        setValueInInputs()
    };

    document.getElementById("blue-range").onchange = function() {
        setValueInInputs()
    };


    
    function setValueInInputs() {
        const rangeValues = document.querySelectorAll('input[type="range"]');
        const input = document.querySelectorAll('input[type="text"]');

        for(var i = 0; i < input.length; i++){
            document.getElementById(input[i].attributes.id.value).value = 
            rangeValues[i].value;
        }
       
        displayColor();
    }

    function displayColor(){
        const outputs = document.querySelectorAll('input[type="range"]');
        document.getElementById("color-rgb").style.backgroundColor = 
          `rgb(${outputs[0].value}, ${outputs[1].value}, ${outputs[2].value})`; 
    }

    
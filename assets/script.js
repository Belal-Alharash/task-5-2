const result = document.querySelector(".result");
const enterNumber = document.querySelector(".enter-number");
const chooseNumber = document.querySelector(".choose-number");
const chooseResult = document.querySelector(".choose-result");
const btnConverter = document.querySelector(".btn-Converter");

function converter(){
    let res = 0; 

    let inputValue = parseFloat(enterNumber.value);

    if (chooseNumber.value == 'km'){
        if (chooseResult.value == 'km'){
            res = inputValue + " km";
        }
        if (chooseResult.value == 'm'){
            res = inputValue * 1000 + " m";
        }
        if (chooseResult.value == 'cm'){
            res = inputValue * 100000 + " cm";
        }
        if (chooseResult.value == 'mm'){
            res = inputValue * 1000000 + " mm";
        }
    };

    if (chooseNumber.value == 'm'){
        if (chooseResult.value == 'km'){
            res = inputValue / 1000 + " km";
        }
        if (chooseResult.value == 'm'){
            res = inputValue + " m";
        }
        if (chooseResult.value == 'cm'){
            res = inputValue * 100 + " cm";
        }
        if (chooseResult.value == 'mm'){
            res = inputValue * 1000 + " mm";
        }
    };
    
    if (chooseNumber.value == 'cm'){
        if (chooseResult.value == 'km'){
            res = inputValue / 100000 + " km";
        }
        if (chooseResult.value == 'm'){
            res = inputValue / 100 + " m";
        }
        if (chooseResult.value == 'cm'){
            res = inputValue + " cm";
        }
        if (chooseResult.value == 'mm'){
            res = inputValue * 10 + " mm";
        }
    };

    if (chooseNumber.value == 'mm'){
        if (chooseResult.value == 'km'){
            res = inputValue / 1000000 + " km";
        }
        if (chooseResult.value == 'm'){
            res = inputValue / 1000 + " m";
        }
        if (chooseResult.value == 'cm'){
            res = inputValue / 10 + " cm";
        }
        if (chooseResult.value == 'mm'){
            res = inputValue + " mm";
        }
    };

    result.innerHTML = res;
};


btnConverter.addEventListener('click', converter);

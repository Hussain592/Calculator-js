const displayInput = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');

buttons.forEach(function(item) {
    item.addEventListener('click', function() {
        displayInput.value  += item.getAttribute('data-value');
    });
});

clearButton.addEventListener('click', function() {
    display.value = '';
});

equalsButton.addEventListener('click', function() {
        display.value = eval(display.value);
});




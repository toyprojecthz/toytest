$(document).ready(function () {
    var defaultNumb = 2982
    var n = localStorage.getItem('on_load_counter');

    if (n === null) {
        n = 0;
    }
    n++;

    localStorage.setItem("on_load_counter", n);

    nums = n.toString().split('').map(Number);

    var countContainer = document.getElementById("CounterVisitor");
    countContainer.innerHTML = '';
    for (var i of nums) {
        countContainer.innerHTML = defaultNumb + i;
    }
});
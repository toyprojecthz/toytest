var n = localStorage.getItem('on_load_counter');

if (n === null) {
    n = 0;
}
n++;

localStorage.setItem("on_load_counter", n);

nums = n.toString().split('').map(Number);

var visitorContainer = document.getElementById('CounterVisitor')
visitorContainer.innerHTML = '';
for (var i of nums) {
    visitorContainer.innerHTML += i;
}
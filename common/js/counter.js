var n = localStorage.getItem('on_load_counter');

if (n === null) {
    n = 0;
}
n++;
console.log(n)

localStorage.setItem("on_load_counter", n);

nums = n.toString().split('').map(Number);

var countContainer = document.getElementById("CounterVisitor");
countContainer.innerHTML = '';
for (var i of nums) {
    countContainer.innerHTML += i;
    console.log(n)
}
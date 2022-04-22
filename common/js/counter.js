var n = localStorage.getItem('on_load_counter');
if (n === null) {
    n = 0;
}

// localStorage.setItem("on_load_counter", n);

var visitorContainer = document.getElementById('CounterVisitor')
visitorContainer.innerHTML = n;
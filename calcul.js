let screen = document.getElementById('display');

function disp(num) {
    screen.value += num;
}

function del() {
    screen.value = screen.value.slice(0, -1);
}

function C() {
    screen.value = '';
}

function result() {
    try {
        if (eval(screen.value) == '-Infinity' || eval(screen.value) == 'Infinity' || isNaN(eval(screen.value))) {
            alert('Incorrect counts !!');
            C();
        } else {
            screen.value = eval(screen.value);
        }
    } catch {
        alert('We cant count this!');
    }
}
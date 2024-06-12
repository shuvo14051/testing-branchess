let count = 0;
//This is a comment for new branch

function increment() {
    count++;
    document.getElementById('counter').innerText = count;
}

function decrement() {
    count--;
    document.getElementById('counter').innerText = count;
}

function reset() {
    count = 0;
    document.getElementById('counter').innerText = count;
}

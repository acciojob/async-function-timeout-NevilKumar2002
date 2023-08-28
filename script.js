let text = document.getElementById("text");
let delay = document.getElementById("delay");
let output = document.getElementById("output");
let button = document.getElementById("btn");

async function delayfunction() {
    let x = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text.value);
        }, delay.value)
    });
    output.innerText = x;
}

button.addEventListener("click", delayfunction);
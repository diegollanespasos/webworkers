"use strict";

const primeWorker = new Worker("worker.js");

primeWorker.onmessage = function(event){
    const primes = event.data;
    const output = document.getElementById("output");
    output.innerText = primes.join(", ");
}

function startPrimesCalculation(){
    primeWorker.postMessage("calculate");
}

function spin() {
    const spinner = document.getElementById("spinner");
    let angle = 0;
    setInterval(() => {
        angle++;
        spinner.style.transform = `rotate(${angle}deg)`;
    },20)
}

spin();
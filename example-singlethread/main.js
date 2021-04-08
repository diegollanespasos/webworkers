"use strict"

const N_PRIMES = 10000;

function calculatePrimes() {
    let current = 2;
    const primes = [];

    while(primes.length < N_PRIMES){
        let isPrime = true;
        for(let i = 2; i < current; i++){
            if(current%i === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            primes.push(current);
        }
        current++;
    }

    console.log(primes);

    const output = document.getElementById("output");
    output.innerText = primes.join(", ");
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
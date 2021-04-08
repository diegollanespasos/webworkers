"use strict"

// In this solution, it takes longer so we need to reduce the number of of prime numbers
const N_PRIMES = 250;

function calculatePrimes() {
    let current = 2;
    const primes = [];

    const interval = setInterval(() => {
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


        //last iteration
        if(primes.length >= N_PRIMES){
            clearInterval(interval);
            console.log(primes);
            const output = document.getElementById("output");
            output.innerText = primes.join(", ");
        }
    },0)
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
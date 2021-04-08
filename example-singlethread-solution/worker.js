"use strict";

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

    postMessage(primes);
}

onmessage = function(event) {
    if(event.data === "calculate"){
        calculatePrimes();
    }
}
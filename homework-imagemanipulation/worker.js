"use strict";

const R_OFFSET = 0;
const G_OFFSET = 1;
const B_OFFSET = 2;

let originalPixels = null;
let srcImageWidth = 0;
let srcImageHeight = 0;
let currentPixels = null;

function getIndex(x, y){
    return (x + y * srcImageWidth) * 4;
}

function clamp(value) {
    return Math.max(0, Math.min(Math.floor(value), 255));
}

function addBlue(x, y, value) {
    const index = getIndex(x, y) + B_OFFSET;
    const currentValue = currentPixels[index];
    currentPixels[index] = clamp(currentValue + value);
}

function processImage() {
    currentPixels = originalPixels.slice();

    for(let i = 0; i < srcImageHeight; i++){
        for(let j = 0; j < srcImageWidth; j++){
            addBlue(j, i, 100);
        }
    }

    postMessage(currentPixels);
}

onmessage = function(event) {
    if(event.data){
        srcImageWidth = event.data[0];
        srcImageHeight = event.data[1];
        originalPixels = event.data[2];
        processImage();
    }
}
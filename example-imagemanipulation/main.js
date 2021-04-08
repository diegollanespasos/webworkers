"use strict"

function spin() {
    const spinner = document.getElementById("spinner");
    let angle = 0;
    setInterval(() => {
        angle++;
        spinner.style.transform = `rotate(${angle}deg)`;
    },20)
}

spin();

//Image Processing
const fileInput = document.getElementById("fileinput");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const srcImage = new Image();

let imgData =  null;
let originalPixels = null;
let currentPixels = null;

fileInput.onchange = function(e) {
    if(e.target.files && e.target.files.item(0)){
        srcImage.src = URL.createObjectURL(e.target.files[0]);
    }
}

srcImage.onload = function(){
    canvas.width = srcImage.width;
    canvas.height = srcImage.height;
    ctx.drawImage(srcImage, 0, 0, srcImage.width, srcImage.height);
    imgData = ctx.getImageData(0, 0, srcImage.width, srcImage.height);
    //each four numbers is a pixel
    originalPixels = imgData.data.slice();
}

//Function to get the index where starts an specific pixel in an the array of pixels
function getIndex(x, y){
    return (x + y * srcImage.width) * 4;
}

function clamp(value) {
    return Math.max(0, Math.min(Math.floor(value), 255));
}

const R_OFFSET = 0;
const G_OFFSET = 1;
const B_OFFSET = 2;

function addBlue(x, y, value) {
    const index = getIndex(x, y) + B_OFFSET;
    const currentValue = currentPixels[index];
    currentPixels[index] = clamp(currentValue + value);
}

function processImage() {
    console.log('entre')
    currentPixels = originalPixels.slice();

    for(let i = 0; i < srcImage.height; i++){
        for(let j = 0; j < srcImage.width; j++){
            addBlue(j, i, 100);
        }
    }

    commitChanges();
}

function commitChanges() {
    for(let i = 0; i < imgData.data.length; i++){
        imgData.data[i] = currentPixels[i];
    }

    ctx.putImageData(imgData, 0, 0, 0, 0, srcImage.width, srcImage.height);
}
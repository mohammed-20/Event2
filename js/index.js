// Here you can access the colors variable
// have fun

const btnR = document.getElementById('btn1');
const paintMe = document.getElementById('pallete');
const textinpt = document.getElementById('color');


const getRandomNumber  = (min, max) => {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
};

btnR.addEventListener('mouseenter' , () => {
    let randomColor = getRandomNumber(0, colors.length-1);
    document.getElementById('pallete').style.backgroundColor = colors[randomColor];
    document.getElementById('color').value = colors[randomColor];
    document.getElementById('color').style.color = colors[randomColor];
    });

    btnR.addEventListener('mouseleave' , () => {
        let randomColor = getRandomNumber(0, colors.length-1);
        document.getElementById('pallete').style.backgroundColor = colors[randomColor];
        document.getElementById('color').value = colors[randomColor];
        document.getElementById('color').style.color = colors[randomColor];
        });


        textinpt.addEventListener('changecolor', () => {
        document.getElementById("pallete").style.backgroundColor = document.getElementById('color').value;
        })


//     let nIntervId;
// const crazy = document.querySelector("#crazy");
// function changeColor() {
//     if (nIntervId) {
//       clearInterval(nIntervId);
//     }
//     nIntervId = setInterval(()=>{
//         let numRand =Math.floor( Math.random()*(colors.length));
//     crazy.style.backgroundColor = colors[numRand];

//     crazy.textContent=colors[numRand];
//     }, 50);
//   }


//  crazy.addEventListener("click",changeColor);
//  crazy.addEventListener("dblclick",stopTextColor);


//  function stopTextColor() {
//   clearInterval(nIntervId);
//    crazy.removeEventListener("click",changeColor);
// }
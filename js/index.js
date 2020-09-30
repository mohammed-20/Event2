// Here you can access the colors variable
// have fun

const btnR = document.getElementById('btn1');
const paintMe = document.getElementById('pallete');
const textinpt = document.getElementById('color');
const audio = document.getElementById('audio1');
const volume = document.getElementById('audio1');



const getRandomNumber  = (min, max) => {
     let step1 = max - min + 1;
     let step2 = Math.random() * step1;
     let result = Math.floor(step2) + min;
      return result;
};

    // btnR.addEventListener('mouseenter' , () => {
    //   let randomColor = getRandomNumber(0, colors.length-1);
    //     document.getElementById('pallete').style.backgroundColor = colors[randomColor];
    //     document.getElementById('color').value = colors[randomColor];
    //     document.getElementById('color').style.color = colors[randomColor];
    // });

    // btnR.addEventListener('mouseleave' , () => {
    //   let randomColor = getRandomNumber(0, colors.length-1);
    //     document.getElementById('pallete').style.backgroundColor = colors[randomColor];
    //     document.getElementById('color').value = colors[randomColor];
    //     document.getElementById('color').style.color = colors[randomColor];
    //     });




let nIntervId;
btnR.addEventListener('mouseenter', () =>{
nIntervId=setInterval(set, 200);
});

const set = () => {
    let randomColor = getRandomNumber(0, colors.length-1);
        document.getElementById('pallete').style.backgroundColor = colors[randomColor];
        document.getElementById('color').value = colors[randomColor];
        document.getElementById('color').style.color = colors[randomColor]; 
        document.getElementById('color-text').style.color = colors[randomColor];
        document.getElementById('btn1').style.backgroundColor = colors[randomColor];
        document.getElementById('crazy').style.backgroundColor = colors[randomColor];
        
    };

btnR.addEventListener('mouseleave', () =>{
    clearInterval(nIntervId);
});


function changecolor() {
    document.getElementById("pallete").style.backgroundColor = document.getElementById('color').value;
};


btnR.addEventListener('mouseenter', () => {
    audio.play();
    
});

window.addEventListener('keydown', (key) => {
    if (key.keyCode == '39') {
        audio.volume += 0.1;
    }
    else if (key.keyCode == '37') {
       audio.volume -= 0.1;
    }
});
 btnR.addEventListener('mouseleave', () =>{
    audio.pause();
});

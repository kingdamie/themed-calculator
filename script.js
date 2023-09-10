const input = document.getElementById('inputbox');
const buttons = document.querySelectorAll('button'); 

let string = "";
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'RESET'){
            string = "";
            input.value = string
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})


const moves = document.querySelectorAll('.move');
console.log(moves.length);

const body = document.querySelector('body');
const del = document.querySelector('.del');
const rese = document.querySelector('.reset');
const equ = document.querySelector('.equ');
const action = document.querySelector('.action');
const button = document.querySelector('button');


    const btn = document.querySelector('.btn');
    let cir = window.getComputedStyle(btn,'::before');
    moves[0].addEventListener('click', function(){
        btn.style.background = "hsl(223, 31%, 20%)";
        console.log(cir.width);
        btn.style.setProperty('--aftercolor','hsl(6, 63%, 50%)');
        btn.style.setProperty('--aftertran','translateX(0px)');
        equ.style.background = 'hsl(6, 63%, 50%)';
        rese.style.background = 'hsl(225, 21%, 49%)';
        del.style.background = 'hsl(225, 21%, 49%)';
        body.style.background = 'hsl(222, 26%, 31%)';
        body.style.transition = '2s';
        body.style.color = 'white';
        action.style.background = ' hsl(223, 31%, 20%)';
        input.style.background = 'hsl(223, 31%, 20%)'
        input.style.color = ' white'
    })
    moves[1].addEventListener('click', function(){
        btn.style.background = "white";
        console.log(cir.width);
        btn.style.setProperty('--aftercolor','hsl(25, 98%, 40%)');
        btn.style.setProperty('--aftertran','translateX(42px)');
        equ.style.background = 'hsl(25, 98%, 40%)';
        rese.style.background = ' hsl(185, 42%, 37%)';
        del.style.background = ' hsl(185, 42%, 37%)';
        body.style.background = 'hsl(0, 0%, 93%)';
        body.style.transition = '2s';
        body.style.color = 'black';
        action.style.background = ' hsl(0, 0%, 90%)';
        input.style.background = 'white'
        input.style.color = ' hsl(60, 10%, 19%)'
    })
    moves[2].addEventListener('click', function(){
        btn.style.background = " hsl(268, 71%, 12%)";
        console.log(cir.width);
        btn.style.setProperty('--aftercolor','hsl(176, 100%, 44%)');
        btn.style.setProperty('--aftertran','translateX(84px)');
        equ.style.background = 'hsl(176, 100%, 44%)';
        rese.style.background = 'hsl(290, 70%, 36%';
        del.style.background = 'hsl(290, 70%, 36%';
        body.style.background = 'hsl(268, 75%, 9%)';
        body.style.transition = '2s';
        body.style.color = ' hsl(52, 100%, 62%)';
        action.style.background = ' hsl(268, 47%, 21%)';
        input.style.background = ' hsl(268, 47%, 21%)'
        input.style.color = ' hsl(52, 100%, 62%)';
    })


    // reng hw strating
let input = document.querySelector('input')

input.addEventListener(
    'input', function(){
        document.getElementsByTagName('h1')[0].innerText = input.value;
    }
)
    // reng hw ending


    // inputpel strating
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
let inpu = document.querySelector('#inpu');

btn2.addEventListener('click', function(){
        inpu.value++;
    });
btn1.addEventListener('click', function(){
    if(inpu.value > 1){
        inpu.value--;

}
});
        // inputpel ending



setInterval(function(){
    const clr1 = Math.round(Math.random()*255);
    const clr2 = Math.round(Math.random()*255);
    const clr3 = Math.round(Math.random()*255);

    console.log(clr1,clr2,clr3)

    document.body.style.background = ` linear-gradient(rgb(${clr1},${clr2},${clr3}),rgb(${clr2},${clr3},${clr1}),rgb(${clr1},${clr3},${clr2}))`;
}
,1000);
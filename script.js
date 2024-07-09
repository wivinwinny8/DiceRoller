
function RollDice(){
    let result=[];
    let imgresult=[];
    const num=document.getElementById('number').value;
    console.log(Number(num))

    for(let i=0 ; i < num ; ++i){
        let val=Math.floor(Math.random() * (7-1))+1;
        result.push(val);
        imgresult.push(`<img src="asset/${val}.png" alt="dice image">`);
    }
    console.log(result);
    document.querySelector('.result').textContent=`The dice values are ${[...result].join(', ')}`
    document.querySelector('.image').innerHTML=[...imgresult].join(" ");
}
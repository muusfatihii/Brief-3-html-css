/*------------------------------------------augmenter la quantite d'article--------------------------------*/
const QUp = document.getElementById("Up");


QUp.addEventListener('click',function(){
    

    const selectedQ = document.getElementById("selectedQ");
    
    let a = parseInt(selectedQ.innerText)+1;
    selectedQ.innerText=a;
    
});

/*---------------------------------------------baisser la quantite d'article---------------------------------------*/
const QDown = document.getElementById("Down");


QDown.addEventListener('click',function(){
    
    const selectedQ = document.getElementById("selectedQ");
    if(selectedQ.innerText>1){

        let a = parseInt(selectedQ.innerText)-1;
        selectedQ.innerText=a;

    }
    
});
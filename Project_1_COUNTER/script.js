let counts = 0;
const countervalue = document.getElementById('counterValue')
const decreaseBtn =document.getElementById('btn1')
const resetBtn =document.getElementById('btn2')
const increaseBtn =document.getElementById('btn3')


increaseBtn.addEventListener("click", ()=>{
        if(counts>=0){
            counts++;
            countervalue.textContent = counts;
        updateDecreasebtnState();
    }
})

decreaseBtn.addEventListener("click", ()=>{
    if(counts>0){
        counts--;
        countervalue.textContent = counts;
        updateDecreasebtnState();
    }
})

function updateDecreasebtnState(){
    if(counts === 0){
        decreaseBtn.disabled = true;
    }
    else
        {
            decreaseBtn.disabled = false;
        }
        
    }
    

resetBtn.addEventListener("click", ()=>{
    counts = 0;
    countervalue.textContent = counts;
    updateDecreasebtnState();
})
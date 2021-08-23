const checkBtn=document.querySelector('button');
const error=document.querySelector('#error');

checkBtn.addEventListener('click',()=>{
    error.innerHTML='';
    const billAmt=parseInt(document.querySelector('#bill-amt').value);
    const cashGvn=parseInt(document.querySelector('#cash-gvn').value);
    //console.log(billAmt,cashGvn);
    const notes=document.querySelectorAll('.notes');
    const noteArr=[2000,500,100,50,20,10,5,2,1];

    if(isNaN(billAmt))
        error.innerHTML='pls enter the bill amount'
    
    if(isNaN(cashGvn))
        error.innerHTML='pls enter the cash given'

    if(billAmt>cashGvn)
        error.innerHTML='bill amount is greater than amount payed'

    else {
        var change=cashGvn-billAmt;

        for(let i=0;i<noteArr.length;i++){
            if(change>=noteArr[i]){
                var res=Math.floor(change/noteArr[i]);
                change-=(res*noteArr[i]);
                notes[i].innerHTML=res;
            }
            else notes[i].innerHTML=0;
        }
    }
})

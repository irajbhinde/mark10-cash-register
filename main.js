const billAmount = document.querySelector("#bill-Amount");
const cashGiven = document.querySelector("#cash-Given");
const btnCheckAmount = document.querySelector(".btn-checkAmount");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes")

const availableNotes = [2000,500,100,20,10,5,1] 

btnCheckAmount.addEventListener("click", function validatorAndCalculator(){
    hideMessage();
    if(billAmount.value > 0){
       if(cashGiven.value > billAmount.value){
           const amountToReturn =  cashGiven.value - billAmount.value;
           calculateChange(amountToReturn)
       } else {
       showMessage("Cash Given cannot be less than Bill Amount. Will you wash dishes ?")
       }

    } else {
    showMessage("Invalid Amount")
    }
})

function calculateChange(amountToReturn){
    for ( let i = 0; i<availableNotes.length; i++){
        const numberOfNotes = Math.trunc(amountToReturn/availableNotes[i])

        amountToReturn = amountToReturn % availableNotes[i]

        noOfNotes[i].innerText = numberOfNotes
    }
}

function hideMessage(){
    message.style.display="none";
}

function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg
}


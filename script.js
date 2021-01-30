function updateTextField(id, increasing, unitPrice){
    let inputTextField = document.getElementById(id);
    let numberOfTickets = parseInt(inputTextField.value);
 
    if(increasing){
        newTicket=numberOfTickets+1;
        inputTextField.value=newTicket;
    }
    else{
        if(numberOfTickets>0)
        inputTextField.value=numberOfTickets-1;
    }
    calculateSubtotal();
}
function calculateSubtotal(){
    let subtotalVariable =parseInt(document.getElementById("firstClass-input-field").value)*150 + parseInt(document.getElementById("economy-input-field").value)*100;
    document.getElementById("subtotal").innerText = subtotalVariable;
    calculateVat(subtotalVariable);
}
function calculateVat(subtotalVariable){
    let vatVariable=(subtotalVariable*10)/100;
    document.getElementById("vat").innerText = vatVariable;
    calculateTotal(subtotalVariable,vatVariable);
}
function calculateTotal(subtotalVariable,vatVariable){
    document.getElementById("total").innerText = subtotalVariable+vatVariable;
}

//first-class plus minus button
const firstClassPlusBTN =document.getElementById("firstClass-plus-btn");
firstClassPlusBTN.addEventListener("click",function(){
    updateTextField("firstClass-input-field",true,150);
});

const firstClassMinusBTN = document.getElementById("firstClass-minus-btn");
firstClassMinusBTN.addEventListener("click",function(){
    updateTextField("firstClass-input-field",false,150);
});

//econommy-class plus minus button
const economyPlusBTN =document.getElementById("economy-plus-btn");
economyPlusBTN.addEventListener("click",function(){
    updateTextField("economy-input-field",true,150);
});

const economyMinusBTN = document.getElementById("economy-minus-btn");
economyMinusBTN.addEventListener("click",function(){
    updateTextField("economy-input-field",false,150);
});

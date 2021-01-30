function updateTextField(id, increasing){
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
    if(document.getElementById("firstClass-input-field").value=="")
        document.getElementById("firstClass-input-field").value=0;
    if(document.getElementById("economy-input-field").value=="")
        document.getElementById("economy-input-field").value=0;
    updateTextField("firstClass-input-field",true);
});

const firstClassMinusBTN = document.getElementById("firstClass-minus-btn");
firstClassMinusBTN.addEventListener("click",function(){
    if(document.getElementById("firstClass-input-field").value=="")
        document.getElementById("firstClass-input-field").value=0;
    if(document.getElementById("economy-input-field").value=="")
        document.getElementById("economy-input-field").value=0;
    updateTextField("firstClass-input-field",false);
});

//econommy-class plus minus button
const economyPlusBTN =document.getElementById("economy-plus-btn");
economyPlusBTN.addEventListener("click",function(){
    if(document.getElementById("firstClass-input-field").value=="")
        document.getElementById("firstClass-input-field").value=0;
    if(document.getElementById("economy-input-field").value=="")
        document.getElementById("economy-input-field").value=0;
    
    updateTextField("economy-input-field",true);
});

const economyMinusBTN = document.getElementById("economy-minus-btn");
economyMinusBTN.addEventListener("click",function(){
    if(document.getElementById("firstClass-input-field").value=="")
        document.getElementById("firstClass-input-field").value=0;
    if(document.getElementById("economy-input-field").value=="")
        document.getElementById("economy-input-field").value=0;
    updateTextField("economy-input-field",false);
});

//book-now button
const bookNowBTN = document.getElementById("book-now-btn");
bookNowBTN.addEventListener("click",function(){
    if(document.getElementById("total").innerText=="0")
        alert("Please select at least one ticket to proceed booking!");
    else{
        const bookingContent = document.getElementById("booking-section");
        bookingContent.style.display="none";
        const confirmationContent = document.getElementById("booking-confirmation");
        confirmationContent.style.display="block";
        document.getElementById("total-fare").innerText=document.getElementById("total").innerText;
    }
});
// getTicket handler
function getFirstClassTicket(id,isIncrease) {
  const ticketInput = document.getElementById(id);
  let ticketCount = parseInt(ticketInput.value);
  let newTicketCount = ticketCount;
  if (isIncrease == true) {
    newTicketCount = ticketCount + 1;
    
  } else if (isIncrease == false && ticketCount>0){
    newTicketCount = ticketCount - 1;
  }
  ticketInput.value = newTicketCount;
  totalTicketCost();
  
}

document.getElementById( "firstClass-plus").addEventListener("click", function () {
    
    getFirstClassTicket("firstClass-count",true);
  });

document.getElementById( "firstClass-minus").addEventListener("click", function () {
    
    getFirstClassTicket("firstClass-count",false);
    
  });

  document.getElementById("economy-plus").addEventListener("click", function () {
      getFirstClassTicket("economy-count",true);
  })
  document.getElementById("economy-minus").addEventListener("click", function () {
    getFirstClassTicket("economy-count",false);
})

//total ticket cost calculate
function totalTicketCost(){
  const firstClassInput=getInputValue("firstClass-count");
  const economyClassInput=getInputValue("economy-count");
  const subTotalAmount=firstClassInput*150+economyClassInput*100;
  document.getElementById("subtotal-amount").innerText=subTotalAmount;
  const taxAmount=Math.round(subTotalAmount/100*10);
  document.getElementById("tax-amount").innerText=taxAmount;
  const totalAmount=subTotalAmount+taxAmount;
  document.getElementById("total-amount").innerText=totalAmount;


}

function getInputValue(id){
  const ticketInput=document.getElementById(id);
  const ticketCount=parseInt(ticketInput.value);
  return ticketCount;
 

}

document.getElementById("booking-button").addEventListener("click",alert("Thank you Sir you are punched ticket"));



 
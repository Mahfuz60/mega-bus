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

  document.getElementById("economyClass-plus").addEventListener("click", function () {
      getFirstClassTicket("economyClass-count",true);
  })
  document.getElementById("economyClass-minus").addEventListener("click", function () {
    getFirstClassTicket("economyClass-count",false);
})

//total ticket cost calculate
function totalTicketCost(){
  const firstClassInput=getInputValue("firstClass-count");
  const economyClassInput=getInputValue("economyClass-count");
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

//Button click Output

document.getElementById("booking-button").addEventListener("click",function(){
  const firstClassTicket=getInputValue("firstClass-count");
  const economyClassTicket=getInputValue("economyClass-count");
  alert(
    "Thank You Sir! You Have Booked " +
    (firstClassTicket + economyClassTicket)+ "  Tickets  "+ " And Your Total Cost is:$ "
    +document.getElementById("total-amount").innerText+" (only) "+" Hope You Enjoy Your  Beautiful Journey."
    


  )
});



 
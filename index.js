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

//


 
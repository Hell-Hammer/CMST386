function calculateTotal(){
  var sub = document.getElementById('subtotal');
  var tax = document.getElementById('taxes');
  var totals = document.getElementById('total');
  var receipts = document.getElementById('receiptsum');
  var taxable = 0;
  tax.value = 0;
  totals.value = 0;
  if((sub.value - receipts.value) > 0){
    taxable = sub.value - receipts.value;
    tax.value = Math.round(taxable * .1);
    totals.value = sub.value - tax.value;
  }
  else{
    tax.value = 0;
    totals.value = sub.value;
  }
}






function chipCalculator(){
  var chipvalues = document.getElementsByName('chipvalue');
  var chipqtys = document.getElementsByName('chipqty');
  var subtotals = document.getElementById('subtotal');
  var value = 0;
  for(var i=0;i<chipvalues.length;i++){
    if(chipqtys[i] != 0){
      value += chipvalues[i].value * chipqtys[i].value;
      subtotals.value = value;
    }
  }
  calculateTotal();
}





function unhideReceipts(){
  var receipt = document.getElementById("receiptqty");
  var value = receipt.value;
  if(value>10){
    alert("Max Receipts is 10, please try again")
  }
  var tr = document.getElementsByClassName('hide-tr');
  var hidden = document.getElementsByName("receipts");
  var table = document.getElementById('addingreceipts');
  for(var i=0; i<hidden.length;i++){
    if(i<value){
      tr[i].hidden = false;
      hidden[i].hidden = false;
      hidden[i].required = true;
    }
    else{
      tr[i].hidden = true;
      hidden[i].hidden = true;
      hidden[i].required = false;
      hidden[i].value = 0;
    }
  }
  if(value>0){
      table.hidden = false;
  }else{
      table.hidden = true;
  }
  addSum();
}

function addSum(){
  var sum = document.getElementById('receiptsum');
  var hidden = document.getElementsByName("receipts");
  var totalspent = 0;
  for(var i=0; i<hidden.length; i++){
    if(hidden[i].value != 0){
      totalspent += parseFloat(hidden[i].value)
    }
  }
  sum.value = totalspent;
  chipCalculator();
}

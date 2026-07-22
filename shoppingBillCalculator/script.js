let customerName = "Rahul";

let notebookPrice = 80;
let penPrice = 20;
let bagPrice = 750;

let notebookQuantity = 2;
let penQuantity = 5;
let bagQuantity = 1;

let notebookTotal = notebookPrice * notebookQuantity;
let penTotal = penPrice * penQuantity;
let bagTotal = bagPrice * bagQuantity;

let totalBill = notebookTotal + penTotal + bagTotal;

let discount = 100;

let finalBill = totalBill - discount;

let gst = finalBill * 18 / 100;

let amountToPay = finalBill + gst;

console.log("Customer Name:", customerName);
console.log("Notebook Total:", notebookTotal);
console.log("Pen Total:", penTotal);
console.log("Bag Total:", bagTotal);
console.log("Total Bill:", totalBill);
console.log("Discount:", discount);
console.log("Bill After Discount:", finalBill);
console.log("GST:", gst);
console.log("Final Amount:", amountToPay);

let customerName = "Rahul";
let customerAge = 22;
let isMember = true;

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

let gstRate = 18;
let gst = finalBill * gstRate / 100;

let amountToPay = finalBill + gst;

let totalItems = notebookQuantity + penQuantity + bagQuantity;
let averageItemPrice = totalBill / totalItems;
let remainingAmount = amountToPay % 100;
let doubleDiscount = discount * 2;
let increasedBagPrice = bagPrice + 50;

let customerType = "Regular";
let rewardPoints = 150;
let hasCoupon = false;

console.log("Customer Name:", customerName);
console.log("Customer Age:", customerAge);
console.log("Is Member:", isMember);

console.log("Notebook Total:", notebookTotal);
console.log("Pen Total:", penTotal);
console.log("Bag Total:", bagTotal);

console.log("Total Bill:", totalBill);
console.log("Discount:", discount);
console.log("Bill After Discount:", finalBill);

console.log("GST Rate:", gstRate + "%");
console.log("GST Amount:", gst);
console.log("Final Amount:", amountToPay);

console.log("Total Items Purchased:", totalItems);
console.log("Average Price Per Item:", averageItemPrice);
console.log("Remaining Amount (Modulo 100):", remainingAmount);
console.log("Double Discount:", doubleDiscount);
console.log("Increased Bag Price:", increasedBagPrice);

console.log("Customer Type:", customerType);
console.log("Reward Points:", rewardPoints);
console.log("Has Coupon:", hasCoupon);

console.log("Type of customerName:", typeof customerName);
console.log("Type of customerAge:", typeof customerAge);
console.log("Type of isMember:", typeof isMember);
console.log("Type of totalBill:", typeof totalBill);

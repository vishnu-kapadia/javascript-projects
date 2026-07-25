const customerName = "Rahul";
const customerAge = 22;
const isMember = true;

let customerType = "Regular";
let rewardPoints = 150;
let hasCoupon = false;

const notebookPrice = 80;
const penPrice = 20;
const bagPrice = 750;

let notebookQuantity = 2;
let penQuantity = 5;
let bagQuantity = 1;

const notebookTotal = notebookPrice * notebookQuantity;
const penTotal = penPrice * penQuantity;
const bagTotal = bagPrice * bagQuantity;

const totalBill = notebookTotal + penTotal + bagTotal;

let discount = 100;
let finalBill = totalBill - discount;

const gstRate = 18;
const gstAmount = (finalBill * gstRate) / 100;

let amountToPay = finalBill + gstAmount;

const totalItems = notebookQuantity + penQuantity + bagQuantity;
const averageItemPrice = totalBill / totalItems;
const remainingAmount = amountToPay % 100;

const doubleDiscount = discount * 2;

let updatedBagPrice = bagPrice;
updatedBagPrice += 50;

rewardPoints += 50;        
hasCoupon = true;           
customerType = "Premium";    

discount += 50;             
finalBill = totalBill - discount;
amountToPay = finalBill + (finalBill * gstRate) / 100;

console.log("Customer Name:", customerName);
console.log("Customer Age:", customerAge);
console.log("Member:", isMember);
console.log("Customer Type:", customerType);
console.log("Reward Points:", rewardPoints);
console.log("Has Coupon:", hasCoupon);

console.log("\nNotebook Total:", notebookTotal);
console.log("Pen Total:", penTotal);
console.log("Bag Total:", bagTotal);

console.log("\nTotal Bill:", totalBill);
console.log("Discount:", discount);
console.log("Bill After Discount:", finalBill);
console.log("GST Rate:", gstRate + "%");
console.log("Final Amount:", amountToPay);

console.log("\nTotal Items:", totalItems);
console.log("Average Item Price:", averageItemPrice);
console.log("Remaining Amount:", remainingAmount);
console.log("Double Discount:", doubleDiscount);
console.log("Updated Bag Price:", updatedBagPrice);

console.log("\nType of customerName:", typeof customerName);
console.log("Type of customerAge:", typeof customerAge);
console.log("Type of isMember:", typeof isMember);
console.log("Type of totalBill:", typeof totalBill);

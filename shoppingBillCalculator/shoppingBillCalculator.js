const name = "Rahul";
const age = 22;
const isMember = true;

const notebook = 80;
const pen = 20;
const bag = 750;

let notebookQty = 2;
let penQty = 5;
let bagQty = 1;

let total = notebook * notebookQty + pen * penQty + bag * bagQty;

let discount = 150;
let finalAmount = total - discount;

const gst = 18;
let payAmount = finalAmount + (finalAmount * gst) / 100;

let points = 150;
points += 50;

let customerType = "Regular";
customerType = "Premium";

let hasCoupon = false;
hasCoupon = true;

let totalItems = notebookQty + penQty + bagQty;
let avgPrice = total / totalItems;
let remainder = payAmount % 100;
let doubleDiscount = discount * 2;

console.log("Name:", name);
console.log("Age:", age);
console.log("Member:", isMember);

console.log("\nTotal Bill:", total);
console.log("Discount:", discount);
console.log("Final Amount:", payAmount);

console.log("\nReward Points:", points);
console.log("Customer Type:", customerType);
console.log("Has Coupon:", hasCoupon);

console.log("\nTotal Items:", totalItems);
console.log("Average Price:", avgPrice);
console.log("Remainder:", remainder);
console.log("Double Discount:", doubleDiscount);

console.log("\nData Types");
console.log(typeof name);
console.log(typeof age);
console.log(typeof isMember);
console.log(typeof total);

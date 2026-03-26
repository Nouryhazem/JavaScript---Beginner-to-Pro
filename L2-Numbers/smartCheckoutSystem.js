/*
Requirements
  IT must:
    1.Remove items with quantity = 0
    2.Convert prices to cents
    3.Multiply price × quantity
    4.Calculate total
    5.Add 14% tax
    6.Output final price    
*/


//Input
const cart = [
  { name: "Item A", price: 10.3, quantity: 2 },
  { name: "Item B", price: 5, quantity: 3 },
  { name: "Item C", price: 20, quantity: 1 },
  { name: "Item D", price: 30, quantity: 0 }
];

// Remove items with quantity = 0 using filter
const validItems = cart.filter(item => item.quantity > 0);
console.log("validItems: ", validItems);

// Convert prices to cents and calclate total for each item using map
const totalInCents = validItems.map(item => {
    
   return{
    name: item.name,
    total: Math.round(item.price * 100)*item.quantity
   };
});

console.log("inCents: ", totalInCents);


// Calculate total using reduce

const subtotalCents  = totalInCents.reduce((sum, item)=> {
    return sum + item.total;
},0);
console.log("total: ", subtotalCents );


// Add 14% tax using math

const taxCents = Math.round(14 * subtotalCents /100);
console.log("taxCents : ", taxCents);

// final
const final = subtotalCents + taxCents;

console.log("final: ", final );


console.log("Subtotal:", (subtotalCents / 100).toFixed(2));
console.log("Tax:", (taxCents / 100).toFixed(2));
console.log("Final:", (final / 100).toFixed(2));
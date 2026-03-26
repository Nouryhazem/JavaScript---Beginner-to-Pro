const orderItems = [10.3, 8, 5];

function sumArrayCents(arr) {
    return arr.reduce((total, item) => {
        return total + Math.round(item * 100);
    }, 0);
}

const totalCents = sumArrayCents(orderItems);
const perPersonCents = Math.round(totalCents / 3);

const taxRate = 20;
const taxCents = Math.round(totalCents * taxRate / 100);

const finalCents = totalCents + taxCents;

console.log("Total:", totalCents / 100);
console.log("Each person pays:", perPersonCents / 100);
console.log("Tax:", taxCents / 100);
console.log("Final total:", finalCents / 100);
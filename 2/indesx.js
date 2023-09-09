const cart = receipt(); 

let orderList = "";
let totalCost = 0;

for (const item in cart) {
    if (cart.hasOwnProperty(item)) {
        const info = cart[item].info;
        const price = cart[item].price;
        orderList += `${item} ${info}, `;
        totalCost += price;
    }
}

totalCost += 9000;

console.log(`Вы заказали ${orderList}| Общая стоимость ${totalCost} сум с доставкой (9000 сум)`);

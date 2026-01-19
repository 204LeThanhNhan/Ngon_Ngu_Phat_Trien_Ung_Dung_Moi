let Product = function (id, name, price, quantity, category, isAvailable){
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

let products = [];
let product1 = new Product(1, "Lenovo Legion 5", 30, 100,"Laptop", true);
let product2 = new Product(2, "ASUS TUF Gaming F15", 19, 50, "Laptop", true);
let product3 = new Product(3, "Dell PC", 45, 5, "Personal Computer", false);
let product4 = new Product(4, "Xiaomi 14", 15, 7, "Mobile", true);
let product5 = new Product(5, "Apple Watch 5", 10, 0,"Accessories", true);
let product6 = new Product(6, "PhongVu PC", 120, 100,"Personal Computer", false);

products.push(product1);
products.push(product2);
products.push(product3);
products.push(product4);
products.push(product5);
products.push(product6);

let newProducts = products.map(function(e) {
    return{
        name: e.name,
        price: e.price
    }
})

console.log(newProducts);

let haveQuantityProduct = products.filter((e) => e.quantity > 0);
console.log(haveQuantityProduct);

let priceOver30 = products.some((e) => e.price > 30);
console.log(priceOver30);

let onSellingAccessories = products.every((e) => e.category === "Accessories" && e.isAvailable === true);
console.log(onSellingAccessories);


let sumProducts = products.reduce(function(sum,e) {
    return sum += e.price * e.quantity;
}, 0);
console.log(sumProducts);

for (const iterator of products) {
    console.log(`${iterator.name} - ${iterator.category} - ${iterator.isAvailable}`);
}


for (const key in products) {
    for (const prop in products[key]) {
        console.log(`${prop}: ${products[key][prop]}`);
    }
}

let sellingAndAvailable = products.filter((e) => e.isAvailable === true && e.quantity > 0);
console.log(sellingAndAvailable);
















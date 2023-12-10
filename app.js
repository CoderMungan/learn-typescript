/*
const reversedText = (text: string) => {

    return text.split('').reverse().join('')
}

console.log(
    reversedText('Halil')
);
*/
function getProduct(id) {
    return {
        id: id,
        name: 'Urun #' + id,
        price: 100,
        test: true
    };
}
var product = getProduct(1);
function showProductInfo(name, price) {
    return "urun = ".concat(name, " fiyat = ").concat(price);
}
console.log(showProductInfo(product.name, product.price));

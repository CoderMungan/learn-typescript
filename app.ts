/*
const reversedText = (text: string) => {

    return text.split('').reverse().join('')
}

console.log(
    reversedText('Halil')
); 
*/


interface Product{
    id: number,
    name: string,
    price: number,
    test: boolean
}



function getProduct(id: number): Product{
    return {
        id,
        name: 'Urun #' + id,
        price: 100,
        test: true
    }
}


const product = getProduct(1)

function showProductInfo(name: string, price: number){
    return `urun = ${name} fiyat = ${price}`
}

console.log(
    showProductInfo(product.name, product.price)
)
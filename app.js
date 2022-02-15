function updateProductNumbar(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-numbar');
    let productValue = productInput.value;
    if (isIncreasing) {
        productValue = parseInt(productValue) + 1
    }
    else if (productValue > 0) {
        productValue = parseInt(productValue) - 1
    }
    productInput.value = productValue

    // update total 
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productValue * price

    // update calculation Total
    calculationTotal()
}

// Total calculation 
function getInputValue(product) {
    const productInput = document.getElementById(product + '-numbar');
    const productNumbar = parseInt(productInput.value);
    return productNumbar
}

function calculationTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const text = subTotal / 10;
    const totalPrice = subTotal + text;
    document.getElementById('sub-total').innerHTML = subTotal
    document.getElementById('taxt-amount').innerHTML = text
    document.getElementById('total-price').innerHTML = totalPrice
}

// phone plus 
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumbar('phone',1219, true)
})
// phone minus
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumbar('phone', 1219, false)
})

// case plus
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumbar('case',59, true)
})
// case minus
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumbar('case',59, false)
})
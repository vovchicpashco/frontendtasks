/*function sum(nikePrice,nikeQuant) {
    var nikeSub = parseInt(nikePrice) + parseInt(nikeQuant);
    return nikeSub;
}*/

function sum() {
    var nikePrice = parseInt(document.forms['testform'].nikePrice.value);
    var nikeQuant = parseInt(document.forms['testform'].nikeQuant.value);
    var nikeSub = nikePrice + nikeQuant;

document.forms['testform'].nikeSub.value = nikeSub;
}
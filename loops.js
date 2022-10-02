//for loops
var mobile = {
    brand: 'vivo',
    stroge: '128gb',
    price: 20000,
    color: 'black',
}
for(var i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    proppertyValue = mobile[propertyName];
    console.log(propertyName, propertyValue);
}
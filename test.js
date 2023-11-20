// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = parseFloat(fromEuroToDollar(3.5));

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = parseFloat((3.5 * 1.07).toFixed(2));

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
test("One euro should be 156.5 yenes", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yen = parseFloat(fromDollarToYen(3.5));

    // Si 1 euro son 156.5 dólares, entonces 3.5 euros debe ser (3.5 * 156.5) y dividirlo entre el valor de euros en dollar 1.07
    const expected = parseFloat((3.5 / 1.07 * 156.5).toFixed(2));

    // Hago mi comparación (la prueba)
    expect(yen).toBe(expected); // 1 euro son 156.5 yenes, entonces 3.5 euros deberían ser = (3.5 * 156.5) dividido entre el valor del dollar en euro 1.07
})
test("One euro should be 0.87 pound", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pound = parseFloat(fromYenToPound(3.5));

    // Si 1 euro son 156.5 dólares, entonces 3.5 euros debe ser (3.5 * 156.5) y dividirlo entre el valor de euros en dollar 1.07
    const expected = parseFloat((3.5 / 156.5 * 0.87).toFixed(2));

    // Hago mi comparación (la prueba)
    expect(pound).toBe(expected); // 1 euro son 156.5 yenes, entonces 3.5 euros deberían ser = (3.5 * 156.5) dividido entre el valor del dollar en euro 1.07
})
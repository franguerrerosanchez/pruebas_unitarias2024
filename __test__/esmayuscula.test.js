const isUpperCase = require('../utils/esmayuscula');

test("comprobar MADRID es mayuscula", () => {

        expect(isUpperCase("MADRID")).toBe(true);

}) 
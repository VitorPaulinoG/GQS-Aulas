const somar = require("./somar");


describe("Validar a função somar", () => {
    test("Somar corretamente inteiros positivos", () => {
        expect(somar(3, 2)).toBe(5);
    })
    test("Somar corretamente inteiros positivos com negativos", () => {
        expect(somar(3, -2)).toBe(1);
    })
    test("Não deve somar letras", () => {
        expect(somar("3", -2)).toBe("");
        expect(somar("3", -2)).toBe("");
    })
})
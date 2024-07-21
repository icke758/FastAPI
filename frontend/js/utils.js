// frontend/js/utils.js

export function translateKey(key) {
    const keys = {
        "squares": "Lista de números ao quadrado", 
        "multiplication_tables": "Tábuada de multiplicação", 
        "quadratic_formula": "Fórmula de Bhaskara", 
        "character_counter": "Contador de caracteres"
    };

    return keys[key] || key;
}

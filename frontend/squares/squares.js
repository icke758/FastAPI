import { createHeader } from "../js/header.js";
import { request } from "../js/requester.js";

document.addEventListener('DOMContentLoaded', () => {
    createHeader();
});

async function requestSquares() {
    const parameters = document.getElementById("input").value;
    const url = "http://0.0.0.0:8080/squares?max_number=";
    try {
        const response = await fetch(url+parameters);
        if (!response.ok) {
            throw new Error(`Falha na requisição: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.log(error.message);
    }
}

async function showSquares() {
    let squares = document.getElementById("squares");
    const request = await requestSquares();
    if (request) {
        const { max_number, squared_numbers_list } = request;
        squares.innerHTML = `
            <p>Número máximo: ${max_number}</p>
            <ul>
                ${squared_numbers_list.map(num => `<li>${num}</li>`).join('')}
            </ul>
        `;
    } else {
        squares.innerText = "Failed to fetch squares.";
    }
}

window.showSquares = showSquares;

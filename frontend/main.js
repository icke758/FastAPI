import { router } from "./js/router.js"
import { translateKey } from "./js/utils.js"
import { createHeader } from "./js/header.js";
import { request } from "./js/requester.js";

async function getRoutes() {
    const url = "http://localhost:8080/";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Falha na requisição: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.log(error.message);
    }
}

async function displayRoutes() {
    const showRoutes = document.getElementById("showRoutes");
    const routes = await getRoutes();
    if (routes) {
        for(const [key, value] of Object.entries(routes)) {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href =  router(value); 
            a.text = `Módulo: ${translateKey(key)}`;
            li.appendChild(a);
            showRoutes.appendChild(li);
        }
    } else {
        showRoutes.innerText = 'Falha ao carregar rotas';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    createHeader();
});

displayRoutes();


export async function request(url) {
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
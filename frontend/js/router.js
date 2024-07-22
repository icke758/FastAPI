// frontend/js/router.js

function getFileExtension() {
    const path = window.location.pathname;
    const match = path.match(/\.[0-9a-z]+$/i);
    return match ? match[0] : ".html";
}

export const router = (value) => {
    const ROOT = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, "");
    console.log(ROOT)
    const FILE_EXTENSION = getFileExtension();
    return ROOT + value + value + FILE_EXTENSION;
}
export function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');

    const logoLink = document.createElement('a');
    logoLink.href = "../index.html";
    logoLink.classList.add('logo');
    
    const logoIcon = document.createElement('i');
    logoIcon.classList.add('material-icons');
    logoIcon.innerText = 'fast_forward';
    
    const logoText = document.createTextNode('FastAPI');
    
    logoLink.appendChild(logoIcon);
    logoLink.appendChild(logoText);
    
    header.appendChild(logoLink);

    document.body.insertBefore(header, document.body.firstChild);
    
    const style = document.createElement('style');
    style.textContent = `
        * { box-sizing: border-box; }
        body { 
            margin: 0;
            font-family: 'Roboto', sans-serif;
        }
        .header {
            overflow: hidden;
            background-color: #f1f1f1;
            padding: 20px 10px;
        }
        .header a {
            float: left;
            color: black;
            text-align: center;
            padding: 12px;
            text-decoration: none;
            font-size: 18px; 
            line-height: 25px;
            border-radius: 4px;
        }
        .header a.logo {
            font-size: 25px;
            font-weight: bold;
        }
        .header a:hover {
            background-color: #ddd;
            color: black;
        }
        @media screen and (max-width: 500px) {
            .header a {
                float: none;
                display: block;
                text-align: left;
            }
            .header-right {
                float: none;
            }
        }
    `;
    document.head.appendChild(style);
}

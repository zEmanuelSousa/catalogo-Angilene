// --- CONFIGURAÇÃO DO WHATSAPP ---
// Substitua pelo seu número (apenas números, incluindo código do país '55' e DDD)
const NUMERO_WHATSAPP = "558588260377";

// --- LISTA DE PRODUTOS ---
const products = [
    {
        id: "Kit 1",
        image: "img/img1.png",
        title: "Presente Tododia Cereja e Avelã",
        description: "-Hidratante corporal 400ml<br>-Bodysplash tododia 200ml<br>-Caixa de sabonetes 5×90g cada",
        priceHtml: "De <s>R$207,70</s> por R$125,00"
    },
    {
        id: "Kit 2",
        image: "img/img2.png",
        title: "Presente Tododia Macadâmia",
        description: "-Hidratante corporal 400ml<br>-Bodysplash tododia 200ml<br>-Caixa de sabonetes 5×90g cada",
        priceHtml: "De <s>R$207,70</s> por R$125,00"
    },
    {
        id: "Kit 3",
        image: "img/img3.png",
        title: "Presente Tododia Romã e Amêndoas Glaceadas",
        description: "-Hidratante corporal 400ml<br>-Bodysplash tododia 200ml<br>-Caixa de sabonetes 5×90g cada",
        priceHtml: "De <s>R$207,70</s> por R$125,00"
    },
    {
        id: "Kit 4",
        image: "img/img4.png",
        title: "Presente Tododia Romã e Flor de Amora",
        description: "-Hidratante corporal 400ml<br>-Bodysplash tododia 200ml<br>-Caixa de sabonetes 5×90g cada",
        priceHtml: "De <s>R$207,70</s> por R$125,00"
    },
    {
        id: "Kit 5",
        image: "img/img5.png",
        title: "Presente Tododia Flor de Pêssego e Jasmim",
        description: "-Hidratante corporal 400ml<br>-Bodysplash 200ml",
        priceHtml: "De <s>R$172,80</s> por R$99,90"
    },
    {
        id: "Kit 6",
        image: "img/img6.png",
        title: "Presente Ilía",
        description: "-Deo corporal 100ml<br>-Hidratante corporal 80ml",
        priceHtml: "De <s>R$96,20</s> por R$65,00"
    },
    {
        id: "Kit 7",
        image: "img/img7.png",
        title: "Presente Tododia Flor de Pêra e Melissa",
        description: "-Bodysplash tododia 200ml<br>-Hidratante corporal 100ml<br>-Caixa de sabonetes sortidos 5×90g cada",
        priceHtml: "De <s>R$193,70</s> por R$110,00"
    },
    {
        id: "Kit 8",
        image: "img/img8.png",
        title: "Presente Eudora",
        description: "-Hidratante corporal rosa absoluta 400ml<br>-Bodyspray Lyra 100ml",
        priceHtml: "De <s>R$104,80</s> por R$69,90"
    },
    {
        id: "Kit 9",
        image: "img/img9.png",
        title: "Luna Liberdade",
        description: "-Luna liberdade 75ml<br>",
        priceHtml: "De <s>R$185,90</s> por R$89,90"
    },
    {
        id: "Kit 10",
        image: "img/img10.png",
        title: "Deo Parfum Ilía Secreto",
        description: "-Deo parfum ilía secreto 50ml<br>",
        priceHtml: "De <s>R$199,90</s> por R$119,90"
    },
    {
        id: "Kit 11",
        image: "img/img11.png",
        title: "Deo Parfum Ilía Completa",
        description: "-Deo parfum ilía completa 50ml<br>",
        priceHtml: "De <s>R$199,90</s> por R$119,90"
    },
    {
        id: "Kit 12",
        image: "img/img12.png",
        title: "Deo Parfum Ilía Laços",
        description: "-Deo parfum ilía laços 50ml<br>",
        priceHtml: "De <s>R$199,90</s> por R$119,90"
    },
    {
        id: "Kit 13",
        image: "img/img13.png",
        title: "Presente Luna Absoluta",
        description: "-Miniatura  25ml<br>-Sabonete líquido 100ml",
        priceHtml: "De <s>R$104,90</s> por R$65,00"
    },
    {
        id: "Kit 14",
        image: "img/img14.png",
        title: "Presente LovIU Touch",
        description: "-Deo parfum 75ml<br>-Sabonete líquido 150g",
        priceHtml: "De <s>R$172,89</s> por R$99,90"
    },
    {
        id: "Kit 15",
        image: "img/img15.png",
        title: "Presente Tododia Ameixa e Flor de Baunilha ",
        description: "-Hidratante corporal 200ml<br>-Sabonete líquido 200ml<br>-Bodysplash 60ml ",
        priceHtml: "De <s>R$133,40</s> por R$77,00"
    },
];

// Ao carregar a página, configura os botões e gera os cards
document.addEventListener("DOMContentLoaded", () => {

    const productsGrid = document.querySelector(".products-grid");

    // Gerar os cards de produtos dinamicamente
    if (productsGrid) {
        products.forEach(product => {
            const article = document.createElement('article');
            article.className = 'product-card';
            article.setAttribute('data-kit', product.id);

            article.innerHTML = `
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.title}" class="product-image">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-description">
                        ${product.description}
                    </p>
                    <div class="product-footer">
                        <span class="product-price"> ${product.priceHtml}</span>
                        <button class="btn-whatsapp action-buy">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.534a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                            </svg>
                            Comprar
                        </button>
                    </div>
                </div>
            `;
            productsGrid.appendChild(article);
        });
    }

    // Seleciona todos os botões de comprar (agora que estão na tela)
    const buyButtons = document.querySelectorAll(".action-buy");

    buyButtons.forEach(button => {
        button.addEventListener("click", function () {

            // Tenta achar o card pai do botão clicado
            const productCard = this.closest(".product-card");

            if (productCard) {
                // Pega o nome do kit direto do próprio título (h3) do produto
                const titleElement = productCard.querySelector(".product-title");
                const kitName = titleElement ? titleElement.textContent.trim() : "Produto";

                // Pega o preço se quiser mostrar na mensagem (opcional)
                const priceElement = productCard.querySelector(".product-price");
                const price = priceElement ? priceElement.textContent.trim() : "";

                // Monta a mensagem pré-pronta
                const mensagem = `Olá, vim pelo catálogo! Gostaria de mais informações ou de adquirir o *${kitName}* (${price}).`;

                // Codifica a mensagem para funcionar na URL
                const mensagemCodificada = encodeURIComponent(mensagem);

                // Monta o link final do WhatsApp
                const linkWhatsapp = `https://wa.me/${NUMERO_WHATSAPP}?text=${mensagemCodificada}`;

                // Abre o link em uma nova aba
                window.open(linkWhatsapp, "_blank");
            }
        });
    });

    // --- FILTRO DE PESQUISA ---
    const searchInput = document.getElementById("searchInput");
    const filterCards = document.querySelectorAll(".product-card"); // Pega os cards gerados

    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const searchTerm = this.value.toLowerCase().trim();

            filterCards.forEach(card => {
                const titleElement = card.querySelector(".product-title");
                if (titleElement) {
                    const title = titleElement.textContent.toLowerCase();
                    if (title.includes(searchTerm)) {
                        card.style.display = ""; // Mostra
                    } else {
                        card.style.display = "none"; // Oculta
                    }
                }
            });
        });
    }

    // --- ANIMAÇÃO SUAVE DE BALANÇO (JS) ---
    const productImages = document.querySelectorAll(".product-image"); // Pega as imagens geradas

    // Iniciamos a animação
    function animateImages(time) {
        productImages.forEach((img, index) => {
            // O índice (index) cria um "offset" para que cada imagem balance em um ritmo levemente diferente
            const speedSway = 1200; // velocidade da rotação (menor = mais rápido)
            const speedFloat = 1500; // velocidade de subir/descer

            // Math.sin/cos criam ondas perfeitas e contínuas entre -1 e 1.
            const sway = Math.sin((time / speedSway) + index) * 3; // 3 graus de rotação
            const float = Math.cos((time / speedFloat) + index) * 4; // 4px de flutuação vertical

            // Injetamos esses valores continuamente nas variáveis CSS nativas da imagem:
            img.style.setProperty('--sway', `${sway}deg`);
            img.style.setProperty('--float', `${float}px`);
        });

        // Pede ao navegador para atualizar o próximo quadro (loop contínuo)
        requestAnimationFrame(animateImages);
    }

    // Dar início ao loop
    requestAnimationFrame(animateImages);
});

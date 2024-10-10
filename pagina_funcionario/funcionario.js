function toggleProductDetails(id) {
    const productDetail = document.getElementById(`productDetail${id}`);
    const button = document.querySelector(`[aria-controls="productDetail${id}"]`);

    if (productDetail.style.display === "none" || !productDetail.style.display) {
        productDetail.classList.add("expand");
        productDetail.classList.remove("collapse");
        button.setAttribute("aria-expanded", "true");
    } else {
        productDetail.classList.add("collapse");
        productDetail.classList.remove("expand");
        button.setAttribute("aria-expanded", "false");
    }

    productDetail.style.display = productDetail.style.display === "none" ? "block" : "none";
}

    // Verifica se a div está visível e aplica a classe de expansão ou contração
    // Alterna a visibilidade
    // if (productDetail.style.display === "none" || !productDetail.style.display) {
    //     productDetail.style.display = "block";
    // } else {
    //     productDetail.style.display = "none";
    // }


function toggleProductDetails(id) {
    const productDetail = document.getElementById(`productDetail${id}`);

    // Verifica se a div está visível e aplica a classe de expansão ou contração
    if (productDetail.style.display === "none" || !productDetail.style.display) {
        productDetail.classList.add("expand");
        productDetail.classList.remove("collapse");
    } else {
        productDetail.classList.add("collapse");
        productDetail.classList.remove("expand");
    }

    // Alterna a visibilidade
    if (productDetail.style.display === "none" || !productDetail.style.display) {
        productDetail.style.display = "block";
    } else {
        productDetail.style.display = "none";
    }
}

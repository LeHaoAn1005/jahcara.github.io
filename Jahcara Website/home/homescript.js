window.addEventListener("scroll", function() {
    const imgToScroll = document.getElementById("buyingintro-img");
    const textToScroll = document.getElementById("info-discover");
    const textToScroll2 = document.getElementById("info-discover-below");
    const productsButton = document.getElementById("products-button");
    const learnMoreButton = document.getElementById("learn-more-button");

    if (window.scrollY >= 75)
    {
        imgToScroll.classList.add("darker");
    }
    else
    {
        imgToScroll.classList.remove("darker");
    }

    if (window.scrollY >= 200) {
        textToScroll.classList.add("show");
        textToScroll2.classList.add("show");
        productsButton.classList.add("show");
        learnMoreButton.classList.add("show");
    }
})
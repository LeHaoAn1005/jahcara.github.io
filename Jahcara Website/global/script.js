/* Menu Bar */
const navBar = document.getElementById("nav-content");
const menuButton = document.getElementById("nav-img3");
const menuSection = document.querySelector(".nav-menu");
const pageContent = document.getElementById("page-content");
const closeButton = document.getElementById("close-button");

/* Show Menu */
if (menuButton) {
    menuButton.addEventListener("click", function () {
        if (menuSection) {
            menuSection.classList.add("show");
            menuSection.classList.remove("close");
        }
        if (pageContent) pageContent.classList.add("hide");
        if (navBar) navBar.classList.add("hide");
        document.body.classList.add("no-scroll");
    });
}

/* Close Menu */
if (closeButton) {
    closeButton.addEventListener("click", function () {
        if (menuSection) {
            menuSection.classList.remove("show");
            menuSection.classList.add("close");
        }
        if (pageContent) pageContent.classList.remove("hide");
        if (navBar) navBar.classList.remove("hide");
        document.body.classList.remove("no-scroll");
    });
}

/* Cart Dropdown + Add To Cart */
document.addEventListener("DOMContentLoaded", function () {
    const cartButton = document.getElementById("nav-img2");
    const cartDropdown = document.querySelector(".cart-dropdown");
    const checkOutButton = document.getElementById("your-cart");

    let itemInCart = false;

    const addToCartButtonPolo1 = document.getElementById("polo1-cart");
    const quantityInput = document.getElementById("polo1-quantity");
    const sizeSelect = document.getElementById("polo1-size");

    const addToCartButtonPolo2 = document.getElementById("polo2-cart");
    const quantityInput2 = document.getElementById("polo2-quantity");
    const sizeSelect2 = document.getElementById("polo2-size");

    const addToCartButtonJacketMen = document.getElementById("jacket-men-cart");
    const quantityInputMen = document.getElementById("jacket-men-quantity");
    const sizeSelectMen = document.getElementById("jacket-men-size");

    const addToCartButtonJacketWomen = document.getElementById("jacket-women-cart");
    const quantityInputWomen = document.getElementById("jacket-women-quantity");
    const sizeSelectWomen = document.getElementById("jacket-women-size");

    const addToCartButtonAoDai = document.getElementById("aodai-cart");
    const quantityInputAoDai = document.getElementById("aodai-quantity");
    const sizeSelectAoDai = document.getElementById("aodai-size");

    if (cartButton && cartDropdown) {
        cartButton.addEventListener("click", function () {
            if (cartDropdown.style.display === "block") {
                cartDropdown.style.display = "none";
                cartDropdown.classList.remove("show");
            } else {
                cartDropdown.style.display = "block";
                cartDropdown.classList.add("show");
            }
        });
    }

    function ensureCartItemsContainer() {
        let cartItemsContainer = document.getElementById("cart-items");
        if (!cartItemsContainer) {
            cartItemsContainer = document.createElement("div");
            cartItemsContainer.id = "cart-items";
            if (cartDropdown) {
                cartDropdown.appendChild(cartItemsContainer);
            } else {
                document.body.appendChild(cartItemsContainer);
            }
        }
        return cartItemsContainer;
    }

    function addItemToCart(imgSrc, name, quantity, size) {
        const cartItemsContainer = ensureCartItemsContainer();
        const emptyMsg = document.getElementById("cart-empty");

        if (emptyMsg && emptyMsg.parentNode) emptyMsg.remove();

        const newItem = document.createElement("div");
        newItem.classList.add("cart-item", "down");

        newItem.innerHTML = `
            <img src="${imgSrc}" style="width:60px;height:auto;">
            <div class="info">
                <p>${name}</p>
                <p>Size: ${size}</p>
                <p>Quantity: ${quantity}</p>
            </div>
            <button class="remove-btn" aria-label="Remove">×</button>
        `;

        newItem.querySelector(".remove-btn").addEventListener("click", function () {
            newItem.remove();
            const container = document.getElementById("cart-items");
            if (container.children.length === 0) {
                const msg = document.createElement("p");
                msg.id = "cart-empty";
                msg.textContent = "Your cart is empty";
                container.appendChild(msg);
                itemInCart = false;
            }
        });

        cartItemsContainer.appendChild(newItem);
        itemInCart = true;
    }

    if (addToCartButtonPolo1) {
        addToCartButtonPolo1.addEventListener("click", function () {
            const quantity = (quantityInput && quantityInput.value) || 1;
            const size = (sizeSelect && sizeSelect.value) || "Choose Size";
            if (!size || size === "Choose Size") {
                alert("Please Pick A Size First");
            } else {
                addItemToCart("../../images/polo1.png", "Polo (Black)", quantity, size);
            }
        });
    }

    if (checkOutButton) {
        checkOutButton.addEventListener("click", function () {
            if (!itemInCart) {
                alert("Your cart is empty");
                return;
            }
            alert("Checkout Sucessfully!");
            window.location.href = "../../home/home.html";
        });
    }

    if (addToCartButtonPolo2) {
        addToCartButtonPolo2.addEventListener("click", function () {
            const quantity = (quantityInput2 && quantityInput2.value) || 1;
            const size = (sizeSelect2 && sizeSelect2.value) || "Choose Size";
            if (!size || size === "Choose Size") {
                alert("Please Pick A Size First");
            } else {
                addItemToCart("../../images/polo2.png", "Polo (White)", quantity, size);
            }
        });
    }

    if (addToCartButtonJacketMen) {
        addToCartButtonJacketMen.addEventListener("click", function () {
            const quantity = (quantityInputMen && quantityInputMen.value) || 1;
            const size = (sizeSelectMen && sizeSelectMen.value) || "Choose Size";
            if (!size || size === "Choose Size") {
                alert("Please Pick A Size First");
            } else {
                addItemToCart("../../images/jacket-man.png", "Jacket (Men)", quantity, size);
            }
        });
    }

    if (addToCartButtonJacketWomen) {
        addToCartButtonJacketWomen.addEventListener("click", function () {
            const quantity = (quantityInputWomen && quantityInputWomen.value) || 1;
            const size = (sizeSelectWomen && sizeSelectWomen.value) || "Choose Size";
            if (!size || size === "Choose Size") {
                alert("Please Pick A Size First");
            } else {
                addItemToCart("../../images/jacket-woman.png", "Jacket (Women)", quantity, size);
            }
        });
    }

    if (addToCartButtonAoDai) {
        addToCartButtonAoDai.addEventListener("click", function () {
            const quantity = (quantityInputAoDai && quantityInputAoDai.value) || 1;
            const size = (sizeSelectAoDai && sizeSelectAoDai.value) || "Choose Size";
            if (!size || size === "Choose Size") {
                alert("Please Pick A Size First");
            } else {
                addItemToCart("../../images/aodai1.png", "Áo Dài", quantity, size);
            }
        });
    }
});

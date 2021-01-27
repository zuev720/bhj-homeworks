"use strict";

const cartProducts = document.querySelector('.cart__products');

[...document.querySelectorAll('.product')].forEach(product => {
    const productId = product.dataset.id;
    const productImage = product.querySelector('.product__image').src;
    const minus = product.querySelector('.product__quantity-control_dec');
    const plus = product.querySelector('.product__quantity-control_inc');
    const productAddCart = product.querySelector('.product__add');
    let productCount = product.querySelector('.product__quantity-value');
    productCount.textContent = String(0);

    plus.addEventListener('click', () => {
        Number(productCount.textContent++);
    });

    minus.addEventListener('click', () => {
        if (Number(productCount.textContent) <= 0) {
            return;
        }
        Number(productCount.textContent--);
    });

    productAddCart.addEventListener('click', () => {
        if (Number(productCount.textContent) === 0) {
            return;
        } else {
            addProductCart(productId, productImage, Number(productCount.textContent));
            productCount.textContent = String(0);
        }
    });
});


function addProductCart(productId, productImage, productCount) {
    if (checkProductInCart(productId) === false) {
        let cartProduct = document.createElement('div');
        cartProduct.className = 'cart__product';
        cartProduct.setAttribute('data-id', productId);
        let cartProductImage = document.createElement('img');
        cartProductImage.className = 'cart__product-image';
        cartProductImage.src = productImage;
        let cartProductCount = document.createElement('div');
        cartProductCount.className = 'cart__product-count';
        cartProductCount.textContent = productCount;
        cartProduct.insertAdjacentElement('afterbegin', cartProductImage);
        cartProduct.insertAdjacentElement('beforeend', cartProductCount);
        cartProducts.appendChild(cartProduct);
    } else {
        let productMatchId = [...cartProducts.querySelectorAll('.cart__product')].find(element => element.dataset.id === productId);
        productMatchId.querySelector('.cart__product-count').textContent = Number(productMatchId.querySelector('.cart__product-count').textContent) + productCount;
    }
}

function checkProductInCart(productId) {
    return [...cartProducts.querySelectorAll('.cart__product')].some(element => element.dataset.id === productId);
}
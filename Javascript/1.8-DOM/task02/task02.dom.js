const products = ['Pan', 'Leche', 'Huevos', 'Café'];

const list = document.createElement('ul');

products.forEach((product) => {
    const item = document.createElement('li');
    item.textContent = product;
    list.appendChild(item);
});

const existingScript = document.querySelector('script'); 
existingScript.before(list); 

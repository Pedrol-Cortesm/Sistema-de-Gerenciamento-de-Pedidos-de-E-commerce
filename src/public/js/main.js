// Função para cadastrar um novo produto
function createProduct(event) {
    event.preventDefault();
  
    const name = document.getElementById('product-name').value;
    const description = document.getElementById('product-description').value;
    const price = document.getElementById('product-price').value;
    const quantity = document.getElementById('product-quantity').value;
  
    // Enviar uma requisição POST para o backend para cadastrar o produto
    fetch('/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        description,
        price,
        quantity
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Limpar os campos do formulário
        document.getElementById('product-name').value = '';
        document.getElementById('product-description').value = '';
        document.getElementById('product-price').value = '';
        document.getElementById('product-quantity').value = '';
        // Atualizar a lista de produtos
        fetchProducts();
      })
      .catch(error => console.error(error));
  }
  
  // Função para obter a lista de produtos do backend e exibir na página
  function fetchProducts() {
    // Enviar uma requisição GET para o backend para obter a lista de produtos
    fetch('/products')
      .then(response => response.json())
      .then(data => {
        const productsContainer = document.getElementById('products-container');
        productsContainer.innerHTML = '';
  
        data.forEach(product => {
          const productCard = document.createElement('div');
          productCard.classList.add('product-card');
          productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Preço: R$ ${product.price}</p>
            <p>Estoque: ${product.quantity}</p>
          `;
          productsContainer.appendChild(productCard);
        });
      })
      .catch(error => console.error(error));
  }
  
  // Registrar o evento de submit do formulário
  document.getElementById('product-form').addEventListener('submit', createProduct);
  
  // Inicializar a lista de produtos
  fetchProducts();
  
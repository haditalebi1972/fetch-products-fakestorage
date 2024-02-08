
async function getProduct() {
    const inputElement = document.querySelector('#productIdInput');
    const productIds = inputElement.value.replace(/,/g, '-').split('-').map(id => id.trim());
    const productContainer = document.querySelector('#productContainer');
    const loadingElement = document.querySelector('#loading');
  
    try {
      
      loadingElement.style.display = 'block';
  
     
      productContainer.innerHTML = '';
  
      for (const productId of productIds) {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const product = await response.json();
  
        
        const card = document.createElement('div');
        card.className = 'productCard';
        card.innerHTML = `
          <h3>${product.title}</h3>
          <p>${product.description}</p>
          <p>$${product.price}</p>
        `;
  
        
        card.addEventListener('click', () => {
          card.remove();
        });
  
        
        productContainer.appendChild(card);
      }
  
     
      loadingElement.style.display = 'none';
    } catch (error) {
      console.error('Error fetching product:', error);
     
      loadingElement.style.display = 'none';
      productContainer.innerHTML = '<p>Error fetching product. Please try again.</p>';
    }
  }
  
import "./style/style.scss"
import "./style/lista.scss"

function popularTabelaApi(searchQuery = '') {
    const tableBody = document.querySelector('#tabela tbody');
  
    fetch('https://target-api-simples.cyclic.app/livros')
      .then(response => response.json())
      .then(data => {
        const filteredData = data.filter(item =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
  
        tableBody.innerHTML = '';
  
        filteredData.forEach(item => {
          const row = tableBody.insertRow();
          row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.description}</td>
          `;
        });
      })
      .catch(error => console.error(error));
  }
  
  const input = document.querySelector('#buscarLivros');
  input.addEventListener('input', event => {
    popularTabelaApi(event.target.value);
  });
  
  popularTabelaApi();
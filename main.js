import "./style/style.scss"
import "./style/gerencia.scss"

function cadastrar() {
    const elTitle = document.getElementById("title")
    const elDescription = document.getElementById("description")
  
    const title = elTitle.value
    const description = elDescription.value
  
    if (title === "" || description === "") {
      const status = document.querySelector(".status")
      status.textContent = "Por favor, preencha todos os campos."
      status.classList.add("status--erro")
      status.classList.remove("status--sucesso")
      status.classList.remove("status--show")
      return 
    }
  
    const data = {
      title: title,
      description: description
    }
  
    fetch("https://target-api-simples.cyclic.app/livros", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.ok) {
        const status = document.querySelector(".status")
        status.textContent = "Livro cadastrado com sucesso!"
        status.classList.remove("status--erro")
        status.classList.add("status--sucesso")
        status.classList.add("status--show")
      } else {
        response.text().then(errorMessage => {
          const status = document.querySelector(".status")
          status.textContent = errorMessage || "Erro ao cadastrar livro."
          status.classList.add("status--erro")
          status.classList.remove("status--sucesso")
          status.classList.add("status--show")
        });
      }
    })
    .catch(error => {
      console.error(error)
      const status = document.querySelector(".status")
      status.textContent = error.message
      status.classList.add("status--erro")
      status.classList.remove("status--sucesso")
      status.classList.add("status--show")
    })
  }
  
  
  
  const cadastrarButton = document.getElementById("cadastrar")
  cadastrarButton.addEventListener("click", cadastrar)
  
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event)
{
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;

    if (nome.trim() === "" || email.trim() === "")
    {
        alert("Preencha todos os campos!");
    }
        else if (!email.includes("@") || !email.includes(".") || !email.includes("com"))
        {
            alert ("Digite um e-mail válido");
        }
        else
        {
            alert("Formulário enviado com sucesso!");
        }
    

    });
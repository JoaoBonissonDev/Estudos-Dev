const formulario = document.getElementById("Formulario");

formulario.addEventListener("submit", function(event)
{
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    let assunto = document.getElementById("assunto").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome.trim() === "" || email.trim() === "" || telefone.trim() === "" || assunto.trim() === "" || mensagem.trim() === "")
    {
        alert("Preencha todos os campos!");
    }
        else if (!email.includes("@") || !email.includes(".") || !email.includes("com"))
        {
            alert ("Digite um e-mail válido");
        }

        else if (telefone.length < 11 || telefone.length > 12)
        {
            alert ("Digite um número de telefone válido com DDD (ex: 31999999999) !");
        }

        else
        {
            alert("Formulário enviado com sucesso!");

            formulario.reset();
        }
    

    });

const init = () => {  //função chamada quando a janela carregar
  const validateEmail = (event) => { //validação do e-mail
        const input = event.currentTarget;
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|  (".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailTest = regex.test(input.value);

        if(!emailTest) { //se não passar pela validção o botão será desabilitado 
            submitButton.setAttribute("disabled", "disabled");
            input.nextElementSibling.classList.add('error');//pega o elemento seguinte ao input de e-mail e adiciona a classe error
        } else {
            submitButton.removeAttribute("disabled");
            input.nextElementSibling.classList.remove('error'); //pega o elemento seguinte ao input de e-mail e remove a classe error
        }
    }

    const validatePassowrd = (event) => { //validação da senha.
        const input = event.currentTarget;

        if(input.value.length < 8) {
            submitButton.setAttribute("disabled", "disabled");
            input.nextElementSibling.classList.add('error');
        } else {
            submitButton.removeAttribute("disabled");
            input.nextElementSibling.classList.remove('error');
        }
    }
    
    const inputEmail = document.querySelector('input[type="email"]'); //captura o campo e-mail
    const inputPassword = document.querySelector('input[type="password"]'); //captura o campo senha
    const submitButton = document.querySelector('#botao'); //captura o botão


    inputEmail.addEventListener('input', validateEmail);
    inputPassword.addEventListener('input', validatePassowrd);

    const errorHandler = () => { //muda o status do botão quando  há erro
        submitButton.classList.remove('loading');
        submitButton.classList.remove('success');
        submitButton.classList.add('error');
        submitButton.textContent = "Erro";
    }

    const successHandler = () => { //muda o status do botão quando as informações estão corretas
        submitButton.classList.remove('loading');
        submitButton.classList.remove('error');
        submitButton.classList.add('success');
        submitButton.textContent = "Entrando";
    }

    if(submitButton) {
        submitButton.addEventListener('click', (event) => { //escuta o evento click
            event.preventDefault();

            submitButton.textContent = "Loading...";

            fetch('https://reqres.in/api/login', {  //Envia os dados para a API
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: inputEmail.value,
                    password: inputPassword.value,
                })
            }).then((response) => {  //ouve a resposta da API
                if (response.status !== 200) {
                    return errorHandler();
                }
                
                successHandler();
                
            }).catch(() => {
                errorHandler();
            })
        })
    }
}

window.onload = init; //carrega a função init quando a janela carregar

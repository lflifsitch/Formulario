

           

            function enviar() {
                var nom = document.getElementById('name')
                var email = document.getElementById('email')
                var tel = document.getElementById('telefone')
                var pass = document.getElementById('pass')

                var corp = document.getElementById('nome')
                if (corp.value.length == 0 || nom.value.length == 0 || email.value.length == 0 || tel.value.length == 0 || pass.value.length == 0) {
                    alert(`*ERRO* Verifique novamente os dados inseridos.`)

                } else {
                    alert(`Formulário enviado com sucesso!`)
                    location.replace("agradecimento.html") 
                }

            }





         
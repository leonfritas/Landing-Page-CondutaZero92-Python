
const campoNome = document.querySelector('.campoNome')
const campoEmail = document.querySelector('.campoEmail')
const campoData = document.querySelector('.campodata')
const agradecimento = document.getElementsByClassName('agradecimento')
const labelInput = document.getElementsByClassName('label-input')
const divCampoData = document.getElementsByClassName('divCampoData')
const botaoEnviar = document.getElementsByClassName('botao')
const cadastroContainer = document.getElementsByClassName('contato-container')



const ingresso = (event)=>{
    if (campoNome.value != '' &&
        campoEmail.value != '' &&
        campoData.value != '' ){     
        divCampoData[0].classList.add('esconder')
        botaoEnviar[0].classList.add('esconder')
        for(i = 0; i <= 1; i++){
            labelInput[i].classList.add('esconder')
        }
        agradecimento[0].classList.remove('esconder')

        event.preventDefault()

        const resetarForm = ()=>{
            campoNome.value = '' 
            campoEmail.value = '' 
            campoData.value = ''      
            divCampoData[0].classList.remove('esconder')
            botaoEnviar[0].classList.remove('esconder')
            for(i = 0; i <= 1; i++){
                labelInput[i].classList.remove('esconder')
            }
            agradecimento[0].classList.add('esconder')  
        }
        setTimeout(resetarForm, 3000);
    }else{
        alert('Preencha todos os campos.')
        event.preventDefault()
    }

   
}


    





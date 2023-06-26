let cidade = document.querySelector('#cidade')
let rua = document.querySelector('#rua')
let bairro = document.querySelector('#bairro')
let consulta = document.querySelector('#consulta')

consulta.addEventListener('click', ()=>{
    let val_cep = document.querySelector('#val_cep').value
    console.log(val_cep)
    const cep = new XMLHttpRequest()
    cep.open('GET', 'https://viacep.com.br/ws/'+val_cep+'/json/')
    cep.send()
    console.log(cep)
    
    cep.onload = function(){
        let pesq_cep = JSON.parse(cep.responseText)
        console.log(pesq_cep)
        

        if(pesq_cep.logradouro != ''){
            cidade.setAttribute('value',pesq_cep.localidade);
            rua.setAttribute('value',pesq_cep.logradouro);
            bairro.setAttribute('value',pesq_cep.bairro);
            document.querySelector('#est').value = (pesq_cep.uf)

        }else{
            cidade.setAttribute('value',pesq_cep.localidade);
            document.querySelector('#est').value = (pesq_cep.uf)
            rua.setAttribute('value','');
            bairro.setAttribute('value','');

        }

    }
})

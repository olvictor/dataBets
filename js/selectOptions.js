const basqueteOptions = document.getElementById('basqueteOptions');
const futebolOptions = document.getElementById('futebolOptions');
const selectOption = document.getElementById('bet-modalidade')

const changeselect = () =>{
       if(selectOption.value === 'futebol'){
          futebolOptions.classList.toggle('hide');
          basqueteOptions.classList.add('hide');
       }
       if(selectOption.value === 'basquete'){
        basqueteOptions.classList.toggle('hide');
        futebolOptions.classList.add('hide');

       }
       if(selectOption.value === ''){
        futebolOptions.classList.add('hide');
        basqueteOptions.classList.add('hide');
       }
} 
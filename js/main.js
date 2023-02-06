const btnForm = document.getElementById('btn-form');
const tbody = document.getElementById('tbody');
const form = document.getElementById('form');
const editForm = document.getElementById('editForm');
const betValor = document.getElementById('bet-valor').value;
const betOdd = document.getElementById('bet-odd').value;
const betRetorno = betValor*betOdd; 
const betLucro = betRetorno-betValor
const select = document.getElementById('bet-modalidade');
const betModalidade = select.options[select.selectedIndex].text;
const timeMandante = document.getElementById('timeMandante').value;
const timeVisitante = document.getElementById('timeVisitante').value;
const betData = document.getElementById('date').value;
const cancelBtn = document.getElementById('cancelBtn-form');
const editBtn = document.getElementById('editBtn-form');
const editIndice = document.getElementById('bet-Indice');
const basqueteOption1 = document.getElementById('basqueteOption1');
const basqueteOption2 = document.getElementById('basqueteOption2');
const basqueteOption3 = document.getElementById('basqueteOption3');
const basqueteOption4 = document.getElementById('basqueteOption4');
const futebolOption1 = document.getElementById('futebolOption1');
const futebolOption2 = document.getElementById('futebolOption2');
const futebolOption3 = document.getElementById('futebolOption3');
const futebolOption4 = document.getElementById('futebolOption4');
const futebolOption5 = document.getElementById('futebolOption5');



const getItemDb = () => JSON.parse(localStorage.getItem('dbApostas')) ?? [];

const setItemDB = (dbApostas) => localStorage.setItem('dbApostas',JSON.stringify(dbApostas))


const limpaCampos = () =>{
    const betValor = document.getElementById('bet-valor');
    const betOdd = document.getElementById('bet-odd');
    const timeMandante = document.getElementById('timeMandante');
    const timeVisitante = document.getElementById('timeVisitante');
    const betData = document.getElementById('date');
    const basqueteOption1 = document.getElementById('basqueteOption1');
    const basqueteOption2 = document.getElementById('basqueteOption2');
    const basqueteOption3 = document.getElementById('basqueteOption3');
    const basqueteOption4 = document.getElementById('basqueteOption4');
    const futebolOption1 = document.getElementById('futebolOption1');
    const futebolOption2 = document.getElementById('futebolOption2');
    const futebolOption3 = document.getElementById('futebolOption3');
    const futebolOption4 = document.getElementById('futebolOption4');
    const futebolOption5 = document.getElementById('futebolOption5');

    betValor.value = "";
    betOdd.value = "";
    timeMandante.value ="";
    timeVisitante.value = "";
    betData.value = "";
    futebolOption1.value = '';
    futebolOption2.value = '';
    futebolOption3.value = '';
    futebolOption4.value = '';
    futebolOption5.value = '';
    basqueteOption1.value = ''
    basqueteOption2.value = ''
    basqueteOption3.value = ''
    basqueteOption4.value = ''
}

const criarItemTable = (indice, valor, odd, retorno, lucro, tipo, modalidade, confronto, data, status) =>{
    const row = tbody.insertRow();
    row.innerHTML= 
    `
    <td>${indice}</td>
    <td>R$ ${valor},00</td>
    <td>${odd}</td>
    <td>R$ ${retorno}</td>
    <td>R$ ${lucro}</td>
    <td>${tipo}</td>
    <td>${modalidade}</td>
    <td>${confronto}</td>
    <td>${data}</td>
    <td>
            <button type="button" class="green" data-green='${indice}'><i class="fa-sharp fa-solid fa-check"></i></button>
            <button type="button" class="red" data-red='${indice}'><i class="fa-sharp fa-solid fa-xmark"></i></button>
    </td>
    <td>
                      <button class="button edit" data-edit='${indice}'>
                        <i class="fa-regular fa-pen-to-square"></i>
                      </button>
                      <button class="button remove" data-remove='${indice}'>
                        <i class="fa-solid fa-trash"></i>
                      </button>
    </td>

    `
    if(status === 'green'){
        document.querySelectorAll('tbody tr')[indice].classList.add('green')

    }
    if (status === 'red'){
        document.querySelectorAll('tbody tr')[indice].classList.add('red')
    }
}

const limparApostas = () =>{
    while(tbody.firstChild){
        tbody.removeChild(tbody.lastChild)

    } 

}

const atualizarTabela = () =>{
    const dbApostas = getItemDb();

    limparApostas();
    dbApostas.forEach((aposta, indice) => criarItemTable
        (
            indice,
            aposta.valor,
            aposta.odd, 
            aposta.retorno,
            aposta.lucro.toFixed(2),
            aposta.tipo,
            aposta.modalidade,
            aposta.confronto,
            aposta.data,
            aposta.status,
            aposta.timeMandante,
            aposta.timeVisitante
        ));

}


const adicionarAposta = () =>{

    const dbApostas = getItemDb ();
    const betValor = document.getElementById('bet-valor').value;
    const betOdd = document.getElementById('bet-odd').value;
    const betRetorno = betValor*betOdd; 
    const betLucro = betRetorno-betValor
    const select = document.getElementById('bet-modalidade');
    const betModalidade = select.options[select.selectedIndex].text;
    const timeMandante = document.getElementById('timeMandante').value;
    const timeVisitante = document.getElementById('timeVisitante').value;
    const betData = document.getElementById('date').value
    const basqueteOption1 = document.getElementById('basqueteOption1').value;
    const basqueteOption2 = document.getElementById('basqueteOption2').value;
    const basqueteOption3 = document.getElementById('basqueteOption3').value;
    const basqueteOption4 = document.getElementById('basqueteOption4').value;
    const futebolOption1 = document.getElementById('futebolOption1').value;
    const futebolOption2 = document.getElementById('futebolOption2').value;
    const futebolOption3 = document.getElementById('futebolOption3').value;
    const futebolOption4 = document.getElementById('futebolOption4').value;
    const futebolOption5 = document.getElementById('futebolOption5').value;
    const betType = basqueteOption1 + '' + basqueteOption2 + ' ' + basqueteOption3+ ' ' +basqueteOption4+ ' ' +
    futebolOption1+ ' ' +futebolOption2+ ' ' +futebolOption3+ ' ' +futebolOption4+ ' ' +futebolOption5;

 
    if
    ( betValor,betOdd,timeMandante,timeVisitante,betData !==''){
        dbApostas.push
        ({
        'indice':'',
        'valor': betValor,
        'odd': betOdd,
        'retorno': betRetorno,
        'lucro': betLucro,
        'tipo': betType,
        'modalidade':betModalidade,
        'confronto': timeMandante+' x '+timeVisitante,
        'data': betData.split("-").reverse().join("-"),
        'status':'',
        'timeMandante': timeMandante,
        'timeVisitante':timeVisitante,
        'futebolOption1': futebolOption1,
        'futebolOption2': futebolOption2,
        'futebolOption3': futebolOption3,
        'futebolOption4': futebolOption4,
        'futebolOption5': futebolOption5,
        'basqueteOption1':basqueteOption1,
        'basqueteOption2':basqueteOption2,
        'basqueteOption3':basqueteOption3,
        'basqueteOption4':basqueteOption4,
         })
        setItemDB(dbApostas)
        atualizarTabela();
        limpaCampos();

    }else{
        alert('Preencha todos os campos')
    }


}

const  deuGreen = (indice) =>{
    
    attStatusGreen(indice)
    atualizarTabela()

}

const  deuRed = (indice) =>{
    attStatusRed(indice)
    atualizarTabela()

}

const attStatusRed = (indice)=>{
    const dbApostas = getItemDb();
    dbApostas[indice].status = dbApostas[indice].status === '' ? 'red':'red'
    setItemDB(dbApostas)
}

const attStatusGreen = (indice) =>{
    const dbApostas = getItemDb();
    dbApostas[indice].status = dbApostas[indice].status === '' ? 'green' : 'green'
    setItemDB(dbApostas)
}


const deletarAposta = (indice) =>{
    const dbApostas = getItemDb()

    dbApostas.splice(indice,1)
    setItemDB(dbApostas)
    atualizarTabela()
}

const editarAposta = (indice)=>{
    const dbApostas = getItemDb()
    const betEditValor = document.getElementById('editBet-valor')
    const betEditOdd = document.getElementById('editBet-odd')
    const editSelect = document.getElementById('editBetModalidade');
    const betEditModalidade = editSelect.options[editSelect.selectedIndex];
    const editTimeMandante = document.getElementById('editBetTimeMandante');
    const editTimeVisitante = document.getElementById('editBetTimeVisitante');
    const editBetData = document.getElementById('editBetDate');
    const editFutebolOptions = document.getElementById('editFutebolOptions');
    const editBasqueteOptions = document.getElementById('editBasqueteOptions');
    const editBasqueteOption1 = document.getElementById('editBasqueteOption1');
    const editBasqueteOption2 = document.getElementById('editBasqueteOption2');
    const editBasqueteOption3 = document.getElementById('editBasqueteOption3');
    const editBasqueteOption4 = document.getElementById('editBasqueteOption4');
    const editFutebolOption1 = document.getElementById('editFutebolOption1');
    const editFutebolOption2 = document.getElementById('editFutebolOption2');
    const editFutebolOption3 = document.getElementById('editFutebolOption3');
    const editFutebolOption4 = document.getElementById('editFutebolOption4');
    const editFutebolOption5 = document.getElementById('editFutebolOption5');

    betEditValor.value = dbApostas[indice].valor;
    betEditOdd.value = dbApostas[indice].odd;
    betEditModalidade.text = dbApostas[indice].modalidade;
    editTimeMandante.value = dbApostas[indice].timeMandante;
    editTimeVisitante.value = dbApostas[indice].timeVisitante;
    editBetData.value = dbApostas[indice].data.split("-").reverse().join("-");
    editBasqueteOption1.value = dbApostas[indice].basqueteOption1;
    editBasqueteOption2.value = dbApostas[indice].basqueteOption2;
    editBasqueteOption3.value = dbApostas[indice].basqueteOption3;
    editBasqueteOption4.value = dbApostas[indice].basqueteOption4;
    editFutebolOption1.value = dbApostas[indice].futebolOption1;
    editFutebolOption2.value = dbApostas[indice].futebolOption2;
    editFutebolOption3.value = dbApostas[indice].futebolOption3;
    editFutebolOption4.value = dbApostas[indice].futebolOption4;
    editFutebolOption5.value = dbApostas[indice].futebolOption5;
    
    if(dbApostas[indice].modalidade ==='Futebol'){
        editFutebolOptions.classList.toggle('hide');

    }
    
    if(dbApostas[indice].modalidade ==='Basquete'){
        editBasqueteOptions.classList.toggle('hide');

    }

    

}

const concluirEdição = () =>{
    const dbApostas = getItemDb();
    const betEditValor = document.getElementById('editBet-valor').value
    const betEditOdd = document.getElementById('editBet-odd').value
    const betEditRetorno = betEditValor*betEditOdd; 
    const betEditLucro = betEditRetorno-betEditValor
    const select = document.getElementById('editBetModalidade');
    const betEditModalidade = select.options[select.selectedIndex].text;
    const editTimeMandante = document.getElementById('editBetTimeMandante').value
    const editTimeVisitante = document.getElementById('editBetTimeVisitante').value
    const editBetData = document.getElementById('editBetDate').value;
    const indice = editIndice.innerText;
    const editBasqueteOption1 = document.getElementById('editBasqueteOption1').value;
    const editBasqueteOption2 = document.getElementById('editBasqueteOption2').value;
    const editBasqueteOption3 = document.getElementById('editBasqueteOption3').value;
    const editBasqueteOption4 = document.getElementById('editBasqueteOption4').value;
    const editFutebolOption1 = document.getElementById('editFutebolOption1').value;
    const editFutebolOption2 = document.getElementById('editFutebolOption2').value;
    const editFutebolOption3 = document.getElementById('editFutebolOption3').value;
    const editFutebolOption4 = document.getElementById('editFutebolOption4').value;
    const editFutebolOption5 = document.getElementById('editFutebolOption5').value;
    const betEditType = editBasqueteOption1 + '' +  editBasqueteOption2 + '' +  editBasqueteOption3+ '' +  editBasqueteOption4+ '' + 
    editFutebolOption1 + '' + editFutebolOption2 + '' +   editFutebolOption3+ '' +  editFutebolOption4+ '' + editFutebolOption5
    
    dbApostas.splice(indice,1,{
        'indice':'',
        'valor': betEditValor,
        'odd': betEditOdd,
        'retorno': betEditRetorno,
        'lucro': betEditLucro,
        'tipo': betEditType,
        'modalidade':betEditModalidade,
        'confronto': editTimeMandante+' x '+editTimeVisitante,
        'data': editBetData.split("-").reverse().join("-"),
        'status':'',
        'timeMandante': editTimeMandante,
        'timeVisitante':editTimeVisitante,
        'futebolOption1': editFutebolOption1,
        'futebolOption2': editFutebolOption2,
        'futebolOption3': editFutebolOption3,
        'futebolOption4': editFutebolOption4,
        'futebolOption5': editFutebolOption5,
        'basqueteOption1':editBasqueteOption1,
        'basqueteOption2':editBasqueteOption2,
        'basqueteOption3':editBasqueteOption3,
        'basqueteOption4':editBasqueteOption4,
         })
    setItemDB(dbApostas)
    atualizarTabela()
    toggleForms();
}

const toggleForms =()=>{
    form.classList.toggle('hide')
    editForm.classList.toggle('hide')
}






// EVENTOS

form.addEventListener('submit',(e)=>{
e.preventDefault();


})

btnForm.addEventListener('click', adicionarAposta);

cancelBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    toggleForms();

});

editBtn.addEventListener('click',(e) => {
    e.preventDefault()
    concluirEdição()
})


document.addEventListener("click",(e)=>{
    const elemento = e.target;


    if(elemento.className ==='green'){
        const indice = elemento.dataset.green
        deuGreen(indice)
        

    } 
    
    if(elemento.className === 'red'){
        const indice = elemento.dataset.red
        deuRed(indice);

    }

    if(elemento.className === 'button remove'){
        const indice = elemento.dataset.remove
        deletarAposta(indice)
    }

    if(elemento.className === 'button edit'){
        const indice = elemento.dataset.edit
            toggleForms();
            editIndice.innerText = indice
            editarAposta(indice)

    }
    
})

atualizarTabela();

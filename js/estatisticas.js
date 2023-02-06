const totalBets = document.getElementById('totalBets');
const totalRed = document.getElementById('totalRed');
const totalGreen = document.getElementById('totalGreen');
const totalGanhou = document.getElementById('totalGanhou');
const totalPerdeu = document.getElementById('totalPerdeu');
const totalLucro = document.getElementById('totalLucro');


const getItemDb = () => JSON.parse(localStorage.getItem('dbApostas')) ?? [];

const setItemDB = (dbApostas) => localStorage.setItem('dbApostas',JSON.stringify(dbApostas))


const totalBetsNumber = () =>{
const dbApostas = getItemDb();
totalBets.innerText = dbApostas.length


}


const totalLucroValue = () =>{
const dbApostas = getItemDb();
 
const betsGreenArray = dbApostas.filter(aposta => aposta.status.includes('green'));

const  betsGreenArrayValue = betsGreenArray.reduce((valorInicial, aposta)=>valorInicial + aposta.lucro, 0 )

totalGanhou.innerText = 'R$ '+ betsGreenArrayValue.toFixed(2);


      
}

const totalPrejuizoValue = () => {
    const dbApostas = getItemDb();

    const betsRedArray = dbApostas.filter(aposta => aposta.status.includes('red'));

    const betsRedArrayValue = betsRedArray.reduce((valorInicial, aposta)=>valorInicial + parseInt(aposta.valor), 0 )


    totalPerdeu.innerText ='R$ '+ betsRedArrayValue;


}


const totalLucroAll = () =>{
    const dbApostas = getItemDb();

    const betsGreenRetorno = dbApostas.filter(aposta => aposta.status.includes('green'));
    const  betsGreenRetornoValue = betsGreenRetorno.reduce((valorInicial, aposta)=>valorInicial + aposta.lucro, 0 );

    const betsRedRetorno = dbApostas.filter(aposta => aposta.status.includes('red'));
    const betsRedValorValue = betsRedRetorno.reduce((valorInicial, aposta) => valorInicial +  parseInt(aposta.valor),0);

    const LucroOverAll = betsGreenRetornoValue - betsRedValorValue;


    totalLucro.innerText = 'R$ '+ LucroOverAll.toFixed(2);
}


const totalStatus = () =>{
    const dbApostas = getItemDb();

    const statusDbGreen = dbApostas.filter(aposta => aposta.status.includes('green'));
    const statusDbRed = dbApostas.filter(aposta => aposta.status.includes('red'));
    
    totalGreen.innerText = statusDbGreen.length
    totalRed.innerText = statusDbRed.length
}




totalBetsNumber();
totalLucroValue();
totalPrejuizoValue();
totalStatus();
totalLucroAll()
let imc;

class IMC{

    calculate(){
        let weight = document.getElementById('weight').value;
        let height = document.getElementById('height').value;

        imc = weight / height ** 2;
    
        document.getElementById('result').innerHTML = imc.toPrecision(4);
        console.log(this.imc);
    }
}

const imcClass = new IMC();

function imcPhases(){

    let barHolder = document.getElementById('bar-holder');
    if(imc < 18.5){
        console.log('Abaixo do peso');
        barHolder.style.right = '860px';   
    }
    else if(imc < 24.9){
        console.log('Peso normal');
        barHolder.style.right = '700px'; 
    }
    else if(imc < 29.9){
        console.log('Sobrepeso');
        barHolder.style.right = '542px'; 
    }
    else if(imc < 34.9){
        console.log('Obesidade 1');
        barHolder.style.right = '385px';
    }
    else if(imc < 39.9){
        console.log('Obesidade 2');
        barHolder.style.right = '225px';
    }
    else if(imc > 40){
        console.log('Obesidade Mórbida')
        barHolder.style.right = '70px';
    }
}

function activeIMC(){
    imcClass.calculate();
    imcPhases();
}

module.exports = IMC;



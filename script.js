    let button=document.getElementById('button');
    let rate=0;
    button.addEventListener('click',()=>{
        let input=Number(document.getElementById('input').value);
    if(input<3){
        rate=5.8;
    }
    else if(input>=3 && input<=6){
        rate=6.5;
    }
    else if(input>=7 && input<=9){
        rate=6.8;
    }
    else {
        rate=7;
    }
    document.getElementById('result').innerHTML="FD RATE OF GIVEN MONTHS:"+rate+"%";
})


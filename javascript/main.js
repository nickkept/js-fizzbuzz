for (let i = 0; i <= 100; i++) {
    const multiplo3 = i % 3 === 0;
    const multiplo5 = i % 5 === 0;
    const multiplo35 = i % 3 ===0 && i % 5 === 0
if(multiplo3){
        i = `${i} frizz`;
        console.log(i);
    }
    
if(multiplo5){
        i = `${i} buzz`;
        console.log(i);
    }
if(multiplo35){
        i = `${i} fizzbuzz`;
        console.log(i);
    }


}
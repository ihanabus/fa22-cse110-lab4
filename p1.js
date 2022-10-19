// q1 q2
function sumValues1(num1, num2, add) {
    
    if (add) {
        
        var result = 0;
        
        result = num1 + num2;
        
        console.log('values added: ', result);
        
    } else return;

    console.log('final result: ', result);
}

function sumValues2(num1, num2, add) {
    
    if (add) {
        
        let result = 0;
        
        result = num1 + num2;
        
        console.log('values added: ', result);
        
    } else return;

    console.log('final result: ', result);
}

function sumValues3(num1, num2, add) {
    
    if (add) {
        
        const result = 0;
        
        result = num1 + num2;
        
        console.log('values added: ', result);
        
    } else return;

    console.log('final result: ', result);
}

sumValues1(10, 10, true);



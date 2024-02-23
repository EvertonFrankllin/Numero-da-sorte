document.querySelector('#btnSorte').addEventListener('click', () => {
    // parseInt -> string to int
    const min = parseInt(document.querySelector('#min').value);
    const max = parseInt(document.querySelector('#max').value);
    const limit = 100000000000;

    if (min === "" || max === "") {
        alert('The inputs are empty.')
    } else if (min > limit || max > limit){
        alert('The number is large.')
    }

    // Math.floor -> rounds to the lowest int number: ex -> 4.6 = 5; 9.3 = 9
    // Math.random -> number beetwen 0 and 1
    // (max - min) -> interval: ex -> (10 - 5) = 5
    // + 1 -> ensure the maximum amount is drawn
    // ex: 0.9 * (10 - 5 + 1) + 5 --> 0.9 * 6 + 5 --> 5,4 + 5 ==  10,4 --> Math.floor(10,4) == 10
    const random = Math.floor((Math.random() * (max - min + 1) + min));
    var string = 'Seu número da sorte é: ';
    var space = '<br>';
    

    setInterval(() =>{
        document.querySelector('#res').innerHTML = random ;
    },2000 );
    document.querySelector('#res').innerHTML = string + space;
    document.querySelector('#res').style.display = 'block';
        
    
    
});

// Step 1 - selecting all the elements
var initialPrice = document.querySelector('#initial-price');
var stocksQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');

//Ex - 06
submitBtn.addEventListener('click', submitHandler)

function submitHandler(){
    var ip = Number(initialPrice.value); 
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLLoss(ip, qty, curr);
}

//Ex - 05
function calculateProfitAndLLoss(initial, quantity, current){
    if (initial > current) {
        //loss logic
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss/initial) * 100;

        showOutput('Hey the loss is ${loss} and the percent is ${lossPercentage}%')
    }  
    else if (initial < current){
        //profit logic
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit/initial)*100;
        
       showOutput('Hey the Profit is ${profit} and the percent is ${profitPercentage}%')
    }
    else{
        //the rest logic
        showOutput('No pain no gain and No gain no pain.')
    }
}

// calculateProfitAndLLoss(100, 10, 10);
// calculateProfitAndLLoss(20, 10, 100);
// calculateProfitAndLLoss(10, 10, 10); 

function showOutput(message) {
    outputBox.innerHTML = message;
}
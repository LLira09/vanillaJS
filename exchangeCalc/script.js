const currElementOne = document.getElementById('currency-one');
const amountElementOne = document.getElementById('amount-one');
const currElementTwo = document.getElementById('currency-two');
const ammountElementTwo = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange Rates and update the Dom
function calculate() {
  const currencyOne = currElementOne.value;
  const currencyTwo = currElementTwo.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
    .then(res => res.json())
    .then(data => {
      //console.log(data);
      const rate = data.rates[currencyTwo];

      rateEl.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;

      ammountElementTwo.value = (amountElementOne.value * rate).toFixed(2);
    });
}

// Event Listeners
currElementOne.addEventListener('change', calculate);
amountElementOne.addEventListener('input', calculate);
currElementTwo.addEventListener('change', calculate);
ammountElementTwo.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  const temp = currElementOne.value;
  currElementOne.value = currElementTwo.value;
  currElementTwo.value = temp;
  calculate();
});

calculate();

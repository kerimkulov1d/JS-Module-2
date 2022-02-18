window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('output').style.display = 'none';
  document.getElementById('loader').style.display = 'none';
});

const form = document.querySelector('#loan-form');

form.addEventListener('submit', calculateResults);

function calculateResults(e) {
  const amount = document.querySelector('#amount');
  const interest = document.querySelector('#interest');
  const years = document.querySelector('#years');

  const monthlyPayment = document.querySelector('#monthy-payment');
  const totalPayment = document.querySelector('#total-payment');
  const totalInterest = document.querySelector('#total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);

    document.getElementById('loader').style.display = 'block';
    setTimeout(removeLoader, 2000);

    document.getElementById('output').style.display = 'none';
    setTimeout(outputAppear, 2000);
  } else {
    showError('Заполните все поля!');
  }

  e.preventDefault();

  function removeLoader() {
    loader.remove();
  }

  function outputAppear() {
    output.style.display = 'block';
  }
}

function showError(error) {
  const divError = document.createElement('div');
  const errorMessage = document.querySelector('.error-message');

  divError.className = 'alert alert-danger';
  divError.appendChild(document.createTextNode(error));
  errorMessage.appendChild(divError);

  setTimeout(clearError, 4000);
}

function clearError() {
  document.querySelector('.alert').remove();
}

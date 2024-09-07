let average = document.querySelector('.average');
let customer = document.querySelector('.customer');
let kamote = document.querySelector('.kamote');
let potato = document.querySelector('.potato');
let counterStarted = false;

window.addEventListener("scroll", () => {
  if (scrollY >= 1100 && !counterStarted) {
    counterStarted = true;

    let averageCount = 0;
    let customerCount = 0;
    let kamoteCount = 0;
    let potatoCount = 0;
    
    let interval = setInterval(() => {  
    if (parseFloat(averageCount) <= 2.6) {
            average.innerHTML = averageCount + ".6x";
            averageCount++;
          }
      if (parseFloat(customerCount) <= 88.6) {
        customer.innerHTML = customerCount + ".6%";
        customerCount++;
      }
      if (kamoteCount <= 302) {
        kamote.innerHTML = kamoteCount + "M";
        kamoteCount++;
      }
      if (potatoCount <= 287) {
        potato.innerHTML = potatoCount + "+";
        potatoCount++;
      }

      if (averageCount > 2.6 &&customerCount > 88.6 && kamoteCount > 302 && potatoCount > 287) {
        clearInterval(interval);
      }
    }, 11);
  } 
});

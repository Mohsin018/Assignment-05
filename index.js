// // Heart icon responsive

  const counterEl = document.getElementById('heart-counter');
  const hearts = document.querySelectorAll('.heart');

  hearts.forEach(heart => {
    heart.addEventListener('click', function () {
      // Increase navbar counter
      let count = parseInt(counterEl.textContent);
      counterEl.textContent = count + 1;

    });
  });



//   Call section

  let coinCounter = document.getElementById("coin-counter");
  let callBtn = document.getElementById("call-btn");
  let serviceName = document.getElementById("service-name");
  let serviceNumber = document.getElementById("service-number");
  let callHistory = document.getElementById("call-history");
  let clearBtn = document.getElementById("clear-history");

  // Call Button Action
  callBtn.addEventListener("click", function () {
    let coins = parseInt(coinCounter.innerText);

    if (coins < 20) {
      alert("Not enough coins to make this call!");
      return;
    }

    // Deduct coins
    coinCounter.innerText = coins - 20;

    // Show alert
    alert("Calling " + serviceName.innerText + " at " + serviceNumber.innerText);

    // Add to history
    let li = document.createElement("li");
    li.innerText = serviceName.innerText + "\n" + serviceNumber.innerText;
    callHistory.appendChild(li);
  });

  // Clear History Button Action
  clearBtn.addEventListener("click", function () {
    callHistory.innerHTML = "";
  });
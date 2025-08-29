// // Heart icon responsive


const counter = document.getElementById('heart-counter');
const heartParent = document.getElementById('heart-parent');

heartParent.addEventListener('click', function (e) {
  if (e.target.classList.contains('heart')) {
    let count = parseInt(counter.innerText);
    counter.innerText = count + 1;
  }
});

// ================= Copy Hotline Number ==================
 const copyCounter = document.getElementById("copy-counter");
  const copyButtons = document.querySelectorAll(".copy-btn");

  copyButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const card = btn.closest(".card"); // find the card
      const serviceNumber = card.querySelector(".hotline-number").innerText;

      // Copy to clipboard
      navigator.clipboard.writeText(serviceNumber).then(() => {
        alert(`Number copied: ${serviceNumber}`);

        // Increase counter
        let count = parseInt(copyCounter.innerText);
        copyCounter.innerText = count + 1;
      });
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






    // Add history section
let li = document.createElement("li");

// full text including time
let now = new Date();
let time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

li.innerHTML = `
  <div>
    ${serviceName.innerText}<br>
    ${serviceNumber.innerText}
  </div>
  <span style="font-size:12px; color:gray;">${time}</span>
`;
               


li.style.display = "flex";
li.style.justifyContent = "space-between";
li.style.alignItems = "center"; 
li.style.backgroundColor = "#dddddd";
li.style.borderRadius = "10px";
li.style.padding = "8px";
li.style.marginBottom = "6px";
li.style.listStyle = "none";

callHistory.appendChild(li);
  });




  // Clear History Button Action
  clearBtn.addEventListener("click", function () {
    callHistory.innerHTML = "";
  });



  
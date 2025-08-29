// // Heart icon responsive


const counter = document.getElementById('heart-counter');
const heartParent = document.getElementById('heart-parent');

heartParent.addEventListener('click', function (e) {
  if (e.target.classList.contains('heart')) {
    let count = parseInt(counter.innerText);
    counter.innerText = count + 1;
  }
});




// Copy Number 
 const copyCounter = document.getElementById("copy-counter");
  const copyButtons = document.querySelectorAll(".copy-btn");

  copyButtons.forEach(function(btn){
    btn.addEventListener("click", function () {
      const card = btn.closest(".card");
      const serviceNumber = card.querySelector(".hotline-number").innerText;

      navigator.clipboard.writeText(serviceNumber).then(function () {
        alert(`Number copied: ${serviceNumber}`);

        let count = parseInt(copyCounter.innerText);
        copyCounter.innerText = count + 1;
      });
    });
  });






// Call Section
let callBtns = document.querySelectorAll(".call-btn");
let clearBtn = document.getElementById("clear-history"); 


let callHistory = document.getElementById("call-history");
let coinCounter = document.getElementById("coin-counter");


callBtns.forEach(function(callBtn){
  callBtn.addEventListener("click", function(event) {
    
    let card = event.target.closest('.card');
    
    
    if (!card) {
      console.error("Could not find the parent card for the clicked button.");
      return;
    }

    let serviceName = card.querySelector(".service-name").innerText;
    let serviceNumber = card.querySelector(".service-number").innerText;
    
    let coins = parseInt(coinCounter.innerText);

    if (coins < 20) {
      alert("Not enough coins to make this call!");
      return;
    }


    coinCounter.innerText = coins - 20;


    alert("📞 Calling " + serviceName + " at " + serviceNumber);

    let li = document.createElement("li");


    let now = new Date();
    let time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit"});

    li.innerHTML = `
      <div>
      <span style="font-size:16px; font-weight:600; color:black;">${serviceName}</span><br>
      <span style="font-size:14px; color:black;">${serviceNumber}</span>
      </div>
      <span style="font-size:12px; color:black;">${time}</span>
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
});




  // Clear History Button 
  clearBtn.addEventListener("click", function () {
    callHistory.innerHTML = "";
  });



  
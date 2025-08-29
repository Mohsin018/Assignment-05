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




// Get all the call buttons
let callBtns = document.querySelectorAll(".call-btn");

// Get the element where call history will be added
let callHistory = document.getElementById("call-history");
let coinCounter = document.getElementById("coin-counter");

// Loop through each call button and add a click event listener
callBtns.forEach(callBtn => {
  callBtn.addEventListener("click", function(event) {
    // Navigate up the DOM to find the parent card element
    let card = event.target.closest('.card');
    
    // Check if the card element was found
    if (!card) {
      console.error("Could not find the parent card for the clicked button.");
      return;
    }

    // Now, find the service name and number WITHIN that specific card
    let serviceName = card.querySelector(".service-name").innerText;
    let serviceNumber = card.querySelector(".service-number").innerText;
    
    let coins = parseInt(coinCounter.innerText);

    if (coins < 20) {
      alert("Not enough coins to make this call!");
      return;
    }

    // Deduct coins
    coinCounter.innerText = coins - 20;

    // Show alert
    alert("Calling " + serviceName + " at " + serviceNumber);

    // Add a new item to call history
    let li = document.createElement("li");

    // full text including time
    let now = new Date();
    let time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    li.innerHTML = `
      <div>
        ${serviceName}<br>
        ${serviceNumber}
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
});


// //   Call section

//   let coinCounter = document.getElementById("coin-counter");
//   let callBtn = document.querySelectorAll(".call-btn");
//   let serviceName = document.querySelectorAll(".service-name").innerText;
//   let serviceNumber = document.querySelectorAll(".service-number").innerText;
//   let callHistory = document.getElementById("call-history");
//   let clearBtn = document.getElementById("clear-history");

//   // Call Button Action
//   callBtn.forEach((call) => {
//   call.addEventListener("click", function () {
//     let coins = parseInt(coinCounter.innerText);

//     if (coins < 20) {
//       alert("Not enough coins to make this call!");
//       return;
//     }

//     // Deduct coins
//     coinCounter.innerText = coins - 20;

//     // Show alert
//     alert("Calling " + serviceName + " at " + serviceNumber);

//   });



//     // Add history section
// let li = document.createElement("li");

// // full text including time
// let now = new Date();
// let time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

// li.innerHTML = `
//   <div>
//     ${serviceName.innerText}<br>
//     ${serviceNumber.innerText}
//   </div>
//   <span style="font-size:12px; color:gray;">${time}</span>
// `;
               


// li.style.display = "flex";
// li.style.justifyContent = "space-between";
// li.style.alignItems = "center"; 
// li.style.backgroundColor = "#dddddd";
// li.style.borderRadius = "10px";
// li.style.padding = "8px";
// li.style.marginBottom = "6px";
// li.style.listStyle = "none";

// callHistory.appendChild(li);
//   });




  // Clear History Button Action
  clearBtn.addEventListener("click", function () {
    callHistory.innerHTML = "";
  });



  
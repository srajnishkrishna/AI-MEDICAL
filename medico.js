const medicines = [
    { name: "Paracetamol", img: "https://via.placeholder.com/100",price: "$5"},
    { name: "Ibuprofen", img: "https://via.placeholder.com/100", price: "₹35" },
    { name: "Cough Syrup", img: "https://via.placeholder.com/100", price: "₹50" },
    { name: "Vitamin C", img: "https://via.placeholder.com/100", price: "₹30" },
    { name: "Antibiotic", img: "https://via.placeholder.com/100", price: "₹60" }
  ];
  
  function displayMedicines(filter = "") {
    const container = document.getElementById("product-list");
    container.innerHTML = "";
    
    const filtered = medicines.filter(med =>
      med.name.toLowerCase().includes(filter.toLowerCase())
    );
  
    if (filtered.length === 0) {
      container.innerHTML = "<p>No medicines found.</p>";
      document.getElementById("aiTip").textContent = "Try searching for 'Vitamin C'";
    } else {
      filtered.forEach(med => {
        container.innerHTML += `
          <div class="card">
            <img src="${med.img}" alt="${med.name}" />
            <h3>${med.name}</h3>
            <p>Price: ${med.price}</p>
          </div>
        `;
      });
    }
  }
  
  function searchMedicine() {
    const query = document.getElementById("search").value;
    displayMedicines(query);
  }
  
  // Initial load
  displayMedicines();
  
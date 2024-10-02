function addToCart(medicineName, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []; 
    let existingItem = cart.find(item => item.name === medicineName);
    if (existingItem) {
        existingItem.quantity += 1; 
        cart.push({ name: medicineName, price: price, quantity: 1 }); 
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(`${medicineName} has been added to your cart.`);
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0); 
    document.getElementById("cartCount").textContent = totalItems; 
}

function toggleDescription(id) {
    const description = document.getElementById(`description-${id}`);
    description.style.display = description.style.display === "none" ? "block" : "none"; // Toggle visibility
}

function buyNow(medicineName, price) {
    alert(`Proceeding to checkout with ${medicineName}.`);
    window.location.href = "Payment.html"; // Redirect to payment page
}

function displayMedicines() {
    const medicines = [
        {
            id: 1,
            name: "Aspirin",
            price: 5.99,
            description: "Pain reliever and fever reducer.",
            image: "images/aspi.jpg",
            activeIngredient: "Acetylsalicylic Acid (500mg)",
            manufacturer: "Bayer"
        },
        {
            id: 2,
            name: "Ibuprofen",
            price: 6.99,
            description: "Anti-inflammatory for pain and fever.",
            image: "images/ibu.jpg",
            activeIngredient: "Ibuprofen (200mg)",
            manufacturer: "Advil"
        },
        {
            id: 3,
            name: "Paracetamol",
            price: 4.99,
            description: "Pain reliever and fever reducer.",
            image: "images/para.jpg",
            activeIngredient: "Paracetamol (500mg)",
            manufacturer: "Generic"
        },
        {
            id: 4,
            name: "Cough Syrup",
            price: 7.99,
            description: "Relieves cough and sore throat.",
            image: "images/cough.jpg",
            activeIngredient: "Dextromethorphan",
            manufacturer: "Vicks"
        },
        {
            id: 5,
            name: "Ciprofloxacin",
            price: 9.99,
            description: "Used to treat bacterial infections.",
            image: "images/cipro.jpg",
            activeIngredient: "Amoxicillin",
            manufacturer: "Pfizer"
        },
        {
            id: 6,
            name: "Cetirizine",
            price: 8.99,
            description: "Relieves allergy symptoms.",
            image: "images/cet.png",
            activeIngredient: "Diphenhydramine",
            manufacturer: "Benadryl"
        },
        {
                id: 7,
                name: "Aspirin",
                price: 5.99,
                description: "Pain reliever and fever reducer.",
                image: "images/aspi.jpg",
                activeIngredient: "Acetylsalicylic Acid (500mg)",
                manufacturer: "Bayer"
            },
            {
                id: 8,
                name: "Antacid",
                price: 6.99,
                description: "Anti-inflammatory for pain and fever.",
                image: "images/anta.jpg",
                activeIngredient: "Antacid (200mg)",
                manufacturer: "Advil"
            },
            {
                id: 9,
                name: "Paracetamol",
                price: 4.99,
                description: "Pain reliever and fever reducer.",
                image: "images/para.jpg",
                activeIngredient: "Paracetamol (500mg)",
                manufacturer: "Generic"
            },
            {
                id: 10,
                name: "Cough Syrup",
                price: 7.99,
                description: "Relieves cough and sore throat.",
                image: "images/cough.jpg",
                activeIngredient: "Dextromethorphan",
                manufacturer: "Vicks"
            },
            {
                id: 11,
                name: "Ciprofloxacin",
                price: 9.99,
                description: "Used to treat bacterial infections.",
                image: "images/cipro.jpg",
                activeIngredient: "Amoxicillin",
                manufacturer: "Pfizer"
            },
            {
                id: 12,
                name: "Cetirizine",
                price: 8.99,
                description: "Relieves allergy symptoms.",
                image: "images/cet.png",
                activeIngredient: "Diphenhydramine",
                manufacturer: "Benadryl"
            },
    ];
    const medicineList = document.querySelector(".medicine-list");
    let html = "";

    medicines.forEach((medicine) => {
        html += `
            <div class="medicine-item">
                <img src="${medicine.image}" alt="${medicine.name}">
                <h3>${medicine.name}</h3>
                <p>Price: Rs.${medicine.price.toFixed(2)}</p>
                <button onclick="toggleDescription(${medicine.id})" style="color:white; background-color:red">Read More</button>
                <div id="description-${medicine.id}" style="display: none;">
                    <p>${medicine.description}</p>
                </div>
                <button onclick="addToCart('${medicine.name}', ${medicine.price})" style="color:white; background-color:black">Add to Cart</button>
                <button onclick="buyNow('${medicine.name}', ${medicine.price})">Buy Now</button>
            </div>
        `;
    });

    medicineList.innerHTML = html; 
}
document.addEventListener("DOMContentLoaded", () => {
    updateCartCount(); 
    displayMedicines(); 
});

// Language Data
const translations = {
  en: {
    title: "RKB Building",
    navApartments: "Apartments",
    navShops: "Shops",
    navContact: "Contact",
    apartmentsTitle: "Apartments",
    shopsTitle: "Shops",
    contactTitle: "Contact",
    contactText: "For inquiries, please call: +971 123 456 789",
  },
  ar: {
    title: "مبنى آر كي بي",
    navApartments: "الشقق",
    navShops: "المحلات",
    navContact: "اتصل بنا",
    apartmentsTitle: "الشقق",
    shopsTitle: "المحلات",
    contactTitle: "اتصل بنا",
    contactText: "للاستفسارات، يرجى الاتصال: +971 123 456 789",
  },
};

// Change Language
function changeLanguage(lang) {
  document.getElementById("title").innerText = translations[lang].title;
  document.getElementById("nav-apartments").innerText = translations[lang].navApartments;
  document.getElementById("nav-shops").innerText = translations[lang].navShops;
  document.getElementById("nav-contact").innerText = translations[lang].navContact;
  document.getElementById("apartments-title").innerText = translations[lang].apartmentsTitle;
  document.getElementById("shops-title").innerText = translations[lang].shopsTitle;
  document.getElementById("contact-title").innerText = translations[lang].contactTitle;
  document.getElementById("contact-text").innerText = translations[lang].contactText;
}

// Show Apartments for a Floor
function showFloor(floor) {
  const apartmentsGrid = document.getElementById("apartments-grid");
  apartmentsGrid.innerHTML = "";
  for (let i = 1; i <= 6; i++) {
    apartmentsGrid.innerHTML += `
      <div onclick="showApartmentDetails(${floor}, ${i})">
        <img src="images/apartment${i}.jpg" alt="Apartment ${i}">
        <p>Apartment ${i} - Floor ${floor}<br>
        Price: 500,000 AED</p>
      </div>
    `;
  }
}

// Show Apartment Details
function showApartmentDetails(floor, apartment) {
  alert(`Floor: ${floor}\nApartment: ${apartment}\nPrice: 500,000 AED`);
}

// Show Shops
function showShops() {
  const shopsGrid = document.querySelector(".shops-grid");
  shopsGrid.innerHTML = "";
  for (let i = 1; i <= 11; i++) {
    shopsGrid.innerHTML += `
      <div onclick="showShopDetails(${i})">
        <img src="images/shop${i}.jpg" alt="Shop ${i}">
        <p>Shop ${i}<br>
        Price: 300,000 AED</p>
      </div>
    `;
  }
}

// Show Shop Details
function showShopDetails(shop) {
  alert(`Shop: ${shop}\nPrice: 300,000 AED`);
}

// Initialize
changeLanguage("en");
showFloor(1);
showShops();

// Sticky header
const header = document.querySelector("header");
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Responsive menu
let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
};

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Dark mode toggle (modern feature)
const darkModeBtn = document.createElement('button');
darkModeBtn.innerHTML = '<i class="bx bx-moon"></i>';
darkModeBtn.className = 'main-btn';
darkModeBtn.style.position = 'fixed';
darkModeBtn.style.bottom = '32px';
darkModeBtn.style.right = '32px';
darkModeBtn.style.zIndex = '2000';
document.body.appendChild(darkModeBtn);

darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')) {
        darkModeBtn.innerHTML = '<i class="bx bx-sun"></i>';
    } else {
        darkModeBtn.innerHTML = '<i class="bx bx-moon"></i>';
    }
});

// Add dark mode styles
const darkStyle = document.createElement('style');
darkStyle.innerHTML = `
  body.dark-mode {
    background: linear-gradient(135deg, #232946 0%, #16161a 100%) !important;
    color: #fff;
  }
  body.dark-mode header {
    background: rgba(35, 41, 70, 0.85) !important;
    color: #fff;
  }
  body.dark-mode .row {
    background: #232946 !important;
    color: #fff;
  }
  body.dark-mode .main-btn {
    background: linear-gradient(90deg, #16161a 0%, #232946 100%) !important;
    color: #fff !important;
    border: 1px solid #fff;
  }
`; 
document.head.appendChild(darkStyle);

// Product card hover effect (modern, animated)
document.querySelectorAll('.row').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.04) translateY(-4px)';
        card.style.boxShadow = '0 12px 32px rgba(31,38,135,0.18)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.boxShadow = '';
    });
});


const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// Dummy Database (temporary)
let products = [
  { id: 1, name: "Half Running Set", price: 999 },
  { id: 2, name: "Formal Lowers", price: 1299 }
];

let cart = [];

// ✅ Get Products
app.get("/products", (req, res) => {
  res.json(products);
});

// ✅ Add to Cart
app.post("/cart", (req, res) => {
  const item = req.body;
  cart.push(item);
  res.json({ message: "Item added to cart", cart });
});

// ✅ Get Cart Items
app.get("/cart", (req, res) => {
  res.json(cart);
});

// ✅ Place Order
app.post("/order", (req, res) => {
  const order = req.body;
  cart = []; // clear cart
  res.json({ message: "Order placed successfully", order });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
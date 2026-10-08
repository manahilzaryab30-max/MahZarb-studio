// Mahzarb Studio — simple GitHub Pages setup
// Replace the number below with your WhatsApp number in international format,
// without +, spaces or dashes. Example: 923001234567
const WHATSAPP_NUMBER = "923000000000";
const message = encodeURIComponent("Assalam-o-Alaikum! I want to customize a product from Mahzarb Studio. Please guide me.");
document.getElementById("whatsappBtn").href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
document.getElementById("year").textContent = new Date().getFullYear();

document.querySelector(".menu").addEventListener("click", () => {
  const nav = document.querySelector("nav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  nav.style.flexDirection = "column";
  nav.style.position = "absolute";
  nav.style.top = "76px";
  nav.style.right = "6%";
  nav.style.background = "white";
  nav.style.padding = "20px";
  nav.style.borderRadius = "16px";
  nav.style.boxShadow = "0 15px 40px rgba(0,0,0,.12)";
});

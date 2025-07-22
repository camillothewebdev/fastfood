// Ajoute un effet quand on clique sur une image
document.addEventListener("DOMContentLoaded", () => {
  const plats = document.querySelectorAll(".plat img");
  plats.forEach(img => {
    img.addEventListener("click", () => {
      alert("Ce plat a été ajouté au panier !");
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Vérifier si Leaflet est bien chargé
  if (typeof L === "undefined") {
    console.error("Leaflet n'est pas chargé !");
    return;
  }

  console.log("Leaflet chargé correctement !");

  // Initialisation de la carte
  let map = L.map("map").setView([48.8566, 2.3522], 13); // Paris

  // Ajouter un fond de carte OpenStreetMap
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Ajouter un marqueur
  L.marker([48.8566, 2.3522])
    .addTo(map)
    .bindPopup("Bienvenue chez O'Coffee ! ☕")
    .openPopup();
});

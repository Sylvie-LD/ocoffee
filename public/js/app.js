import { coffee } from "./script.js";
import { mapModule } from "./map.js";

const app = {
  init: function () {
    coffee.init();
    mapModule.initMap();
  },
};

document.addEventListener("DOMContentLoaded", app.init);

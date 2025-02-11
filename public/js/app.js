import { coffee } from "./script.js";

const app = {
  init: function () {
    coffee.init();
  },
};

document.addEventListener("DOMContentLoaded", app.init);

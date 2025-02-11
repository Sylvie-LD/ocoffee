import { coffee } from "./index.js";

const app = {
  init: function () {
    coffee.init();
  },
};

document.addEventListener("DOMContentLoaded", app.init);

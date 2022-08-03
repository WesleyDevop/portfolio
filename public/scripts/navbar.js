function responsive() {
    var bars = document.getElementById("inicio");

    if (bars.className === "navbar") {
        bars.className += " responsive";
    } else {
        bars.className = "navbar";
    }
  }
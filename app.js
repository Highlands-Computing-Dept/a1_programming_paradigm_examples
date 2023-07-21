/* Identify the following programming paradigms at work in this application:
      - Object-oriented programming
      - Procedural programming
      - Event-driven programming
*/

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  calculateArea() {
    return this.length * this.width;
  }
}

function updateAreaOnScreen(area) {
  const areaElement = document.getElementById("area");

  areaElement.textContent = `Area: ${area}`;
}

document.getElementById("calculate").addEventListener("click", function () {
  const length = parseFloat(document.getElementById("length").value);
  const width = parseFloat(document.getElementById("width").value);

  const rectangle = new Rectangle(length, width);

  const area = rectangle.calculateArea();

  updateAreaOnScreen(area);
});

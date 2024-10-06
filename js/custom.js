// Example: Add interactivity to handle expandable options
document.addEventListener('DOMContentLoaded', function () {
  const foodOption1 = document.getElementById('foodOption1');
  const foodOption2 = document.getElementById('foodOption2');

  foodOption1.addEventListener('change', function () {
    if (this.checked) {
      // Expand more options or show details if needed
      console.log('Food Option 1 selected');
    }
  });

  foodOption2.addEventListener('change', function () {
    if (this.checked) {
      console.log('Food Option 2 selected');
    }
  });
});
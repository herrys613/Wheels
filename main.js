// Navbar
fetch("/components/Navbar.html")
  .then(res => res.text())
  .then(data => document.getElementById("Navbar").innerHTML = data);

// footer
fetch("/components/Footer.html")
  .then(res => res.text())
  .then(data => document.getElementById("Footer").innerHTML = data);

// FilterSidebar
fetch("/components/FilterSidebar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("FilterSidebar").innerHTML = data;
    initFilterSidebar();
  });

function initFilterSidebar() {
  populateCheckboxes(makes, 'section-makes');
  populateCheckboxes(colors, 'section-color');
  populateCheckboxes(features, 'section-features');
  updatePriceLabel();
}
// getting sidebar in variable
var sidebar = document.querySelector('.sidebar');

function myFunction(x) {
    // animating icon
    x.classList.toggle("change");

    // animating sidebar
    sidebar.classList.toggle("show");
  }
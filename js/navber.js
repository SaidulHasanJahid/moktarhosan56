

  // Toggle styled search input

document.getElementById("searchIcon").addEventListener("click", function () {
    const input = document.getElementById("searchInput");
    input.classList.toggle("active");
    input.focus();
  });
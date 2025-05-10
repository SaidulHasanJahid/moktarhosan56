 const sliderTrack = document.getElementById('sliderTrack');
  const dotsContainer = document.getElementById('sliderDots');

  const totalSlides = 6;
  const slidesPerView = 4;
  let currentIndex = 0;

  const totalDots = Math.ceil(totalSlides / slidesPerView);
  for (let i = 0; i < totalDots; i++) {
    const dot = document.createElement("button");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }

  function goToSlide(index) {
    currentIndex = index;
    const percent = (100 / totalSlides) * slidesPerView * index;
    sliderTrack.style.transform = `translateX(-${percent}%)`;
    updateDots();
  }

  function updateDots() {
    const dots = dotsContainer.querySelectorAll("button");
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === currentIndex);
    });
  }

  // Autoplay
  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalDots;
    goToSlide(currentIndex);
  }, 4000);

  goToSlide(0); // Init


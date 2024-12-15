 // Array of text and images
 const data = [
    { image: "./images/barb.avif" },
    { image: "./images/colors.jpeg" },
    { image: "./images/vip.jpeg" },
    { image: "./images/treatment.jpeg" },
  ];

  // Get modal and modal image elements
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");

  // Add event listeners to text items
  document.querySelectorAll(".service_link").forEach(item => {
    item.addEventListener("mouseenter", function () {
      const index = this.getAttribute("data-index");
      modalImage.src = data[index].image;
      modal.classList.add("active");
    });

    item.addEventListener("mouseleave", function () {
      modal.classList.remove("active");
    });
  });




window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  // Extra time to ensure smooth loading
  setTimeout(() => {
    loader.classList.add("loader-hidden");
  }, 4000);

  loader.addEventListener("transitionend", () => {
    loader.parentElement.removeChild(loader); // Remove the loader
  });
});

  
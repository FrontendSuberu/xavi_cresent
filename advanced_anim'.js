const springElements = document.querySelectorAll('.spring');

// Loop through each spring element and add event listeners
springElements.forEach(springElement => {
  // Create gsap.quickTo instances for each individual element
  const xTo = gsap.quickTo(springElement, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
  const yTo = gsap.quickTo(springElement, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

  // Event listener for mousemove to create the spring effect
  springElement.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = springElement.getBoundingClientRect();
    const x = clientX - (left + width / 2); // Calculate distance from center
    const y = clientY - (top + height / 2);
    xTo(x * 0.9); // Apply movement with scaling
    yTo(y * 0.9);
  });

  // Event listener for mouseleave to reset position
  springElement.addEventListener("mouseleave", () => {
    xTo(0); // Reset to original position
    yTo(0);
  });
});



 // GSAP Animation for Menu
 const menu = document.querySelector('.over_menu');
 const toggleBtn = document.querySelector('.menu');
 let isMenuOpen = false;

 // Entry animation
 const showMenu = () => {
   gsap.to(menu, {
     x: -10,
     opacity: 1,
     duration: 0.8,
     ease: "elastic.out(1, 0.5)",
     onStart: () => {
      menu.style.display = 'block';
    }
   });
 };

 // Exit animation
 const hideMenu = () => {
   gsap.to(menu, {
     x: 300, 
     opacity: 0,
     duration: 0.5,
     ease: "power1.inOut",
     onComplete: () => {
      menu.style.display = 'none'; 
    }
   });
 };

 // Toggle menu on button click
 toggleBtn.addEventListener('click', () => {
   isMenuOpen = !isMenuOpen;
   isMenuOpen ? showMenu() : hideMenu();
 });
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image");
  
    images.forEach((image) => {
      
      image.addEventListener("click", () => {
        alert(`Link: ${image.dataset.href}`);
      });
  
      
      let rotation = 0;
      image.addEventListener("contextmenu", (e) => {
        e.preventDefault(); 
        rotation += 90;
        image.style.transform = `rotate(${rotation}deg)`;
      });
    });
  });
  
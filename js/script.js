/*carousel index */
let currentIndexCarousel = 0;
        let carouselImageList = [
            "img/galeria/galeria1.jpg",
            "img/galeria/galeria2.jpg",
            "img/galeria/galeria3.jpg",
            "img/galeria/galeria4.jpg",
        ];

        function clickNextPhotoCarousel() {
            let indexAux = currentIndexCarousel+1;
            let carousel = document.getElementById("carousel");
            carousel.src = carouselImageList[indexAux];

            let buttonLeft = document.getElementById("image_button_left");
            let buttonRight = document.getElementById("image_button_right");
            if(indexAux == (carouselImageList.length-1)){
                buttonRight.style.visibility = "hidden";
                buttonLeft.style.visibility = "visible";
            } else {
                buttonRight.style.visibility = "visible";
                buttonLeft.style.visibility = "visible";
            }
            currentIndexCarousel = indexAux
        };

        function clickPreviousPhotoCarousel() {
            let indexAux = currentIndexCarousel-1;
            let carousel = document.getElementById("carousel");
            carousel.src = carouselImageList[indexAux];
            
            let buttonLeft = document.getElementById("image_button_left");
            let buttonRight = document.getElementById("image_button_right");
            if(indexAux == 0){
                buttonRight.style.visibility = "visible";
                buttonLeft.style.visibility = "hidden";
            } else {
                buttonRight.style.visibility = "visible";
                buttonLeft.style.visibility = "visible";
            }
            currentIndexCarousel = indexAux
        };

/*tranasicion header*/ 
let lastScrollTop = 0;

window.addEventListener("scroll", function() {
   let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

   if (currentScroll > lastScrollTop) {
      // Desplazándose hacia abajo
      document.querySelector(".header").classList.add("hide-on-scroll");
   } else {
      // Desplazándose hacia arriba
      document.querySelector(".header").classList.remove("hide-on-scroll");
   }

   lastScrollTop = currentScroll;
});
//*header*//
const headerTag = document.querySelector("div.header")
    document.addEventListener("scroll", function(){
      
      const pixels = window.scrollY;

      if(pixels >= headerTag.getBoundingClientRect().height){
        headerTag.classList.add("scrolled");
      }else{
        headerTag.classList.remove("scrolled");
      }

    })
//*mainbanner*//
document.addEventListener("DOMContentLoaded", () => {
  const fadeInElements = document.querySelectorAll(".fade-in");

  function checkVisibility() {
    fadeInElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.top <= window.innerHeight;

      if (isVisible && !element.classList.contains("show")) {
        element.classList.add("show"); 
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);

  checkVisibility();
});

document.addEventListener("DOMContentLoaded", () => {
  
  const bannerImage = document.getElementById("banner-image");
  const phrase = document.getElementById("phrase");
  const description = document.getElementById("description");
  const bannerMark = document.getElementById("bannermark")

  const images = [
    "pic/banner/1.jpg",
    "pic/banner/2.jpg",
    "pic/banner/3.jpg"
  ];

  const phrases = [
    "Lightup the<br> holiday season",
    "Celebrate the<br> new beginnings",
    "The gift by<br> Diptyque"
  ];

  const descriptions = [
    "Magical designs whipped up with artist Lucy<br> Sparrow in a joyful twist on winter symbols and the<br> Maison’s iconic creations. A holiday collection<br> decked out in whimsy and cheer.",
    "The maison’s scented candles stir the senses and light<br> up the holiday season, all with a single spark. To give to a<br> loved one. Or to treat yourself.",
    "For thoughtful gestures of all sizes, Diptyque has gifts to<br> suit every occasion. Resplendent, refined – and always a<br> source of wonderment."
  ];

  const bannermarks = [
    "pic/banner/bannermark.svg",
    "pic/banner/bannermark-s.svg",
    "pic/banner/bannermark-t.svg"
  ];

  let currentIndex = 0;
  const totalChanges = images.length;
  const changeInterval = 3000; 


  function changeBannerContent() {
    
    bannerImage.src = images[currentIndex];
    phrase.innerHTML = phrases[currentIndex];
    description.innerHTML = descriptions[currentIndex];
    bannerMark.src = bannermarks[currentIndex];

    currentIndex = (currentIndex + 1) % totalChanges;
  }

  changeBannerContent();

  setInterval(changeBannerContent, changeInterval);
});













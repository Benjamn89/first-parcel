export const animate = () => {
  // Set counter to animate some element just once
  let threeCenterCounter = 0;
  let threeBottomCounter = 0;
  let threeFooterCounter = 0;
  let newsBottomCounter = 0;
  // Three Section shortCut
  const threeLeft = document.querySelector(".three-center-left");
  const threeRight = document.querySelector(".three-center-right");
  // The call back to be called
  const threeCallback = function (entries) {
    if (entries[0].isIntersecting === true && threeCenterCounter < 1) {
      threeLeft.classList.add("add-anim-left");
      threeRight.classList.add("add-anim-right");
      threeCenterCounter++;
    }
  };
  const threeObserver = new IntersectionObserver(threeCallback);
  threeObserver.observe(threeLeft);

  // Oberver for the threeBottom divs
  // 1. Create shortCut for the all 5 divs
  const threeBottom = document.querySelectorAll(".before-last-2 > div");
  // Create the call back function
  const threeBottomCallback = function (entries) {
    if (entries[0].isIntersecting === true && threeBottomCounter < 1) {
      for (let i = 1; i <= 5; i++) {
        threeBottom[i - 1].classList.add(`add-anim-threeBottom-${i}`);
      }
      threeBottomCounter++;
    }
  };
  // Creathe the observer
  const threeBottomObserver = new IntersectionObserver(threeBottomCallback);
  threeBottomObserver.observe(threeBottom[4]);

  // Observe Three footer
  const threeFooter = document.querySelector(".three-footer-left");
  const threeFooterCallback = function (entry) {
    if (entry[0].isIntersecting === true && threeFooterCounter < 1) {
      threeFooter.classList.add("animate-three-footer-left");
      threeFooterCounter++;
    }
  };
  const threeFooterObserver = new IntersectionObserver(threeFooterCallback);
  threeFooterObserver.observe(threeFooter);

  // News Bottom
  const newsBottom = document.querySelector(".news-bottom");
  const newsBottomCallback = function (entry) {
    if (entry[0].isIntersecting === true && newsBottomCounter < 1) {
      newsBottom.classList.add("animate-news-bottom");
      newsBottomCounter++;
    }
  };
  const newsBottomObserver = new IntersectionObserver(newsBottomCallback);
  newsBottomObserver.observe(newsBottom);
};

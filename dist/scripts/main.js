const animatePage = () => {
  // Get the img of the slide-1 element
  const img = document.querySelector(".img-page-on-load");
  // Create short cut for the spinner element
  const spinner = document.querySelector(".spinner-on-load");
  // Set function to run after the page has loaded
  img.onload = () => {
    // Fade out nicely the spinner
    spinner.classList.add("spinner-on-load-off");
    setTimeout(() => {
      // Remove completly from dom after the spinner fade of
      spinner.classList.add("spinner-on-load-none");
      // Fade in nicely the entire page (with the navbar)
      document.querySelector("nav").style.opacity = "1";
      document
        .querySelector(".wrap-all-page")
        .classList.add("wrap-all-page-on");
    }, 1000);
  };
  // Set the img src (Important to set it before the event listener)
  img.src = "../../media/header/background-1.jpg";
};
animatePage();
// NEW
const header = () => {
  let counter = 0;
  let preCounter = 0;
  const slides = document.querySelectorAll(".all-slides");

  const clearClasses = () => {
    slides[counter].className = "all-slides";
    slides[preCounter].className = "all-slides";
  };
  const slideLeft = () => {
    clearClasses();
    slides[preCounter].classList.add("slide-left");
    slides[counter].classList.add("right-to-center");
  };
  const slideRight = () => {
    clearClasses();
    slides[preCounter].classList.add("slide-right");
    slides[counter].classList.add("left-to-center");
  };

  // Create function that changed the active btn
  const changeActiveBtn = () => {
    document
      .querySelector(".head-active-dot")
      .classList.remove("head-active-dot");
    dots[counter].classList.add("head-active-dot");
  };

  // Create function that change the slide
  const sliding = (who) => {
    preCounter = counter;
    if (who === "plus") {
      counter++;
    } else {
      counter--;
    }
    if (counter > 2) {
      counter = 0;
    }
    if (counter < 0) {
      counter = 2;
    }
    if (who === "plus") {
      slideLeft();
    } else {
      slideRight();
    }
    changeActiveBtn();
  };

  // Create event listeneres for the arrows
  document
    .querySelector(".header-arrow-right")
    .addEventListener("click", (e) => {
      sliding("plus");
    });
  document.querySelector(".header-arrow-left").addEventListener("click", () => {
    sliding();
  });
  // Create event listeners for the little dots
  // 01. Create shortcuts for the dots div
  const dots = document.querySelectorAll(".header-dots div");
  for (let i = 0; i <= 2; i++) {
    dots[i].addEventListener("click", (e) => {
      // Retrive the index
      const index = parseInt(e.target.getAttribute("index"));
      // Update the counter and the preCounter
      preCounter = counter;
      counter = index;
      if (counter > preCounter) {
        slideLeft();
      } else if (counter < preCounter) {
        slideRight();
      }
      // Call the active btn function
      changeActiveBtn();
    });
  }
};
header();
// NEW
const imagePosition = () => {
  const moveImg = (e) => {
    const imgEl = e.target.parentNode.children[0];
    if (e.pageY < 229 && !imgEl.classList.contains("image-top")) {
      imgEl.className = "";
      imgEl.classList.add("image-top");
    } else if (
      e.pageY > 329 &&
      e.pageY < 793 &&
      !imgEl.classList.contains("image-center")
    ) {
      imgEl.className = "";
      imgEl.classList.add("image-center");
    } else if (e.pageY > 794 && !imgEl.classList.contains("image-bottom")) {
      imgEl.className = "";
      imgEl.classList.add("image-bottom");
    }
  };
  for (let i = 0; i <= 2; i++) {
    document
      .querySelectorAll(".header-inside-content")
      [i].addEventListener("mousemove", moveImg);
  }
};
imagePosition();
// NEW
const openVideo = () => {
  document.querySelector(".head-ins-con-2 a").addEventListener("click", (e) => {
    e.preventDefault();
    // Add the video background modal
    document
      .querySelector(".video-background")
      .classList.add("video-background-on");
    // Add overflow hidden to the whole html document
    document.documentElement.style.overflowY = "hidden";
    // Add event listener to the video background element for be able to exiting the background view
    document
      .querySelector(".video-background")
      .addEventListener("click", (e) => {
        // Animate off the background element
        document
          .querySelector(".video-background")
          .classList.add("video-background-off");
        // Pause the ifame (if running)
        const iFrame = document.querySelector(".iframe-1");
        const iFrameSrc = iFrame.src;
        iFrame.src = iFrameSrc;
        // Remove the overflow hidden from the ht,l document
        document.documentElement.style.overflowY = "unset";
        // Set the element to disable none after the animation over
        setTimeout(() => {
          document.querySelector(".video-background").className =
            "video-background";
        }, 700);
      });
  });
};
openVideo();
// NEW
const navbar = () => {
  const openNav = () => {
    const myNav = document.querySelectorAll(".nav-click-close div");
    myNav[0].classList.toggle("nav-open-down");
    myNav[2].classList.toggle("nav-open-up");
    myNav[1].classList.toggle("nav-open-display");
  };
  document.querySelector(".nav-click-close").addEventListener("click", openNav);

  const openSq = (e) => {
    if (document.querySelector(".nav-sq-hover")) {
      document.querySelector(".nav-sq-hover").classList.remove("nav-sq-hover");
    }
    e.target.firstChild.nextElementSibling.classList.add("nav-sq-hover");
  };

  for (var i = 0; i <= 4; i++) {
    document
      .querySelectorAll(".open-nav-on-sq > div")
      [i].addEventListener("mouseenter", openSq);
  }

  document
    .querySelector(".open-nav-on-sq")
    .addEventListener("mouseleave", () => {
      if (document.querySelector(".nav-sq-hover")) {
        document
          .querySelector(".nav-sq-hover")
          .classList.remove("nav-sq-hover");
      }
    });

  // Open the nav when click on the hamburger
  document.querySelector(".nav-click-close").addEventListener("click", () => {
    document
      .querySelector(".open-nav-on-sq")
      .classList.toggle("nav-click-close-open");
  });
};
navbar();
// NEW
const activeLi = () => {
  // Short cut for all the li elements
  const allLi = document.querySelectorAll(".three-ul li");
  //  Create the function on click
  const changeActive = (e) => {
    // Get the index of the li element for knowing which element to display
    const index = parseInt(e.target.getAttribute("index"));
    // Create shortcut for the 3 element who will change
    const allDiv = document.querySelectorAll(".global-three");
    // Remove the div for the dom
    document
      .querySelector(".center-right-content-on")
      .classList.remove("center-right-content-on");
    // Display the new div in the dom
    allDiv[index].classList.add("center-right-content-on");
    // Remove the active li class from the previous active element
    document
      .querySelector(".three-li-active")
      .classList.remove("three-li-active");
    // Add the active to the clicked element
    e.target.classList.add("three-li-active");
  };
  // Add the event listeners to all li elements
  for (let i = 0; i <= 2; i++) {
    allLi[i].addEventListener("click", changeActive);
  }
};
activeLi();
// NEW
const playVideo = () => {
  // Create event listener for the video div
  document.querySelector(".three-play-video").addEventListener("click", (e) => {
    // Add the video background modal
    document
      .querySelector(".video-background")
      .classList.add("video-background-on");
    // Add overflow hidden to the whole html document
    document.documentElement.style.overflowY = "hidden";
    // Add event listener to the video background element for be able to exiting the background view
    document
      .querySelector(".video-background")
      .addEventListener("click", (e) => {
        // Animate off the background element
        document
          .querySelector(".video-background")
          .classList.add("video-background-off");
        // Pause the ifame (if running)
        const iFrame = document.querySelector(".iframe-1");
        const iFrameSrc = iFrame.src;
        iFrame.src = iFrameSrc;
        // Remove the overflow hidden from the ht,l document
        document.documentElement.style.overflowY = "unset";
        // Set the element to disable none after the animation over
        setTimeout(() => {
          document.querySelector(".video-background").className =
            "video-background";
        }, 700);
      });
  });
};
playVideo();
// NEW
const animate = () => {
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
animate();
const cosImagePosition = () => {
  if (window.screen.width > 1435) {
    // Create shortcut for the img element
    const img = document.querySelector(".costumers-img");
    // Create a boolean to check if the document have event listener or not
    let haveEvent;
    // function that decide if to active the event listner on page loading or not
    window.innerWidth > 1435 ? (haveEvent = true) : (haveEvent = false);
    // active/ disable the event listner on screen change
    window.onresize = () => {
      if (window.innerWidth < 1435 && haveEvent === true) {
        img.removeEventListener("mousemove", changeBackground);
        haveEvent = false;
      } else if (window.innerWidth > 1435 && haveEvent === false) {
        img.addEventListener("mousemove", changeBackground);
        haveEvent = true;
      }
    };
    // Create the mousemove function
    const changeBackground = (e) => {
      if (
        e.pageY / e.clientY < 5.2 &&
        e.pageY / e.clientY > 4.1 &&
        !img.classList.contains("cos-obj-center")
      ) {
        // Clear classes
        img.className = "costumers-img";
        // Add class
        img.classList.add("cos-obj-center");
      } else if (
        e.pageY / e.clientY < 4 &&
        !img.classList.contains("cos-obj-bottom")
      ) {
        // Clear
        img.className = "costumers-img";
        // Add
        img.classList.add("cos-obj-bottom");
      } else if (
        !img.classList.contains("cos-obj-top") &&
        e.pageY / e.clientY > 6
      ) {
        // Clear
        img.className = "costumers-img";
        // Add
        img.classList.add("cos-obj-top");
      }
    };
    // If screen size greather than so the event listener will be added
    if (haveEvent === true) {
      document
        .querySelector(".costumers-img")
        .addEventListener("mousemove", changeBackground);
    }
  }
};
cosImagePosition();
// NEW
const cosSlides = () => {
  // Set counter/ preCounter
  let counter = 0;
  let preCounter = 0;
  // Create short cut for all the 3 elements to be slided
  const el = document.querySelectorAll(".cos-global");
  // Creathe shortcuts for the dots div (activeBtn)
  const dots = document.querySelectorAll(".costumers-dots div");
  // Set function that clear all classes from the sliders
  const clearClasses = () => {
    for (let i = 0; i <= 2; i++) {
      el[i].className = "cos-global";
    }
  };
  // Creathe function that changed the activeBtn
  const activeBtn = () => {
    // First Remove the previous
    document
      .querySelector(".costumers-dot-active")
      .classList.remove("costumers-dot-active");
    // Than add
    dots[counter].classList.add("costumers-dot-active");
  };
  // Create the slide left function
  const moveLeft = () => {
    // Move out the current element
    el[preCounter].classList.add("cos-slide-left");
    // Enter the nexe element
    el[counter].classList.add("cos-right-to-center");
  };
  const moveRight = () => {
    // Move out the current element
    el[preCounter].classList.add("cos-slide-right");
    // Enter the nexe element
    el[counter].classList.add("cos-left-to-center");
  };
  // Create the slide function
  const slide = (side) => {
    // Increase / Decrease the counter based on the clicked arrow
    if (side === "left") {
      counter--;
    } else {
      counter++;
    }
    // Keep the counter inside the elements range
    if (counter > 2) {
      counter = 0;
    } else if (counter < 0) {
      counter = 2;
    }
    // Clear the classes
    clearClasses();
    // Move out the current element based on the side parameter
    if (side === "left") {
      moveRight();
    } else {
      moveLeft();
    }
    // Call the activeBtn
    activeBtn();
    // Update the preCounter
    preCounter = counter;
  };
  // Add event listeneres to the arrows
  document
    .querySelector(".costumers-arrow-left")
    .addEventListener("click", () => {
      slide("left");
    });
  document
    .querySelector(".costumers-arrow-right")
    .addEventListener("click", () => {
      slide();
    });

  // Create function that change slide and the activeBtn fron the dots
  const slideFromDots = (e) => {
    // Set the counter to the element index
    counter = parseInt(e.target.getAttribute("index"));
    // Clear classes
    clearClasses();
    // Slide elemetns based on the counter / preCounter
    if (counter > preCounter) {
      moveLeft();
    } else {
      moveRight();
    }
    activeBtn();
    // Update the preCounter
    preCounter = counter;
  };
  // Create the event listeners for the dots
  for (let i = 0; i <= 2; i++) {
    dots[i].addEventListener("click", slideFromDots);
  }
};
cosSlides();
// NEW
const underGrid = () => {
  // Create short cut for the under grid element
  const el = document.querySelector("#under-grid");
  // Get the center width of the element
  let middle = el.getBoundingClientRect().width / 2;
  // Create event listener on screen change and update the middle const
  window.onresize = () => {
    middle = el.getBoundingClientRect().width / 2;
  };
  // Create short cut for the img element
  const img = document.querySelector(".under-grid-img");
  // Create X/Y cordinations
  let elX, elY;
  el.addEventListener("mousemove", (e) => {
    e.pageX > middle
      ? (elX = e.pageX * 0.001 * 2)
      : (elX = -(middle / e.clientX));
    elY = (914 - e.clientY) * 0.01;
    // Keep the X in the 2% range
    if (elX < -2) {
      elX = -2;
    } else if (elX > 2) {
      elX = 2;
    }
    if (elY > 2) {
      elY = 2;
    }
    img.style.transform = `translate3d(${elX}%, ${elY}%, 0px)`;
  });
};
underGrid();

export const animatePage = () => {
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

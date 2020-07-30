export const animatePage = () => {
  // Create short cut for the spinner element
  const spinner = document.querySelector(".spinner-on-load");
  // Set function to run after the page has loaded
  window.onload = () => {
    // Fade out nicely the spinner
    spinner.classList.add("spinner-on-load-off");
    setTimeout(() => {
      // Remove completly from dom after the spinner fade of
      spinner.classList.add("spinner-on-load-none");
      // Fade in nicely the entire page
      document
        .querySelector(".wrap-all-page")
        .classList.add("wrap-all-page-on");
    }, 1000);
  };
};

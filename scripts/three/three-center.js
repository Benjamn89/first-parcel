export const activeLi = () => {
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

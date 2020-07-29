export const underGrid = () => {
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

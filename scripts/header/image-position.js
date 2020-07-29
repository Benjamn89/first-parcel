export const imagePosition = () => {
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

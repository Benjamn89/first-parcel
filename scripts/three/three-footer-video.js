export const playVideo = () => {
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

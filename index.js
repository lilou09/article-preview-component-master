const showSocials = document.querySelector(".open-share");
const shareButton = document.getElementById("click");
const cancelShareButton = document.getElementById("cancel-share");

shareButton.addEventListener("click", () => {
  showSocials.classList.toggle("clicked");
});
cancelShareButton.addEventListener("click", () => {
  showSocials.classList.remove("clicked");
});

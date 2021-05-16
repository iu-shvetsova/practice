const successWrapper = document.querySelector(".site-success");

if (successWrapper) {
  const circle = successWrapper.querySelector(".site-success__circle-loader");
  const checkmark = successWrapper.querySelector(".site-success__checkmark");

  setTimeout(() => {
    circle.classList.add("site-success__circle-loader_complete");
    checkmark.classList.add("site-success__checkmark_showing");
  }, 3000);
}

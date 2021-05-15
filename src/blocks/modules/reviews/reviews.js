const reviews = document.querySelector(".reviews");

if (reviews) {
  const wrapper = document.querySelector(".wrapper");
  const buttons = reviews.querySelectorAll(".site-review__button");
  const modal = reviews.querySelector(".reviews__modal");
  const btnClose = reviews.querySelector(".modal__btn-close");
  const reviewCards = reviews.querySelectorAll(".reviews__item");

  buttons.forEach((button) =>
    button.addEventListener("click", () => {
      wrapper.classList.add("mask");
      modal.classList.add("reviews__modal_opened");
    })
  );

  reviewCards.forEach((review) =>
    review.addEventListener("click", () => {
      wrapper.classList.add("mask");
      modal.classList.add("reviews__modal_opened");
    })
  );

  btnClose.addEventListener("click", () => {
    wrapper.classList.remove("mask");
    modal.classList.remove("reviews__modal_opened");
  });
}

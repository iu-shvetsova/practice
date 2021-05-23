const reviews = document.querySelector(".reviews");

if (reviews) {
  const wrapper = document.querySelector(".wrapper");
  const buttons = reviews.querySelectorAll(".site-review__button");
  const modal = reviews.querySelector(".reviews__modal");
  const btnClose = reviews.querySelector(".site-modal__btn-close");
  const reviewCards = reviews.querySelectorAll(".reviews__item");
  const body = document.querySelector("body");
  let modalContent;

  const onWindowClick = (evt) => {
    if (
      !evt.target.matches(
        ".site-modal__footer, .site-modal__footer *, .reviews__list, .reviews__list *, .site-review__content, .site-review__content *"
      )
    ) {
      closeModal();
      document.removeEventListener("click", onWindowClick);
    }
  };

  const onEscapeClick = (event) => {
    if (event.code === "Escape") {
      closeModal();
    }
  };

  const closeModal = () => {
    wrapper.classList.remove("mask");
    modal.classList.remove("reviews__modal_opened");
    body.classList.remove("no-scroll");
    document.removeEventListener("click", onWindowClick);
    document.removeEventListener("keydown", onEscapeClick);
    btnClose.removeEventListener("click", closeModal);
    modalContent.remove();
  };

  const openModal = () => {
    wrapper.classList.add("mask");
    modal.classList.add("reviews__modal_opened");
    body.classList.add("no-scroll");
    document.addEventListener("click", onWindowClick);
    document.addEventListener("keydown", onEscapeClick);
    btnClose.addEventListener("click", closeModal);

    modal
      .querySelector(".site-review__button")
      .classList.add("site-review__button_none");

    let description = modal.querySelector(".site-review__decription");
    if (description) {
      description.classList.add("site-review__decription_opened");
    }
  };

  buttons.forEach((button) => button.addEventListener("click", openModal));

  reviewCards.forEach((review) =>
    review.addEventListener("click", () => {
      modalContent = review
        .querySelector(".site-review__content")
        .cloneNode(true);

      reviews.querySelector(".site-modal__content-wrap").prepend(modalContent);
      openModal();
    })
  );
}

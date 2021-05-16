const reviews = document.querySelector(".reviews");

if (reviews) {
  const wrapper = document.querySelector(".wrapper");
  const buttons = reviews.querySelectorAll(".site-review__button");
  const modal = reviews.querySelector(".reviews__modal");
  const btnClose = reviews.querySelector(".modal__btn-close");
  const reviewCards = reviews.querySelectorAll(".reviews__item");
  const body = document.querySelector("body");
  const contents = reviews.querySelectorAll(".site-review__content");
  const modalContentWrap = reviews.querySelector(".content-wrap");
  let modalContent;

  const onWindowClick = (evt) => {
    if (
      !evt.target.matches(
        ".modal__footer, .modal__footer *, .reviews__list, .reviews__list *"
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

  const addContent = () => {};

  const closeModal = () => {
    wrapper.classList.remove("mask");
    modal.classList.remove("reviews__modal_opened");
    // body.classList.remove("no-scroll");
    document.removeEventListener("click", onWindowClick);
    document.removeEventListener("keydown", onEscapeClick);
    btnClose.removeEventListener("click", closeModal);
    modalContent.remove();
  };

  const openModal = () => {
    wrapper.classList.add("mask");
    modal.classList.add("reviews__modal_opened");
    // body.classList.add("no-scroll");
    document.addEventListener("click", onWindowClick);
    document.addEventListener("keydown", onEscapeClick);
    btnClose.addEventListener("click", closeModal);
  };

  buttons.forEach((button) => button.addEventListener("click", openModal));

  reviewCards.forEach((review) =>
    review.addEventListener("click", () => {
      const content = review.querySelector(".site-review__content");
      modalContent = content.cloneNode(true);
      modalContentWrap.prepend(modalContent);
      openModal();
    })
  );
}

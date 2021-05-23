import OverlayScrollbars from "overlayscrollbars";

document.addEventListener("DOMContentLoaded", function () {
  OverlayScrollbars(document.querySelectorAll(".site-modal"), {
    className: "custom-scroll",
    scrollbars: {
      clickScrolling: true,
    },
    nativeScrollbarsOverlaid: {
      showNativeScrollbars: false,
      initialize: true,
    },
  });
});

const footer = document.querySelector(".site-modal__footer");

if (footer) {
  const form = footer.querySelector(".site-modal__footer-form");
  const wrapper = form.querySelector(".site-modal__footer-wrap");
  const input = form.querySelector(".site-modal__footer-input");
  const submit = form.querySelector(".site-modal__footer-submit");
  const errorMessage = form.querySelector(".site-modal__error-message");

  const successWrapper = footer.querySelector(".site-success");
  const circle = footer.querySelector(".site-success__circle-loader");
  const checkmark = footer.querySelector(".site-success__checkmark");

  const successAnimation = () => {
    successWrapper.classList.add("site-success_opened");

    // !Не работает setTimeout(нету задержки)
    setTimeout(() => {
      circle.classList.add("site-success__circle-loader_complete");
      checkmark.classList.add("site-success__checkmark_showing");
    }, 2000);
  };

  const error = () => {
    wrapper.classList.add("site-modal__footer-wrap_error");
    submit.classList.add("site-modal__footer-submit_error");
    errorMessage.classList.add("site-modal__error-message_showing");
  };

  const success = () => {
    wrapper.classList.remove("site-modal__footer-wrap_error");
    submit.classList.remove("site-modal__footer-submit_error");
    errorMessage.classList.remove("site-modal__error-message_showing");
    wrapper.classList.add("site-modal__footer-wrap_success");
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!regex.test(input.value)) {
      event.preventDefault();
      error();
    } else {
      success();
      successAnimation();
    }
  });
}

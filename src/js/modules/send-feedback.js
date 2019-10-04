'use strict';

(function () {
  var FEEDBACK_FORM_CLASS = 'feedback__form';
  var POPUP_CLASS = 'popup';
  var MODAL_MODE_CLASS = 'modal-mode';
  var FAILURE_SUFFIX = '--failure';
  var SUCCESS_SUFFIX = '--success';
  var OPEN_SUFFIX = '--open';

  var bodyElement = document.querySelector('body');
  var formElement = document.querySelector('.' + FEEDBACK_FORM_CLASS);

  if (formElement) {
    var openPopup = function (popupItem) {
      bodyElement.classList.remove('.' + MODAL_MODE_CLASS);
      bodyElement.classList.add('.' + MODAL_MODE_CLASS);
      popupItem.classList.add(POPUP_CLASS + OPEN_SUFFIX);
    }

    formElement.addEventListener('invalid', function () {
      var failurePopupElement = document.querySelector('.' + POPUP_CLASS + FAILURE_SUFFIX);
      openPopup(failurePopupElement);
    });

    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();

      var successPopupElement = document.querySelector('.' + POPUP_CLASS + SUCCESS_SUFFIX);
      openPopup(successPopupElement);
      formElement.reset();
    });
  }
})();

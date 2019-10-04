'use strict';

(function () {
  var MODAL_MODE_CLASS = 'modal-mode';
  var POPUP_CLASS = 'popup';
  var POPUP_BTN_CLASS = 'popup__btn';
  var OPEN_SUFFIX = '--open';
  var ESC_KEY_CODE = 27;

  var bodyElement = document.querySelector('body');
  var popupElements = document.querySelectorAll('.' + POPUP_CLASS);

  if (popupElements) {
    var btnClickHandler = function (evt) {
      var target = evt.currentTarget;

      if (target.parentNode.classList.contains(POPUP_CLASS + OPEN_SUFFIX)) {
        bodyElement.classList.remove(MODAL_MODE_CLASS);
        target.parentNode.classList.remove(POPUP_CLASS + OPEN_SUFFIX);
      } else {
        bodyElement.classList.remove(MODAL_MODE_CLASS);
        bodyElement.classList.add(MODAL_MODE_CLASS);
        target.parentNode.classList.add(POPUP_CLASS + OPEN_SUFFIX);
      }
    };

    var keyPressHandler = function (evt) {
      if (evt.keyCode === ESC_KEY_CODE) {
        var openModalElement = document.querySelector('.' + POPUP_CLASS + OPEN_SUFFIX);

        if (openModalElement) {
          bodyElement.classList.remove(MODAL_MODE_CLASS);
          openModalElement.classList.remove(POPUP_CLASS + OPEN_SUFFIX);
        }
      }
    };

    [].forEach.call(popupElements, function (item) {
      var btnCloseElement = item.querySelector('.' + POPUP_BTN_CLASS);
      btnCloseElement.addEventListener('click', btnClickHandler);
    });

    window.addEventListener('keydown', keyPressHandler);
  }
})();

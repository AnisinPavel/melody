$(document).ready(function () {
  var currentFloor = 2;
  $("[data-floor=02]").toggleClass("current-floor");
  var floorPath = $(".home-image path");
  var counterUp = $(".counter-up");
  var counterDown = $(".counter-down");
  var modal = $(".modal");
  var modalCloseButton = $(".modal-close-button");
  var viewFlatsButton = $(".view-flats");

  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor");
    currentFloor = $(this).attr("data-floor");
    $(".counter").text(currentFloor);
    if (currentFloor < 18) {
      counterDown.removeClass("counter-disabled");
    }
    if (currentFloor == 18) {
      counterUp.toggleClass("counter-disabled");
    }
    if (currentFloor < 18 || currentFloor < 2) {
      counterUp.removeClass("counter-disabled");
    }
    if (currentFloor == 2) {
      counterDown.toggleClass("counter-disabled");
    }
  });

  floorPath.on("click", toggleModal);
  modalCloseButton.on("click", toggleModal);
  viewFlatsButton.on("click", toggleModal);

  counterUp.on("click", function () {
    if (currentFloor < 18) {
      counterDown.removeClass("counter-disabled");
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      console.log(currentFloor);
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
      if (currentFloor == 18) {
        counterUp.toggleClass("counter-disabled");
      }
    }
  });

  counterDown.on("click", function () {
    if (currentFloor > 2) {
      counterUp.removeClass("counter-disabled");
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      console.log(currentFloor);
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
      if (currentFloor == 2) {
        counterDown.toggleClass("counter-disabled");
      }
    }
  });

  function toggleModal() {
    modal.toggleClass("is-open");
  }
});

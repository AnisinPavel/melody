$(document).ready(function () {
  var currentFloor = 2;
  $("[data-floor=02]").toggleClass("current-floor");
  var floorPath = $(".home-image path");
  var counterUp = $(".counter-up");
  var counterDown = $(".counter-down");
  var modal = $(".modal");
  var modalCloseButton = $(".modal-close-button");
  var viewFlatsButton = $(".view-flats");
  const flatList = document.querySelector(".flat-list");
  var k = 1;
  const flatDB = {
    flats: [
      "2 комн. 64,5 кв. м.",
      "1 комн. 38,9 кв. м.",
      "1 комн. 35,9 кв. м.",
      "2 комн. 56,0 кв. м.",
      "1 комн. 35,8 кв. м.",
      "1 комн. 35,8 кв. м.",
      "2 комн. 58,4 кв. м.",
      "1 комн. 32,3 кв. м.",
      "1 комн. 29,9 кв. м.",
      "3 комн. 75,2 кв. м.",
    ],
  };

  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor");
    currentFloor = $(this).attr("data-floor");
    k = str(currentFloor);
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
      k = str(usCurrentFloor);
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
      k = str(usCurrentFloor);
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
    flatList.innerHTML = "";

    flatDB.flats.forEach((flat, i) => {
      flatList.innerHTML += `
        <li class="flat-item">
        <a href="#" class="flat-link">кв. ${i + k}, ${flat}</a>
        </li>
    `;
    });
  }

  function str(str) {
    switch (str) {
      case "02":
        k = 1;
        break;
      case "03":
        k = 11;
        break;
      case "04":
        k = 21;
        break;
      case "05":
        k = 31;
        break;
      case "06":
        k = 41;
        break;
      case "07":
        k = 51;
        break;
      case "08":
        k = 61;
        break;
      case "09":
        k = 71;
        break;
      case "10":
        k = 81;
        break;
      case "11":
        k = 91;
        break;
      case "12":
        k = 101;
        break;
      case "13":
        k = 111;
        break;
      case "14":
        k = 121;
        break;
      case "15":
        k = 131;
        break;
      case "16":
        k = 141;
        break;
      case "17":
        k = 151;
        break;
      case "18":
        k = 161;
        break;
    }
    return k;
  }
});

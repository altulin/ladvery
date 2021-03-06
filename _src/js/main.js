// const { doc } = require("prettier");

document.addEventListener("DOMContentLoaded", function () {
  const aboutAdvantages = new Swiper(".about__advantages", {
    slidesPerView: 4,
    pagination: {
      el: ".about__pagination",
    },
    breakpoints: {
      1000: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 10,
      },

      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });

  const saleCaorusel = new Swiper(".sale__caorusel", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".sale__pagination",
    },
    navigation: {
      nextEl: ".sale__control_next",
      prevEl: ".sale__control_prev",
    },
    breakpoints: {
      1380: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
    },
  });

  const productCaorusel = new Swiper(".product-slider__caorusel", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".sale__pagination",
    },
    navigation: {
      nextEl: ".sale__control_next",
      prevEl: ".sale__control_prev",
    },
    breakpoints: {
      1380: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
    },
  });

  const startAdvantages = new Swiper(".start__steps", {
    slidesPerView: 4,
    pagination: {
      el: ".start__pagination",
    },
    breakpoints: {
      1000: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });

  const windowWidth = window.innerWidth < 768;

  // Map address

  const mapAdress = () => {
    const addressContent = document.querySelector(".js-address-content");
    const selectCityBtns = document.querySelectorAll(".js-select-city");
    let activeCityBtn = document.querySelector(".js-select-city.is-active");

    const addressLinks = addressContent.querySelectorAll(".js-select-address");
    const showMore = document.querySelector(".js-show-more");

    let activeCityName = activeCityBtn.dataset.city;
    let activeCityListWrapper = addressContent.querySelector(
      `.${activeCityName}`
    );
    const addressItems =
      activeCityListWrapper.querySelectorAll(".js-address-item");

    showMore.querySelector(".show-more__value").textContent =
      addressItems.length;

    showMore.addEventListener("click", function (e) {
      e.preventDefault();

      activeCityBtn = document.querySelector(".js-select-city.is-active");
      activeCityName = activeCityBtn.dataset.city;
      activeCityListWrapper = addressContent.querySelector(
        `.${activeCityName}`
      );

      activeCityListWrapper.classList.add("is-active");
    });

    document.body.addEventListener("click", function (e) {
      const { target } = e;

      if (!target.classList.contains("js-show-more") && windowWidth) {
        activeCityBtn = document.querySelector(".js-select-city.is-active");
        activeCityName = activeCityBtn.dataset.city;
        activeCityListWrapper = addressContent.querySelector(
          `.${activeCityName}`
        );
        activeCityListWrapper.classList.remove("is-active");
      }
    });

    function init() {
      const myMap = new ymaps.Map("map", {
        center: [52.2983873, 104.267158],
        zoom: 12,
        controls: [],
      });

      myMap.behaviors.disable("scrollZoom");

      addressLinks.forEach(function (item) {
        const coords = item.dataset.coord.split(",");

        const placemark = new ymaps.Placemark(
          coords,
          {},
          {
            iconLayout: "default#image",
            iconImageHref: "./img/pin.png",
            iconImageSize: [30, 30],
            // iconImageOffset: [-3, -42]
          }
        );

        myMap.geoObjects.add(placemark);

        item.addEventListener("click", function (e) {
          e.preventDefault();

          myMap.panTo([coords]);

          const currentCity = document.querySelector(".js-current-city");
          currentCity.innerHTML = item.innerHTML;
        });
      });

      selectCityBtns.forEach(function (item, index) {
        item.addEventListener("click", function (e) {
          e.preventDefault();

          for (var i = 0; i < selectCityBtns.length; i++) {
            const btn = selectCityBtns[i];

            btn.classList.remove("is-active");
          }

          this.classList.add("is-active");

          const { city } = this.dataset;
          const addressLists =
            addressContent.querySelectorAll(".js-address-list");
          const coords = item.dataset.coord.split(",");

          myMap.panTo([coords]);

          for (var i = 0; i < addressLists.length; i++) {
            const list = addressLists[i];

            list.classList.remove("is-active");

            if (list.classList.contains(city)) {
              list.classList.add("is-active");

              const addressItems = list.querySelectorAll(".js-address-item");

              showMore.querySelector(".show-more__value").textContent =
                addressItems.length;
            }
          }
        });
      });
    }

    ymaps.ready(init);
  };

  if (document.querySelector("#map")) {
    mapAdress();
  }

  // Map

  // Mobile menu
  const burger = document.querySelector(".js-burger");
  const mobileNav = document.querySelector(".js-mobile-nav");
  const closeMobileNav = document.querySelector(".js-close-mobile-nav");

  burger.addEventListener("click", function (e) {
    e.preventDefault();
    mobileNav.classList.add("is-active");
  });

  closeMobileNav.addEventListener("click", function (e) {
    e.preventDefault();
    mobileNav.classList.remove("is-active");
  });

  // actualYear
  const actualYear = () => {
    const year = new Date().getFullYear();

    if (document.querySelector("[data-actual-year]")) {
      document.querySelector("[data-actual-year]").textContent = year;
    }
  };
  actualYear();

  // js-price-range
  if (document.querySelector(".js-price-range")) {
    const changeRange = (data) => {
      const dataTo = data.to;
      const dataFrom = data.from;

      $(".input-group__from").val(`???? ${dataFrom} ???`);
      $(".input-group__to").val(`???? ${dataTo} ???`);
    };

    $(".js-price-range").ionRangeSlider({
      type: "double",
      min: 0,
      max: 30000,
      from: 0,
      to: 10000,
      grid: true,
      onChange(data) {
        changeRange(data);
      },
    });
  }

  if (document.querySelector(".info-filter__select")) {
    $(".info-filter__select").heapbox({
      effect: {
        speed: "fast",
      },
    });
  }

  if (
    document.querySelector(".page--catalog .products__list") &&
    !windowWidth
  ) {
    const bodyCover = $("body.page");

    $(".products__item").on("mouseenter", (e) => {
      bodyCover.addClass("page--cover");
    });

    $(".products__item").on("mouseleave", () => {
      bodyCover.removeClass("page--cover");
    });

    $(".sale-card__link").on("click", () => {
      $("#modal-order").modal({
        fadeDuration: 100,
      });
      return false;
    });

    $("#modal-order").on($.modal.BEFORE_OPEN, () => {
      bodyCover.removeClass("page--cover");
    });
  }

  if (document.querySelector(".sale-card__colors-label")) {
    $(".sale-card__colors-label").on("click", (e) => {
      if ($(e.target).is(".sale-card__colors-label")) {
        const labelColor = $(e.target);
        const newSrc = labelColor.attr("data-image");
        const newColor = labelColor.attr("data-color");
        const labelParent = labelColor.parents(".sale-card");

        labelParent.find(".sale-card__thumb").attr("src", newSrc);
        labelParent.find(".sale-card__desc p").text(newColor);
      }
    });
  }

  const colorsList = new Map([
    ["#0A0A0A", "/img/door-1.png"],
    ["#E8F7C8", "/img/door-1.png"],
    ["#0A0A0A", "/img/door-1.png"],
  ]);

  let createColorElem;

  if (document.querySelector(".configuration-tabs__select")) {
    $(".configuration-tabs__select").heapbox({
      effect: {
        speed: "fast",
      },
      onChange(value, sourceElement) {
        if (
          sourceElement.parent().hasClass("configuration-tabs__label--color")
        ) {
          createColorElem(".configuration-tabs__label--color .holder");
          $(".view__img").attr("src", colorsList.get(value));
        }
      },
    });
  }

  if (document.querySelector(".configuration-tabs__select--color")) {
    console.log(`ff`);
  }

  if (document.querySelector(".configuration-tabs")) {
    const tabConfiguration = new Tabby(".configuration-tabs");
  }

  if (document.querySelector(".view__list")) {
    const tabViewConfiguration = new Tabby(".view__list");
  }

  if (document.querySelector(".preview__img")) {
    const controlCurrent = (elem) => {
      $(".preview__img").removeClass("preview__img--current");
      elem.addClass("preview__img--current");
    };

    $(".preview__img").on("click", (e) => {
      const preview = $(e.target);
      const bgUrl = preview.attr("data-bg");

      preview
        .parent()
        .siblings(".view__interior-main--bg")
        .css("background-image", `url(${bgUrl})`);

      controlCurrent(preview);
    });
  }

  if (document.querySelector(".click__input")) {
    Inputmask("+7(999) 999-99-99").mask(".click__input");
  }

  if (document.querySelector("#configuration-form")) {
    const sendForm = (e) => {
      const form = e.target;
      const data = $(form).serialize();
      $.ajax({
        url: "https://httpbin.org/anything",
        method: "post",
        dataType: "json",
        data,
        success() {
          window.location = "complete.html";
        },
      });
    };

    $("#configuration-form").on("submit", (e) => {
      e.preventDefault();
      sendForm(e);
    });
  }

  if (document.querySelector(".climb")) {
    $(".climb").accordion({
      transitionSpeed: 300,
    });
  }

  if (document.querySelector(".counter__btn")) {
    const getDataCounter = (elem, val) => {
      const name = elem.attr("name");
      $(`[data-counter=${name}]`).text(val * 1500);
      $(`[data-total=${name}]`).text(val);
    };

    const getNumber = (evt) => {
      const target = $(evt.target);
      const counterInput = target.parent().find(".counter-enter");
      let val = Number(counterInput.val());

      if (val >= 0 && val <= 10) {
        if (target.hasClass("counter__btn--plus") && val !== 10) {
          val += 1;
          counterInput.val(val);
          getDataCounter(counterInput, val);
        }

        if (target.hasClass("counter__btn--minus") && val !== 0) {
          val -= 1;
          counterInput.val(val);
          getDataCounter(counterInput, val);
        }
      }
    };

    $(".counter__btn--plus").on("click", (e) => {
      getNumber(e);
    });

    $(".counter__btn--minus").on("click", (e) => {
      getNumber(e);
    });
  }

  if (document.querySelector("#input-personal-phone")) {
    Inputmask("+7(999) 999-99-99").mask("#input-personal-phone");
  }

  if (document.querySelector(".finality__list")) {
    const tabGetting = new Tabby(".finality__list");
  }

  if (document.querySelector(".getting-link")) {
    $(".getting-link").on("click", (e) => {
      const inputGetting = $(e.currentTarget).prev(".getting__input");

      if (inputGetting.is(":checked")) {
        inputGetting.prop("checked", false);
      } else {
        inputGetting.prop("checked", true);
      }
    });
  }

  function initBasketMap() {
    const myMap = new ymaps.Map("tab-content__map", {
      center: [52.2983873, 104.267158],
      zoom: 12,
      controls: [],
    });

    const placemark = new ymaps.Placemark(
      [52.2983873, 104.267158],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "./img/pin.png",
        iconImageSize: [30, 30],
      }
    );

    myMap.geoObjects.add(placemark);

    myMap.behaviors.disable("scrollZoom");
  }

  if (document.querySelector("#tab-content__map")) {
    ymaps.ready(initBasketMap);
  }

  if (document.querySelector("#basket-form")) {
    const sendForm = (e) => {
      const form = e.target;
      const data = $(form).serialize();
      $.ajax({
        url: "https://httpbin.org/anything",
        method: "post",
        dataType: "json",
        data,
        success() {
          window.location = "complete.html";
        },
      });
    };

    $("#basket-form").on("submit", (e) => {
      e.preventDefault();
      sendForm(e);
    });
  }

  const fixTopMenu = () => {
    const fixBlock = $(".total-info__inner");

    if (fixBlock.length > 0 && $(window).width() > 1200) {
      const vTop = 458;
      let lastScrollTop = 0;

      $(window).on(`scroll`, () => {
        const y = $(this).scrollTop();

        if (y >= vTop) {
          fixBlock.addClass("stuck");
        } else {
          fixBlock.removeClass("stuck");
        }

        lastScrollTop = y;
      });
    }
  };

  fixTopMenu();

  if (document.querySelector(".kind__slider")) {
    const kind_swiper = new Swiper(".kind__slider", {
      slidesPerView: 3,
      navigation: {
        nextEl: ".sale__control_next-kind",
        prevEl: ".sale__control_prev-kind",
      },

      breakpoints: {
        600: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    });
  }

  if (document.querySelector(".installation__slider")) {
    const installation_swiper = new Swiper(".installation__slider", {
      slidesPerView: 3,

      navigation: {
        nextEl: ".sale__control_next-installation",
        prevEl: ".sale__control_prev-installation",
      },
      breakpoints: {
        600: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    });
  }

  if (document.querySelector(".examples__slider") && windowWidth) {
    const installation_swiper = new Swiper(".examples__slider", {
      navigation: {
        nextEl: ".sale__control_next-examples",
        prevEl: ".sale__control_prev-examples",
      },
      slidesPerView: 1,
    });
  }

  if (document.querySelector(".doors-slider__link-lightbox")) {
    const kind_lightbox = GLightbox({
      selector: ".doors-slider__link-lightbox",
    });
  }

  const selectItem = document.querySelector(
    ".configuration-tabs__label--color"
  );

  const getColor = (element) => {
    return element.attributes.rel.value;
  };

  createColorElem = (parentClass) => {
    const parent = selectItem.querySelectorAll(parentClass);

    for (const item of parent) {
      const colorElement = document.createElement("span");
      colorElement.classList.add("sample");
      colorElement.style.backgroundColor = getColor(item);
      item.appendChild(colorElement);
    }
  };

  if (selectItem) {
    createColorElem(".holder");
    createColorElem(".heapOption a");
  }
});

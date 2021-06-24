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

  const windowWidth = window.innerWidth < 770;

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

  // ymaps.ready(init);

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
    $(".js-price-range").ionRangeSlider({
      type: "double",
      min: 0,
      max: 1000,
      from: 200,
      to: 500,
      grid: true,
    });
  }

  if (document.querySelector(".info-filter")) {
    $(".info-filter__select").heapbox();
  }
});

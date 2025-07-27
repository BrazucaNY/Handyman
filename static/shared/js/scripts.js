let topNavInitialized = false;
let sideNavInitialized = false;
const languages = [
  { code: "en", name: "EN English", englishName: "English" },
  { code: "es", name: "ES Español", englishName: "Spanish" },
  { code: "fr", name: "FR Français", englishName: "French" },
  { code: "de", name: "DE Deutsch", englishName: "German" },
  { code: "it", name: "IT Italiano", englishName: "Italian" },
  { code: "nl", name: "NL Nederlands", englishName: "Dutch" },
  { code: "pl", name: "PL Polski", englishName: "Polish" },
  { code: "pt", name: "PT Português", englishName: "Portuguese" },
  { code: "ru", name: "RU Русский", englishName: "Russian" },
  { code: "tr", name: "TR Türkçe", englishName: "Turkish" },
  { code: "ar", name: "AR العربية", englishName: "Arabic" },
  { code: "zh", name: "ZH 中文", englishName: "Chinese" },
  { code: "ja", name: "JA 日本語", englishName: "Japanese" },
  { code: "ko", name: "KO 한국어", englishName: "Korean" },
  { code: "hi", name: "HI हिंदी", englishName: "Hindi" },
  { code: "sv", name: "SV Svenska", englishName: "Swedish" },
  { code: "no", name: "NO Norsk", englishName: "Norwegian" },
  { code: "da", name: "DA Dansk", englishName: "Danish" },
  { code: "fi", name: "FI Suomi", englishName: "Finnish" },
  { code: "cs", name: "CS Čeština", englishName: "Czech" },
  { code: "he", name: "HE עברית", englishName: "Hebrew" },
  { code: "id", name: "ID Indonesia", englishName: "Indonesian" },
  { code: "vi", name: "VI Tiếng Việt", englishName: "Vietnamese" },
  { code: "th", name: "TH ไทย", englishName: "Thai" },
  { code: "ro", name: "RO Română", englishName: "Romanian" },
  { code: "sk", name: "SK Slovenčina", englishName: "Slovak" },
  { code: "bg", name: "BG Български", englishName: "Bulgarian" },
  { code: "sr", name: "SR Српски", englishName: "Serbian" },
  { code: "ms", name: "MS Melayu", englishName: "Malay" },
  { code: "uk", name: "UK Українська", englishName: "Ukrainian" },
  { code: "ml", name: "ML മലയാളം", englishName: "Malayalam" },
  { code: "ta", name: "TA தமிழ்", englishName: "Tamil" },
  { code: "te", name: "TE తెలుగు", englishName: "Telugu" },
  { code: "bn", name: "BN বাংলা", englishName: "Bengali" },
  { code: "mr", name: "MR मराठी", englishName: "Marathi" },
  { code: "kn", name: "KN ಕನ್ನಡ", englishName: "Kannada" },
  { code: "gu", name: "GU ગુજરાતી", englishName: "Gujarati" },
  { code: "sq", name: "SQ Albanian", englishName: "Albanian" },
  { code: "hy", name: "HY Armenian", englishName: "Armenian" },
  { code: "awa", name: "AWA Awadhi", englishName: "Awadhi" },
  { code: "az", name: "AZ Azerbaijani", englishName: "Azerbaijani" },
  { code: "ba", name: "BA Bashkir", englishName: "Bashkir" },
  { code: "eu", name: "EU Basque", englishName: "Basque" },
  { code: "be", name: "BE Belarusian", englishName: "Belarusian" },
  { code: "bho", name: "BHO Bhojpuri", englishName: "Bhojpuri" },
  { code: "bs", name: "BS Bosnian", englishName: "Bosnian" },
  { code: "yue", name: "YUE Cantonese (Yue)", englishName: "Cantonese" },
  { code: "ca", name: "CA Catalan", englishName: "Catalan" },
  { code: "hne", name: "HNE Chhattisgarhi", englishName: "Chhattisgarhi" },
  { code: "hr", name: "HR Croatian", englishName: "Croatian" },
  { code: "et", name: "ET Estonian", englishName: "Estonian" },
  { code: "fo", name: "FO Faroese", englishName: "Faroese" },
  { code: "gl", name: "GL Galician", englishName: "Galician" },
  { code: "ka", name: "KA ქართული", englishName: "Georgian" },
  { code: "el", name: "EL Greek", englishName: "Greek" },
  { code: "hu", name: "HU Hungarian", englishName: "Hungarian" },
  { code: "ga", name: "GA Irish", englishName: "Irish" },
  { code: "jv", name: "JV Javanese", englishName: "Javanese" },
  { code: "ks", name: "KS Kashmiri", englishName: "Kashmiri" },
  { code: "kk", name: "KK Kazakh", englishName: "Kazakh" },
  { code: "kok", name: "KOK Konkani", englishName: "Konkani" },
  { code: "ky", name: "KY Kyrgyz", englishName: "Kyrgyz" },
  { code: "lv", name: "LV Latvian", englishName: "Latvian" },
  { code: "lt", name: "LT Lithuanian", englishName: "Lithuanian" },
  { code: "mk", name: "MK Macedonian", englishName: "Macedonian" },
  { code: "mai", name: "MAI Maithili", englishName: "Maithili" },
  { code: "mt", name: "MT Maltese", englishName: "Maltese" },
  { code: "nan", name: "NAN Min Nan", englishName: "Min Nan" },
  { code: "mo", name: "MO Moldovan", englishName: "Moldovan" },
  { code: "mn", name: "MN Mongolian", englishName: "Mongolian" },
  { code: "cnr", name: "CNR Montenegrin", englishName: "Montenegrin" },
  { code: "ne", name: "NE Nepali", englishName: "Nepali" },
  { code: "or", name: "OR Oriya", englishName: "Oriya" },
  { code: "ps", name: "PS Pashto", englishName: "Pashto" },
  { code: "fa", name: "FA Persian (Farsi)", englishName: "Persian (Farsi)" },
  { code: "pa", name: "PA Punjabi", englishName: "Punjabi" },
  { code: "raj", name: "RAJ Rajasthani", englishName: "Rajasthani" },
  { code: "sa", name: "SA Sanskrit", englishName: "Sanskrit" },
  { code: "sat", name: "SAT Santali", englishName: "Santali" },
  { code: "sd", name: "SD Sindhi", englishName: "Sindhi" },
  { code: "si", name: "SI Sinhala", englishName: "Sinhala" },
  { code: "sl", name: "SL Slovene", englishName: "Slovene" },
  { code: "ur", name: "UR Urdu", englishName: "Urdu" },
  { code: "uz", name: "UZ Uzbek", englishName: "Uzbek" },
  { code: "cy", name: "CY Welsh", englishName: "Welsh" },
  { code: "wuu", name: "WUU Wu", englishName: "Wu" },
];

const findOriginalLanguage = (originalLanguage) => {
  const language = languages.find((lang) => lang.code === originalLanguage);
  return language ? language.name : originalLanguage.toUpperCase();
};

const findNearestParentSection = (element) => {
  if (!element) return null;
  if (element.tagName === "SECTION") return element;
  return findNearestParentSection(element.parentElement);
};

window.addEventListener("resize", () => {
  const sliders = document.querySelectorAll("[data-componentUI='slider']");

  sliders.forEach((slider) => {
    const anySlide = slider.querySelector(".slide");
    const container = slider.closest(".slider-wrapper").querySelector(".slides-container");
    container.scrollLeft = anySlide.clientWidth * parseInt(container.dataset.currentSlide || "0", 10);
  });
});

const initAccordion = () => {
  const accordions = document.querySelectorAll("[data-componentUI='accordion']");
  if (!accordions) return;
  accordions.forEach((accordion) => {
    const toggle = accordion.querySelector("[data-componentUI='accordion-toggle']");
    const content = accordion.querySelector("[data-componentUI='accordion-content']");

    toggle.addEventListener("click", () => {
      const isActive = content.classList.contains("zip-down");

      if (isActive) {
        content.classList.remove("zip-down");
        content.classList.add("zip-up");
      } else {
        content.classList.remove("zip-up");
        content.classList.add("zip-down");
      }

      toggle.querySelector("i svg").classList.toggle("rotate-180");
    });
  });
};

const initCarousel = () => {
  const carousels = document.querySelectorAll(".carousel-container");
  if (!carousels) return;

  carousels.forEach((carouselContainer, idx) => {
    const carousel = carouselContainer.querySelector(".carousel");
    const items = carousel.querySelectorAll(".carousel-item");
    const prevButton = carouselContainer.querySelector(".prev");
    const nextButton = carouselContainer.querySelector(".next");
    const indicatorsContainer = carouselContainer.querySelector(".carousel-indicators");

    const carouselId = `carousel-${idx}`;
    carouselContainer.dataset.carouselId = carouselId;

    let index = 0;
    let indicators = [];
    let intervalId = null;
    let isPausedByMessage = false;

    if (indicatorsContainer) {
      indicatorsContainer.innerHTML = "";
      items.forEach((item, i) => {
        const indicator = document.createElement("div");
        indicator.classList.add("carousel-indicator");
        if (i === index) indicator.classList.add("active");
        indicator.addEventListener("click", (e) => {
          e.stopPropagation();
          index = i;
          updateCarousel();
        });
        indicatorsContainer.appendChild(indicator);
      });

      indicators = indicatorsContainer.querySelectorAll(".carousel-indicator");
    }

    function updateCarousel() {
      const width = carousel.offsetWidth;
      carousel.style.transition = "transform 0.5s ease-in-out";
      carousel.style.transform = `translateX(${-index * width}px)`;

      items.forEach((item, i) => {
        item.classList.toggle("active", i === index);
      });

      if (indicatorsContainer) {
        indicators.forEach((indicator, i) => {
          indicator.classList.toggle("active", i === index);
        });
      }
    }

    prevButton &&
      prevButton.addEventListener("click", (e) => {
        e.stopPropagation();
        index = index > 0 ? index - 1 : items.length - 1;
        updateCarousel();
      });

    nextButton &&
      nextButton.addEventListener("click", (e) => {
        e.stopPropagation();
        index = index < items.length - 1 ? index + 1 : 0;
        updateCarousel();
      });

    function startAutoSlide() {
      if (!intervalId && !isPausedByMessage) {
        intervalId = setInterval(() => {
          nextButton && nextButton.click();
        }, 3000);
      }
    }

    function stopAutoSlide() {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    }

    carouselContainer.addEventListener("mouseenter", stopAutoSlide);
    carouselContainer.addEventListener("mouseleave", startAutoSlide);

    startAutoSlide();
    updateCarousel();

    window.addEventListener("resize", () => {
      updateCarousel();
    });

    window.addEventListener("message", (event) => {
      const { action, targetCarouselId } = event.data;

      if (targetCarouselId === "all" || targetCarouselId === carouselId) {
        if (action === "stop") {
          isPausedByMessage = true;
          stopAutoSlide();
        } else if (action === "start") {
          isPausedByMessage = false;
          startAutoSlide();
        }
      }
    });
  });
};

let activeCarousels = [];

const cleanupMobileCarousel = () => {
  activeCarousels.forEach(({ container, intervalId }) => {
    container.style.display = "";
    container.style.justifyContent = "";
    container.style.alignItems = "";
    container.style.transform = "";
    container.style.transition = "";

    const indicators = container.parentElement.querySelector(".carousel-indicators");
    if (indicators) indicators.remove();

    container.replaceWith(container.cloneNode(true));
    clearInterval(intervalId);
  });
  activeCarousels = [];
};

const initMobileCarousel = () => {
  if (window.innerWidth >= 768) return;
  const mobileCarousels = document.querySelectorAll(".mobile-carousel");
  mobileCarousels.forEach((carouselContainer) => {
    const items = carouselContainer.querySelectorAll(".carousel-item");
    if (items.length === 0) return;
    const containerCs = getComputedStyle(carouselContainer);
    const containerGap = parseInt(containerCs.gap);
    const itemCs = getComputedStyle(items[0]);
    const itemWidth = parseInt(itemCs.width);

    carouselContainer.style.display = "flex";
    carouselContainer.style.justifyContent = "start";
    carouselContainer.style.alignItems = "stretch";

    let indicatorsContainer = document.createElement("div");
    indicatorsContainer.className = "carousel-indicators";
    indicatorsContainer.style.position = "absolute";
    indicatorsContainer.style.bottom = "-20px";
    indicatorsContainer.style.left = "50%";
    indicatorsContainer.style.transform = "translateX(-50%)";
    indicatorsContainer.style.display = "flex";
    indicatorsContainer.style.gap = "5px";
    carouselContainer.parentElement.appendChild(indicatorsContainer);

    let currentIndex = 0;

    items.forEach((item, i) => {
      const indicator = document.createElement("div");
      indicator.className = "carousel-indicator";
      indicator.style.width = "10px";
      indicator.style.height = "10px";
      indicator.style.borderRadius = "50%";
      indicator.style.backgroundColor = i === 0 ? "#fff" : "#888";
      indicator.style.cursor = "pointer";
      indicator.addEventListener("click", () => {
        currentIndex = i;
        updateCarousel();
      });
      indicatorsContainer.appendChild(indicator);
    });

    function updateCarousel() {
      const gap = containerGap * currentIndex;
      const space = -currentIndex * itemWidth;
      carouselContainer.style.transition = "transform 0.5s ease-in-out";
      carouselContainer.style.transform = `translateX(${space - gap}px)`;

      const indicators = indicatorsContainer.querySelectorAll(".carousel-indicator");
      indicators.forEach((indicator, i) => {
        indicator.style.backgroundColor = i === currentIndex ? "#fff" : "#888";
      });
    }

    let intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % items.length;
      updateCarousel();
    }, 3000);

    let startX = 0;
    carouselContainer.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
      clearInterval(intervalId);
    });
    carouselContainer.addEventListener("touchend", (e) => {
      const endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) {
        currentIndex = (currentIndex + 1) % items.length;
      } else if (endX - startX > 50) {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
      }
      updateCarousel();
      intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
      }, 3000);
    });

    activeCarousels.push({ container: carouselContainer, intervalId });
  });
};

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    cleanupMobileCarousel();
    return;
  } else initMobileCarousel();
});

const initSlider = () => {
  const sliders = document.querySelectorAll("[data-componentUI='slider']");

  function wrapValue(value, max) {
    return ((value % max) + max) % max;
  }

  sliders.forEach((slider) => {
    const sliderType = slider.dataset.sliderType || "finite";
    const anySlide = slider.querySelector(".slide");
    const leftButton = slider.querySelector("[data-componentUI='slider-button-left']");
    const rightButton = slider.querySelector("[data-componentUI='slider-button-right']");
    const slickyContainer = slider.querySelector("[data-componentUI='slider-slick-container']");
    const slidesNumber = slider.querySelectorAll("[data-componentUI='slider-content']").length;

    const container = slider.closest(".slider-wrapper").querySelector(".slides-container");
    container.dataset.currentSlide =
      container.dataset.currentSlide != null ? parseInt(container.dataset.currentSlide, 10) - 1 : 0;

    function updateButtonsVisibility() {
      if (sliderType === "finite") {
        leftButton?.classList.toggle("hidden", parseInt(container.dataset.currentSlide, 10) === 0);
        rightButton?.classList.toggle("hidden", parseInt(container.dataset.currentSlide, 10) === slidesNumber - 1);
      } else if (sliderType === "infinite" && slidesNumber > 1) {
        leftButton?.classList.remove("hidden");
        rightButton?.classList.remove("hidden");
      } else if (sliderType === "slicky") {
        leftButton?.classList.add("hidden");
        rightButton?.classList.add("hidden");
      }
    }

    function handleSlideChange() {
      const currentSlide = parseInt(container.dataset.currentSlide ?? "0", 10);
      container.scrollLeft = currentSlide * anySlide.clientWidth;

      if (sliderType === "slicky") {
        slickyContainer.querySelector(".slicky-dot-active")?.classList.remove("slicky-dot-active");
        const activeDot = slickyContainer.querySelector(`[data-index='${currentSlide}']`);
        activeDot?.classList.add("slicky-dot-active");
      }

      updateButtonsVisibility();
    }
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-current-slide") {
          handleSlideChange();
        }
      });
    });

    observer.observe(container, { attributes: true });

    if (sliderType === "slicky") {
      const dots = slickyContainer.querySelectorAll(".slicky-dot");
      dots.forEach((dot) => {
        dot.remove();
      });

      for (let i = 0; i < slidesNumber; i++) {
        const dot = document.createElement("button");
        dot.setAttribute("data-index", i);
        dot.classList.add("slicky-dot");
        dot.addEventListener("click", () => {
          container.dataset.currentSlide = i;
        });

        if (i === 0) {
          dot.classList.add("slicky-dot-active");
        }

        slickyContainer.appendChild(dot);
      }
    }

    leftButton?.addEventListener("click", () => {
      const currentSlide = parseInt(container.dataset.currentSlide ?? "0", 10);
      container.dataset.currentSlide = wrapValue(currentSlide - 1, slidesNumber);
    });

    rightButton?.addEventListener("click", () => {
      const currentSlide = parseInt(container.dataset.currentSlide ?? "0", 10);
      container.dataset.currentSlide = wrapValue(currentSlide + 1, slidesNumber);
    });

    updateButtonsVisibility();
  });
};

const initContentSwitcher = () => {
  const activeTab = ["text-primary", "font-semibold"];

  const contentTables = document.querySelectorAll(".content-table");
  if (!contentTables) return;
  contentTables.forEach((table) => {
    const tabsContainer = table.querySelector(".table-tabs");
    if (!tabsContainer) return;
    const tabs = tabsContainer.querySelectorAll('[data-toggle="tab"]');
    if (tabs.length === 0) return;
    const content = table.querySelector(".content");
    if (!content) return;
    const panels = content.querySelectorAll(".content-panel");
    if (panels.length === 0) return;

    const highestPanel = Math.max(...Array.from(panels).map((panel) => panel.offsetHeight));
    if (highestPanel > 0) content.style.height = `${highestPanel}px`;

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const focusTag = tab.getAttribute("data-panel-target");

        panels.forEach((panel) => {
          const tag = panel.getAttribute("data-tag");
          if (tag === focusTag) {
            panel.classList.add("block");
            panel.classList.remove("hidden");
            setTimeout(() => {
              panel.classList.remove("fade-out");
              panel.classList.add("fade-in");
            }, 500);
          } else {
            panel.classList.remove("fade-in");
            panel.classList.add("fade-out");
            setTimeout(() => {
              panel.classList.add("hidden");
              panel.classList.remove("block");
            }, 500);
          }
        });

        tabs.forEach((btn) => btn.classList.remove(...activeTab));
        tab.classList.add(...activeTab);
      });
    });

    tabs[0].click();
  });
};
const initGallery = () => {
  const galleries = document.querySelectorAll("[data-gallery-component]");
  if (!galleries) return;
  galleries.forEach((gallery) => {
    const buttons = gallery.querySelectorAll("[data-gallery-focus]");
    const images = gallery.querySelectorAll("[data-gallery-tag]");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const focusTag = button.getAttribute("data-gallery-focus");

        images.forEach((image) => {
          const tags = image.getAttribute("data-gallery-tag").split("-");
          if (tags.includes(focusTag)) {
            image.style.display = "block";
            setTimeout(() => {
              image.classList.remove("fade-out");
              image.classList.add("fade-in");
            }, 500);
          } else {
            image.classList.remove("fade-in");
            image.classList.add("fade-out");
            setTimeout(() => {
              image.style.display = "none";
            }, 500);
          }
        });

        buttons.forEach((btn) => btn.classList.remove("bg-primary", "text-white"));
        button.classList.add("bg-primary", "text-white");
      });
    });

    if (buttons[0]) buttons[0].click();
  });
};
const initHideOnScroll = () => {
  const nav = document?.querySelector("nav");
  if (!nav) return;

  const dataOffset = nav.getAttribute("data-offset-top") || 400;
  const element = document.getElementById("element-to-hide");
  if (!element) return;

  window.addEventListener("scroll", function () {
    if (window.scrollY > nav.offsetTop + dataOffset) {
      if (element.classList.contains("hidden")) return;
      element.classList.add("fade-out");
      element.classList.remove("fade-in");
      setTimeout(() => {
        element.classList.add("hidden");
      }, 500);
    } else {
      if (!element.classList.contains("hidden")) return;
      element.classList.remove("hidden");
      setTimeout(() => {
        element.classList.remove("fade-out");
        element.classList.add("fade-in");
      }, 0);
    }
  });
};
const topNav = () => {
  if (topNavInitialized) return;
  const burgerButton = document.getElementById("burger-button");
  const navMenu = document.getElementById("nav-menu");

  if (!burgerButton || !navMenu) return;

  const closeNavMenu = () => {
    if (!navMenu.classList.contains("hidden")) {
      navMenu.classList.remove("menu-expanded");
      navMenu.classList.add("menu-collapsed");
      setTimeout(() => {
        navMenu.classList.add("hidden");
      }, 300);
    }
  };

  burgerButton.addEventListener("click", () => {
    if (navMenu.classList.contains("hidden")) {
      navMenu.classList.remove("hidden");
      setTimeout(() => {
        navMenu.classList.remove("menu-collapsed");
        navMenu.classList.add("menu-expanded");
      }, 100);
    } else {
      closeNavMenu();
    }
  });
  topNavInitialized = true;
  window.closeNavMenu = closeNavMenu;
};

const sideNav = () => {
  if (sideNavInitialized) return;
  const sideNav = document.getElementById("side-nav");
  if (!sideNav) return;
  const sideNavButton = document.getElementById("side-nav-button");
  if (!sideNavButton) return;
  const navContent = document.getElementById("nav-content");

  if (sideNav && sideNavButton && navContent) {
    sideNavButton.addEventListener("click", () => {
      const isHidden = sideNav.classList.contains("hidden-nav");

      if (isHidden) {
        sideNav.classList.remove("hidden-nav");
        sideNav.classList.add("open-nav", "duration-300", "ease-in-out");

        setTimeout(() => {
          navContent.classList.remove("hidden");
          navContent.classList.add("flex", "visible", "opacity-100", "duration-300");
        }, 50);
      } else {
        sideNav.classList.remove("open-nav");
        sideNav.classList.add("hidden-nav", "duration-300", "ease-in-out");

        navContent.classList.remove("flex", "visible", "opacity-100");
        navContent.classList.add("hidden");
      }
    });
  }
  sideNavInitialized = true;
};

const initNav = () => {
  topNav();
  sideNav();
};
const initTranslations = async () => {
  const languagesResponse = await fetch("/files/languages", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    credentials: "include",
  });
  if (!languagesResponse.ok) {
    console.error("Failed to fetch languages");
    return;
  }

  const contentType = languagesResponse.headers.get("Content-Type");
  if (!contentType || !contentType.includes("application/json")) return;

  const languagesData = await languagesResponse.json();
  const languagesList = languagesData.data.languages || [];

  if (languagesList.length < 2) return;

  let dropdownButton = document.querySelector(".shared-dropdown-button");
  let dropdownContent = document.querySelector(".shared-dropdown-content");

  const currentPath = window.location.pathname;
  const languageCodeMatch = currentPath.match(/^\/([a-z]{2,3})\//);

  const currentLanguageCode = languageCodeMatch ? languageCodeMatch[1] : null;
  let currentLanguageName = "Language";
  if (currentLanguageCode) {
    const currentLanguage = languages.find((lang) => lang.code === currentLanguageCode);
    if (currentLanguage) {
      currentLanguageName = findOriginalLanguage(currentLanguage.code).split(" ")[1];
    }
  } else {
    const firstLanguage = languagesList[0];
    if (firstLanguage) {
      currentLanguageName = findOriginalLanguage(firstLanguage).split(" ")[1];
    }
  }

  if (dropdownButton === null || dropdownContent === null) {
    const placeholder = document.querySelector(".shared-language-placeholder");
    if (!placeholder) {
      console.error("No placeholder found for language selector");
      return;
    }

    const languageSelector = document.createElement("div");
    languageSelector.classList.add("shared-dropdown");
    languageSelector.innerHTML = `<button class="shared-dropdown-button"><span id='current-language'>${currentLanguageName}</span></button>
    <div class="shared-dropdown-content"></div>`;
    placeholder.replaceWith(languageSelector);

    dropdownButton = document.querySelector(".shared-dropdown-button");
    dropdownContent = document.querySelector(".shared-dropdown-content");
  }

  dropdownContent.innerHTML = "";
  dropdownButton.addEventListener("click", function () {
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
  });

  languagesList.forEach((language) => {
    const anchor = document.createElement("a");
    anchor.href = `/${language}/`;
    anchor.textContent = findOriginalLanguage(language);
    dropdownContent.appendChild(anchor);
  });

  const firstAnchor = dropdownContent.querySelector("a");
  if (firstAnchor) {
    firstAnchor.href = "/";
  }

  const dropdownItems = document.querySelectorAll(".shared-dropdown-content a");

  dropdownItems.forEach((item) => {
    item.addEventListener("click", async function (event) {
      event.preventDefault();
      const href = item.getAttribute("href");
      if (!href) return;

      const currentPath = window.location.pathname;
      const languageCodeMatch = currentPath.match(/^\/([a-z]{2,3})\//);

      if (languageCodeMatch) {
        const languageCode = languageCodeMatch[0];
        if (languageCode === href) return;
        const pathname = currentPath.replace(languageCode, href).replace(/\/{2,}/g, "/");
        window.location.replace(pathname);
        return;
      }

      if (href === "/") return;

      const pathname = `/${href}/${window.location.pathname}`.replace(/\/{2,}/g, "/");
      window.location.replace(pathname);
    });
  });
};

const dynamicBlogPostsInit = async () => {
  const projectId = document.querySelector('meta[name="projectId"]')?.content;
  if (!projectId) return;

  try {
    const dynamicBlogPosts = document.querySelectorAll("[data-componentui='dynamic-blog-posts']");
    if (!dynamicBlogPosts || dynamicBlogPosts.length === 0) return;

    const response = await fetch(`/api/v1/blog/latest?projectId=${encodeURIComponent(projectId)}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch blog posts");
    }

    const blogPostsData = await response.json();
    const blogPosts = blogPostsData.data || [];

    dynamicBlogPosts.forEach((dynamicBlogPost) => {
      const dynamicBlogPostContainer = dynamicBlogPost.querySelector(
        "[data-componentui='dynamic-blog-posts-container']"
      );
      if (!dynamicBlogPostContainer) return;

      const dynamicBlogPostContainerClone = dynamicBlogPostContainer.cloneNode(true);
      const blogPostTemplate = dynamicBlogPostContainer.querySelector(
        "[data-componentui='dynamic-blog-posts-template']"
      );
      if (!blogPostTemplate) return;

      if (blogPosts.length === 0) {
        const section = findNearestParentSection(dynamicBlogPost);
        if (section) section.style.display = "none";
      }

      const blogPostTemplateClone = blogPostTemplate.cloneNode(true);
      dynamicBlogPostContainerClone.replaceChildren();

      blogPosts.forEach((blogPost) => {
        const blogPostClone = blogPostTemplateClone.cloneNode(true);

        const titleEl = blogPostClone.querySelector("[data-componentui='dynamic-blog-posts-title']");
        if (titleEl)
          titleEl.innerText = blogPost.name.charAt(0).toUpperCase() + blogPost.name.replace("-", " ").slice(1);

        const descEl = blogPostClone.querySelector("[data-componentui='dynamic-blog-posts-description']");
        if (descEl) {
          descEl.innerHTML = "";

          if (blogPost.description.includes("<") && blogPost.description.includes(">")) {
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = blogPost.description;

            const textOnly = tempDiv.textContent || tempDiv.innerText;
            descEl.textContent = textOnly;
          } else {
            descEl.textContent = blogPost.description;
          }
        }
        const linkEl = blogPostClone.querySelector("[data-componentui='dynamic-blog-posts-link']");
        if (linkEl) linkEl.href = `/blog/${encodeURIComponent(blogPost.name)}`;

        const imgEl = blogPostClone.querySelector("[data-componentui='dynamic-blog-posts-image']");
        if (imgEl) imgEl.src = blogPost.imageUrl;

        const dateEl = blogPostClone.querySelector("[data-componentui='dynamic-blog-posts-date']");
        if (dateEl) dateEl.innerText = new Date(blogPost.createdAt).toLocaleDateString();

        dynamicBlogPostContainerClone.appendChild(blogPostClone);
      });

      dynamicBlogPost.replaceChild(dynamicBlogPostContainerClone, dynamicBlogPostContainer);
      dynamicBlogPost.style.display = "flex";
    });
  } catch (e) {
    // empty, because it's just a fallback
  }
};

const initBetterScroll = () => {
  const nav = document.querySelector("header");

  function getOffset() {
    return nav ? nav.offsetHeight : 40;
  }

  function scrollToSection(hash, addToHistory = true) {
    if (!hash) return;
    const bodyId = document.body.id;
    if (bodyId.includes("frame-body")) return;

    const cleanedHash = hash.replace(/^\/#/, "").replace(/^#/, "");
    const targetElement = document.getElementById(cleanedHash);

    if (!targetElement) {
      window.location.replace(hash);
    }

    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      setTimeout(() => {
        window.scrollTo({ top: elementPosition - getOffset(), behavior: "smooth" });
      }, 10);

      if (addToHistory) {
        history.replaceState(null, null, `#${cleanedHash}`);
      }

      if (window.innerWidth < 1024 && typeof window.closeNavMenu === "function") {
        window.closeNavMenu();
      }
    }
  }

  document.querySelectorAll('a[href^="#"], a[href^="/#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      scrollToSection(this.getAttribute("href"), false);
    });
  });

  window.addEventListener("load", () => {
    if (window.location.hash) {
      setTimeout(() => scrollToSection(window.location.hash, false), 50);
    }
  });
};

function initAll() {
  dynamicBlogPostsInit();
  initAccordion();
  initCarousel();
  initGallery();
  initContentSwitcher();
  initTranslations();
  initNav();
  initHideOnScroll();
  initSlider();
  initBetterScroll();
  initMobileCarousel();
}

window.initAll = initAll;

document.addEventListener("DOMContentLoaded", () => {
  initAll();
});

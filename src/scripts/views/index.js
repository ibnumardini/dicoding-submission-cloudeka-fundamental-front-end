// fixed navigation bar
(() => {
  const hideElm = (elm) => {
    elm.style.display = "none";
  };

  const showElm = (elm) => {
    elm.style.display = "block";
  };

  const logoApp = document.querySelector(".header__logo");

  document.addEventListener("scroll", () => {
    const position = document.documentElement.scrollTop;

    if (position > 20) {
      hideElm(logoApp);
    } else {
      showElm(logoApp);
    }
  });
})();

// smooth scroll page
(() => {
  const pushStatePage = (id) => {
    const url = new URL(window.location);

    history.pushState({ id }, `Page: ${id}`, `${url.origin}/${id}`);
  };

  const menus = document.querySelectorAll(".menu");

  for (const menu of menus) {
    menu.addEventListener("click", (e) => {
      e.preventDefault();

      const id = menu.getAttribute("href");
      const { offsetTop } = document.querySelector(id);
      const top = offsetTop - 100;

      pushStatePage(id);

      window.scroll({
        top,
        behavior: "smooth",
      });
    });
  }
})();

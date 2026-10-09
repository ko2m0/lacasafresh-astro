/*
   * ============================================================
   * SCROLL TO TOP
   * ============================================================
   */

  const scrollToTopBtn =
    document.getElementById("scroll-to-top");

  if (scrollToTopBtn) {
    const updateScrollButton = () => {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add("visible");
      } else {
        scrollToTopBtn.classList.remove("visible");
      }
    };

    window.addEventListener(
      "scroll",
      updateScrollButton,
      { passive: true }
    );

    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    updateScrollButton();
  }

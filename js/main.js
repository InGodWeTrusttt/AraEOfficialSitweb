(() => {
  const config = window.ARAE_CONFIG || {};
  const navButton = document.querySelector("[data-navbtn]");
  const mobileNav = document.querySelector("[data-mobile]");
  const elevated = document.querySelector("[data-elevate]");

  const setOpen = (open) => {
    if (!navButton || !mobileNav) return;
    mobileNav.classList.toggle("is-open", open);
    navButton.setAttribute("aria-expanded", String(open));
  };

  if (navButton && mobileNav) {
    navButton.addEventListener("click", () => {
      const open = navButton.getAttribute("aria-expanded") !== "true";
      setOpen(open);
    });

    mobileNav.addEventListener("click", (event) => {
      if (event.target.closest("a")) setOpen(false);
    });
  }

  const onScroll = () => {
    if (!elevated) return;
    elevated.style.boxShadow = window.scrollY > 6 ? "0 10px 32px rgba(0,0,0,.28)" : "none";
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const setText = (selector, value) => {
    if (!value) return;
    document.querySelectorAll(selector).forEach((node) => {
      node.textContent = value;
    });
  };

  const setHref = (selector, url, disabledTitle) => {
    document.querySelectorAll(selector).forEach((node) => {
      if (!(node instanceof HTMLAnchorElement)) return;

      if (!url || url === "#") {
        node.setAttribute("href", "#");
        node.setAttribute("aria-disabled", "true");
        node.classList.add("is-disabled");
        if (disabledTitle) node.setAttribute("title", disabledTitle);
        return;
      }

      node.setAttribute("href", url);
      node.removeAttribute("aria-disabled");
      node.classList.remove("is-disabled");
      node.removeAttribute("title");
    });
  };

  const setEmail = (selector, email) => {
    if (!email) return;
    document.querySelectorAll(selector).forEach((node) => {
      node.textContent = email;
      if (node instanceof HTMLAnchorElement) {
        node.setAttribute("href", `mailto:${email}`);
      }
    });
  };

  const setImage = (selector, src) => {
    if (!src) return;
    document.querySelectorAll(selector).forEach((node) => {
      if (node instanceof HTMLImageElement) {
        node.setAttribute("src", src);
      }
    });
  };

  setText("[data-price-label]", config.priceLabel);
  setText("[data-availability-label]", config.availabilityLabel);
  setText("[data-release-state]", config.releaseStateLabel);
  setText("[data-company-name]", config.companyName);
  setText("[data-company-address]", config.companyAddress);
  setText("[data-publication-director]", config.publicationDirector);
  setText("[data-vat-number]", config.vatNumber);
  setText("[data-company-id]", config.companyId);
  setText("[data-host-name]", config.hostName);
  setText("[data-host-address]", config.hostAddress);
  setText("[data-buy-label]", config.buyLabel);
  setText("[data-download-label]", config.downloadLabel);
  setText("[data-year]", String(new Date().getFullYear()));

  setEmail("[data-support-email]", config.supportEmail);
  setEmail("[data-sales-email]", config.salesEmail);

  setHref("[data-buy-link]", config.buyUrl, "Activer l’URL de vente dans js/site-config.js");
  setHref("[data-download-link]", config.downloadUrl, "Activer l’URL de téléchargement dans js/site-config.js");

  setImage("[data-hero-shot]", config.heroScreenshot);
  setImage("[data-session-shot]", config.sessionScreenshot);
  setImage("[data-world-shot]", config.worldScreenshot);
  setImage("[data-rules-shot]", config.rulesScreenshot);
  setImage("[data-gm-shot]", config.gmScreenshot);

  document.querySelectorAll("[data-mode-badge]").forEach((node) => {
    if (config.launchMode === "live") {
      node.textContent = "Ventes ouvertes";
      const dot = node.querySelector(".status__dot");
      if (dot) dot.style.background = "var(--success)";
    } else {
      node.textContent = "Préparer les URL de vente et téléchargement";
    }
  });
})();

function initializeApiDropdown() {
  const tabs = document.querySelectorAll(".md-tabs__link");

  tabs.forEach((tab) => {
    if (tab.textContent.trim() !== "API Documentation") {
      return;
    }

    const item = tab.closest(".md-tabs__item");

    if (!item || item.querySelector(".md-tabs__dropdown")) {
      return;
    }

    const dropdown = document.createElement("div");
    dropdown.className = "md-tabs__dropdown";

    dropdown.innerHTML = `
      <a href="${new URL("api-docs/", document.baseURI)}">Overview</a>
      <a href="${new URL("api-endpoints/", document.baseURI)}">API Endpoints</a>
      <a href="${new URL("error-handling/", document.baseURI)}">Error Handling</a>
    `;

    document.body.appendChild(dropdown);

    function positionDropdown() {
      const rect = item.getBoundingClientRect();
      dropdown.style.left = `${rect.left}px`;
      dropdown.style.top = `${rect.bottom}px`;
    }

    item.addEventListener("mouseenter", () => {
      positionDropdown();
      dropdown.style.display = "block";
    });

    item.addEventListener("mouseleave", () => {
      setTimeout(() => {
        if (!dropdown.matches(":hover")) {
          dropdown.style.display = "none";
        }
      }, 100);
    });

    dropdown.addEventListener("mouseleave", () => {
      dropdown.style.display = "none";
    });
  });
}

if (typeof document$ !== "undefined") {
  document$.subscribe(initializeApiDropdown);
} else {
  document.addEventListener("DOMContentLoaded", initializeApiDropdown);
}
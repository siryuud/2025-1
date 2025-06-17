document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("search-form");
  const input = document.getElementById("search-input");
  const slider = document.getElementById("reduction-slider");
  const sliderValue = document.getElementById("reduction-value");
  const archiveContainer = document.getElementById("archive");

  slider.addEventListener("input", () => {
    sliderValue.textContent = slider.value + "%";
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = input.value.trim();
    const reduction = parseInt(slider.value);
    if (!query) return;

    const timestamp = new Date().toLocaleString();
    let archive = JSON.parse(localStorage.getItem("archive")) || {};

    if (!archive[query]) {
      archive[query] = [];
    }

    const exists = archive[query].some((item) => item.reduction === reduction);
    if (!exists) {
      archive[query].push({ reduction, timestamp });
      localStorage.setItem("archive", JSON.stringify(archive));
    }

    window.location.href = `result.html?query=${encodeURIComponent(
      query
    )}&reduction=${reduction}`;
  });

  function renderArchive() {
    const data = JSON.parse(localStorage.getItem("archive") || "{}");
    archiveContainer.innerHTML = "";

    Object.entries(data).forEach(([query, reductions]) => {
      const queryHeader = document.createElement("h3");
      queryHeader.textContent = query;
      queryHeader.style.cursor = "pointer";
      archiveContainer.appendChild(queryHeader);

      const list = document.createElement("ul");
      list.style.display = "none"; // initially hidden

      reductions.forEach((item) => {
        const listItem = document.createElement("li");
        const btn = document.createElement("button");
        btn.textContent = `${item.reduction}% - ${item.timestamp}`;
        btn.addEventListener("click", () => {
          window.location.href = `result.html?query=${encodeURIComponent(
            query
          )}&reduction=${item.reduction}`;
        });
        listItem.appendChild(btn);
        list.appendChild(listItem);
      });

      queryHeader.addEventListener("click", () => {
        list.style.display = list.style.display === "none" ? "block" : "none";
      });

      archiveContainer.appendChild(list);
    });
  }

  renderArchive();
});

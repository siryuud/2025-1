// result.js

document.addEventListener("DOMContentLoaded", async () => {
  const resultDiv = document.getElementById("result");
  const slider = document.getElementById("reduction-slider");
  const sliderValue = document.getElementById("reduction-value");

  const archiveList = document.getElementById("archive-list");
  const params = new URLSearchParams(window.location.search);
  const query = params.get("query");
  const initialReduction = parseInt(params.get("reduction") || "50");

  if (slider) {
    slider.value = initialReduction;
    sliderValue.textContent = initialReduction;
  }

  if (query) {
    resultDiv.innerHTML = "<p>불러오는 중...</p>";

    try {
      const res = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&prop=extracts|pageimages&explaintext&format=json&origin=*&titles=${query}&piprop=original`
      );
      const data = await res.json();
      const page = Object.values(data.query.pages)[0];

      if (!page || !page.extract) {
        resultDiv.innerHTML = "<p>결과가 없어요.</p>";
        return;
      }

      const imageUrl = page.original?.source;
      const text = page.extract;

      let archive = JSON.parse(localStorage.getItem("archive")) || {};
      if (!archive[query]) {
        archive[query] = [];
      }

      const exists = archive[query].some(
        (item) => item.reduction === initialReduction
      );
      if (!exists) {
        const timestamp = new Date().toLocaleString();
        archive[query].push({ reduction: initialReduction, timestamp });
        localStorage.setItem("archive", JSON.stringify(archive));
      }

      let currentContent = { text, imageUrl };
      applyReduction(currentContent, initialReduction);

      if (slider) {
        slider.addEventListener("input", () => {
          sliderValue.textContent = slider.value;
          applyReduction(currentContent, parseInt(slider.value));
        });
      }
    } catch (err) {
      console.error(err);
      resultDiv.innerHTML = "<p>에러가 발생했어요.</p>";
    }
  } else if (archiveList) {
    const archive = JSON.parse(localStorage.getItem("archive")) || [];
    archiveList.innerHTML = archive
      .map(
        (item) =>
          `<li><a href="result.html?query=${encodeURIComponent(
            item.query
          )}&reduction=${item.reduction}">${item.query}</a> - ${
            item.reduction
          }% - ${item.timestamp}</li>`
      )
      .join("");
  }

  function applyReduction(content, reductionPercent) {
    const { text, imageUrl } = content;

    const stopwords = [
      "the",
      "and",
      "for",
      "with",
      "from",
      "that",
      "this",
      "was",
      "are",
      "but",
      "not",
      "you",
      "have",
      "has",
      "had",
      "were",
      "which",
      "their",
      "been",
      "will",
      "would",
      "a",
      "an",
      "in",
      "on",
      "at",
      "by",
      "to",
      "of",
      "as",
      "is",
      "it",
      "be",
      "or",
    ];

    const words = text.match(/\b[a-zA-Z]{2,}\b/g) || [];
    const frequency = {};

    words.forEach((word) => {
      const lower = word.toLowerCase();
      if (!stopwords.includes(lower)) {
        frequency[lower] = (frequency[lower] || 0) + 1;
      }
    });

    const maxCount = Math.max(...Object.values(frequency));
    const sorted = Object.entries(frequency).sort((a, b) => b[1] - a[1]);
    const keywordCount = Math.max(3, Math.floor(sorted.length * 0.1));
    const keywords = new Set(
      sorted.slice(0, keywordCount).map((entry) => entry[0])
    );

    const processedText = text.replace(/\b[a-zA-Z]{2,}\b/g, (word) => {
      const lower = word.toLowerCase();
      const isStopword = stopwords.includes(lower);
      const isKeyword = keywords.has(lower);
      const count = frequency[lower] || 0;
      const weight = count / maxCount;

      if (isKeyword && !isStopword) {
        const size = 14 + weight * 14; // base size 14px + weight scaling
        return `<span style="font-size:${size.toFixed(
          1
        )}px; font-weight:bold">${word}</span>`;
      }

      const keepProbability = isStopword
        ? Math.pow(1 - reductionPercent / 100, 2)
        : Math.pow(1 - reductionPercent / 100, 2.5);

      return Math.random() < keepProbability ? word : "____";
    });

    let output = "";
    if (imageUrl) {
      const blurAmount = (reductionPercent / 10).toFixed(1);
      output += `<img src="${imageUrl}" style="max-width: 400px; filter: grayscale(${reductionPercent}%) blur(${blurAmount}px); transition: all 0.5s ease;" alt="대표 이미지" />`;
    }

    const paragraphs = processedText.split(/\n+/);
    paragraphs.forEach((p) => {
      output += `<p>${p}</p>`;
    });

    resultDiv.innerHTML = output;
  }
});

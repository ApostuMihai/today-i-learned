"use strict";

const btnShare = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

btnShare.addEventListener("click", function () {
  form.classList.toggle("hidden");

  if (form.classList.contains("hidden")) {
    btnShare.textContent = "Close";
  } else {
    btnShare.textContent = "Share a fact!";
  }
});

function calcAge(year) {
  const currentYear = new Date().getFullYear();
  return currentYear - year;
}

const CATEGORIES = [
  { name: "test", color: "#000" },
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

factsList.innerHTML = "";
async function loadFacts() {
  const res = await fetch(
    "https://galnqydvkhfifskbbgom.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdhbG5xeWR2a2hmaWZza2JiZ29tIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgyMjIzMDcsImV4cCI6MTk5Mzc5ODMwN30.KtcaJdQQwKlWJSsPnEdgQyJfeTHf4RscD3IyD0nzJlA",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdhbG5xeWR2a2hmaWZza2JiZ29tIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgyMjIzMDcsImV4cCI6MTk5Mzc5ODMwN30.KtcaJdQQwKlWJSsPnEdgQyJfeTHf4RscD3IyD0nzJlA",
      },
    }
  );
  const data = await res.json();
  // createFactsList(data);
  // const filteredData = data.filter((fact) => fact.category === "technology");
  createFactsList(data);
}
loadFacts();

function createFactsList(dataArray) {
  const htmlArray = dataArray.map(
    (fact) => `<li class="fact">
    
                <p>
                ${fact.text}
                  <a
                    href="${fact.source}"
                    target="_blank"
                    class="source"
                    >(Source)</a
                  >
                </p>
                <span class="tag" style="background-color: ${
                  CATEGORIES.find((category) => category.name === fact.category)
                    ?.color
                }"
                  >${fact.category}</span
                >
    </li> `
  );
  const html = htmlArray.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

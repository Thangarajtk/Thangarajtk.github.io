// Moved GitHub Repo Stats script - assets/js/sections/repo-stats.js
// This script fetches stargazers_count and forks_count for repo entries with .repo-metrics[data-repo]
// and updates their inner HTML. It mirrors the original inline script found in index.html.

document.addEventListener("DOMContentLoaded", () => {
  const repoDivs = document.querySelectorAll(".repo-metrics");

  repoDivs.forEach(div => {
    const repo = div.getAttribute("data-repo");
    if (!repo) return;

    fetch(`https://api.github.com/repos/${repo}`)
      .then(response => response.json())
      .then(data => {
        if (data && data.stargazers_count !== undefined) {
          div.innerHTML = `⭐ ${data.stargazers_count} &nbsp; | &nbsp; <img src="assets/icons/fork.svg" alt="Forks" class="fork-icon"> ${data.forks_count}`;
        }
      })
      .catch(() => {
        div.innerHTML = `⭐ 0 | <img src="assets/icons/fork.svg" alt="Forks" class="fork-icon"> 0`;
      });
  });
});


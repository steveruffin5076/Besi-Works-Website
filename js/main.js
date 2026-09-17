function renderAppCard(app) {
  const isLive = app.status === "live";
  const cardClass = isLive ? "app-card" : "app-card is-coming-soon";
  const badge = isLive
    ? `<span class="badge">${app.platform}</span>`
    : `<span class="badge">Coming Soon</span>`;

  const actions = isLive
    ? `<a class="btn btn-outline" href="${app.detailPage}">Learn More</a>
       <a class="btn btn-primary" href="${app.storeUrl}" target="_blank" rel="noopener">Get it on Google Play</a>`
    : `<span class="btn btn-disabled">Coming Soon</span>`;

  return `
    <article class="${cardClass}">
      <img class="app-card__icon" src="${app.iconSrc}" alt="${app.name} icon" />
      <div class="app-card__badges">${badge}</div>
      <h3>${app.name}</h3>
      <p class="tagline">${app.tagline}</p>
      <p>${app.shortDescription}</p>
      <div class="app-card__actions">${actions}</div>
    </article>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("apps-grid");
  if (!grid || typeof APPS === "undefined") return;
  grid.innerHTML = APPS.map(renderAppCard).join("");
});

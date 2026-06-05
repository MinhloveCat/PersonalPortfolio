/**
 * detailRenderer.js
 * Runs on project-detail.html.
 * 1. Reads ?id=X from URL
 * 2. Finds project in projectsData
 * 3. Injects all data into the page containers
 */

import projectsData from "./projectsData.js";

// ─────────────────────────────────────────────
// 1. PARSE URL PARAM
// ─────────────────────────────────────────────

const params    = new URLSearchParams(window.location.search);
const rawId     = params.get("id");
const projectId = parseInt(rawId, 10);

// ─────────────────────────────────────────────
// 2. FIND PROJECT
// ─────────────────────────────────────────────

const project = projectsData.find((p) => p.id === projectId);

if (!project) {
  renderNotFound(rawId);
} else {
  renderDetail(project);
}

// ─────────────────────────────────────────────
// 3. MAIN RENDER
// ─────────────────────────────────────────────

function renderDetail(p) {
  // ── <title> + meta ──────────────────────────
  document.title = `Bài tập ${p.id}: ${p.title} | Portfolio`;

  const metaDesc = document.querySelector("meta[name='description']");
  if (metaDesc) metaDesc.setAttribute("content", p.objective.slice(0, 155));

  // ── Badge & breadcrumb ───────────────────────
  setHTML("detail-badge",      String(p.id).padStart(2, "0"));
  setHTML("detail-breadcrumb", escapeHTML(`Bài tập ${p.id}`));
  setHTML("detail-meta-label", `Bài tập ${p.id}`);

  // ── Title ────────────────────────────────────
  setHTML("detail-title", escapeHTML(p.title));

  // ── Hero image ───────────────────────────────
  const imageContainer = document.getElementById("detail-hero-image");
  if (imageContainer) {
    const hasRealImage = p.image && !p.image.includes("placeholder");
    if (hasRealImage) {
      imageContainer.innerHTML = `
        <img
          src="${escapeHTML(p.image)}"
          alt="Ảnh minh họa: ${escapeHTML(p.title)}"
          class="detail-hero-img"
        />
      `;
      imageContainer.removeAttribute("aria-hidden");
    } else {
      const ICONS = ["🗂️", "🔍", "✍️", "🤝", "🤖", "⚖️"];
      imageContainer.innerHTML = `
        <div class="detail-hero-placeholder">
          <span class="detail-hero-icon">${ICONS[(p.id - 1) % ICONS.length]}</span>
        </div>
      `;
    }
  }

  // ── Objective ────────────────────────────────
  setHTML("detail-objective", escapeHTML(p.objective));

  // ── Process summary ──────────────────────────
  setHTML("detail-process", escapeHTML(p.processSummary));

  // ── External link ────────────────────────────
  const linkEl = document.getElementById("detail-link");
  if (linkEl) {
    if (p.link && p.link !== "#") {
      linkEl.href = p.link;
      linkEl.removeAttribute("aria-disabled");
      linkEl.target = "_blank";
      linkEl.rel    = "noopener noreferrer";
    } else {
      linkEl.classList.add("btn-disabled");
      linkEl.setAttribute("aria-disabled", "true");
      linkEl.textContent = "Chưa có sản phẩm";
    }
  }

  // ── Sidebar ──────────────────────────────────
  setHTML("sidebar-id", `Bài ${p.id} / ${projectsData.length}`);

  // ── Sidebar project nav ───────────────────────
  renderSidebarNav(p.id);

  // ── Prev / Next navigation ────────────────────
  renderPrevNext(p.id);

  // ── Entrance animation ────────────────────────
  document.body.classList.add("detail-loaded");
}

// ─────────────────────────────────────────────
// 4. SIDEBAR — list all projects, mark current
// ─────────────────────────────────────────────

function renderSidebarNav(currentId) {
  const navList = document.getElementById("sidebar-project-nav");
  if (!navList) return;

  const ICONS = ["🗂️", "🔍", "✍️", "🤝", "🤖", "⚖️"];

  const items = projectsData.map((p) => {
    const isCurrent = p.id === currentId;
    return `
      <li class="sidebar-nav-item ${isCurrent ? "is-current" : ""}" role="listitem">
        <a
          href="project-detail.html?id=${p.id}"
          class="sidebar-nav-link"
          ${isCurrent ? 'aria-current="page"' : ""}
          title="${escapeHTML(p.title)}"
        >
          <span class="sidebar-nav-icon" aria-hidden="true">
            ${ICONS[(p.id - 1) % ICONS.length]}
          </span>
          <span class="sidebar-nav-text">
            <span class="sidebar-nav-num">BT${p.id}</span>
            <span class="sidebar-nav-title">${escapeHTML(p.title)}</span>
          </span>
          ${isCurrent ? '<span class="sidebar-nav-dot" aria-hidden="true"></span>' : ""}
        </a>
      </li>
    `;
  });

  navList.innerHTML = items.join("");
}

// ─────────────────────────────────────────────
// 5. PREV / NEXT
// ─────────────────────────────────────────────

function renderPrevNext(currentId) {
  const container = document.getElementById("detail-prevnext");
  if (!container) return;

  const idx  = projectsData.findIndex((p) => p.id === currentId);
  const prev = projectsData[idx - 1] ?? null;
  const next = projectsData[idx + 1] ?? null;

  const prevHTML = prev
    ? `<a href="project-detail.html?id=${prev.id}" class="prevnext-link prevnext-prev">
         <span class="prevnext-dir">
           <span class="prevnext-arrow" aria-hidden="true">←</span>
           Bài trước
         </span>
         <span class="prevnext-title">${escapeHTML(prev.title)}</span>
       </a>`
    : `<div class="prevnext-link prevnext-prev prevnext-empty">
         <span class="prevnext-dir">Đây là bài đầu tiên</span>
       </div>`;

  const nextHTML = next
    ? `<a href="project-detail.html?id=${next.id}" class="prevnext-link prevnext-next">
         <span class="prevnext-dir">
           Bài tiếp theo
           <span class="prevnext-arrow" aria-hidden="true">→</span>
         </span>
         <span class="prevnext-title">${escapeHTML(next.title)}</span>
       </a>`
    : `<div class="prevnext-link prevnext-next prevnext-empty">
         <span class="prevnext-dir">Đây là bài cuối cùng</span>
       </div>`;

  container.innerHTML = `
    <div class="prevnext-inner">
      ${prevHTML}
      <a href="index.html#portfolio" class="prevnext-home" aria-label="Về danh sách bài tập">
        <span aria-hidden="true">⊞</span>
        Tất cả bài tập
      </a>
      ${nextHTML}
    </div>
  `;
}

// ─────────────────────────────────────────────
// 6. NOT FOUND STATE
// ─────────────────────────────────────────────

function renderNotFound(attemptedId) {
  document.title = "Không tìm thấy | Portfolio";
  document.body.classList.add("detail-loaded");

  // Replace main with a friendly 404 panel
  const main = document.querySelector(".detail-main");
  if (!main) return;

  main.innerHTML = `
    <div class="not-found container">
      <div class="not-found-inner">
        <span class="not-found-icon" aria-hidden="true">🔍</span>
        <h1 class="not-found-title">Không tìm thấy bài tập</h1>
        <p class="not-found-text">
          Bài tập với mã <code>${escapeHTML(String(attemptedId ?? "?"))}</code>
          không tồn tại trong danh sách.
        </p>
        <a href="index.html#portfolio" class="btn btn-primary">
          ← Quay lại danh sách bài tập
        </a>
      </div>
    </div>
  `;
}

// ─────────────────────────────────────────────
// 7. HELPERS
// ─────────────────────────────────────────────

function setHTML(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
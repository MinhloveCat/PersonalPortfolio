/**
 * main.js
 * Entry point for index.html.
 * Handles: navbar behaviour + dynamic project card rendering.
 */

import projectsData from "./projectsData.js";

// ─────────────────────────────────────────────
// 1. NAVBAR — scroll shadow + mobile toggle
// ─────────────────────────────────────────────
const header = document.getElementById("site-header");

const onScroll = () => {
  header.classList.toggle("scrolled", window.scrollY > 10);
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const toggle = document.getElementById("nav-toggle");
const menu   = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
  toggle.setAttribute("aria-label", isOpen ? "Đóng menu" : "Mở menu");
});

menu.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Mở menu");
  });
});

// Active link tracking via IntersectionObserver
const sections = document.querySelectorAll("main section[id]");
const navLinks  = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((l) => l.classList.remove("active"));
        const active = document.querySelector(
          `.nav-link[href="#${entry.target.id}"]`
        );
        if (active) active.classList.add("active");
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((s) => sectionObserver.observe(s));

// ─────────────────────────────────────────────
// 2. ICON MAP — decorative emoji per project
// ─────────────────────────────────────────────
const PROJECT_ICONS = ["🗂️", "🔍", "✍️", "🤝", "🤖", "⚖️"];

// ─────────────────────────────────────────────
// 3. CARD RENDERER
// ─────────────────────────────────────────────

/**
 * Build a single project card DOM element.
 * @param {Object} project - A projectsData entry.
 * @param {number} index   - Zero-based position for stagger delay.
 * @returns {HTMLElement}
 */
function createProjectCard(project, index) {
  const card = document.createElement("article");
  card.className = "project-card";
  card.setAttribute("role", "listitem");
  // Stagger entrance animation
  card.style.setProperty("--delay", `${index * 90}ms`);

  // ── Image / placeholder ──
  const hasImage = project.image && !project.image.includes("placeholder");
  const imageHTML = hasImage
    ? `<img
         src="${project.image}"
         alt="Ảnh minh họa cho bài tập: ${escapeHTML(project.title)}"
         loading="lazy"
       />`
    : `<div class="card-image-placeholder" aria-hidden="true">
         <span class="card-placeholder-icon">${PROJECT_ICONS[index] ?? "📄"}</span>
       </div>`;

  card.innerHTML = `
    <div class="card-image">
      ${imageHTML}
      <span class="card-number" aria-label="Bài tập số ${project.id}">
        ${String(project.id).padStart(2, "0")}
      </span>
    </div>

    <div class="card-body">
      <span class="card-label">Bài tập ${project.id}</span>
      <h3 class="card-title">${escapeHTML(project.title)}</h3>
      <p class="card-text">${escapeHTML(project.objective)}</p>
    </div>

    <div class="card-footer">
      <a
        href="project-detail.html?id=${project.id}"
        class="card-link"
        aria-label="Xem chi tiết bài tập: ${escapeHTML(project.title)}"
      >
        Xem chi tiết
        <span class="card-link-arrow" aria-hidden="true">↗</span>
      </a>
    </div>
  `;

  return card;
}

/**
 * Render all project cards into #project-grid based on selected filter.
 * @param {string} filterValue - Danh mục cần lọc ("all", "kynangso", "ai")
 */
function renderProjectGrid(filterValue = "all") {
  const grid = document.getElementById("project-grid");
  if (!grid) return;

  // 1. XÓA TRẮNG LƯỚI CŨ để chuẩn bị nạp danh sách đã lọc
  grid.innerHTML = "";

  // 2. Tạo biến đếm riêng để tính toán hiệu ứng chạy mượt (stagger delay) cho các card hiển thị
  let visibleIndex = 0;
  const fragment = document.createDocumentFragment();

  projectsData.forEach((project) => {
    // Tự động phân loại dựa trên dữ liệu (nếu project chưa có thuộc tính category, hàm sẽ tự nhận diện theo ID)
    const projectCategory = project.category || ([1, 2, 4].includes(project.id) ? "kynangso" : "ai");

    // 3. ĐIỀU KIỆN LỌC: Nếu chọn "Tất cả" HOẶC danh mục của bài tập trùng với bộ lọc
    const isMatch = filterValue === "all" || projectCategory === filterValue;

    if (isMatch) {
      fragment.appendChild(createProjectCard(project, visibleIndex));
      visibleIndex++; // Tăng index của card hiển thị thực tế
    }
  });

  grid.appendChild(fragment);

  // Trigger card entrance via IntersectionObserver (fade in on scroll)
  observeCards();
}

// ─────────────────────────────────────────────
// 4. SCROLL-IN ANIMATION FOR CARDS
// ─────────────────────────────────────────────
function observeCards() {
  const cards = document.querySelectorAll(".project-card");

  if (!("IntersectionObserver" in window)) {
    // Fallback: just show all cards immediately
    cards.forEach((c) => c.classList.add("visible"));
    return;
  }

  const cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          cardObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  cards.forEach((card) => cardObserver.observe(card));
}

// ─────────────────────────────────────────────
// 5. FILTER BUTTONS
// ─────────────────────────────────────────────
function initFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Đổi trạng thái hiển thị của nút bấm (nền đen chữ trắng)
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      
      // LẤY GIÁ TRỊ BỘ LỌC TỪ HTML (Ví dụ: data-filter="ai")
      const filterValue = btn.getAttribute("data-filter") || "all";
      
      // GỌI HÀM LỌC VÀ VẼ LẠI GIAO DIỆN
      renderProjectGrid(filterValue);
    });
  });
}

// ─────────────────────────────────────────────
// 6. HELPERS
// ─────────────────────────────────────────────

/** Prevent XSS when interpolating data into innerHTML */
function escapeHTML(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// ─────────────────────────────────────────────
// 7. INIT
// ─────────────────────────────────────────────
renderProjectGrid();
initFilters();
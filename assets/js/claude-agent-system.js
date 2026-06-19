const tabButtons = document.querySelectorAll(".tab-button");
const promptPanels = document.querySelectorAll(".prompt-panel");
const copyButtons = document.querySelectorAll(".copy-button");
const revealItems = document.querySelectorAll(".reveal");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.tab;

    tabButtons.forEach((item) => {
      item.classList.toggle("active", item === button);
    });

    promptPanels.forEach((panel) => {
      panel.classList.toggle("active", panel.id === `tab-${selected}`);
    });
  });
});

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const target = document.getElementById(button.dataset.copyTarget);
    if (!target) return;

    try {
      await navigator.clipboard.writeText(target.innerText);
      button.textContent = "已複製";
      button.classList.add("copied");

      window.setTimeout(() => {
        button.textContent = "複製";
        button.classList.remove("copied");
      }, 1600);
    } catch {
      button.textContent = "請手動複製";
      window.setTimeout(() => {
        button.textContent = "複製";
      }, 1600);
    }
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => observer.observe(item));

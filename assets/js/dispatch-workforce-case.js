window.addEventListener("DOMContentLoaded", () => {
  const chips = Array.from(document.querySelectorAll(".nav-chip"));
  const panels = Array.from(document.querySelectorAll(".stage-panel"));
  const modeButtons = Array.from(document.querySelectorAll(".toggle-btn"));
  const modePanels = Array.from(document.querySelectorAll(".mode-panel"));
  const jumpButtons = Array.from(document.querySelectorAll("[data-jump]"));

  const setPanel = (panelId) => {
    chips.forEach((chip) => {
      chip.classList.toggle("is-active", chip.dataset.panel === panelId);
    });

    panels.forEach((panel) => {
      panel.classList.toggle("is-active", panel.dataset.panelId === panelId);
    });
  };

  const setMode = (modeId) => {
    modeButtons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.mode === modeId);
    });

    modePanels.forEach((panel) => {
      panel.classList.toggle("is-active", panel.dataset.modeId === modeId);
    });
  };

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      setPanel(chip.dataset.panel);
    });
  });

  modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setMode(button.dataset.mode);
    });
  });

  jumpButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.jump;
      const target = document.getElementById(targetId);

      if (!target) {
        return;
      }

      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setPanel("restructure");
    });
  });
});

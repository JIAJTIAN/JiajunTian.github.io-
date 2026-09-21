// Execute the real theme script against a minimal DOM/storage harness.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const script = fs.readFileSync("assets/js/professional-theme.js", "utf8");

function load(stored = {}, unavailable = false) {
  let button;
  const nodes = { ".theme-toggle-label": {}, ".theme-toggle-icon": {} };
  const document = {
    documentElement: { dataset: {} },
    readyState: "complete",
    querySelector: () => button,
    createElement: () => ({
      dataset: {},
      attributes: {},
      setAttribute(key, value) {
        this.attributes[key] = value;
      },
      querySelector: (key) => nodes[key],
      addEventListener(event, handler) {
        this[event] = handler;
      },
    }),
    body: {
      appendChild: (element) => {
        button = element;
      },
    },
  };
  const localStorage = {
    getItem(key) {
      if (unavailable) throw Error("Storage blocked");
      return stored[key];
    },
    setItem(key, value) {
      if (unavailable) throw Error("Storage blocked");
      stored[key] = value;
    },
  };
  vm.runInNewContext(script, { document, window: { localStorage } });
  return { document, button, nodes };
}

for (const unavailable of [false, true]) {
  const stored = {};
  const page = load(stored, unavailable);
  assert.equal(page.document.documentElement.dataset.portfolioTheme, "professional");
  page.button.click();
  assert.equal(page.document.documentElement.dataset.portfolioTheme, "professional-light");
  assert.equal(page.button.attributes["aria-pressed"], "true");
  assert.equal(page.nodes[".theme-toggle-label"].textContent, "DARK");
  if (!unavailable) assert.equal(load(stored).document.documentElement.dataset.portfolioTheme, "professional-light");
  page.button.click();
  assert.equal(page.document.documentElement.dataset.portfolioTheme, "professional");
  assert.equal(page.button.attributes["aria-pressed"], "false");
}
assert.equal(load({ "portfolio-theme-v2": "invalid" }).document.documentElement.dataset.portfolioTheme, "professional");
assert.equal(load({ "portfolio-theme": "professional-light" }).document.documentElement.dataset.portfolioTheme, "professional");
console.log("PASS: dark default, light/dark toggle, accessible state, saved preferences, and unavailable storage");

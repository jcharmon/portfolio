/**
 * Page motion:
 * 1. Anything marked data-reveal fades up gently the first time it comes into
 *    view. Things that appear together are staggered slightly.
 * 2. Anything marked data-loader shows a soft shimmer until the pictures
 *    inside it have finished loading, then the pictures fade in.
 */
const STAGGER_MS = 70;
const MAX_STAGGER_MS = 420;

function reveal() {
  const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left);
      visible.forEach((entry, i) => {
        const el = entry.target as HTMLElement;
        el.style.setProperty("--reveal-delay", `${Math.min(i * STAGGER_MS, MAX_STAGGER_MS)}ms`);
        el.classList.add("is-in");
        io.unobserve(el);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.01 }
  );
  items.forEach((el) => io.observe(el));
}

function loaders() {
  document.querySelectorAll<HTMLElement>("[data-loader]").forEach((box) => {
    const imgs = Array.from(box.querySelectorAll("img"));
    let pending = imgs.filter((img) => !(img.complete && img.naturalWidth > 0)).length;
    if (pending === 0) {
      box.classList.add("is-loaded");
      return;
    }
    const done = () => {
      pending -= 1;
      if (pending <= 0) box.classList.add("is-loaded");
    };
    imgs.forEach((img) => {
      if (img.complete && img.naturalWidth > 0) return;
      img.addEventListener("load", done, { once: true });
      img.addEventListener("error", done, { once: true });
    });
  });
}

export function startMotion() {
  loaders();
  reveal();
}

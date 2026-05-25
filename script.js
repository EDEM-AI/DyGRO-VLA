const navLinks = [...document.querySelectorAll(".site-nav a")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window && sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`,
          );
        });
      });
    },
    {
      rootMargin: "-30% 0px -55%",
      threshold: 0.01,
    },
  );

  sections.forEach((section) => observer.observe(section));
}

const videos = document.querySelectorAll("video");

videos.forEach((video) => {
  video.addEventListener("mouseenter", () => {
    if (video.paused) {
      video.play().catch(() => {});
    }
  });
});

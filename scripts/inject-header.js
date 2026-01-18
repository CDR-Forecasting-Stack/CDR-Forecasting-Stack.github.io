const header = document.querySelector("#header");

window.addEventListener("load", () => {
  header.innerHTML = `
    <nav class="max-w-5xl mx-auto flex justify-center gap-2 py-4 border-b font-sourcesans" style="border-color: #5c2222;">
        <a
          href="/index.html"
          class="px-4 py-2 rounded hover:underline hover:decoration-2 hover:underline-offset-4 transition"
        >
          Home
        </a>

        <a
          href="/pages/about.html"
          class="px-4 py-2 rounded hover:underline hover:decoration-2 hover:underline-offset-4 transition"
        >
          About
        </a>

        <a
          href="/pages/team.html"
          class="px-4 py-2 rounded hover:underline hover:decoration-2 hover:underline-offset-4 transition"
        >
          Team
        </a>

        <!--
        <a
          href="/pages/research.html"
          class="px-4 py-2 rounded hover:underline hover:decoration-2 hover:underline-offset-4 transition"
        >
          Research
        </a>
        -->
        
        <a
          href="/pages/updates.html"
          class="px-4 py-2 rounded hover:underline hover:decoration-2 hover:underline-offset-4 transition"
        >
          Updates
        </a>

        <a
          href="/pages/join-us.html"
          class="px-4 py-2 rounded hover:underline hover:decoration-2 hover:underline-offset-4 transition"
        >
          Join Us!
        </a>
      </nav>
`;

  // style the active page
  const currentPath = window.location.pathname;

  console.log("pathname:", currentPath);
  console.log("href:", window.location.href);

  header.querySelectorAll("nav a").forEach((link) => {
    const linkPath = new URL(link.href).pathname;
    if (linkPath === currentPath) {
      link.classList.add("underline", "decoration-2", "underline-offset-4");
    }
  });
});

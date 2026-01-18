import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";

function formatDate(date) {
  const d = new Date(date);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

const md = new MarkdownIt({ html: true });

// Inject Tailwind classes for H1–H6
md.renderer.rules.heading_open = (tokens, idx, options, env, self) => {
  const token = tokens[idx];
  const tag = token.tag;

  // Tailwind classes for different heading levels
  const classes = {
    h1: "text-3xl md:text-4xl font-bold mb-2",
    h2: "text-2xl md:text-3xl font-semibold mb-1",
    h3: "text-xl font-semibold mb-1",
    h4: "text-lg font-medium mb-1",
    h5: "text-base font-medium mb-1",
    h6: "text-sm font-medium mb-1",
  };

  token.attrSet("class", classes[tag] || "");

  return self.renderToken(tokens, idx, options);
};

// Style unordered lists with space above
md.renderer.rules.bullet_list_open = (tokens, idx, options, env, self) => {
  tokens[idx].attrSet("class", "list-disc pl-6 mt-4 mb-4"); // mt-4 = vertical space before list
  return self.renderToken(tokens, idx, options);
};

// Style ordered lists with space above
md.renderer.rules.ordered_list_open = (tokens, idx, options, env, self) => {
  tokens[idx].attrSet("class", "list-decimal pl-6 mt-4 mb-4"); // mt-4 adds vspace
  return self.renderToken(tokens, idx, options);
};

// Style list items (optional but recommended)
md.renderer.rules.list_item_open = (tokens, idx, options, env, self) => {
  tokens[idx].attrSet("class", "mb-1");
  return self.renderToken(tokens, idx, options);
};

const contentDir = "posts";
const postsOutDir = "pages/posts";

fs.mkdirSync(postsOutDir, { recursive: true });

const postTemplate = fs.readFileSync("templates/post-template.html", "utf8");
const indexTemplate = fs.readFileSync("templates/update-template.html", "utf8");

let cards = [];

for (const file of fs.readdirSync(contentDir)) {
  const raw = fs.readFileSync(path.join(contentDir, file), "utf8");
  const { data, content } = matter(raw);

  //const html = md.render(content);

  const html = md
    .render(content)
    .replace(
      /<pre><code class="language-mermaid">([\s\S]*?)<\/code><\/pre>/g,
      (_, code) => `<div class="mermaid">${code}</div>`
    );

  const url = `/pages/posts/${data.slug}.html`;

  const breadcrumbs = `
  <nav class="text-md text-gray-500 mb-6 flex justify-center">
    <a 
      href="/pages/updates.html"
      class="text-md text-gray-500 hover:text-gray-700 inline-flex items-center gap-1"
    >
     <span aria-hidden="true" class="text-lg leading-none relative -top-px">&lsaquo;</span>
      <span>Back to Updates</span>
    </a>
  </nav>`;

  const page = postTemplate
    .replaceAll("{{TITLE}}", data.title)
    .replaceAll("{{DATE}}", formatDate(data.date))
    .replaceAll("{{CONTENT}}", html)
    .replaceAll("{{BREADCRUMBS}}", breadcrumbs);

  fs.writeFileSync(`${postsOutDir}/${data.slug}.html`, page);

  cards.push({ ...data, url });
}

/* generate updates index */
const cardsHtml = cards
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .map((p) => {
    const readMore = p.longform
      ? `
        <a
          href="${p.url}"
          class="flex items-center gap-1 text-md text-gray-600 hover:underline mt-2"
        >
          <span>Read more</span>
          <span aria-hidden="true" class="text-lg leading-none">&rsaquo;</span>
        </a>
      `
      : "";

    return `
<li class="border border-gray-200 rounded-lg p-6 shadow-md transition">
  <p class="text-sm text-gray-500 mb-2">${formatDate(p.date)}</p>

  ${
    p.longform
      ? `<h3 class="text-left mb-2"> ${p.title}</h3>`
      : `<h3 class="text-left mb-2">${p.title}</h3>`
  }

  <p class="text-gray-700">${p.excerpt}</p>

  ${readMore}
</li>`;
  })
  .join("");

fs.writeFileSync(
  "pages/updates.html",
  indexTemplate.replace("{{POSTS}}", cardsHtml)
);

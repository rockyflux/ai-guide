import { getPage, resolveBookLink } from "./book.mjs";

const EXTERNAL_SRC = /^https?:\/\//i;

/** Add lazy + no-referrer on retained external <img> tags. */
function enhanceExternalImgs(html) {
  return html.replace(/<img\b([^>]*)>/gi, (full, attrs) => {
    const match = attrs.match(
      /\bsrc\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i,
    );
    const src = match?.[1] ?? match?.[2] ?? match?.[3] ?? "";
    if (!EXTERNAL_SRC.test(src)) return full;
    const selfClosing = /\/\s*$/.test(attrs);
    let next = attrs.replace(/\/\s*$/, "").trimEnd();
    if (!/\bloading\s*=/i.test(next)) next += ' loading="lazy"';
    if (!/\breferrerpolicy\s*=/i.test(next))
      next += ' referrerpolicy="no-referrer"';
    return selfClosing ? `<img${next} />` : `<img${next}>`;
  });
}

export function bookMarkdown(md) {
  md.core.ruler.after("inline", "book-links", (state) => {
    const page = getPage(state.env.relativePath || "");
    if (!page) return;
    function walk(tokens) {
      for (const token of tokens) {
        if (token.type === "link_open")
          token.attrSet(
            "href",
            resolveBookLink(token.attrGet("href"), page.source),
          );
        if (token.type === "image")
          token.attrSet(
            "src",
            resolveBookLink(token.attrGet("src"), page.source),
          );
        if (token.children) walk(token.children);
      }
    }
    walk(state.tokens);
  });

  md.core.ruler.after("book-links", "external-images", (state) => {
    function walk(tokens) {
      for (const token of tokens) {
        if (token.type === "image") {
          const src = token.attrGet("src") || "";
          if (EXTERNAL_SRC.test(src)) {
            if (!token.attrGet("loading")) token.attrSet("loading", "lazy");
            if (!token.attrGet("referrerpolicy"))
              token.attrSet("referrerpolicy", "no-referrer");
          }
        } else if (token.type === "html_inline" || token.type === "html_block") {
          token.content = enhanceExternalImgs(token.content);
        }
        if (token.children) walk(token.children);
      }
    }
    walk(state.tokens);
  });

  const text = md.renderer.rules.text;
  md.renderer.rules.text = (tokens, index, options, env, self) => {
    const html = text
      ? text(tokens, index, options, env, self)
      : md.utils.escapeHtml(tokens[index].content);
    return html.replace(
      /\{\{[\s\S]*?\}\}/g,
      (match) => `<span v-pre>${match}</span>`,
    );
  };
}

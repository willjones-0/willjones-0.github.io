document.addEventListener("DOMContentLoaded", () => {
  const prose = document.querySelector(".prose");
  if (!prose) return;

  const footnotes = prose.querySelector(".footnotes");
  if (!footnotes) return;

  const refs = prose.querySelectorAll('a.footnote, a[rel~="footnote"]');
  let madeSidenote = false;

  refs.forEach((ref) => {
    const href = ref.getAttribute("href");
    if (!href || !href.startsWith("#")) return;

    let note;
    try {
      note = document.querySelector(href);
    } catch {
      return;
    }
    if (!note) return;

    const copy = note.cloneNode(true);
    copy.querySelectorAll(".reversefootnote").forEach((link) => link.remove());

    const sidenote = document.createElement("span");
    sidenote.className = "sidenote";
    sidenote.setAttribute("role", "note");

    const number = document.createElement("span");
    number.className = "sidenote-number";
    number.textContent = ref.textContent.trim() + ".";

    sidenote.append(number);
    while (copy.firstChild) sidenote.append(copy.firstChild);

    const anchor = ref.closest("sup") || ref;
    anchor.insertAdjacentElement("afterend", sidenote);
    madeSidenote = true;
  });

  if (madeSidenote) prose.classList.add("has-sidenotes");
});

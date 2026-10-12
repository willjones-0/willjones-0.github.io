# William Jones — personal site

A small, content-first site built with Jekyll and hosted by GitHub Pages. Writing is published separately on Substack, while this repository contains the homepage, YouTube link, projects, and About page.

## Publish writing

Create and publish essays in Substack. The website’s Writing page is the bridge to that publication; add the Substack address to `writing.md` and `_includes/header.html` once it is known.

## Preview locally (optional)

Install Ruby, then run:

```sh
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000`. You can also use GitHub Desktop to commit and push without previewing locally.

## Edit the site

- `writing.md` — the page that points readers to Substack
- `about.md`, `videos.md`, `projects.md` — main section pages
- `index.md` — home page
- `_layouts/` and `_includes/` — shared page structure
- `assets/css/style.css` — all visual styling
- `_config.yml` — site name, description, URL, and publishing settings

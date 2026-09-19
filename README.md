# William Jones — personal site

A small, content-first site built with Jekyll and hosted by GitHub Pages. Posts are written in Markdown; GitHub builds the HTML automatically after each push.

## Publish a new post

1. Copy `_drafts/post-template.md` into `_posts/`.
2. Rename it `YYYY-MM-DD-short-title.md`, for example `2026-10-04-why-i-write.md`.
3. Edit the title, description, reading time, and body in VS Code.
4. Save, commit in GitHub Desktop, and push to `main`.

The post will appear automatically on the home page, on `/writing/`, and at `/writing/short-title/`.

## Preview locally (optional)

Install Ruby, then run:

```sh
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000`. You can also use GitHub Desktop to commit and push without previewing locally.

## Edit the site

- `_posts/` — published Markdown essays
- `_drafts/` — unpublished drafts and the post template
- `about.md`, `videos.md`, `projects.md` — main section pages
- `index.md` — home page
- `_layouts/` and `_includes/` — shared page structure
- `assets/css/style.css` — all visual styling
- `_config.yml` — site name, description, URL, and publishing settings

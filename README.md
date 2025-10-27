# Juro Spain static site

Production-ready Jekyll site for [jurospain.com](https://jurospain.com).

## Local development

```bash
bundle install
bundle exec jekyll serve
```

## Deployment

The site is designed for GitHub Pages. After pushing to the default branch, enable GitHub Pages and set the custom domain to `jurospain.com`. Enforce HTTPS.

### DNS records

Configure your domain provider with the following records:

| Host | Type | Value |
| --- | --- | --- |
| @ | A | 185.199.108.153 |
| @ | A | 185.199.109.153 |
| @ | A | 185.199.110.153 |
| @ | A | 185.199.111.153 |
| www | CNAME | YOURUSER.github.io |

Include a `CNAME` file with `jurospain.com` in the repository root (already present).

## Content management

- Pages live in `/pages/` and are written in Markdown.
- Blog posts live in `/_posts/` and use standard Jekyll front matter.
- Navigation items are stored in `_data/nav.yml`.
- Global components sit in `_includes/` for easy reuse.

Add new posts by creating Markdown files under `_posts/` with the format `YYYY-MM-DD-title.md`. The layout automatically injects breadcrumbs, CTAs, and related links.

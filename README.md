# Juro Spain static site

Production-ready Jekyll site for [jurospain.com](https://jurospain.com) built on the [Minima theme](https://github.com/jekyll/minima).

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

- Primary pages live in the repository root as Markdown (`index.md`, `about.md`, `services.md`, `pricing.md`, `contact.md`, etc.).
- Long-form guides live in `/_posts/` and publish under `/guides/.../` thanks to each post’s custom permalink.
- Styling relies on Minima’s defaults with no additional overrides to keep maintenance simple.

Add new guides by creating Markdown files under `_posts/` with the format `YYYY-MM-DD-title.md` and setting a `permalink` under `/guides/`.

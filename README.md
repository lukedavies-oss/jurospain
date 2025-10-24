# Juro Spain static site

This repository contains the Jekyll site for [jurospain.com](https://jurospain.com).

## Local development

```bash
bundle install
bundle exec jekyll serve
```

## Deployment

The site is designed for GitHub Pages. Push the `main` branch and enable GitHub Pages with the `GitHub Actions` or `GitHub Pages` build depending on your account type. Set the custom domain to `jurospain.com` and enforce HTTPS.

### DNS configuration

Add the following DNS records with your domain registrar:

| Host | Type | Value |
| --- | --- | --- |
| @ | A | 185.199.108.153 |
| @ | A | 185.199.109.153 |
| @ | A | 185.199.110.153 |
| @ | A | 185.199.111.153 |
| www | CNAME | YOURUSER.github.io |

Create the `CNAME` file (already included) with `jurospain.com` so GitHub Pages knows the custom domain.

## Content updates

* Add new Markdown files in `_posts` using the `YYYY-MM-DD-title.md` convention.
* Update navigation links in `_data/nav.yml`.
* Images live under `assets/img/`.

## Licensing

All content © {{ 'now' | date: '%Y' }} Juro Spain. No unauthorised reproduction.

---

Initial PR is text-only for this tool’s compatibility. After merge, upload real images (WebP/PNG) to assets/img/ via GitHub UI and update paths.

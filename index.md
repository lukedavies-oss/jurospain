---
layout: default
title: Home
description: Legal help for living in Spain—simple, clear, fast.
permalink: /
---
<section class="hero" aria-labelledby="hero-title">
  <div class="container">
    <h1 id="hero-title">Legal help for living in Spain—simple, clear, fast.</h1>
    <p class="lead">Navigate NIEs, visas, property, and paperwork with a bilingual legal concierge who understands expat life.</p>
    <a class="cta-btn" href="https://calendly.com/YOUR-CALENDLY" rel="noopener" target="_blank">Book a call</a>
    <div class="trust-badges" role="list">
      <span role="listitem">🇪🇸 Based in Madrid, serving nationwide</span>
      <span role="listitem">⚖️ Partnered with regulated Spanish lawyers</span>
      <span role="listitem">💬 English-first client portal</span>
    </div>
  </div>
</section>
<section class="container" aria-labelledby="value-title">
  <h2 id="value-title">A single team to untangle Spanish bureaucracy</h2>
  <div class="features">
    <article class="feature-card">
      <h3>NIE &amp; residency numbers</h3>
      <p>Fast-track NIE appointments, paperwork review, and Spanish translations so you can open bank accounts, buy property, or sign contracts.</p>
      <a class="button tertiary" href="{{ '/guides/nie-number-spain/' | relative_url }}">Learn how we help</a>
    </article>
    <article class="feature-card">
      <h3>Golden Visa concierge</h3>
      <p>Investment screening, due diligence, and family regrouping support with lawyer oversight for Spain’s Golden Visa programme.</p>
      <a class="button tertiary" href="{{ '/guides/spain-golden-visa/' | relative_url }}">Explore the process</a>
    </article>
    <article class="feature-card">
      <h3>Property buying partner</h3>
      <p>From nota simple checks to notary day representation, we orchestrate every step for stress-free Spanish property purchases.</p>
      <a class="button tertiary" href="{{ '/guides/buying-property-in-spain/' | relative_url }}">See the roadmap</a>
    </article>
  </div>
</section>
<section class="container" aria-labelledby="services-title">
  <h2 id="services-title">Popular services</h2>
  <div class="features">
    <article class="feature-card">
      <h3>Digital Nomad Visa</h3>
      <p>Check remote income eligibility, prepare supporting documents, and manage visa filings in Spain or at your consulate.</p>
      <a class="button tertiary" href="{{ '/guides/digital-nomad-visa-spain/' | relative_url }}">Visa checklist</a>
    </article>
    <article class="feature-card">
      <h3>Non-lucrative Visa</h3>
      <p>Financial planning, insurance verification, and Spanish translations to secure the classic long-stay visa.</p>
      <a class="button tertiary" href="{{ '/guides/non-lucrative-visa-spain/' | relative_url }}">Start preparing</a>
    </article>
    <article class="feature-card">
      <h3>Banking &amp; fiscal setup</h3>
      <p>Open resident or non-resident accounts, complete tax registrations, and get ongoing compliance reminders.</p>
      <a class="button tertiary" href="{{ '/guides/opening-a-bank-account-spain/' | relative_url }}">Banking guide</a>
    </article>
  </div>
</section>
<section class="container testimonials" aria-labelledby="testimonials-title">
  <h2 id="testimonials-title">Clients we’ve recently helped</h2>
  <div class="testimonial-grid">
    <blockquote>
      <p>“Juro Spain handled our NIEs and Golden Visa filings without a single document bouncing back. Clear communication in English made all the difference.”</p>
      <cite>— Emma &amp; Jack, relocating from the UK</cite>
    </blockquote>
    <blockquote>
      <p>“They coordinated with the notary, bank, and the seller’s lawyer so we could close on our Barcelona flat remotely.”</p>
      <cite>— Priya, software founder from India</cite>
    </blockquote>
    <blockquote>
      <p>“From empadronamiento to autónomo registration, the roadmap saved me weeks of trial and error.”</p>
      <cite>— Alex, digital nomad from Canada</cite>
    </blockquote>
  </div>
</section>
<section class="container" aria-labelledby="latest-title">
  <h2 id="latest-title">Latest guides</h2>
  <div class="blog-teasers">
    {% assign latest = site.posts | slice: 0, 3 %}
    {% for post in latest %}
    <article>
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p>{{ post.description }}</p>
      <a class="button tertiary" href="{{ post.url | relative_url }}">Read more</a>
    </article>
    {% endfor %}
  </div>
</section>
{% include cta-book.html %}

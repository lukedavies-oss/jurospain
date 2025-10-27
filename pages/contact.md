---
title: Contact
description: Book a call, send us a message, or plan a visit in Madrid.
permalink: /pages/contact/
---
## Book a call

{% include cta-book.html %}

<div class="calendly-embed">
  <iframe src="https://calendly.com/YOUR-CALENDLY" title="Book a call with Juro Spain" loading="lazy"></iframe>
</div>

## Send a message

<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" class="contact-form">
  <input type="hidden" name="form-name" value="contact" />
  <p class="hidden">
    <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
  </p>
  <p>
    <label for="name">Name</label>
    <input id="name" name="name" type="text" required />
  </p>
  <p>
    <label for="email">Email</label>
    <input id="email" name="email" type="email" required />
  </p>
  <p>
    <label for="service">Service area</label>
    <select id="service" name="service" required>
      <option value="">Select an option</option>
      <option>NIE / residency numbers</option>
      <option>Golden Visa</option>
      <option>Property purchase</option>
      <option>Digital Nomad Visa</option>
      <option>Non-lucrative Visa</option>
      <option>Autónomo setup</option>
      <option>Other</option>
    </select>
  </p>
  <p>
    <label for="message">How can we help?</label>
    <textarea id="message" name="message" rows="5" required></textarea>
  </p>
  <p>
    <button type="submit" class="btn btn-primary">Send message</button>
  </p>
</form>

## Visit us in Madrid

<div class="map-placeholder" role="img" aria-label="Map of Madrid office">
  <p>Visit by appointment: Paseo de la Castellana, Madrid.</p>
</div>

# Security

## Overview

The Alert Energy website is a static site with a minimal attack surface. There is no server-side code, no database, no authentication, and no user data storage.

## Current Security Posture

### Static Site Advantages
- No server-side code to exploit
- No database or data store
- No user sessions or authentication
- Content served entirely from CDN (Netlify)
- HTTPS enforced via Netlify

### Form Handling
- Contact form submissions are handled by Formspree (third-party service)
- No form data is stored on the site itself
- Formspree handles CSRF protection and spam filtering
- The form action URL (`https://formspree.io/f/YOUR_FORM_ID`) must be configured before launch

### Client-Side JavaScript
- Minimal JS footprint: mobile menu toggle and form submission stub only
- No third-party JavaScript libraries loaded
- No analytics or tracking scripts (yet)
- Google Fonts loaded from Google CDN

### Content Security
- No user-generated content
- No file uploads
- All content is static and authored by the Alert Energy team

## Recommendations Before Launch

1. **Configure Formspree** -- Replace `YOUR_FORM_ID` in `contact.astro` with a real Formspree endpoint
2. **HTTPS** -- Netlify provides free SSL certificates automatically
3. **Headers** -- Consider adding security headers via Netlify `_headers` file:
   - `X-Frame-Options: DENY`
   - `X-Content-Type-Options: nosniff`
   - `Referrer-Policy: strict-origin-when-cross-origin`
4. **Calendly embed** -- When adding the Calendly widget, ensure it is loaded from `calendly.com` only
5. **Email address exposure** -- `info@alertenergy.net` is visible in the HTML. Consider a contact form-only approach if spam becomes an issue.

## Future Considerations

- **Analytics**: If adding Google Analytics or similar, ensure GDPR/privacy compliance for Canadian visitors (Vancouver, Toronto markets)
- **CMS access**: If a git-based CMS is added for partner editing, restrict access via GitHub permissions
- **Client portal** (Phase 3): Would require authentication, user data storage, and a significantly different security model. Should be assessed separately.

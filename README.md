# Lost & Found Web App

A front-end web application for reporting and browsing lost/found items on a university campus — built as a web development coursework project (WAD6), addressing a genuine everyday problem: lost items on campus being hard to report and find.

## Pages

| Page | Purpose |
|---|---|
| `index.html` | Homepage — hero section and a preview of recent lost/found items |
| `report-lost.html` | Form to report a lost item (name, description, location, date, contact, optional image) |
| `report-found.html` | Form to report a found item |
| `browse.html` | Browse all reported items, filterable by type and lost/found status |
| `feedback.html` | Feedback form (text, radio, checkbox, dropdown, range, textarea inputs) |
| `campus-directions.html` | Interactive Google Map embed with quick links to key campus buildings |
| `about.html` | Project purpose, usage instructions, and technologies used |

## Technologies

- HTML5 & CSS3
- Bootstrap 5 (responsive layout/UI)
- JavaScript ES6
- `localStorage` for persisting form data client-side (no backend/database — noted as a natural next step)
- Google Maps Embed

## Notes

- Front-end only — all data is stored in `localStorage` and resets when browser storage is cleared.
- Sticky Bootstrap navbar, basic form validation on required fields.
- Tested on desktop and mobile viewport sizes.

## Running it

Open `index.html` directly in a browser and navigate via the navbar — no build step or server required.

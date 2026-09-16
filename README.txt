README.txt

==========================================
Lost & Found Web Application – WAD6 Project
==========================================

Author: Muhammad Raiaan Ahmed
Student Number: 2317430
Submission Date: 08/05/25

------------------------------------------
📌 Project Purpose
------------------------------------------
This web application is a issue I incounter myself usually and is designed to help students and staff like me at the University of Buckingham to report lost items, submit found items, and browse all listings on campus. The aim is to enhance the universities digital infrastructure and making lost items around the university easier to find.

------------------------------------------
🌐 How to Use the Website
------------------------------------------
1. Open the website in a browser using index.html. This is the homepage to the website.
2. Use the "Report Lost" or "Report Found" pages to submit the items information, include any pictures if you can.
3. Browse lost and found items around the campus using filters on the "Browse" page.
4. Use the "Campus Directions" page to locate buildings on an interactive map.
5. Leave feedback via the "Feedback" page so I can make this website better overtime.

This website uses `localStorage`, so no back-end or database has been setup for it yet, but it can be done.

------------------------------------------
📄 Pages Overview
------------------------------------------

1. index.html – Home Page
   Features a hero section and preview of recently lost/found items, with buttons to quickly report an item.

2. report-lost.html
   Form to report a lost item. Includes fields for item name, description, location, date, contact info, and optional image upload. Data is stored in `localStorage`.

3. report-found.html
   Similar to report-lost, this form allows users to submit details about found items.

4. browse.html
   Displays all reported items. Users can filter by item type (e.g., electronics, books) and item source (lost or found). All data is loaded dynamically from `localStorage`.

5. feedback.html
   Collects user feedback through a form with varied input types (text, radio, checkbox, dropdown, range, textarea). Feedback is saved to `localStorage`.

6. campus-directions.html
   Embeds an interactive Google Map and provides quick links to key university buildings (e.g., Vinson, Tanlaw Mill, ADR). Useful for locating places where items are typically lost or returned.

7. about.html
   Describes the purpose of the website, how it works, and technologies used. Includes usage instructions and a short disclaimer.

------------------------------------------
🛠️ Technologies Used
------------------------------------------
- HTML5 & CSS3
- Bootstrap 5 (for responsive layout and UI components)
- JavaScript ES6
- localStorage (to store form data without a backend)
- Google Maps Embed (in campus-directions.html)

------------------------------------------
📸 Screenshots Included
------------------------------------------
- Home page
- Report Lost form
- Browse filters and item cards
- Feedback form inputs
- Campus Directions with embedded map

Screenshots are included in the zipped folder to visually demonstrate functionality and responsiveness.

------------------------------------------
👨‍💻 Developer Notes
------------------------------------------
- This is a front-end only project (no server or database required).
- All data is stored in `localStorage` and resets when the browser storage is cleared.
- The navbar uses Bootstrap 5 and is sticky on scroll for easy navigation.
- All forms have basic validation to prevent empty required fields.
- The project was tested on desktop and mobile screen sizes.

------------------------------------------
📦 How to Run the Project
------------------------------------------
1. Download and unzip the project folder.
2. Open `index.html` in your browser
3. Navigate through the site using the navbar.

Thank you for reading this text and instructions to my project! I hope this can help people out

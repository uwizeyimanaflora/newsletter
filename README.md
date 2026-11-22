Newsletter – Newsletter Website
Newsletter is a website. is a website that provides the latest information about technology, education, and different opportunities that help people learn and improve their skills. Visitors can read technology news, programming tips, scholarship opportunities, and other useful updates published by the website administrator. They can also subscribe using their names and email addresses to register on the website.
Live Demo
https://newsletter-flora.netlify.app
Features
Visitor Features
•	Visitors can read updates about technology, education, and different opportunities.
•	Visitors can read programming tips and scholarship announcements.
•	Visitors can subscribe using their names and email addresses.
•	The website checks for duplicate email addresses before saving a subscription.
•	Visitors can view the latest published updates on the homepage.
### Admin Features

The administrator is responsible for managing the content published on the Newsletter website.

- The administrator can access the Admin Dashboard.
- The administrator can add and publish new updates about technology, education, scholarships, and other opportunities.
- The administrator decides which information should be displayed on the website.
- The administrator can delete outdated, incorrect, or unnecessary updates.
- The administrator can view registered subscribers.
- The administrator can see the total number of subscribers.

The Admin Dashboard helps the administrator keep the website content updated, useful, and relevant to visitors.
Other Features
•	Responsive design for desktop, tablet, and mobile devices.
•	Simple and user-friendly interface.
•	LocalStorage is used to save subscribers and published updates in the browser.
Technologies Used
•	HTML5: Used to create the structure of the website.
•	CSS3: Used to style the website and make it responsive.
•	JavaScript: Used to handle website interactions, form validation, and dynamic content.
•	LocalStorage API: Used to store subscriber information and published updates in the browser.
•	Netlify: Used to deploy the website online.
Project Structure
newsletter/
├── index.html
├── style.css
├── script.js
├── admin.html
├── admin.js
├── subscribers.html
└── subscribers.js
Installation and Setup
To run this project on your computer:
1.	Clone the repository:
git clone https://github.com/uwizeyimanaflora/newsletter.git
2.	Open the project folder:
cd newsletter
3.	Open the folder in Visual Studio Code.
4.	Open index.html in your browser or use the Live Server extension in VS Code.
API Used
This project does not use an external API or backend database. It uses the browser's LocalStorage API to save subscriber information and published updates.
Challenges and Solutions
1. Preventing duplicate subscriptions
•	Challenge: Visitors could try to subscribe using an email address that was already registered.
•	Solution: JavaScript validation was added to check whether the email already exists before saving it.
2. Displaying published updates
•	Challenge: Newly published updates needed to appear on the homepage.
•	Solution: JavaScript was used to retrieve updates from LocalStorage and display them dynamically.
3. Managing subscribers
•	Challenge: The administrator needed a simple way to view registered subscribers.
•	Solution: A Subscribers Dashboard was created to display subscriber information and the total number of subscribers.
4. Making the website responsive
•	Challenge: The website needed to work well on different screen sizes.
•	Solution: CSS Flexbox, Grid, and media queries were used.
Limitations
•	Subscriber information and published updates are stored in the browser's LocalStorage.
•	Data is not shared between different browsers or devices.
•	The website does not currently send newsletter emails to subscribers.
•	The Admin Dashboard does not yet have secure authentication.
•	There is no central backend database.
Future Improvements
•	Add a backend and a central database to manage information.
•	Add secure admin login and authentication.
•	Integrate an email service to send newsletters to subscribers.
•	Allow subscribers to manage their subscriptions.
•	Improve data security and management.
Credits
This project was developed as part of the SheCanCode learning program.
Developer: Uwizeyimana Flora
Live Website: https://newsletter-flora.netlify.app
GitHub Repository: https://github.com/uwizeyimanaflora/newsletter


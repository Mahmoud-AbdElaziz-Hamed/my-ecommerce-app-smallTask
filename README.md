# My E-Commerce App
This is a simple e-commerce application built with React, designed to simulate basic e-commerce functionalities. The app includes a loading spinner, product listings, and a basic user interface for browsing items.

Project Link
GitHub Repository: My E-Commerce App

Approach
This application was built using React. Key features include:

Component Structure: The project uses a component-based architecture to keep the code modular and reusable. Each part of the interface (e.g., the spinner loader, product cards) is encapsulated in its own component.

Loading Spinner: A loading spinner component is used to indicate when data or content is being loaded. The spinner is centered on the screen using CSS, which enhances the user experience by keeping users informed about the loading state.

State Management: State is managed locally in each component using React's useState and useEffect hooks, which makes handling component-specific data simple and efficient.
Challenges Faced

Some of the main challenges included:

Centering the Spinner: Positioning the loading spinner exactly at the center of the viewport required careful CSS adjustments, using position: absolute and transform properties to ensure it appears in the middle of the screen.
Responsive Design: Making sure the app is responsive on different screen sizes required adjustments in CSS to ensure components are sized and positioned correctly.
State Management: Managing the state between components, especially with asynchronous data loading, required careful attention to ensure the UI updates correctly.
How to Run the Application Locally
To run this application locally, follow these steps:

Clone the Repository:

git clone https://github.com/Mahmoud-AbdElaziz-Hamed/my-ecommerce-app-smallTask.git
cd my-ecommerce-app-smallTask
Install Dependencies:

npm install
npm start
This will start the app in development mode. Open http://localhost:3000 to view it in your browser.

Build for Production (optional): If you want to create an optimized production build, run:
npm run build
This will generate the build folder with optimized code ready for deployment.

Deployment
The application deployed on platforms like Vercel:
https://my-ecommerce-app-small-task.vercel.app/

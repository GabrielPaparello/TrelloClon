# Trello Clone - Portfolio Piece

This project is inspired by Trello but is designed as a portfolio piece. It consists of a Kanban Board with the ability to create an account or log in with a service, allowing users to save and create projects and boards with data. The web application is structured like software, presenting Trello functionalities as a product.

## Features

- **Kanban Board:** Create, manage, and organize tasks in a visual format.
- **User Authentication:** Sign up or log in with a service using Auth0.
- **Project Management:** Save and create projects and boards with persistent data.
- **Responsive Design:** Fully responsive, providing a seamless experience across devices.

## Technologies Used

- **Next.js:** Provides flexibility with folder structure and API routes, ideal for deploying on Vercel.
- **PostgreSQL:** Used as the database for storing user data and projects.
- **Redux:** Manages the application state and logic.
- **Auth0:** Handles user authentication and registration.
- **Tailwind CSS:** For styling and ensuring a responsive, modern UI.
- **TypeScript:** Adds type safety and improves code maintainability.
- **JavaScript:** Core language for frontend logic.
- **React:** Powers the dynamic, component-based user interface.
- **Git:** Version control system used for tracking changes and collaboration.

## Getting Started

To run the project locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/GabrielPaparello/TrelloClon.git
   cd TrelloClon


2. **Install Dependencies::**

   ```bash
   npm install

3. **Set Up Environment Variables:**

Create a .env.local file in the root of the project and add your environment variables for PostgreSQL, Auth0, and any other required configurations.

4. **Run the Development Server:**

   ```bash
    npm run dev
Open http://localhost:3000 to view the application in your browser.


5. **Deploying:**
   
The project is ready to be deployed on Vercel. Follow the Vercel deployment documentation to deploy your Next.js application.

## Contributing
If you'd like to contribute to this project, please feel free to fork the repository and submit a pull request. Any contributions are welcome!

## License
This project is licensed under the MIT License. See the LICENSE file for details.

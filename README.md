# Latest News

This Latest News application displays the latest news covering November and December 2023. It showcases news articles from various categories like News and Travel.

## Components

### Button

A reusable component that renders a button as an anchor tag. It accepts a `link` prop to define the URL and displays the provided content as the button text.

### CardHeader

This component displays the header for each news article, consisting of the category and an image.

### CardBody

Responsible for rendering the body of each news article, showcasing the date, title, content, and a button to read more.

### Card

An amalgamation of CardHeader and CardBody to display a complete article card.

### Header

A simple header component that displays the main title and subtitle for the news application.

## News Component

This component fetches a list of news articles and displays them using Card components. It uses sample data with titles, dates, content, images, categories, and links for each news item.

## Installation and Running the App

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Execute `npm start` to run the application.
4. Open the browser and navigate to `http://localhost:3000` to view the app.

## Running the App on CodeSandbox

You can run this application on CodeSandbox by following these steps:

1. Open your browser and go to [CodeSandbox](https://codesandbox.io/).
2. Click on the "Create Sandbox" button.
3. Choose the appropriate template or create a new React sandbox.
4. Copy the contents of the files in this repository into their respective files in the CodeSandbox project.
5. Ensure all necessary dependencies are installed or imported.

   If any dependencies are missing, add them using npm or yarn. You can do this by opening a terminal in the CodeSandbox environment and running:
   ```bash
   npm install package-name
   # or
   yarn add package-name

Feel free to explore and modify the components as needed!

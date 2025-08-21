# 🌍 Where in the World? - A Country Explorer App

Hey there! Welcome to my country explorer app. This was my very first full-stack project, built as a student at AnnieCannons.

## 📌 Description

This project was a requirement given by my school to put my new backend skills to the test in cunjunction with those I acquired in my frontend class. It was the last stage of 5 versions explained below:

### STAGES

- The version 0 challenge was to build a website with React.js that pulls country data from the localData.js file.
- The version 1 challenge was to rebuild the the website with React.js that pulls country data from the REST Countries API.
- The version 2 challenge was to build on the Version 1 of the Countries API app by saving data in the browser using Local Storage. This made the app more personal, dynamic, and interactive!
- The version 3 upgraded my project to connect with a real API!
- The version 4 shows where I built my own backend from scratch!
- The goal of version 5 was to deploy it so it's fully accessible on the internet, then write my very first README to explain my project to the world 🚀 

## Project and its purpose.

This interactive web app lets you explore countries from all over the world. You can browse and save information about any country you're curious about!

## 🖼️ Screenshots

Here's a little sneak peek of the app in action!

### 🏠 (Home Page)

<img width="1206" height="664" alt="Home Page" src="https://github.com/user-attachments/assets/357f00bc-0113-4272-b916-7f1878045adb" />

### 🇹🇹 (Country Detail Page)

<img width="1205" height="647" alt="Country Detail Page" src="https://github.com/user-attachments/assets/d6ba7020-d8ae-41f5-9f3b-2543cff3461c" />

### 🌎 (Saved Countries Page)

<img width="1069" height="666" alt="MY Saved Countries" src="https://github.com/user-attachments/assets/7bcf25e8-1be4-462c-ba30-a85dc0a8ecf2" />

<img width="798" height="663" alt="Profile Top" src="https://github.com/user-attachments/assets/4e7aaaf0-7250-4040-890e-ad1dcdb59042" />
<img width="797" height="633" alt="Profile Mid" src="https://github.com/user-attachments/assets/cf08105d-da80-4296-944f-35b30c0bdaf2" />
<img width="750" height="612" alt="Profile End" src="https://github.com/user-attachments/assets/6d1e38f9-e58c-4a56-8203-0235e329f29a" />

## 🚀 Live Site

### Check out the live version here!

https://countries-api-version-five.netlify.app/

## ✨ Features

### Here's what you can do in the app:

- 🌐 Browse All Countries: See a list of all countries on the homepage when you first load the site.

- 🗺️ Filter Saved Countries: Narrow down your search by selecting your saved countries like Africa, Americas, Asia, Europe, or Oceania.

- 📖 View Detailed Information: Click on any country to see more details, like its native name, capital, population, currency, languages, and a list of its bordering countries.

- 📱 Responsive Design: The app looks great on both desktop and mobile devices.

- 💁🏽‍♀️ Add your profile: This brings a personalised touch to your Saved Countries Page. By filling out the form and pressing the submit button, your name will show on the Welcome screen title with a reflection of your Bio provided.

## 🛠️ Tech Stack

This project is a full-stack application built with PostgreSQL, Express, React, Node.js.

### Frontend

- **React:** For building the dynamic and responsive user interface.
- **React Router:** For client-side routing to create a multi-page feel.
- **Fetch API:** Used the browser's built-in `fetch` for all HTTP requests to the backend API.
- **HTML & CSS:** For the core structure and presentation.

### Backend

- **Node.js:** As the JavaScript runtime environment.
- **Express.js:** As the web server framework to build the RESTful API.
- **PostgreSQL:** As the relational database to store and manage country data.
- **Neon:** The serverless PostgreSQL platform used to host the database.

### Development & Deployment Tools

- **db fiddle:** Used during the development phase to design, prototype, and test the SQL database schema and queries.
- **Git & GitHub:** For version control and code hosting.
- **Netlify:** For continuous deployment of the frontend React application.
- **Render:** For hosting the backend Express API server.

## 💭 Reflections

### What I Learned

This was my first full-stack project and it was an incredible learning experience that taught me how to connect a frontend client to a backend I built from scratch.

#### 1. Full-Stack Development

- **Full-Stack Integration:** I learned how to orchestrate a complete request-response cycle: a React component triggers a request using the **Fetch API** to a specific backend endpoint. The Express server then processes that request, queries the PostgreSQL database, and sends a JSON response back to the client to be rendered.
- **RESTful API Design:** I gained hands-on experience designing and building a RESTful API with Express, creating routes for fetching all saved countries (`GET /get-all-saved-countries`) and newest user (`GET /get-newest-user`).
- **Asynchronous JavaScript:** I solidified my understanding of asynchronous JavaScript by using `async/await` syntax to handle API calls with `fetch`, ensuring the user interface remained responsive while waiting for data from the server.

#### 2. Backend Skills

- **Server-Side Logic:** I deepened my understanding of Node.js and how to create a robust server using Express such as stringify and parsing request bodies.

#### 3. Frontend Skills

- **State Management:** I solidified my skills in managing complex application state in React, including loading states, error handling, and storing fetched API data.
- **Dynamic Routing:** I effectively used React Router to create dynamic routes for the country detail pages, passing URL parameters to fetch specific data.

### What I'm Proud Of:

I'm honestly just proud that it all works! Finishing my first full-stack project feels like a huge accomplishment. I'm especially happy with how the saved countries filter features came together to let users easily find their favorite countries. Getting the country detail pages to dynamically load the correct information was also a big win!

### What Was Challenging

The biggest challenge was definitely managing all the different pieces of state. Figuring out how to do the increase view count, inputting the SQL and fetching the API calls were challenging. In general filerting the main country list so that the entire app would work was tricky. Another tough spot was correctly displaying the full names of the bordering countries. The API provides them as codes (like 'FRA' or 'DEU'), so I had to figure out a way to map those codes back to their full country names from the main list of countries I had fetched.

### Future Ideas

If I had more time, I'd love to:

- Make the search bar.

- Make the border countries on the detail page clickable, so users can easily navigate between them.

- Implement a light/dark mode toggle for user comfort.

- Add a "Sort by" feature to organize countries by population or name.

- Add loading skeletons or spinners for a better user experience while the data is being fetched.

## 🙌 Credits

A huge shout-out to my instructors and cohort at AnnieCannons for all the support and guidance.
This project was an assignment given to me on the AnnieCannons Assignment for the Backend Class.
The app wouldn't exist without the awesome and free REST Countries API.

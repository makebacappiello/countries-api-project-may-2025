# 🌍 Where in the World? - A Country Explorer App

Hey there! Welcome to my country explorer app. This was my very first full-stack project, built as a student at AnnieCannons.

## 📌 Description

This project was a requirement given by my school to put my new backend skills to the test in cunjunction with those I acquired in my frontend class. It was the last of 5 versions that led up to this point. The goal was to practice fetching data from a third-party API, managing application state in React, creating a user-friendly multi-page experience, and deploying it all for the world to see.

## Project and its purpose.

This interactive web app lets you explore countries from all over the world. You can browse, search, and filter to find information about any country you're curious about!

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

This project was built using a modern frontend stack:

1. **Languages:** HTML, CSS, PostgreSQL, JavaScript (ES6+)

2. **Library:** _React._

3. **Routing:** _React Router._

4. **Build Tool:** _Vite._

5. **API:** _REST Countries API._

6. **Deployment:** _Netlify, Render._

## 💭 Reflections

### What I Learned

I learned a ton! This was my first real dive into building a complete application with React. I got comfortable with core concepts like useState and useEffect for managing state and side effects (like fetching API data). Implementing client-side routing with React Router was a game-changer for creating a smooth, multi-page feel without page reloads.

### What I'm Proud Of

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

### 🙌 Credits

A huge shout-out to my instructors and cohort at AnnieCannons for all the support and guidance.
This project was inspired by the REST Countries API challenge on Frontend Mentor.
The app wouldn't exist without the awesome and free REST Countries API.

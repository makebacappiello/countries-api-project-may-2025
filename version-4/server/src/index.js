/*--------------------------------
BOILERPLATE CODE TO SET UP SERVER
---------------------------------*/
// Importing our Node modules
import express from "express";

// The framework that lets us easily build a web server
import pg from "pg"; // pg stands for PostgreSQL, for talking to the database
import config from "./config.js"; // we need access to our database connection credentials

// connect to our PostgreSQL database, or db for short
const db = new pg.Pool({
  connectionString: config.databaseUrl, // credentials to access the database — keep this private!
  ssl: true, // we will use SSL encryption when connecting to the database
});

const app = express(); // Creating an instance of the express module

app.use(express.json()); // This server will receive and respond in JSON format

const port = 3000; // Declaring which port to listen to to receive requests

// Turning on our server to listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
/*--------------------------------
HELPER FUNCTIONS
---------------------------------*/
// Helper function for /get-all-users

async function getAllUsers() {
  const result = await db.query("SELECT * FROM users");
  return result.rows;
}

// Helper function for /get-newest-user

async function getNewestUser() {
  const result = await db.query(
    "SELECT * FROM users ORDER BY user_id DESC LIMIT 1"
  );
  return result.rows;
}
// Helper function for /add-one-user

async function addOneUser(users) {
  await db.query(
    "INSERT INTO users (name, country_name, email, bio) VALUES ($1, $2, $3, $4)",
    [users.name, users.country_name, users.email, users.bio]
  );
}

// Helper function for /update-one-user

async function updateOneCountryCount(countryObject) {
  await db.query(
    "UPDATE country_counts SET count = count + 1 WHERE country_name = $1",
    [countryObject.country_name]
  );
}

// Helper function for /get-all-saved-countries

async function getAllSavedCountries() {
  const result = await db.query("SELECT * FROM saved_countries");
  return result.rows;
}

// Helper function for /save-one-country

async function saveOneCountry(newCountryObject) {
  await db.query("INSERT INTO saved_countries(country_name) VALUES ($1)", [
    newCountryObject.country_name,
  ]);
}

// Helper function for /unsave-one-country:name
async function unsaveOneCountry(unsaveCountryName) {
  const result = await db.query(
    "DELETE FROM saved_countries WHERE country_name = $1",
    [unsaveCountryName.country_name]
  );
}

/*--------------------------------
API ENDPOINTS
---------------------------------*/
// GET /get-all-users
app.get("/get-all-users", async (req, res) => {
  const allUsers = await getAllUsers();
  // res.send(JSON.stringify(allUsers));
  res.json(allUsers);
});

// GET /get-newest-user

app.get("/get-newest-user", async (req, res) => {
  const user = await getNewestUser();
  res.json(user);
});

// POST /add-one-user
app.post("/add-one-user", async (req, res) => {
  const newUser = req.body;
  addOneUser(newUser);
  res.send("The new user was successfully added!");
});

// POST /update-one-country-count
app.post("/update-one-country-count", async (req, res) => {
  const countryObject = req.body;
  updateOneCountryCount(countryObject);
  res.send("The Count was successfully updated!");
});

// GET /get-all-saved-countries

app.get("/get-all-saved-countries", async (req, res) => {
  const allCountries = await getAllSavedCountries();
  // res.send(JSON.stringify(allAnimals));
  res.json(allCountries);
});

// POST /save-one-country
app.post("/save-one-country", async (req, res) => {
  const newCountryObject = req.body;
  saveOneCountry(newCountryObject);
  res.send("Success! The country is saved.");
});

// POST /unsave-one-country

app.post("/unsave-one-country", async (req, res) => {
  const unsaveCountryName = req.body;
  unsaveOneCountry(unsaveCountryName);
  res.send("Success! The country is unsaved!");
});

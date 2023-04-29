import scrape from "website-scraper";
import express from "express";
const app = express();
const port = 3000;
const domain = process.argv[2];
const options = {
  urls: [`https://${domain}`],
  directory: domain,
};
app.use(express.static(`/Users/airwo/OneDrive/Documents/GitHub/TestingThingsOut/Practice/JavaScript/Pet Code/${domain}`));

app.get("/", (req, res) => {
  res.sendFile(`/Users/airwo/OneDrive/Documents/GitHub/TestingThingsOut/Practice/JavaScript/Pet Code/${domain}/index.html`);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
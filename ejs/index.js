import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

var dateToday = new Date(); 
var day = dateToday.getDay(); 

app.use(bodyParser.urlencoded({ extended: true})); 

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  
//   if(day >= 1 && day <= 5){
//     app.get("/", (req, res) => {
//         res.send("<h1>Hey! It's a weekday, it's time to work hard!</h1>");
//       });
//   } else {
//     app.get("/", (req, res) => {
//         res.send("<h1>Hey! It's the weekend, it's time to have fun!</h1>");
//     });
//   }

app.get("/", (req,res) => {
    const dateToday = new Date(); 
    const day = dateToday.getDay(); 

    let type = "a weekday";
    let advice = "it's time to work hard"; 

    if (day === 0 || day === 6) {
        type = "a weekend";
        advice = "time to have fun"; 
    }

    res.render("index.ejs", {
        dayType : type,
        advice : advice, 
    });


})
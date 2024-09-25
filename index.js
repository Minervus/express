import express from "express"; 
const app = express(); 
const port = 3000; 

app.get("/", (req, res) => {
    res.send("<h1>Hello World</>"); 
})

app.get("/about", (req, res) => {
    res.send("<h1>About Me</>"); 
})

app.get("/contact", (req, res) => {
    res.send("<p>Something interesting about contacting, ooops this was supposed to be on the about page</>"); 
})

app.listen(port, () => {
    console.log(`Server listenting on port ${port}`); 
})


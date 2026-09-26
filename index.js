const express = require("express");
const bodyParser = require('body-parser');
const env = require('dotenv');
const mongoose = require('mongoose');
const Movie=require('./models/movie.model')

env.config();
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/home', (req, res) => {
    return res.json({
        success: true,
        message: "Fetched home"
    })
})

app.listen(process.env.PORT, async () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("MongoDB Connected");
        // await Movie.create({
        //     name:"Bachchan Pandey",
        //     description:"Comedy Masala Movie",
        //     casts:["Akshay Kumar","Kriti Sanon", "Jacqueline"],
        //     director:"Farhad Samji",
        //     trailerUrl:"https://bacchanpandey/trailers/1",
        //     language:"Hindi",
        //     releaseDate:"10-03-2022",
        //     releaseStatus:"RELEASED"

        // });
    } catch (err) {
        console.log("Not connected to MongoDB", err);
    };

});
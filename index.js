
const express=require("express")
const app=express();
const path = require("path");
const ejsMate=require("ejs-mate");
const methodOverride = require("method-override");


app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.engine("ejs",ejsMate);
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));


app.get("/",(req,res)=>{
	res.send("HI");})

app.get("/home",(req,res)=>{
    res.render("userlistings/index.ejs");
})

app.listen(port=8080,()=>{
    console.log("Server listening in port ",port);
    });
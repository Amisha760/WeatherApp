const express= require("express");
const path=require("path");
const app=express();
const hbs=require("hbs");
const PORT= process.env.PORT||8000;


const staticPath=path.join(__dirname,"../public");
const partials_path=path.join(__dirname,"../partials");

app.use(express.static(staticPath));


app.set('views', "../views");
app.set("view engine","hbs");

hbs.registerPartials(partials_path);


app.get("/",(req,res)=>{
    res.render("main");
})

app.get("/aboutus",(req,res)=>{
    res.render("about");
})

app.get("/weather",(req,res)=>{
    res.render("weather");
})
app.get("*",(req,res)=>{
    res.render("404err",{
        errormsg:"Oops! Page Not Found!!"
    });
})

app.listen(PORT,(req,res)=>{
    console.log(`calling the port ${PORT}`);
})
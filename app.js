var express        = require("express"),
    app            = express(),
    bodyParser     = require("body-parser"),//To handle HTTP POST request in Express.js 
    mongoose       = require("mongoose"),
    flash          = require("connect-flash"),
    passport       = require("passport"),
    LocalStrategy  = require("passport-local"),
    methodOverride = require("method-override"),//Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
    Campground     = require("./models/campground"),
    seedDB         = require("./seeds"),
    Comment        = require("./models/comment"),
    User           = require("./models/user");

const PORT = process.env.PORT||3000;
//requring routes
var commentRoutes = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes = require("./routes/index");

var url = process.env.DATABASEURL || "mongodb://localhost/yelp_camp";
mongoose.connect(url,{ useNewUrlParser: true , useUnifiedTopology: true});

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));//To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
app.use(methodOverride("_method"));//override with POST having ?_method=DELETE
app.use(flash());
//seedDB();//seed the database

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret:"This is a secret",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());// initialises Passport.
app.use(passport.session());//passport.session() is another middleware that alters the request object and change the 'user' value that is currently the session id (from the client cookie) into the true deserialized user object
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
    res.locals.currentUser=req.user;//The app.locals object has properties that are local variables within the application.
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use("/",indexRoutes);
app.use("/campgrounds",campgroundRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);

app.listen(PORT,function(){
    console.log("The YelpCamp Server Has Started!");
});

module.exports = function(app, path) {

	// index.html 
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public"));
    });

    // exercise.html
    app.get("/exercise", function(req, res){
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    // stats.html
    app.get("/stats", function(req, res){
        res.sendFile(path.join(__dirname, "../public/stats.html"))
    });
    
};
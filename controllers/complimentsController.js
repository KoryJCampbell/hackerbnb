var complimentsController = {
  index: function(req,res){
    res.render("compliments/index.hbs", {compliments:[]});
  }
};

module.exports = complimentsController;

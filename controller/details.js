
var article=require('../models/article');


exports.detail=function (req,res,next) {
    var id=req.query.id;
    res.render("detail");
    /*article.getDetail([id],function (err,rows) {
        if(err){
            next(err);
        }else {
            if(rows){
                res.render("detail",rows);
            }else {
                res.render("noarticle");
            }
        }
    })*/
}

var article=require('../models/article');


exports.detail=function (req,res,next) {
    var id=req.query.id;
    article.getDetail([id],function (err,rows) {
        if(err){
            next(err);
        }else {
            if(rows){
                console.log(rows);
                console.log(rows[0].Title)
                res.render("detail",rows[0]);
            }else {
                res.render("noarticle");
            }
        }
    })
}
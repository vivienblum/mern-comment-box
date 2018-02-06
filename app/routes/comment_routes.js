var ObjectID = require("mongodb").ObjectID

module.exports = function(app, db) {
  // app.get(function(req, res) {
  //   Comment.find(function(err, comments) {
  //     if (err) res.send(err)
  //     res.json(comments)
  //   })
  // })
  // app.post(function(req, res) {
  //   var comment = new Comment()
  //   comment.author = req.body.author
  //   comment.text = req.body.text
  //
  //   comment.save(function(err) {
  //     if (err) res.send(err)
  //     res.json({ message: "Comment successfully added!" })
  //   })
  // })
  app.get("", (req, res) => {
    Comment.find(function(err, comments) {
      if (err) res.send(err)
      res.json(comments)
    })
  })
}

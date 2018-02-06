const commentRoutes = require("./comment_routes")

module.exports = function(app, db) {
  commentRoutes(app, db)
}

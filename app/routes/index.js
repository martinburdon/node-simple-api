const noteRoutes = require('./noteRoutes.js');

module.exports = function(app, db) {
  noteRoutes(app, db);
  // Other route groups here...
}

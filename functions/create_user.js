const admin = require('firebase-admin');

module.exports = function(req, res) {
  // verify that the user provided a phone #
  if (!req.body.phone) {
    return res.status(422).send({ error: 'bad input' });
  }
  // sanitize number to remove - and " "
  const phone = String(req.body.phone).replace(/[^\d]/g, "");
  // create a new user using the #
  admin.auth().createUser({ uid: phone })
    .then((user) => res.send(user)) // respond to request with account creation status
    .catch((err) => res.status(422).send({ error: err }));
}

const User = require("../models/auth"); const jwt = require("jsonwebtoken"); const passport = require("passport"); exports.registerUser = async (req, res, next) => { try { const user = new User({ username: req.body.username, email: req.body.email, phoneNumber: req.body.phoneNumber, password: req.body.password, }); const accessToken = jwt.sign( { id: user.id, username: user.username, }, process.env.JWT_ENCRYPT_KEY, { expiresIn: "3m", } ); User.register(user, req.body.password, (err, user) => { if (err) { console.log(err); res.send(err); } else { passport.authenticate("local")(req, res, () => { res.json({ accessToken: accessToken, username: user.username, }); console.log("user registered"); }); } }); } catch (err) { next(err); } }; exports.loginUser = async (req, res) => { try { const user = new User({ username: req.body.username, }); const accessToken = jwt.sign( { id: user.id, username: user.username, }, process.env.JWT_ENCRYPT_KEY, { expiresIn: "3m", } ); const refreshToken = jwt.sign( { id: user.id, username: user.username, }, process.env.JWT_ENCRYPT_KEY, { expiresIn: "20m", } ); req.login(user, (err) => { if (err) { console.log(err); res.send(err); } else { passport.authenticate("local")(req, res, () => { res.json({ accessToken: accessToken, refreshToken: refreshToken, username: user.username, }); console.log("user logged in"); }); } }); } catch (err) { console.log(err); } }; exports.deleteUser = async (req, res) => { try { if ((await User.findById(req.params.id)) === null) { res.send("User Not Found"); } else { await User.findByIdAndRemove(req.params.id).exec(); res.send("Deleted User"); } } catch (err) { console.log(err); } }; exports.logUsers = async (req, res) => { console.log("Log user called"); User.find({}, (err, result) => { if (err) { res.send({ app: err }); } else { res.send(result); } }); }; 
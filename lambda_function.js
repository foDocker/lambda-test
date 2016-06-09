module.exports = function(event, context, cb) {
	cb(null, "Testing lambda! " + JSON.stringify(event));
};

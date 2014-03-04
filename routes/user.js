
/*
 * GET users listing.
 */

exports.listusers = function(db){
	return function(req, res){
		db.collection('mindrudan_db').find().toArray(function (err, items){
			res.json(items);
		});
  }
};

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'mindrudan.com will change to an Express app.' });
};
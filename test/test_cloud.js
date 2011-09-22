var util = require('util');
var feedhenry = require("fh-nodeapp");
var assert = require('assert');

require.paths.push('./cloud');
require.paths.push('./shared');

var mainjs = require('main.js');
var server = feedhenry.host(mainjs);

module.exports = {  
  'test configCall' : function() {
    assert.response(server, {
      url : '/configCall/',
      method : 'POST',
      data : JSON.stringify({}),
      headers : {
        'Content-Type' : 'application/json'
      }
    }, {
      status : 200
    }, function(res) {        
      var out = JSON.parse(res.body);
      console.dir(out);
    });
  }
}; 



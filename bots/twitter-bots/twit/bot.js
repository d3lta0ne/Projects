console.log("The bot is starting");

var Twit = require("twit");
var config = require("./config");

var T = new Twit(config);

// Setting up a user stream
var stream = T.stream("user");

// Anytime someone follows me
stream.on("follow", followed);

function followed(eventMsg) {
  var name = eventMsg.source.name;
  var screenName = eventMsg.source.screen_name;
  tweetIt("@" + screenName + "do you like rainbows?");
}

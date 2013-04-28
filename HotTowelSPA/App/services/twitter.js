define(function () {

    var tweetModel = function (user, image, tweet) {
        this.user = user;
        this.tweet = tweet;
        this.image = image;
    };

    var model = {
        loadTweets: load,

    };

    return model;

    function load(query, list) {
        return $.ajax({
            url: "http://search.twitter.com/search.json?q=" + query,
            crossDomain: true,
            dataType: "jsonp"
        }).done(function (data) {
            $.each(data.results, function (i, d) {
                list.push(new tweetModel(d.from_user, d.profile_image_url, d.text));
            });
        });

    }
});
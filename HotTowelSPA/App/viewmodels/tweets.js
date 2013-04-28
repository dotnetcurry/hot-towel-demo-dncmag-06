define(['services/logger', 'services/twitter'], function (logger, twitter) {
    var vm = {
        activate: activate,
        title: 'Tweet results for "DotNetCurry"',
        tweets: ko.observableArray([])
    };

    return vm;

    function activate() {
        twitter.loadTweets("dotnetcurry", vm.tweets);

        logger.log('Tweet page activated', null, 'tweets', true);
        return true;
    }

});
define(['services/logger','services/twitter'], function (logger, twitter) {
    var vm = {
        activate: activate,
        title: 'Home View',
        tweets: ko.observableArray([])
    };

    return vm;

    function activate() {
        twitter.loadTweets("dotnetcurry", vm.tweets);

        logger.log('Home View Activated', null, 'home', true);
        return true;
    }

});
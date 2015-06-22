var actualUrl = window.location.href.toString();
chrome.storage.sync.get("rules", function(storedRules){
    var rules = storedRules.rules;
    rules.forEach(function(rule){
        if(!rule.active){
            return;
        }

        if(actualUrl.match(new RegExp("http[s]?:\/\/" + rule.from))) {
            window.location.href = rule.to;
        }
    });
});
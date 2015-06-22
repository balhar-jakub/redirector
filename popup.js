window.onload = initializeView;

function initializeView() {
    var rulesViewModel = {
        rules: [],

        add: function () {
            this.rules.push(new Rule("", "", false));
        },

        save: function() {
            chrome.storage.sync.set({rules: this.rules}, function(){
                console.log("Saved");
            });
        }
    };

    var Rule = function (from, to, active) {
        this.from = from;
        this.to = to;
        this.active = active;
    };

    chrome.storage.sync.get("rules", function(storedRules){
        if (!_.isArray(storedRules.rules)) {
            rulesViewModel.rules = [];
        } else {
            rulesViewModel.rules = storedRules.rules;
        }

        ko.applyBindings(rulesViewModel, document.getElementById("rules"));
    });
}
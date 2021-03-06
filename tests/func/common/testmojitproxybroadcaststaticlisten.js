/*
 * This is a basic func test for a Common application.
 */
YUI({
    useConsoleOutput: true,
    useBrowserConsole: true,
    logInclude: { TestRunner: true }
}).use('node', 'node-event-simulate', 'test', 'console', function (Y) {
   
    var suite = new Y.Test.Suite("Common: broadcaststaticlisten");

    suite.add(new Y.Test.Case({

        "test broadcaststaticlisten": function() {
            var that = this;
            Y.one('#staticButton').simulate('click');
            that.wait(function(){
	            Y.log("*****testing broadcast and listen*******");
	            Y.Assert.areEqual('I\'m a red child.', Y.all('#childred').item(0).get('innerHTML').match(/I\'m a red child./gi));
	            Y.Assert.areEqual('I\'m a red child.', Y.all('#childred').item(1).get('innerHTML').match(/I\'m a red child./gi));
	            Y.Assert.areEqual('I\'m a blue child.', Y.all('#childblue').item(0).get('innerHTML').match(/I\'m a blue child./gi));
	            Y.Assert.areEqual('I\'m a blue child.', Y.all('#childblue').item(1).get('innerHTML').match(/I\'m a blue child./gi));
	            Y.Assert.areEqual('I\'m a green child.', Y.all('#childgreen').item(0).get('innerHTML').match(/I\'m a green child./gi));
	            Y.Assert.areEqual('I\'m a green child.', Y.all('#childgreen').item(1).get('innerHTML').match(/I\'m a green child./gi));
	            Y.one('#message').set('value', "helloone");
	            Y.one('#child').set('value', "jeans");
	            Y.one('#sendbutton').simulate('click');
	            that.wait(function(){
		            Y.log("*****after clicking*******");
		            Y.Assert.areEqual(Y.all('#childred').item(0).get('innerHTML').match(/I\'m a red child./gi), 'I\'m a red child.');
		            Y.Assert.areEqual(Y.all('#childred').item(1).get('innerHTML').match(/I\'m a red child./gi), 'I\'m a red child.');
		            Y.Assert.areEqual(Y.all('#childblue').item(0).get('innerHTML').match(/Recieved message "helloone" from yui_/gi), 'Recieved message "helloone" from yui_');
		            Y.Assert.areEqual('I\'m a blue child.', Y.all('#childblue').item(1).get('innerHTML').match(/I\'m a blue child./gi));
		            Y.Assert.areEqual('I\'m a green child.', Y.all('#childgreen').item(0).get('innerHTML').match(/I\'m a green child./gi));
		            Y.Assert.areEqual('I\'m a green child.', Y.all('#childgreen').item(1).get('innerHTML').match(/I\'m a green child./gi));
	            }, 4000);
            }, 5000);
        }

    }));

    Y.Test.Runner.add(suite);
});
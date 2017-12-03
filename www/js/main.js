function id(element){
    return document.getElementById(element);
}

function init () {
    id ("gotoPage2Butt").addEventListener("click", function (){
        gotoPage2();
    });
     id ("loadListButt").addEventListener("click", function (){
        loadList();
    });
        id ("gotoPage3Butt").addEventListener("click", function (){
        gotoPage3();
    });
}

function gotoPage2 (){
    $.mobile.navigate("#page2", {
        info: "info about the var hash"
    });
}

function gotoPage3 (){
    $.mobile.navigate("#page3", {
        info: "info about the var hash"
    });
}

function loadList (){
    var list= id("myList2");
    
    var data = {
        "notifications":["1/12/2017","10/12/2017","23/12/2017"]
    }
    
    var myHtml;
    
    for (i=0; i<data.notifications.length;i++){
        myHtml+="<li>" + data.notifications[i] + "/<li>"
    }
    
    list.innerHTML=myHtml;
}

cordova.plugins.notification.local.schedule({
    title: 'Design team meeting',
    text: '3:00 - 4:00 PM',
    trigger: { at: new Date("November 30, 2017 11:47 AM") }
});

/*

 db = window.sqlitePlugin.openDatabase({name: 'demo.db', location: 'default'});

    
    db.sqlBatch([
'CREATE TABLE IF NOT EXISTS notifications (date, event)',
[ 'INSERT INTO notifications VALUES (?,?)', ['12/12/2012', 'Dinner'] ],
[ 'INSERT INTO notifications VALUES (?,?)', ['114/12/2012', 'Supper'] ],
], function() {
console.log('Populated database OK');
}, function(error) {
console.log('SQL batch ERROR: ' + error.message);
});
    
    
    document.getElementById("submit").addEventListener("click", newnoti, false);
	db = window.sqlitePlugin.openDatabase({ name: 'schedule.db', location: 'default' }, function (db) {

	    db.transaction(function (tx) {
	    
	    tx.executeSql('CREATE TABLE appointments (id INTEGER PRIMARY KEY AUTOINCREMENT, description TEXT, date TEXT)');
		}, function (error) {
		    //alert('transaction error: ' + error.message);
		}, function () {
		    alert('transaction ok');
		});

	}, function (error) {
		 alert('Open database ERROR: ' + JSON.stringify(error));
	});
    
    }

function insertDb(dateIn, eventIn){
    db.sqlBatch([
        ['INSERT INTO notifications VALUES (?,?)', ['14/12/2017','market']]
    ], function(){
        console.log('Insert ok');
    }, function(error){
        console.log('insert ERROR: '+ error.message);
    });
}


function delteDb(){
    db.sqlBatch([
        'delete FROM notifications'
    ], function(){
        console.log('delete OK');
    }, function(error) {
        consolo.log('delete ERROR '+ error.message);
    });
               
}


*/

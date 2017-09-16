// -- VARIABLES -- //
    var subNavObjArray = {
        home: {
            
        },
        classes: {

        },
        album: {

        },
        myAcct: {

        },
        contact: {

        }
    };

// -- FIREBASE -- //
    var config = {
        apiKey: "AIzaSyBDk0aru8IkIQsTUQ1uQRYS7SutJrEXjVI",
        authDomain: "boot-proj-1.firebaseapp.com",
        databaseURL: "https://boot-proj-1.firebaseio.com",
        projectId: "boot-proj-1",
        storageBucket: "",
        messagingSenderId: "444510611307"
    };
    firebase.initializeApp(config);

    // -- ON PAGE LOAD - PULL DATA FROM FIREBASE -- //
        var database = firebase.database();
        database.ref().on("value", function(snapshot){
            // Do Something
        }, function(error){
            console.log("The read failed: " + error.code);
        });

function loadSubNav (){                                             // Dynamically generate sub-nav buttons
    var navName = $(this).attr('data-name');
    $("#sub-nav").empty();
    var tBody = $("<tbody>");
    for (var p = 0; p < subNavObjArray.length; p++) {
        var tRow = $("<tr>");
        var tData = $("<td>");
            // Put the text into the table row
        tRow.append(tData);
        tBody.append(tRow);
    }
    $('#sub-nav').append(tBody);
}

$("#videos-btn").click(function(){                                  // Switch the image gallery out for embedded YT vid
    
})

$(document).on("click", ".main-nav-btns", loadSubNav);             // When a master nav (top bar) is clicked, regen the subnav

//-- API CODE --//
    // Facebook
        window.fbAsyncInit = function() {
        FB.init({
            appId            : '124854171581749',
            autoLogAppEvents : true,
            xfbml            : true,
            version          : 'v2.10'
        });
            FB.AppEvents.logPageView();
        };

        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

    // Google Maps
        // KEY: AIzaSyDa5axavfiocQ69O1zpMUGvcs9QjsgQWI8
        // Link: https://developers.google.com/maps/documentation/javascript/

    // FileStack
        var fileStackClient = filestack.init('AcZk1k36RmqiIjOZMdj0jz');
        function showPicker() {
            fileStackClient.pick({
            }).then(function(result) {
                console.log(JSON.stringify(result.filesUploaded))
            });
        }
        // <input type="button" value="Upload" onclick="showPicker()" />
// -- VARIABLES -- //
    var subNavObjs = {
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
    var subNavTable = $("<table class='table'>");
    var tBody = $("<tbody>");
    var tRow = $("<tr>");


    $('#sub-nav').append(subNavTable);
}

$("#videos-btn").click(function(){                                  // Switch the image gallery out for embedded YT vid
    
})

$(document).on("click", ".main-nav-btns", loadSubNav);             // When a master nav (top bar) is clicked, regen the subnav
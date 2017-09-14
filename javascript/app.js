// -- VARIABLES -- //
    var subNavObjArray = {
        home: {
            subnav0: 'About Us',
            subnav1: 'Why Dance',
            subnav2: 'Customer Thoughts',
            subnav3: 'Community',
            subnav4: 'Terminology',
            subnav5: 'FAQ'
        },
        classes: {
            subnav0: 'Young Children',
            subnav1: 'Preteens & Teens',
            subnav2: 'Adults',
            subnav3: 'Charm',
            subnav4: 'Dress Code',
            subnav5: 'Performance',
            subnav6: 'Policies'
        },
        album: {
            subnav0: 'Photos',
            subnav2: 'Student Accomplishments',
            subnav3: 'Videos'
        },
        myAcct: {
            subnav0: 'Register',
            subnav1: 'Shoes',
            subnav2: 'Leotards & Tights',
            subnav3: 'Dance Bags',
            subnav4: 'Miscellaneous'
        }
    };

// -- FIREBASE -- //
    // Initialize Firebase
        var config = {
            apiKey: "AIzaSyBDk0aru8IkIQsTUQ1uQRYS7SutJrEXjVI",
            authDomain: "boot-proj-1.firebaseapp.com",
            databaseURL: "https://boot-proj-1.firebaseio.com",
            projectId: "boot-proj-1",
            storageBucket: "",
            messagingSenderId: "444510611307"
        };
        firebase.initializeApp(config);

    // Update Firebase Data
        var database = firebase.database();
        database.ref().on("value", function(snapshot){
            // Do Something
        }, function(error){
            console.log("The read failed: " + error.code);
        });

//-- MISC FUNCTIONS --//
    // 
    

//-- CLICK LISTENERS --//
    // Album Page - Switches out image gallery for YT Video embed
        $("#videos-btn").click(function(){
            
        });

    // Main Navbar Buttons
        $(document).on("click", ".main-nav-btns", loadSubNav);

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

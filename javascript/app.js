<<<<<<< HEAD
// -- VARIABLES -- //


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

=======
$("#welcome-img").toggleClass('hidden');
var reloadTest = 0;
>>>>>>> 22fd0adf738d8554702aa067ee36352839b7efb9
//-- MISC FUNCTIONS --//
    // Loads main content section with different HTML
        function loadContent(){
            var page = $(this).attr('data-name');
            $("#main-content").load("./pages/" + page);
<<<<<<< HEAD
=======
            if (reloadTest===0){
                $("#main-page").toggleClass('hidden');
                $("#welcome-img").toggleClass('hidden');
                reloadTest++;
            }
>>>>>>> 22fd0adf738d8554702aa067ee36352839b7efb9
        }
        
//-- CLICK LISTENERS --//
    // Sub Navbar Buttons
        $(document).on("click", ".btn-default", loadContent);        

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
<<<<<<< HEAD

=======
>>>>>>> 22fd0adf738d8554702aa067ee36352839b7efb9

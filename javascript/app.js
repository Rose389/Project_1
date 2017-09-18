// -- VARIABLES -- //
    var localName = '', localEmail = '', localAge = 0, localComment = '';

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
        var database = firebase.database();
        
        // Update Firebase Data on Page Load
            database.ref().on("value", function(snapshot){
                if (snapshot.val().newestUser !== ''){
                    localName = snapshot.val().newestUser.serverName;
                    $('#latest-name').text(localName);
                }
            }, function(error){
                console.log("The read failed: " + error.code);
            });

    // Capture Button Click
        $("#add-user").on("click", function(event) {
            // prevent page from refreshing when form tries to submit itself
            event.preventDefault();

            // Capture user inputs and store them into variables
            localName = $("#name-input").val().trim();
            localEmail = $("#email-input").val().trim();
            localAge = $("#age-input").val().trim();
            localComment = $("#comment-input").val().trim();

            if (localName !== '' &&  localEmail !== '' &&  localAge !== '' &&  localComment !== ''){
                    var newUser = {
                        serverName: localName,
                        serverEmail: localEmail,
                        serverAge: localAge,
                        serverComment: localComment
                    };
                    
                    // Uploads user data to the database
                    database.ref().set({
                        newestUser: newUser
                    });
    
                    // Clears all of the text-boxes
                    $("#name-input").val("");
                    $("#email-input").val("");
                    $("#age-input").val("");
                    $("#comment-input").val("");

                    $('#latest-name').text(localName);
            }
        });

//-- MISC FUNCTIONS --//
    // Loads main content section with different HTML
        function loadContent(){
            var page = $(this).attr('data-name');
            $("#main-content").load("./pages/" + page);
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

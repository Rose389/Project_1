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

         // Capture Button Click
        $("#add-user").on("click", function(event) {
          // prevent page from refreshing when form tries to submit itself
          event.preventDefault();

          // Capture user inputs and store them into variables
          var name = $("#name-input").val().trim();
          var email = $("#email-input").val().trim();
          var age = $("#age-input").val().trim();
          var comment = $("#comment-input").val().trim();

          var newUser = {
            name: name,
            email: email,
            age: age,
            comment: comment
      };

             // Uploads email data to the database
            database.ref().push(newUser);

                  // Logs everything to console
            console.log(newUser.name);
            console.log(newUser.email);
            console.log(newUser.age);
            console.log(newUser.comment);

                  // Clears all of the text-boxes
            $("#name-input").val("");
            $("#email-input").val("");
            $("#age-input").val("");
            $("#comment-input").val("");
          });

          database.ref().on("child_added"), function(snapshot){

            console.log(snapshot.val());

              // Store everything into a variable.
              var Name = snapshot.val().name;
              var email = snapshot.val().email;
              var age = snapshot.val().age;
              var comment = snapshot.val().comment;

              // Employee Info
              console.log(name);
              console.log(email);
              console.log(age);
              console.log(comment);
          };

    // Update Firebase Data
        var database = firebase.database();
        database.ref().on("value", function(snapshot){
            // Do Something
        }, function(error){
            console.log("The read failed: " + error.code);
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

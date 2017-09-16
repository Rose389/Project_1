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

//-- MISC FUNCTIONS --//
    // Loads main content section with different HTML
        function loadContent(){
            var page = $(this).attr('data-name');
            console.log(page);
            $("#main-content").load("./pages/" + page);
        }
//-- CLICK LISTENERS --//
    // Main Navbar Buttons
        $(document).on("click", ".btn-default", loadContent);

//-- IMAGE AND VIDEO GALLERIES --//
    // Photo Album
        $("#gallery").unitegallery({
            gallery_theme: "compact",
            gallery_skin:"alexis"
        });
        $(document).ready(function(){ 
            $("#gallery").unitegallery(); 
        });
        var galleryApi;
        $(document).ready(function(){
            galleryApi = $("#gallery").unitegallery();
        });
    // Video Album
        

//-- API CODE --//


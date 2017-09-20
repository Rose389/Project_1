$("#welcome-img").toggleClass('hidden');
var reloadTest = 0;
//-- MISC FUNCTIONS --//
    // Loads main content section with different HTML
        function loadContent(){
            var page = $(this).attr('data-name');
            $("#main-content").load("./pages/" + page);
            if (reloadTest===0){
                $("#main-page").toggleClass('hidden');
                $("#welcome-img").toggleClass('hidden');
                reloadTest++;
            }
        }
        
//-- CLICK LISTENERS --//
    // Sub Navbar Buttons
        $(document).on("click", ".sub-nav", loadContent);

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


var script = document.createElement('script');
script.src = "https://code.jquery.com/ui/1.11.4/jquery-ui.min.js"
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

//make buttons retract and expand divs above here
        //about me should be visible onload, rest should be hidden.
        $(document).ready(function() {
            // Handler for .ready() called.
            $("#aboutme").show();
            $("#resume").hide();
            $("#code").hide();
            $("#research").hide();
            $("#projects").hide();
            $("#contact").hide();
            document.getElementById("sectionHeader").innerHTML = "<h1>About Me</h1>";
            document.title = 'Welcome to My Homepage.';
            //document.getElementById("aboutMeButton").className="active";
        });
        function toggleAboutMe(){
            $(document).ready(function() {
                document.title = 'Welcome to My Homepage.';
            });
            $("#aboutme").show();
            $("#resume").hide();
            $("#code").hide();
            $("#research").hide();
            $("#projects").hide();
            $("#contact").hide();
            document.getElementById("sectionHeader").innerHTML = "<h1>About Me</h1>";
            //document.getElementById("aboutMeButton").className="active";
        }
        function toggleResume(){
            $(document).ready(function() {
                document.title = 'My Resume';
            });
            $("#aboutme").hide();
            $("#resume").show();
            $("#code").hide();
            $("#research").hide();
            $("#projects").hide();
            $("#contact").hide();
            document.getElementById("sectionHeader").innerHTML = "<h1>My Resume</h1>";
            //document.getElementById("resumeButton").className="active";
        }
        function toggleCode(){
            $(document).ready(function() {
                document.title = 'My Code';
            });
            $("#aboutme").hide();
            $("#resume").hide();
            $("#code").show();
            $("#research").hide();
            $("#projects").hide();
            $("#contact").hide();
            document.getElementById("sectionHeader").innerHTML = "<h1>My Code</h1>";
            //document.getElementById("codeButton").className="active";
        }
        function toggleProjects(){
            $(document).ready(function() {
                document.title = 'My Projects';
            });
            $("#aboutme").hide();
            $("#resume").hide();
            $("#code").hide();
            $("#research").hide();
            $("#projects").show();
            $("#contact").hide();
            document.getElementById("sectionHeader").innerHTML = "<h1>My Projects</h1>";
            //document.getElementById("projectsButton").className="active";
        }
        function toggleContact(){
            $(document).ready(function() {
                document.title = 'My Contact Info';
            });
            $("#aboutme").hide();
            $("#resume").hide();
            $("#code").hide();
            $("#research").hide();
            $("#projects").hide();
            $("#contact").show();
            document.getElementById("sectionHeader").innerHTML = "<h1>My Contact Info</h1>";
            //document.getElementById("contactButton").className="active";
        }
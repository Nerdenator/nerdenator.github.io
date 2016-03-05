
var script = document.createElement('script');
script.src = "https://code.jquery.com/ui/1.11.4/jquery-ui.min.js";
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

//make buttons retract and expand divs above here
//about me should be visible onload, rest should be hidden.
$(document).ready(function() {
    // Handler for .ready() called.
    $("#aboutme").show();
    $("#resume").hide();
    $("#code").hide();
    $("#projects").hide();
    $("#contact").hide();
    document.getElementById("sectionHeader").innerHTML = "<h1>About Me</h1>";
    document.title = 'Welcome to My Homepage.';
    $("#aboutMeButton").addClass("btn-primary");
    $("#resumeButton").removeClass("btn-primary");
    $("#codeButton").removeClass("btn-primary");
    $("#projectsButton").removeClass("btn-primary");
    $("#contactButton").removeClass("btn-primary");
});
function toggleAboutMe(){
    $(document).ready(function() {
        document.title = 'Welcome to My Homepage.';
    });
    $("#aboutme").show();
    $("#resume").hide();
    $("#code").hide();
    $("#projects").hide();
    $("#contact").hide();
    document.getElementById("sectionHeader").innerHTML = "<h1>About Me</h1>";
    // set btn-primary class for active button
    $("#aboutMeButton").addClass("btn-primary");
    // remove btn-primary for buttons not of the current div
    $("#resumeButton").removeClass("btn-primary");
    $("#contactButton").removeClass("btn-primary");
    $("#codeButton").removeClass("btn-primary");
    $("#projectsButton").removeClass("btn-primary");
    // add btn-secondary classes
    $("#resumeButton").addClass("btn-secondary");    
    $("#codeButton").addClass("btn-secondary");    
    $("#projectsButton").addClass("btn-secondary");    
    $("#contactButton").addClass("btn-secondary");
}
function toggleResume(){
    $(document).ready(function() {
        document.title = 'My Resume';
    });
    $("#aboutme").hide();
    $("#resume").show();
    $("#code").hide();
    $("#projects").hide();
    $("#contact").hide();
    document.getElementById("sectionHeader").innerHTML = "<h1>My Resume</h1>";
    $("#aboutMeButton").removeClass("btn-primary");
    $("#resumeButton").addClass("btn-primary");
    $("#codeButton").removeClass("btn-primary");
    $("#projectsButton").removeClass("btn-primary");
    $("#contactButton").removeClass("btn-primary");
    
    // add btn-secondary classes
    $("#aboutMeButton").addClass("btn-secondary");    
    $("#codeButton").addClass("btn-secondary");    
    $("#projectsButton").addClass("btn-secondary");    
    $("#contactButton").addClass("btn-secondary");
    
}
function toggleCode(){
    $(document).ready(function() {
        document.title = 'My Code';
    });
    $("#aboutme").hide();
    $("#resume").hide();
    $("#code").show();
    $("#projects").hide();
    $("#contact").hide();
    document.getElementById("sectionHeader").innerHTML = "<h1>My Code</h1>";
    $("#aboutMeButton").removeClass("btn-primary");
    $("#resumeButton").removeClass("btn-primary");
    $("#codeButton").addClass("btn-primary");
    $("#projectsButton").removeClass("btn-primary");
    $("#contactButton").removeClass("btn-primary");
    
    // add btn-secondary classes
    $("#aboutMeButton").addClass("btn-secondary");    
    $("#resumeButton").addClass("btn-secondary");
    $("#projectsButton").addClass("btn-secondary");    
    $("#contactButton").addClass("btn-secondary");
    
}
function toggleProjects(){
    $(document).ready(function() {
        document.title = 'My Projects';
    });
    $("#aboutme").hide();
    $("#resume").hide();
    $("#code").hide();
    $("#projects").show();
    $("#contact").hide();
    document.getElementById("sectionHeader").innerHTML = "<h1>My Projects</h1>";
    $("#aboutMeButton").removeClass("btn-primary");
    $("#resumeButton").removeClass("btn-primary");
    $("#codeButton").removeClass("btn-primary");
    $("#projectsButton").addClass("btn-primary");
    $("#contactButton").removeClass("btn-primary");
    
    // add btn-secondary classes
    $("#aboutMeButton").addClass("btn-secondary");
    $("#resumeButton").addClass("btn-secondary");
    $("#codeButton").addClass("btn-secondary");
    $("#contactButton").addClass("btn-secondary");
}
function toggleContact(){
    $(document).ready(function() {
        document.title = 'My Contact Info';
    });
    $("#aboutme").hide();
    $("#resume").hide();
    $("#code").hide();
    $("#projects").hide();
    $("#contact").show();
    document.getElementById("sectionHeader").innerHTML = "<h1>My Contact Info</h1>";
    $("#aboutMeButton").removeClass("btn-primary");
    $("#resumeButton").removeClass("btn-primary");
    $("#codeButton").removeClass("btn-primary");
    $("#projectsButton").removeClass("btn-primary");
    $("#contactButton").addClass("btn-primary");
    
    // add btn-secondary classes
    $("#aboutMeButton").addClass("btn-secondary");
    $("#resumeButton").addClass("btn-secondary");
    $("#codeButton").addClass("btn-secondary");
    $("#projectsButton").addClass("btn-secondary");
}


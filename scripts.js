
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
    hideSections();
    showSection("#aboutme");
    document.getElementById("sectionHeader").innerHTML = "<h1>About Me</h1>";
    secondaryButton();
    primaryButton("#aboutMeButton");
}
function toggleResume(){
    $(document).ready(function() {
        document.title = 'My Resume';
    });
    hideSections();
    showSection("#resume");
    document.getElementById("sectionHeader").innerHTML = "<h1>My Resume</h1>";
    secondaryButton();
    primaryButton("#resumeButton");
}
function toggleCode(){
    $(document).ready(function(){
        document.title = 'My Code';
    });
    hideSections();
    showSection("#code");
    document.getElementById("sectionHeader").innerHTML = "<h1>My Code</h1>";
    secondaryButton();
    primaryButton("#codeButton");
}

function toggleProjects(){
    $(document).ready(function() {
        document.title = 'My Projects';
    });
    hideSections();
    showSection("#projects");
    document.getElementById("sectionHeader").innerHTML = "<h1>My Projects</h1>";
    secondaryButton();
    primaryButton("#codeButton");
}

function toggleContact(){
    $(document).ready(function() {
        document.title = 'My Contact Info';
    });
    hideSections();
    showSection("#contact");
    document.getElementById("sectionHeader").innerHTML = "<h1>My Contact Info</h1>";
    secondaryButton();
    primaryButton("#contactButton");
}

function hideSections(){
    $(".main-section").hide();
}

function showSection(elementId){
    $(elementId).show();
}

function secondaryButton(){
    $(".nav-btn").removeClass("btn-primary");
    $(".nav-btn").addClass("btn-secondary");
}

function primaryButton(elementId){
    $(elementId).removeClass("btn-secondary");
    $(elementId).addClass("btn-primary");
}


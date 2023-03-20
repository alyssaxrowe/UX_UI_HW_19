console.log("my index.js file is loaded correctly");

$("#work").click(function() {
    $('html, body').animate({
        scrollTop: $("#myWork").offset().top
    },2000);
});


$("#skills").click(function() {
    $('html, body').animate({
        scrollTop: $("#myUxSkills").offset().top
    },2000);
});
// JavaScript source code
console.log("Your index.js file is loaded correctly!");

$("a").hover(function () {
    $(this).toggleClass("active").next().stop(true, true);
});
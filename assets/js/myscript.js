$(document).ready(function() { // wrapper to ensure js script does not run before HTML page load complete
    // $("h2").css("text-decoration", "underline");    // inline styling to underline all the h2 elements
    $("h2").addClass("underline");                     // ... replaced with CSS styling class "underline".

    $("tr:odd").addClass("odd");
    $("tr:even").addClass("even");
});
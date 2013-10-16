$(function() {
    $("#get-battery").click(function() {
        $("#battery-pct").text(Math.round(navigator.battery.level * 100) + "%");
    });
});

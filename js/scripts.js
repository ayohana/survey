$(document).ready(function() {
  $("form#userInfo").submit(function () {
    event.preventDefault();
    var beverage = $("#morningBeverage").val();
    var name = $("#name").val();
    var dob = $("#dob").val();
    var flavor = $("input:radio[name=flavor]:checked").val();
    var color = $("#color").val();
    alert(color); // to check user's input
  });
});
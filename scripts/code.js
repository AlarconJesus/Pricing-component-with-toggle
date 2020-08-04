var btSwitch = document.getElementById("switch");
var month = true;

btSwitch.addEventListener('click', function() {
    btSwitch.classList.toggle("active");
    if (month) {
        document.getElementById('basic').innerHTML = "$<span>199.99</span>";
        document.getElementById('professional').innerHTML = "$<span>249.99</span>";
        document.getElementById('master').innerHTML = "$<span>399.99</span>";
        month = false;
    } else {
        document.getElementById('basic').innerHTML = "$<span>19.99</span>";
        document.getElementById('professional').innerHTML = "$<span>24.99</span>";
        document.getElementById('master').innerHTML = "$<span>39.99</span>";
        month = true;
    }
});
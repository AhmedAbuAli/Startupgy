function enterSite() {
    $("#landing").css("transform", "translate(-200vw)");
    $("#dimmed-bg").css("visibility", "visible");
    $("#dimmed-bg").css("transform", "translate(0)");
    $("#above-fold").css("opacity", "1");
    $("#full-site").css("visibility", "visible");
    $("#full-site").css("overflow", "visible");
    $("#full-site").css("max-height", "auto");
    $("#register-side-bar").css("transform", "translate(0)");
}
function openForm() {

    $("#register-side-bar").css("transform", "translate(-400px)");
    $("#register-side-bar").css("transition-delay", "0s");
    $("#register-side-bar").css("z-index", "100");

    $("#call-num").css("opacity", "0");
    $("#reg").css("opacity", "0");
}

function closeForm() {

   $("#register-side-bar").css("transform", "translate(0)");
    $("#register-side-bar").css("z-index", "0");
    $("#call-num").css("opacity", "1");
    $("#reg").css("opacity", "1");
}


var x = setInterval(function(){
      var num = document.getElementById('hun');
      var start  = parseInt(num.innerHTML);
      var count  = start+1
      num.innerHTML =  count
},1700);
//1000));

var cir1l = document.getElementById("circle_1").style.left;
var cir1t = document.getElementById("circle_1").style.top;
var cir2l = document.getElementById("circle_2").style.left;
var cir2t = document.getElementById("circle_2").style.top;
var cir3l = document.getElementById("circle_3").style.left;
var cir3t = document.getElementById("circle_3").style.top;

var r_cir1l = document.getElementById("resources_circle_1").style.left;
var r_cir1t = document.getElementById("resources_circle_1").style.top;
var r_cir2l = document.getElementById("resources_circle_2").style.left;
var r_cir2t = document.getElementById("resources_circle_2").style.top;
var r_cir3l = document.getElementById("resources_circle_3").style.left;
var r_cir3t = document.getElementById("resources_circle_3").style.top;

var c_cir1l = document.getElementById("contacts_circle_1").style.left;
var c_cir1t = document.getElementById("contacts_circle_1").style.top;
var c_cir2l = document.getElementById("contacts_circle_2").style.left;
var c_cir2t = document.getElementById("contacts_circle_2").style.top;
var c_cir3l = document.getElementById("contacts_circle_3").style.left;
var c_cir3t = document.getElementById("contacts_circle_3").style.top;

$(document).on("click mousemove","body",function(e){ 
    var x = e.clientX;
    var y = e.clientY;
    var tenx = cir1l+(x/50);
    var teny = cir1t+(y/50);
    document.getElementById("circle_1").style.left = tenx+"px";
    document.getElementById("circle_1").style.top = teny+"px";
    var tenx = cir2l-(x/40);
    var teny = cir2t-(y/40);
    document.getElementById("circle_2").style.left = tenx+"px";
    document.getElementById("circle_2").style.top = teny+"px";
    var tenx = cir3l+(x/90);
    var teny = cir3t+(y/90);
    document.getElementById("circle_3").style.left = tenx+"px";
    document.getElementById("circle_3").style.top = teny+"px";
    var tenx = (x/200);
    var teny = (y/100);
    tenx = tenx+teny;
    document.getElementById("d_logo").style.transform = "rotate("+tenx+"deg)";

    
    var tenx = r_cir1l+(x/50);
    var teny = r_cir1t+(y/50);
    document.getElementById("resources_circle_1").style.left = tenx+"px";
    document.getElementById("resources_circle_1").style.top = teny+"px";
    var tenx = r_cir2l-(x/40);
    var teny = r_cir2t-(y/40);
    document.getElementById("resources_circle_2").style.left = tenx+"px";
    document.getElementById("resources_circle_2").style.top = teny+"px";
    var tenx = r_cir3l+(x/90);
    var teny = r_cir3t+(y/90);
    document.getElementById("resources_circle_3").style.left = tenx+"px";
    document.getElementById("resources_circle_3").style.top = teny+"px";
    var tenx = (x/200);
    var teny = (y/100);
    tenx = (tenx+teny)/1;
    document.getElementById("resources_d_logo").style.transform = "translateY("+tenx+"px)";

    
    var tenx = r_cir1l+(x/50);
    var teny = r_cir1t+(y/50);
    document.getElementById("contacts_circle_1").style.left = tenx+"px";
    document.getElementById("contacts_circle_1").style.top = teny+"px";
    var tenx = r_cir2l-(x/40);
    var teny = r_cir2t-(y/40);
    document.getElementById("contacts_circle_2").style.left = tenx+"px";
    document.getElementById("contacts_circle_2").style.top = teny+"px";
    var tenx = r_cir3l+(x/90);
    var teny = r_cir3t+(y/90);
    document.getElementById("contacts_circle_3").style.left = tenx+"px";
    document.getElementById("contacts_circle_3").style.top = teny+"px";
    var tenx = (x/200);
    var teny = (y/100);
    tenx = (tenx+teny)/1;
    document.getElementById("contacts_d_logo").style.transform = "translateX("+tenx+"px)";
});


function scroll(el){
    idname = el.id;
    if(idname=="home"){
        
    }
}
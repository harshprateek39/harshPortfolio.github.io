// background bubble animation
function SkillListfnT() {

    if (window.innerWidth < 841) {
        if ($(".skillDiv").css("opacity") == "0") {
            $(".skillList").css("background-color", "rgba(7, 247, 231, 0.379)");
            $(".skillDiv").css("height", "420px");
            $(".skillDiv").css("top", "270px");
            setTimeout(function () { $(".skillDiv").css("opacity", "1"); }, 100);
            setTimeout(function () { $(".skillDivP").css("opacity", "1"); }, 300);
            $(".fa-solid.fa-eject").css("transform", "rotate(180deg)");
        }

        if ($(".skillDiv").css("height") == "420px") {
            $(".fa-solid.fa-eject").css("transform", "rotate(0deg)");
            $(".skillDiv").css("height", "0px");
            $(".skillDiv").css("top", "700px");
            $(".skillList").css("background-color", "transparent");
            setTimeout(function () { $(".skillDiv").css("opacity", "0"); }, 200);
            setTimeout(function () { $(".skillDivP").css("opacity", "0"); }, 200);
        }
    }

}

function SkillListfn() {
    if (window.innerWidth > 841) {
        $(".skillList").css("background-color", "rgba(7, 247, 231, 0.379)");
        $(".skillDiv").css("height", "420px");
        $(".skillDiv").css("top", "144px");
        setTimeout(function () { $(".skillDiv").css("opacity", "1"); }, 100);
        setTimeout(function () { $(".skillDivP").css("opacity", "1"); }, 300);
        $(".fa-solid.fa-eject").css("transform", "rotate(180deg)");
    }
}

function SkillListfn1() {
    if (window.innerWidth > 841) {
        $(".fa-solid.fa-eject").css("transform", "rotate(0deg)");
        $(".skillDiv").css("height", "0px");
        $(".skillDiv").css("top", "570px");
        $(".skillList").css("background-color", "transparent");
        setTimeout(function () { $(".skillDiv").css("opacity", "0"); }, 200);
        setTimeout(function () { $(".skillDivP").css("opacity", "0"); }, 200);
    }
}





if (window.innerWidth > 991) { document.querySelector(".navigation").classList.toggle("navdis"); }
document.querySelector("body").addEventListener("mousemove", function (e) {

    var a = (40 + e.clientX * 0.0001) + "vw";
    var b = (80 + e.clientX * 0.0005) + "vw";
    var c = (10 + e.clientX * 0.0004) + "vw";
    var d = (50 - e.clientX * 0.00019) + "vw";
    var m = (7 + e.clientX * 0.0007) + "vw";
    var g = (60 - e.clientX * 0.0005) + "vw";
    var aa = (60 - e.clientY * 0.001) + "vh";
    var bb = (40 + e.clientY * 0.005) + "vh";
    var cc = (5 + e.clientY * 0.003) + "vh";
    var dd = (10 + e.clientY * 0.009) + "vh";
    var mm = (5 - e.clientY * 0.007) + "vh";
    var gg = (80 - e.clientY * 0.002) + "vh";
    $(".img1").css("left", a);
    $(".img2").css("left", b);
    $(".img3").css("left", c);
    $(".img4").css("left", d);
    $(".img5").css("left", m);
    $(".img6").css("left", g);
    $(".img1").css("top", aa);
    $(".img2").css("top", bb);
    $(".img3").css("top", cc);
    $(".img4").css("top", dd);
    $(".img5").css("top", mm);
    $(".img6").css("top", gg);
});
for (var i = 0; i < 4; i++) {
    document.querySelectorAll(".buttonNavs")[i].addEventListener("click",
        function () {

            if ($(this).hasClass("about")) { window.scrollTo(0, 518); }
            if ($(this).hasClass("projects")) { window.scrollTo(0, 993); }
            if ($(this).hasClass("experience")) { window.scrollTo(0, 1486); }
            if ($(this).hasClass("contact")) { window.scrollTo(0, 1930); }

            document.querySelector(".navbtn").classList.toggle("navBtnClickAnimation");
            if ($(".navigation").css("opacity") == 0) {

                document.querySelector(".navigation").classList.toggle("navdis");
                setTimeout(function () { document.querySelector(".navigation").classList.toggle("navdis1"); }, 10);
            }
            if ($(".navigation").css("opacity") == 1) {
                document.querySelector(".navigation").classList.toggle("navdis1");
                setTimeout(function () { document.querySelector(".navigation").classList.toggle("navdis") }, 500);
            }

        })
}


document.querySelector(".navbtn").addEventListener("click",
    function () {
        document.querySelector(".navbtn").classList.toggle("navBtnClickAnimation");
        if ($(".navigation").css("opacity") == 0) {

            document.querySelector(".navigation").classList.toggle("navdis");
            setTimeout(function () { document.querySelector(".navigation").classList.toggle("navdis1"); }, 10);
        }
        if ($(".navigation").css("opacity") == 1) {
            document.querySelector(".navigation").classList.toggle("navdis1");
            setTimeout(function () { document.querySelector(".navigation").classList.toggle("navdis") }, 500);
        }

    })
var flag = 0;
window.addEventListener("scroll",
    function () {

        var scrl = this.scrollY
        scrl = Math.floor(scrl)
        console.log(scrl)
        // intro
        if (scrl >= 0 && scrl <= 225) {
            document.querySelectorAll(".buttonNavs")[0].innerHTML = "ABOUT";
            document.querySelectorAll(".buttonNavs")[1].innerHTML = "PROJECTS";
            document.querySelectorAll(".buttonNavs")[2].innerHTML = "CAREER";
            document.querySelectorAll(".buttonNavs")[3].innerHTML = "CONTACT";
            for (var j = 0; j < 4; j++) {
                document.querySelectorAll(".buttonNavs")[j].classList.remove("clicked");
            }
            $("#intro").css("opacity", 1 - (0.005 * scrl));
            $("#intro").css("display", "block");
            $("#aboutPage").css("display", "none");
            $("#experiencePage").css("display", "none");
            $("#projectPage").css("display", "none");
            $("#contactPage").css("display", "none");
        }
        // about
        else if (scrl > 225 && scrl <= 700) {

            document.querySelectorAll(".buttonNavs")[1].innerHTML = "PROJECTS";
            document.querySelectorAll(".buttonNavs")[2].innerHTML = "CAREER";
            document.querySelectorAll(".buttonNavs")[3].innerHTML = "CONTACT";
            for (var j = 0; j < 4; j++) {
                document.querySelectorAll(".buttonNavs")[j].classList.remove("clicked");
            }
            $(".about").addClass("clicked");
            if (document.querySelector(".about").innerHTML == "ABOUT") {
                if (window.innerWidth > 841) {
                    var nextimg = '<i class="fa-solid fa-angles-right slidein"></i>';
                    var orgHTML = document.querySelector(".about").innerHTML;
                    document.querySelector(".about").innerHTML = orgHTML + nextimg;
                }

            }
            $("#intro").css("display", "none");
            $("#aboutPage").css("display", "block");
            if (scrl < 518) {
                $("#aboutPage").css("opacity", 0 + (0.005 * (scrl - 222)));
            }
            $("#projectPage").css("display", "none");
            $("#experiencePage").css("display", "none");
            $("#contactPage").css("display", "none");
            if (scrl > 518) { $("#aboutPage").css("opacity", 1 - (0.005 * (scrl - 518))); }

        }



        // projeccts
        else if (scrl > 700 && scrl <= 1257) {


            document.querySelectorAll(".buttonNavs")[0].innerHTML = "ABOUT";
            document.querySelectorAll(".buttonNavs")[2].innerHTML = "CAREER";
            document.querySelectorAll(".buttonNavs")[3].innerHTML = "CONTACT";
            for (var j = 0; j < 4; j++) {
                document.querySelectorAll(".buttonNavs")[j].classList.remove("clicked");
            }
            $(".projects").addClass("clicked");
            if (document.querySelector(".projects").innerHTML == "PROJECTS") {
                if (window.innerWidth > 841) {
                    var nextimg = '<i class="fa-solid fa-angles-right slidein"></i>';
                    var orgHTML = document.querySelector(".projects").innerHTML;
                    document.querySelector(".projects").innerHTML = orgHTML + nextimg;
                }

            }



            $("#intro").css("display", "none");
            $("#projectPage").css("display", "block");
            if (scrl < 993) {
                $("#projectPage").css("opacity", 0 + (0.005 * (scrl - 698)));
            }
            $("#aboutPage").css("display", "none");
            $("#experiencePage").css("display", "none");
            $("#contactPage").css("display", "none");
            if (scrl > 1037) { $("#projectPage").css("opacity", 1 - (0.005 * (scrl - 1037))); }

        }

        // experience

        else if (scrl > 1259 && scrl <= 1705) {

            document.querySelectorAll(".buttonNavs")[0].innerHTML = "ABOUT";
            document.querySelectorAll(".buttonNavs")[1].innerHTML = "PROJECTS";
            document.querySelectorAll(".buttonNavs")[3].innerHTML = "CONTACT";
            for (var j = 0; j < 4; j++) {
                document.querySelectorAll(".buttonNavs")[j].classList.remove("clicked");
            }
            $(".experience").addClass("clicked");
            if (document.querySelector(".experience").innerHTML == "CAREER") {
                if (window.innerWidth > 841) {
                    var nextimg = '<i class="fa-solid fa-angles-right slidein"></i>';
                    var orgHTML = document.querySelector(".experience").innerHTML;
                    document.querySelector(".experience").innerHTML = orgHTML + nextimg;
                }

            }


            $("#intro").css("display", "none");
            $("#experiencePage").css("display", "block");
            if (scrl < 1560) {
                $("#experiencePage").css("opacity", 0 + (0.005 * (scrl - 1250)));
            }
            $("#aboutPage").css("display", "none");
            $("#projectPage").css("display", "none");
            $("#contactPage").css("display", "none");
            if (scrl > 1486) { $("#experiencePage").css("opacity", 1 - (0.005 * (scrl - 1486))); }

        }
        // contact

        else if (scrl > 1707 && scrl <= 2500) {
            $("#contactPage").css("display", "block");
            document.querySelectorAll(".buttonNavs")[0].innerHTML = "ABOUT";
            document.querySelectorAll(".buttonNavs")[1].innerHTML = "PROJECTS";
            document.querySelectorAll(".buttonNavs")[2].innerHTML = "CAREER";
            for (var j = 0; j < 4; j++) {
                document.querySelectorAll(".buttonNavs")[j].classList.remove("clicked");
            }
            $(".contact").addClass("clicked");
            if (document.querySelector(".contact").innerHTML == "CONTACT") {
                if (window.innerWidth > 841) {
                    var nextimg = '<i class="fa-solid fa-angles-right slidein"></i>';
                    var orgHTML = document.querySelector(".contact").innerHTML;
                    document.querySelector(".contact").innerHTML = orgHTML + nextimg;
                }

            }


            $("#intro").css("display", "none");
            $("#experiencePage").css("display", "none");
            if (scrl < 2500) {
                $("#contactPage").css("opacity", 0 + (0.008 * (scrl - 1705)));
            }
            $("#aboutPage").css("display", "none");
            $("#projectPage").css("display", "none");



        }
    })

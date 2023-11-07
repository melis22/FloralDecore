function showmultiplytable() {
    var table = "<table border='1'>"

    var op1 = document.getElementById("range1").value
    var op2 = document.getElementById("range2").value

    for (var i = 1; i <= op1; i = i + 1) {
        table += "<tr>"

        for (var j = 1; j <= op2; j = j + 1) {
            table += "<td>" + (i * j) + "</td>"
        }

        table += "</tr>"

    }

    table += "</table>"

    document.getElementById("multiplydemo").innerHTML = table
}



// <ul>
// <li><a href='index.html'>Startsidan</a></li>
// <li><a href='annansida.html'>Annan sida</a></li>
// </ul>

function myButtonFunc1() {
    var laggtillknapp1 = document.getElementById("laggtillknapp1");
    var tabortknapp2 = document.getElementById("tabortknapp1");

    if (tabortknapp2.style.display === "none") {
        laggtillknapp1.style.display = "none";
        tabortknapp2.style.display = "block";
    } else {
        laggtillknapp1.style.display = "block";
        tabortknapp2.style.display = "none";
    }
}

function myButtonFunc2() {
    var laggtillknapp2 = document.getElementById("laggtillknapp2");
    var tabortknapp2 = document.getElementById("tabortknapp2");

    if (tabortknapp2.style.display === "none") {
        laggtillknapp2.style.display = "none";
        tabortknapp2.style.display = "block";
    } else {
        laggtillknapp2.style.display = "block";
        tabortknapp2.style.display = "none";
    }
}

function myButtonFunc3() {
    var laggtillknapp3 = document.getElementById("laggtillknapp3");
    var tabortknapp3 = document.getElementById("tabortknapp3");

    if (tabortknapp3.style.display === "none") {
        laggtillknapp3.style.display = "none";
        tabortknapp3.style.display = "block";
    } else {
        laggtillknapp3.style.display = "block";
        tabortknapp3.style.display = "none";
    }
}

function myButtonFunc4() {
    var laggtillknapp4 = document.getElementById("laggtillknapp4");
    var tabortknapp4 = document.getElementById("tabortknapp4");

    if (tabortknapp4.style.display === "none") {
        laggtillknapp4.style.display = "none";
        tabortknapp4.style.display = "block";
    } else {
        laggtillknapp4.style.display = "block";
        tabortknapp4.style.display = "none";
    }
}

function myButtonFunc5() {
    var laggtillknapp5 = document.getElementById("laggtillknapp5");
    var tabortknapp5 = document.getElementById("tabortknapp5");

    if (tabortknapp5.style.display === "none") {
        laggtillknapp5.style.display = "none";
        tabortknapp5.style.display = "block";
    } else {
        laggtillknapp5.style.display = "block";
        tabortknapp5.style.display = "none";
    }
}

function myButtonFunc6() {
    var laggtillknapp6 = document.getElementById("laggtillknapp6");
    var tabortknapp6 = document.getElementById("tabortknapp6");

    if (tabortknapp6.style.display === "none") {
        laggtillknapp6.style.display = "none";
        tabortknapp6.style.display = "block";
    } else {
        laggtillknapp6.style.display = "block";
        tabortknapp6.style.display = "none";
    }
}

function buildMenu() {
    var links = [
        ["Startsidan", "index.html"],
        ["Erbjudanden", "https://melisakcay00.wordpress.com/"],
        ["Vår Butik", "varbutik.html"],
        ["Våra tjänster", "varatjanster.html"],
        ["Om oss ", "omoss.html"],
        ["Kontakta oss", "kontaktaoss.html"]

    ]

    var menyHtml = ""
    for (var i = 0; i < links.length; i = i + 1) {
        menyHtml += "<li><a href='" + links[i][1] + "'>" + links[i][0] + "</a></li>"
    }
    document.getElementById("meny").innerHTML = menyHtml

}
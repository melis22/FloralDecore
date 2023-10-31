function showmultiplytable()
{
    var table = "<table border='1'>"

    var op1 = document.getElementById("range1").value
    var op2 = document.getElementById("range2").value

    for(var i = 1; i <= op1; i = i + 1)
    {
        table += "<tr>"

        for(var j = 1; j <= op2; j = j + 1)
        {
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

function buildMenu()
{
    var links = [
        ["Startsidan", "index.html"],
        ["Vår Butik", "varbutik.html"],
        ["Våra tjänster", "varatjanster.html"],
        ["Om oss " , "omoss.html"], 
        ["Kontakta oss", "kontaktaoss.html"]
        
    ]

    var menyHtml = ""
    for(var i = 0; i < links.length; i = i + 1)
    {
        menyHtml += "<li><a href='" + links[i][1] + "'>" + links[i][0] + "</a></li>"
    }
    document.getElementById("meny").innerHTML = menyHtml

}
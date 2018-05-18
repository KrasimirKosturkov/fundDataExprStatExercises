function multiplicationTable(num){
    let html = "<table border ='1'>\n"
    console.log(html)
    html += " <tr><th>"+"x"+"</th>"
    for (let i = 1; i <= num; i++) {
        html += "<th>"+i+"</th>"
    }
    html += "</tr>\n"
    console.log(html)
    for (let i = 1; i <=num; i++) {
        html += " <tr>"
        html += "<th>"+i+"</th>"
        for (let j = 1; j <= num; j++) {
         html+= "<td>"+i * j+"</td>"
        }
        html += "</tr>\n"

    }
    html += "</table>"
    console.log(html)
}
multiplicationTable(5)
window.onload = function () {

    var i_n = localStorage.getItem("i_n");
    var i_d = localStorage.getItem("i_d");
    var p_n = localStorage.getItem("p_n");
    var c_name = localStorage.getItem("c_name");
    var repair = localStorage.getItem("repair");
    var ninty_seven_percent = localStorage.getItem("ninty_seven_percent");
    var three_percent = localStorage.getItem("three_percent");
    var total_cost = localStorage.getItem("total_cost");

    document.getElementById("i_n").innerHTML = i_n;
    document.getElementById("i_d").innerHTML = i_d;
    document.getElementById("p_n").innerHTML = p_n;
    document.getElementById("c_name").innerHTML = c_name;
    var temp = document.getElementById("ppagetable");
    temp.rows[1].cells[0].innerHTML = repair
    temp.rows[1].cells[3].innerHTML = ninty_seven_percent;
    temp.rows[1].cells[4].innerHTML = three_percent;
    temp.rows[2].cells[2].innerHTML = ninty_seven_percent;
    temp.rows[2].cells[3].innerHTML = three_percent;
    temp.rows[3].cells[1].innerHTML = total_cost;

    window.print()
}
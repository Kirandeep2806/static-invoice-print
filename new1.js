// alert("hi");
function p(){
    var details_list = document.getElementById("table_details");
    for(let i=0 ; i < details_list.rows.length ; i++)
    {
        if(i == 0)
            continue;
        details_list.rows[i].cells[9].onclick = function(){
             details_provider(details_list.rows[i]);
        }
    }
    function details_provider(t){
        needed_details = [t.cells[4].innerHTML,t.cells[6].innerHTML,t.cells[1].innerHTML,t.cells[2].innerHTML,t.cells[5].innerHTML,t.cells[7].innerHTML];
        temp();
    }

    function temp(){
        localStorage["i_n"] = "Invoice Number : " + needed_details[0];
    localStorage["i_d"] = "Invoice Date : " + needed_details[1];
    localStorage["p_n"] = "Phone Number : " + needed_details[2].slice(0,2) + "*****" + needed_details[2].slice(7,10);
    localStorage["c_name"] = needed_details[3];
    localStorage["repair"] = needed_details[4];
    localStorage["ninty_seven_percent"] = "&#8377;" + ((parseInt(needed_details[5].slice(0,needed_details[5].length-2))/100)*97).toFixed(2) + "/-";
    localStorage["three_percent"] = "&#8377;" + ((parseInt(needed_details[5].slice(0,needed_details[5].length-2))/100)*3).toFixed(2) + "/-";
    localStorage["total_cost"] = "&#8377;" + needed_details[5];

    window.open("printpage.html", "_blank");
    }
}


window.addEventListener("resize", applychanges);

function applychanges(){
    table_height = document.getElementById("table_details").offsetHeight;
    document.getElementsByClassName("page2_card_prepare")[0].style.height = table_height + 82 + "px";
}
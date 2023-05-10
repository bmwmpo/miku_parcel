var grpNo = 0;
var string1 = "(    wa ! )";
const func1 = (string)=>{
    var temp = document.getElementById("space");
    if (grpNo === 4) {
        if (string1.includes("(")) {
            var size = string1.length;
            string1 = string1.replace("(", "");
            string1 = string1.replace(")", "");
            temp.innerHTML = temp.innerHTML + "<p class='g" + grpNo + "'>" + string1 + "</p>";
        }
    } else temp.innerHTML = temp.innerHTML + "<p class='g" + grpNo + "'>" + string + "</p>";
    grpNo += 1;
    if (grpNo === 5) {
        var temp_del = document.getElementsByClassName("g1")[0];
        temp_del.style.opacity = 0.2;
    }
};


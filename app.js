function trlang(){
    var selectBox = document.getElementById("languages");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    if (selectedValue == "turkish")
    {
        location.href ="TR.html";
    }
    else if (selectedValue == "english"){
        location.href = "index.html";
    }
}

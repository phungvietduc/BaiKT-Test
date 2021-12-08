function myFunction() {
    var a = document.getElementById("mySelect1");
    var b = document.getElementById("mySelect2");
    var c = document.getElementById("mySelect3");

    if (a.value == '1' || b.value == '2' || c.value == '3') {
        document.getElementById("demo").innerHTML = "You're an alien";
        document.getElementById("vanban").innerHTML = "abc";
        document.getElementById("imgClickAndChange").src = "./img/alien.jpg"
    } 
    else if (a.value == '2' || b.value == '3' || c.value == '1')
    {
        document.getElementById("demo").innerHTML = "You're an Bizarre";
        document.getElementById("vanban").innerHTML = "def";
        document.getElementById("imgClickAndChange").src = "./img/koxacdinh.jpg"
    }
    else {
        document.getElementById("demo").innerHTML = "You're an Human";
        document.getElementById("vanban").innerHTML = "xyz";
        document.getElementById("imgClickAndChange").src = "./img/human.jpg"
    }
}
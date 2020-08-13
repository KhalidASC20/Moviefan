let disneyLogoRef = document.getElementsByClassName("Disney_pic");
let MarvelLogoRef = document.getElementsByClassName("Marvel_pic");
let StarwarsLogoRef = document.getElementsByClassName("Star_wars_pic");
let UniversalLogoRef = document.getElementsByClassName("Universal_pic");
let FoxLogoRef = document.getElementsByClassName("Fox_pic");
let NetflixLogoRef = document.getElementsByClassName("Netflix_pic");
let html = document.querySelector("html");
let onward_incredibles = document.getElementsByClassName("onward_incredibles");
let moana_Frozen = document.getElementsByClassName("moana_frozen");
let title = document.getElementById("Title");
let color_change = document.getElementsByClassName("color_change");
let info_div1 = document.getElementById("info_div1");
let info_div2 = document.getElementById("info_div2");
let info_div3 = document.getElementById("info_div3");
let info_div4 = document.getElementById("info_div4");
let pic_div1 = document.getElementById("pic_div1");
let pic_div2 = document.getElementById("pic_div2");
let pic_div3 = document.getElementById("pic_div3");
let pic_div4 = document.getElementById("pic_div4");
let navbarColor = document.querySelector("ul")
let navbarText = document.querySelector("li a")
let homeText = document.getElementsByClassName("active");
let movieText = document.getElementsByClassName("movie");
let tvshowsText = document.getElementsByClassName("tvshows");
let aboutText = document.getElementsByClassName("about");
let movietime_container = document.getElementsByClassName("movietime_container");
movietime_container[0].style.display = "block";





disneyLogoRef[0].onmouseover = function() {
    disneyLogoRef[0].style.opacity = ".8";
}
disneyLogoRef[0].onmouseout = function() {
    disneyLogoRef[0].style.opacity = "1";
}
MarvelLogoRef[0].onmouseover = function() {
    MarvelLogoRef[0].style.opacity = ".8";
}
MarvelLogoRef[0].onmouseout = function() {
    MarvelLogoRef[0].style.opacity = "1";
}
StarwarsLogoRef[0].onmouseover = function() {
    StarwarsLogoRef[0].style.opacity = ".8";
}
StarwarsLogoRef[0].onmouseout = function() {
    StarwarsLogoRef[0].style.opacity = "1";
} 
UniversalLogoRef[0].onmouseover = function() {
    UniversalLogoRef[0].style.opacity = ".8";
}
UniversalLogoRef[0].onmouseout = function() {
    UniversalLogoRef[0].style.opacity = "1";
}
FoxLogoRef[0].onmouseover = function() {
    FoxLogoRef[0].style.opacity = ".8";
}
FoxLogoRef[0].onmouseout = function() {
    FoxLogoRef[0].style.opacity = "1";
}
NetflixLogoRef[0].onmouseover = function() {
    NetflixLogoRef[0].style.opacity = ".8";
}
NetflixLogoRef[0].onmouseout = function() {
    NetflixLogoRef[0].style.opacity = "1";
}

disneyLogoRef[0].onclick = function() {
    html.style.background = 'url("https://wallpaperaccess.com/full/432195.png") no-repeat center center fixed';
    html.style.backgroundSize = "cover";
    onward_incredibles[0].style.backgroundColor = "#6876ed";
    onward_incredibles[0].style.opacity = "90%";
    title.style.color = "white";
    moana_Frozen[0].style.backgroundColor = "#6876ed";
    moana_Frozen[0].style.opacity = "90%";
    navbarColor.style.backgroundColor = "#c6cbf5";
    navbarText.style.backgroundColor = "#faf9cd";
    movietime_container[0].style.display = "none";
    
    
    document.getElementById("onward_text").innerHTML="Jessie"
    document.getElementById("onward_is_text").innerHTML="Jessie is"
    document.getElementById("onward_pic").src="images/jessie.png"; 
    document.getElementById("incredibles_text").innerHTML="Gravity Falls"
    document.getElementById("incredibles_is_text").innerHTML="Gravity Falls is"
    document.getElementById("incredibles_2_pic").src="images/gravity_falls.png"; 
    document.getElementById("moana_text").innerHTML="Phineas and Ferb"
    document.getElementById("moana_is_text").innerHTML="Phineas and Ferb is"
    document.getElementById("moana_pic").src="images/phineas.png"; 
    document.getElementById("frozen_text").innerHTML="Kim Possible"
    document.getElementById("frozen_is_text").innerHTML="Kim Possible is"
    document.getElementById("frozen_2_pic").src="images/kim_possible.png"; 
    document.getElementsByClassName("color_change");
    for (let i=0; i<color_change.length;i++) {
        color_change[i].style.fontFamily = "disney";
    }
    for (let i=0; i<color_change.length;i++) {
        color_change[i].style.color = "white";
    }
}
MarvelLogoRef[0].onclick = function() {
    html.style.background = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_o_Hqr6kmQh_QwrjMnqx3lz3bbQCtuPbZYA&usqp=CAU")';
    
    onward_incredibles[0].style.backgroundColor = "#ebe4e4";
    onward_incredibles[0].style.opacity = "100%";
    title.style.color = "white";
    moana_Frozen[0].style.backgroundColor = "#ebe4e4";
    moana_Frozen[0].style.opacity = "100%";
    navbarColor.style.backgroundColor = "#800e0e";
    navbarText.style.backgroundColor = "#ebe4e4";
    document.getElementById("onward_text").innerHTML="Agents of Shield"
    document.getElementById("onward_is_text").innerHTML="Agents of Shield is"
    document.getElementById("onward_pic").src="images/shield.png"; 
    document.getElementById("incredibles_text").innerHTML="Daredevil"
    document.getElementById("incredibles_is_text").innerHTML="Daredevil is"
    document.getElementById("incredibles_2_pic").src="images/daredevil.png";
    document.getElementById("moana_text").innerHTML="Iron Fist"
    document.getElementById("moana_is_text").innerHTML="Iron Fist is" 
    document.getElementById("moana_pic").src="images/iron_fist.png"; 
    document.getElementById("frozen_text").innerHTML="Ultimate Spiderman"
    document.getElementById("frozen_is_text").innerHTML="Ultimate Spiderman is"
    document.getElementById("frozen_2_pic").src="images/ultimate_spiderman.png"; 
    document.getElementsByClassName("color_change");
    for (let i=0; i<color_change.length;i++) {
        color_change[i].style.fontFamily = "marvel";
    }
    for (let i=0; i<color_change.length;i++) {
        color_change[i].style.color = "white";
    }
}
StarwarsLogoRef[0].onclick = function() {
    html.style.background = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTP0-kKHP08VLrgCa2Rd9hqcckeovzjEjpZmQ&usqp=CAU")';
    
    onward_incredibles[0].style.backgroundColor = "black";
    onward_incredibles[0].style.opacity = "80%";
    title.style.color = "yellow";
    moana_Frozen[0].style.backgroundColor = "black";
    moana_Frozen[0].style.opacity = "80%";
    navbarColor.style.backgroundColor = "black";
    navbarText.style.backgroundColor = "#d4d413";
    document.getElementById("onward_text").innerHTML="Star Wars the Clone Wars"
    document.getElementById("onward_is_text").innerHTML="Star Wars the Clone Wars is"
    document.getElementById("onward_pic").src="images/clone_wars.png"; 
    document.getElementById("incredibles_text").innerHTML="Mandalorian"
    document.getElementById("incredibles_is_text").innerHTML="Mandalorian is"
    document.getElementById("incredibles_2_pic").src="images/Mandalorian.png"; 
    document.getElementById("moana_text").innerHTML="Star Wars Rebels"
    document.getElementById("moana_is_text").innerHTML="Star Wars Rebels is"
    document.getElementById("moana_pic").src="images/rebels.png"; 
    document.getElementById("frozen_text").innerHTML="Star Wars Resistance"
    document.getElementById("frozen_is_text").innerHTML="Star Wars Resistance is"
    document.getElementById("frozen_2_pic").src="images/resistance.png"
    document.getElementsByClassName("color_change");
    for (let i=0; i<color_change.length;i++) {
        color_change[i].style.fontFamily = "starwars    ";
    }
    for (let i=0; i<color_change.length;i++) {
        color_change[i].style.color = "yellow";
    }
}
UniversalLogoRef[0].onclick = function() {
    html.style.background = 'url("https://png.pngtree.com/thumb_back/fw800/background/20190223/ourmid/pngtree-simple-technology-universal-background-design-display-boardmoderninnovationtechnologybusiness-backgroundbusiness-image_72627.jpg") no-repeat center center fixed';
    html.style.backgroundSize = "cover";
}
FoxLogoRef[0].onclick = function() {
    html.style.background = 'url("https://cdn131.picsart.com/317254303302201.png?type=webp&to=min&r=640") no-repeat center center fixed';
    html.style.backgroundSize = "cover";
}
NetflixLogoRef[0].onclick = function() {
    html.style.background = 'url("https://decider.com/wp-content/uploads/2018/05/netflix-logo.png?w=646&h=431&crop=1") no-repeat center center fixed';
    html.style.backgroundSize = "cover";
    onward_incredibles[0].style.backgroundColor = "black";
    onward_incredibles[0].style.opacity = "100%";
    title.style.color = "red";
    moana_Frozen[0].style.backgroundColor = "black";
    moana_Frozen[0].style.opacity = "100%";
    navbarColor.style.backgroundColor = "black";
    navbarText.style.backgroundColor = "#b50006";
    document.getElementById("onward_text").innerHTML="Umbrella Academy"
    document.getElementById("onward_is_text").innerHTML="Umbrella Academy is"
    document.getElementById("onward_pic").src="images/umbrella_academy.png"; 
    document.getElementById("incredibles_text").innerHTML="Dark"
    document.getElementById("incredibles_is_text").innerHTML="Dark is"
    document.getElementById("incredibles_2_pic").src="images/Dark.png";
    document.getElementById("moana_text").innerHTML="Stranger things"
    document.getElementById("moana_is_text").innerHTML="Stranger things is" 
    document.getElementById("moana_pic").src="images/stranger_things.png"; 
    document.getElementById("frozen_text").innerHTML="Lost in Space"
    document.getElementById("frozen_is_text").innerHTML="Lost in Space is"
    document.getElementById("frozen_2_pic").src="images/lost_space.png"
    document.getElementsByClassName("color_change");
    for (let i=0; i<color_change.length;i++) {
        color_change[i].style.fontFamily = "netflix";
    }
    for (let i=0; i<color_change.length;i++) {
        color_change[i].style.color = "red";
    }
}

info_div1.style.display = "none"
info_div2.style.display = "none"
info_div3.style.display = "none"
info_div4.style.display = "none"

pic_div1.onmouseover = function() {
    info_div1.style.display = "block";
}
pic_div1.onmouseout = function() {
    info_div1.style.display = "none";
}
pic_div2.onmouseover = function() {
    info_div2.style.display = "block";
}
pic_div2.onmouseout = function() {
    info_div2.style.display = "none";
}
pic_div3.onmouseover = function() {
    info_div3.style.display = "block";
}
pic_div3.onmouseout = function() {
    info_div3.style.display = "none";
}
pic_div4.onmouseover = function() {
    info_div4.style.display = "block";
}
pic_div4.onmouseout = function() {
    info_div4.style.display = "none";
}

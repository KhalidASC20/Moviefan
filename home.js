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
    
    
    document.getElementById("onward_text").innerHTML="Onward"
    document.getElementById("onward_is_text").innerHTML="Onward is"
    document.getElementById("onward_pic").src="images/Onward_pic.png"; 
    document.getElementById("incredibles_text").innerHTML="incredibles 2"
    document.getElementById("incredibles_is_text").innerHTML="incredibles 2 is"
    document.getElementById("incredibles_2_pic").src="images/Incredibles_2.png"; 
    document.getElementById("moana_text").innerHTML="Moana"
    document.getElementById("moana_is_text").innerHTML="Moana is"
    document.getElementById("moana_pic").src="images/Moana.png"; 
    document.getElementById("frozen_text").innerHTML="Frozen 2"
    document.getElementById("frozen_is_text").innerHTML="Frozen 2 is"
    document.getElementById("frozen_2_pic").src="images/Frozen_2.png"; 
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
    document.getElementById("onward_text").innerHTML="Avenger Endgame"
    document.getElementById("onward_is_text").innerHTML="Avenger Endgame is"
    document.getElementById("onward_pic").src="images/Endgame.png"; 
    document.getElementById("incredibles_text").innerHTML="Ragnorak"
    document.getElementById("incredibles_is_text").innerHTML="Ragnorak is"
    document.getElementById("incredibles_2_pic").src="images/Ragnarok.png";
    document.getElementById("moana_text").innerHTML="Spider-man into the spider verse"
    document.getElementById("moana_is_text").innerHTML="Spider-man into the spider verse is" 
    document.getElementById("moana_pic").src="images/Spiderman.png"; 
    document.getElementById("frozen_text").innerHTML="Captain Marvel"
    document.getElementById("frozen_is_text").innerHTML="Captain Marvel is"
    document.getElementById("frozen_2_pic").src="images/Captain_marvel.png"; 
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
    document.getElementById("onward_text").innerHTML="Rise of the Skywalker"
    document.getElementById("onward_is_text").innerHTML="Rise of the Skywalker is"
    document.getElementById("onward_pic").src="images/skywalker.png"; 
    document.getElementById("incredibles_text").innerHTML="Solo"
    document.getElementById("incredibles_is_text").innerHTML="Solo is"
    document.getElementById("incredibles_2_pic").src="images/solo.png"; 
    document.getElementById("moana_text").innerHTML="Rogue one"
    document.getElementById("moana_is_text").innerHTML="Rogue one is"
    document.getElementById("moana_pic").src="images/rogue_one.png"; 
    document.getElementById("frozen_text").innerHTML="The Force Awakens"
    document.getElementById("frozen_is_text").innerHTML="The Force Awakens is"
    document.getElementById("frozen_2_pic").src="images/force_awakens.png"
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
    document.getElementById("onward_text").innerHTML="Spencer Confidential"
    document.getElementById("onward_is_text").innerHTML="Spencer Confidential is"
    document.getElementById("onward_pic").src="images/spencer.png"; 
    document.getElementById("incredibles_text").innerHTML="The Old Guard"
    document.getElementById("incredibles_is_text").innerHTML="The Old Guard is"
    document.getElementById("incredibles_2_pic").src="images/old_guard.png";
    document.getElementById("moana_text").innerHTML="Extraction"
    document.getElementById("moana_is_text").innerHTML="Extraction is" 
    document.getElementById("moana_pic").src="images/extraction.png"; 
    document.getElementById("frozen_text").innerHTML="Project Power"
    document.getElementById("frozen_is_text").innerHTML="Project Power is"
    document.getElementById("frozen_2_pic").src="images/project_power.png"
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

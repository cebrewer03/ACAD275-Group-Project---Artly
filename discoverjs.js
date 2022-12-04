
class Art{
    constructor(title, medium, color, artist, url) {
        this.title = title;
        this.medium = medium;
        this.color = color;
        this.artist = artist;
        this.url = url;
    }
}

var metadata = [];
metadata.push(new Art("OMINOUS", "graphic design", "yellow, green, orange", "Talia Lourkin", "talia4.jpg"));
metadata.push(new Art("CHAINMAIL", "graphic design", "red, grey", "Talia Lourkin", "gd1.jpg"));
metadata.push(new Art("PORTO LA", "graphic design", "blue", "Talia Lourkin", "gd2.jpg"));

metadata.push(new Art("VALLEY HILLS", "photography", "brown, green", "Kristina Shauman", "kristina1.jpg"));
metadata.push(new Art("SKATE PARK", "photography", "grey, blue", "Kristina Shauman", "kristina2.jpg"));
metadata.push(new Art("TRAILHEAD", "photography", "brown, green", "Kristina Shauman", "kristina3.jpg"));

metadata.push(new Art("STATUES", "photography", "blue, grey", "Cooper Tresswood", "cooper1.jpg"));
metadata.push(new Art("SUNDOWN", "photography", "orange, blue", "Cooper Tresswood", "cooper2.jpg"));
metadata.push(new Art("CITY HALL", "photography", "grey, black, white", "Cooper Tresswood", "cooper3.jpg"));

metadata.push(new Art("LIMBO", "graphic design", "red, blue, grey", "Talia Lourkin", "gd3.jpg"));
metadata.push(new Art("SOMA", "graphic design", "pink, green", "Talia Lourkin", "talia5.png"));
metadata.push(new Art("THRASHER", "graphic design", "brown, neutral, red", "Talia Lourkin", "talia6.jpg"));

metadata.push(new Art("BRUNCH", "photography", "brown, black", "Cooper Tresswood", "cooper4.jpg"));
metadata.push(new Art("SUMMER BIKES", "photography", "grey, black, white", "Cooper Tresswood", "cooper5.jpg"));
metadata.push(new Art("326", "photography", "orange, brown, green", "Cooper Tresswood", "cooper6.jpg"));

metadata.push(new Art("DILAPIDATION", "photography", "blue, brown, white", "Kristina Shauman", "kristina4.jpg"));
metadata.push(new Art("THE OPERA", "photography", "brown, neutral", "Kristina Shauman", "kristina5.jpg"));
metadata.push(new Art("BOOKSHOP", "photography", "red, brown", "Kristina Shauman", "kristina6.jpg"));

metadata.push(new Art("STREET STYLE", "photography", "blue, green", "Lawson Moore", "lawson4.jpg"));
metadata.push(new Art("ETHEREAL", "photography", "blue", "Lawson Moore", "lawson5.jpg"));
metadata.push(new Art("PRONTO", "photography", "brown, red, neutral", "Lawson Moore", "lawson6.jpg"));

metadata.push(new Art("POWERLESS", "graphic design", "neutral, red", "Mason Brighton", "mason1.jpg"));
metadata.push(new Art("DUNE", "graphic design", "orange, neutral", "Mason Brighton", "mason2.jpg"));
metadata.push(new Art("TULIPS", "graphic design", "red", "Mason Brighton", "mason3.png"));

metadata.push(new Art("HOME", "graphic design", "blue, red, orange, green", "Peter Rim", "peter1.png"));
metadata.push(new Art("B&NANA", "graphic design", "yellow", "Peter Rim", "peter2.jpg"));
metadata.push(new Art("KILO KISH", "graphic design", "yellow, white", "Peter Rim", "peter3.jpg"));
metadata.push(new Art("JUICY LUCY", "graphic design", "pink, red, orange", "Peter Rim", "peter4.jpg"));
metadata.push(new Art("WE MOVED ON TO BETTER THINGS", "graphic design", "blue, red, brown, neutral", "Peter Rim", "peter5.jpg"));
metadata.push(new Art("MISINFORMATION", "graphic design", "red, neutral", "Peter Rim", "peter6.jpg"));

function loadImages() {
    var container = $(".container"); 
    var input = $("#input");

    var favs = localStorage.getItem("fav");
    if(favs == null)
    {
        favs = "";
    }
    var favArray = favs.split(",");

    for(var i=0; i<metadata.length; i++){
        var checked = "";
        for(var j=0; j<favArray.length; j++)
        {
            if(i.toString() == favArray[j])
            {
                checked = "checked";
                break;
            }
        }
        container.append("<figure class='box' id='" + i + "'> <figcaption>" + metadata[i].title + "</figcaption> <img class='expand' src='" + metadata[i].url + "'> <figcaption> Artist: " + metadata[i].artist + "</figcaption> <input class='fav' " + checked + " type='checkbox'> </figure>");   
    }
}

function favoriteImages() {
    var container = $(".container"); 
    var input = $("#input");

    var favs = localStorage.getItem("fav");
    if(favs == null)
    {
        favs = "";
    }
    var favArray = favs.split(",");

    for(var i=0; i<metadata.length; i++){
        var checked = "";
        for(var j=0; j<favArray.length; j++)
        {
            if(i.toString() == favArray[j])
            {
                checked = "checked";
                container.append("<figure class='box' id='" + i + "'> <figcaption>" + metadata[i].title + "</figcaption> <img class='expand' src='" + metadata[i].url + "'> <figcaption> Artist: " + metadata[i].artist + "</figcaption> <input class='fav' " + checked + " type='checkbox'> </figure>");   
                break;
            }
        }
    }
}


$(document).ready(function() {
    if(document.title == "ARTLY FAVORITES")
    {
        favoriteImages();
    }
    else{
        loadImages();
        $(".fav").change(function(){
            var nodeList = document.querySelectorAll(".fav");
            var favList = "";
            for (i=0; i < nodeList.length; i++) {
                if(nodeList[i].checked){
                    var parentId = nodeList[i].parentNode.getAttribute('id');
                    favList += parentId +",";
                }
            }
            localStorage.setItem("fav", favList);
        });

        $("#searchbutton").click(function(){
            var container = $(".container"); 
            var input = $("#input").val();
            for(var i=0; i<metadata.length; i++){
                if(input == "" || metadata[i].title.toLowerCase().indexOf(input) >=0 || metadata[i].medium.indexOf(input) >=0 || metadata[i].color.indexOf(input) >=0 || metadata[i].artist.toLowerCase().indexOf(input) >=0)
                {
                    $(".container #" + i).show();
                } else {
                    $(".container #" + i).hide();
                }  
            }
        });
    }

});

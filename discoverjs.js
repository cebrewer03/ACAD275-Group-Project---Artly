
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
metadata.push(new Art("STATUES", "photography", "blue", "cooper", "cooper1.jpg"));
metadata.push(new Art("SUNDOWN", "photography", "orange", "cooper", "cooper2.jpg");
metadata.push(new Art("CITY HALL", "photography", "grey", "cooper", "cooper3.jpg");
metadata.push(new Art("SUMMER BIKES", "photography", "brown", "cooper", "cooper4.jpg");
metadata.push(new Art("326", "photography", "orange", "cooper", "cooper5.jpg");

metadata.push(new Art("FLOWERS", "acrylic", "yellow", "gogh", "https://cdn.shopify.com/s/files/1/1595/8961/products/sf_scarf612rev_4682036d-67a5-4aff-8c36-a025d85af50d.jpg?v=1528137698"));
metadata.push(new Art("CLIFFS", "acrylic", "yellow", "monet", "https://uploads1.wikiart.org/images/claude-monet/cliff-at-grainval.jpg!Large.jpg"));
metadata.push(new Art("CLIFFS", "acrylic", "yellow", "monet", "https://uploads1.wikiart.org/images/claude-monet/cliff-at-grainval.jpg!Large.jpg"));
metadata.push(new Art("CLIFFS", "acrylic", "yellow", "monet", "https://uploads1.wikiart.org/images/claude-monet/cliff-at-grainval.jpg!Large.jpg"));
metadata.push(new Art("CLIFFS", "acrylic", "yellow", "monet", "https://uploads1.wikiart.org/images/claude-monet/cliff-at-grainval.jpg!Large.jpg"));
metadata.push(new Art("CLIFFS", "acrylic", "yellow", "monet", "https://uploads1.wikiart.org/images/claude-monet/cliff-at-grainval.jpg!Large.jpg"));


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
        container.append("<figure class='box' id='" + i + "'> <img class='expand' src='" + metadata[i].url + "'> <figcaption>" + metadata[i].title + "</figcaption> <input class='fav' " + checked + " type='checkbox'> </figure>");   
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
                container.append("<figure class='box' id='" + i + "'> <img class='expand' src='" + metadata[i].url + "'> <figcaption>" + metadata[i].title + "</figcaption></figure>");   
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
                if(input == "" || metadata[i].title.toLowerCase() == input || metadata[i].medium == input || metadata[i].color == input || metadata[i].artist == input)
                {
                    $(".container #" + i).show();
                } else {
                    $(".container #" + i).hide();
                }  
            }
        });
    }

});

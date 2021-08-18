mapboxgl.accessToken = 'pk.eyJ1IjoibXlydGlsbGVraW0iLCJhIjoiY2tyc25tYWRzMDYwZzJwcXUwd2d4ejJoMyJ9.Bcc0RIvhkzRl6p9F6Qk9eg';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-79.4512, 43.6568],
    zoom: 13
});

// Add the control to the map.
map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);
map.addControl(new mapboxgl.NavigationControl());
map.on("load", function () {
    /* Image: An image is loaded and added to the map. */
    map.loadImage("https://i.imgur.com/MK4NUzI.png", function (error, image) {
        if (error) throw error;
        map.addImage("custom-marker", image);
        /* Style layer: A style layer ties together the source and image   and specifies how they are displayed on the map. */
        map.addLayer({
            id: "markers",
            type: "symbol",
            /* Source: A data source specifies the geographic coordinate where  the image marker gets placed. */
            source: {
                type: "geojson",
                data: {
                    type: 'FeatureCollection',
                    features: [
                        {
                            type: 'Feature',
                            properties: {},
                            geometry: {
                                type: "Point",
                                coordinates: [-74.5, 40]
                            }
                        }
                    ]
                }
            },
            layout: {
                "icon-image": "custom-marker",
            }
        });
    });
});
function openNav() {
    document.getElementById("mySidebar").style.width = "80px";
    document.getElementById("main").style.marginLeft = "80px";
}


function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    closeTab();
}

function openCity(evt, cityName) {

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function closeTab() {
    $(".tabcontent").hide();
}
$('#btnReport').click( function(){
    alert('Envoi en cours');
    setTimeout("location.reload(true);", 1000);
});
$('.form-check').change( function(){
    var checked = $('#Reason4').is(':checked');
    if(checked == 1){
        $("#other-reason").removeAttr('disabled');
    }
    else
        $("#other-reason").attr('disabled','disabled');
});


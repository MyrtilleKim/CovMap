mapboxgl.accessToken = 'pk.eyJ1IjoidGhxdWFuZyIsImEiOiJja3NlaG11bm4xMHJhMm9wM3kzeDk3eWFyIn0.UaKcxdXdZmPIUa0PfbBqZw';
var isOpen = false;
function openNav() {
    document.getElementById("mySidebar").style.width = "80px";
    document.getElementById("main").style.marginLeft = "80px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function clickNav() {
    if(isOpen === false){
        openNav();
        isOpen = true;
    }
    else{
        closeNav()
        isOpen = false;
    }
}
navigator.geolocation.getCurrentPosition(sucessLocation, errorLocation)

function sucessLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([106.682133, 10.765055])
};

function setupMap(center) {
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    });
    const nav = new mapboxgl.NavigationControl({
        visualizePitch: true
    });
    var directions = new MapboxDirections({
        accessToken: 'pk.eyJ1IjoidGhxdWFuZyIsImEiOiJja3NlaG11bm4xMHJhMm9wM3kzeDk3eWFyIn0.UaKcxdXdZmPIUa0PfbBqZw',
        unit: 'metric',
        language: 'fr-FR',
    });
    map.addControl(directions, 'top-right');
    map.addControl(nav, 'top-right');
    console.log("done");
    
}
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()
$('.form-check').change(function () {
    var checked = $('#Reason4').is(':checked');
    if (checked == 1) {
        $("#other-reason").removeAttr('disabled');
    }
    else
        $("#other-reason").attr('disabled', 'disabled');
});

function initMap() {
    let pos = {lat: 50.450481, lng: 30.523068};
    let map = new google.maps.Map(document.getElementById("map"), {
        center: pos,
        zoom: 15
    });
    let marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: "AutoVegas"
    });
}
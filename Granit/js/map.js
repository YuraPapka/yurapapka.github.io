function initMap() {
    try {
        let startMapPos = {
            lat: 50.445481,
            lng: 30.523068
        };

        if (document.documentElement.clientWidth > 767.97)
            startMapPos = {
                lat: 50.450481,
                lng: 30.533068
            };


        let map = new google.maps.Map(document.getElementById("map"), {
            center: startMapPos,
            zoom: 15
        });
        let marker = new google.maps.Marker({
            position: {lat: 50.450481, lng: 30.523068},
            map: map,
            title: "AutoVegas"
        });
    } catch (e) {
        console.error("Google maps won't get the money")
    }
}

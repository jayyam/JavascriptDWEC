if (navigator.geolocation) {
    console.log("OK");
    console.log(navigator.geolocation);
    navigator.geolocation.getCurrentPosition(
        (position) => {
        let latitud = position.coords.latitude;
        let longitud = position.coords.longitude;
        window.open("https://www.google.com/maps?q=" + latitud + "," + longitud);
    },
        (error) => {
        console.log(error);
    })
}
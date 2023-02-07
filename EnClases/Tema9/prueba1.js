if (Notification === undefined){
    console.log('No soporta notificaciones')
}
else {
        console.log('Todo OK')
        if (Notification.permission !== "granted")  {
        Notification.requestPermission().then((result) => {
            if (result === "granted") {
                crearNotificacion();
                }
            });
        }
    else if (Notification.permission === "granted") {
        crearNotificacion();
        }
    }
function crearNotificacion() {
    let opciones = { body: 'Esto es una prueba notificadora',
                    icon: "https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/settings-gear-setup-adjust-control-512.png"
        }
    const noti = new Notification("Prueba", opciones);
    noti.addEventListener("click", () => {
        window.open("http://wwww.iescierva.net");//no reinicia debido a ventanas preferentes
        })
    window.setTimeout(() => {noti.close() }, 10000);
}
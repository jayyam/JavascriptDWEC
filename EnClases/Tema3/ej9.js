let dabatase = {
    "colors": [
        {
            "color": "black",
            "category": "hue",
            "type": "primary",
            "code": {
                "rgba": [255,255,255,1],
                "hex": "#000"
            }
        },
        {
            "color": "white",
            "category": "value",
            "code": {
                "rgba": [0,0,0,1],
                "hex": "#FFF"
            }
        },
        {
            "color": "red",
            "category": "hue",
            "type": "primary",
            "code": {
                "rgba": [255,0,0,1],
                "hex": "#FF0"
            }
        },
        {
            "color": "blue",
            "category": "hue",
            "type": "primary",
            "code": {
                "rgba": [0,0,255,1],
                "hex": "#00F"
            }
        },
        {
            "color": "yellow_daw",
            "category": "hue",
            "type": "primary",
            "code": {
                "rgba": [255,255,0,1],
                "hex": "#FF0"
            }
        },
        {
            "color": "green",
            "category": "hue",
            "type": "secondary",
            "code": {
                "rgba": [0,255,0,1],
                "hex": "#0F0"
            }
        },
    ]
}
let color = dabatase.colors[4].code.hex; //recorre array JSON notacion punto
document.body.style.backgroundColor = color; //imprime color

let miobjeto = dabatase.colors.find((objeto) => objeto.color === "yellow_daw");//buscar propiedad con metodo find
if (miobjeto){document.body.style.backgroundColor = miobjeto.code.hex;}






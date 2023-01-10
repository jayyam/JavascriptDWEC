
    let texto = 'Allá muevan feroz guerra, ciegos reyes por un palmo más de tierra; que yo aquí tengo por mío cuanto abarca el mar bravío, a quien nadie impuso leyes.';
    const regex = /([ÁÉÍÓÚáéíóú])+/g;
    const coinc = texto.match(regex);

    console.log(coinc);


    // Modo 2
    // Encontrar coincidencia y grupos (útil para obtener o quitar sufijos o prefijos)
    const regex2 = /([a-z]*)(ball)/g;
    const str = 'basketball football baseball'

    // Obtiene el resultado y los grupos
    // Mientras encuentre ocurrencias ejecuta el bucle
    let ocurrencia;
    while ((ocurrencia = regex2.exec(str)) != null) {
    console.table(ocurrencia);
}

    // Modo 3
    // Obtener sólo la letra del DNI
    const regex3 = /(\d){8}(-)?(?![IÑOU])([A-Z])/g;
    let resultado;
    while ((resultado = regex3.exec(text)) != null) {
    console.log(resultado[3]); // referencia al cuarto grupo de la regex
}

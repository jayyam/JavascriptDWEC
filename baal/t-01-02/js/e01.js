/**
 * Crea un programa que asigne a una variable el valor ‘No molestar’ o ‘Disponible’ en
 * función de otra variable booleana llamada ESTADO. Utiliza el operador ternario. En
 * caso de que no esté definida la variable ESTADO debería ser el valor true por
 * defecto (utiliza el operador Nullish para esto).
 * */

let estado = null;//la otra variable booleana llamada ESTADO para el operador nullish. toma valores de null or undefined.
estado ??= true;//esto es un if con un nullish check
let a = estado ? 'No molestar' : 'Disponible';//asignandole a variable el valor ‘No molestar’ o ‘Disponible’ con una operacion ternaria

console.log(a);//imprimiendo resultado

let estado2;
if (estado2 == null) {
    estado2 = 'No molestar';
}
else{
    estado2 = 'Disponible';
}
console.log(estado2)

/**
 * In JavaScript, the ??= operator is a shorthand syntax for the if statement with a nullish check.
 * It is used to assign a default value to a variable if the variable is null or undefined.
 * This can be a convenient way to avoid having to write a full if statement in cases where you want to assign a default value
 * if the variable is not already set.
 *
 * Here is an example of using the ??= operator:
 *
 * // Define a variable called "favoriteColor" with no initial value
 * let favoriteColor;
 *
 * // Use the "??=" operator to assign a default value of "blue" if "favoriteColor" is null or undefined
 * favoriteColor ??= "blue";
 *
 * console.log(favoriteColor); // Output: "blue"
 *
 * In this example, the favoriteColor variable is initially declared but not given a value.
 * When the favoriteColor ??= "blue" statement is executed, it checks whether favoriteColor is null or undefined.
 * Since it has no value, it satisfies this condition and the default value of "blue" is assigned to it.
 *
 * This is equivalent to writing the following if statement:
 *
 * // Define a variable called "favoriteColor" with no initial value
 * let favoriteColor;
 *
 * // Use an "if" statement to check if "favoriteColor" is null or undefined, and assign a default value if necessary
 * if (favoriteColor == null) {
 *   favoriteColor = "blue";
 * }
 *
 * console.log(favoriteColor); // Output: "blue"
 *
 * The ??= operator provides a more concise and readable way to write this type of conditional assignment.
 * It is often used when working with optional values or when setting default values for function arguments.
 * */
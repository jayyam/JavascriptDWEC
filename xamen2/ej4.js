

let peliculas = [...desarray];

result = peliculas.filter((character)=> (character >= 'a' && character <= 'z') || character == 'ñ').length;

console.log(result('teminator', 'robocop', 'demolition man','saw', 'incepcion'))


/***
 * Transforma la siguiente función definida en Java en JS
 *
 * public class Main{
 *
 *     public static void main(String[] args) {
 *
 *         int numero, exp, digito;
 *         double binario;
 *         Scanner sc = new Scanner(System.in);
 *
 *         do{
 *             System.out.print("Introduce un numero entero >= 0: ");
 *             numero = sc.nextInt();
 *         }while(numero < 0);
 *
 *         exp=0;
 *         binario=0;
 *         while(numero!=0){
 *                 digito = numero % 2;
 *                 binario = binario + digito * Math.pow(10, exp);
 *                 exp++;
 *                 numero = numero/2;
 *         }
 *         System.out.printf("Binario: %.0f %n", binario);
 *     }
 * }
 */

let number = 0;
let exp = 0;
let digito = 0;
let binario = 0;

do
{
    parseInt(prompt('numero?'));
}
while (numero < 0);{
exp = 0;
binario = 0;

while (numero !== 0)
{
    digito = numero % 2;
    binario = binario + digito * Math.pow(10, exp);
    exp++;
    numero = numero / 2;
}

};
console.log('Binario: ' + binario)


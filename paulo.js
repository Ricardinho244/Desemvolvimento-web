var cont = 0;
var x =prompt("Digite um valor");
if (x % 2==0){
    document.write(`O número ${x} é par.`) 
}
else {
  document.write(`O número ${x} é impar.`)
}
 
 for (var c = 1; c <= x;c++){
   if(x % c == 0){
       cont++
   }

 }
 if (cont == 2){
  alert(`O número ${x} é primo`)
 }  
else{
  alert(`O número ${x} não é primo`)
}

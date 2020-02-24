let sum = 0;
let number = parseInt(prompt("Enter number"));

while (number != -1){
    sum += number;
    number = parseInt(prompt("Enter number"));
}
alert(sum);

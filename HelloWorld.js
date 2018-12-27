document.write("Hello World");

var age = 42;
document.write(age);

var x = 2;
var y = 4;
var z = x + y;
document.write(z);

var pizza = 1;
pizza++;
document.write(pizza);

if (x == 2 && y == 4) {
    pizza++;
    document.write(pizza)
}
else {
    document.write("WRONG")
}   


var array_items = [1, 2, 3, 4, 5];
document.write(array_items);

var i;
for (i = 1; i <= 10; i++){
    document.write("Hello World");
}

var t = 1;
do {
    document.write("I Love JS");
    t = t + 1
}
while (t <= 10);

alert("I'm awesome");

prompt("What's your name?");

confirm("Do you really want to delete this picture permanently?");

function print() {
    document.write("I know JS");
}

print();

function add(num1, num2) {
    var result = num1 + num2;
    document.write(result);
}

add(3, 4);



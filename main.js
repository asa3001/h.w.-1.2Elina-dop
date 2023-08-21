const welcome = ('Hello')
alert(welcome)
const Name = prompt('What is your name?','UserName')
const LastName = prompt('What is your last name?','LastName')
const Hello = `Hello, ${Name} ${LastName}!`
alert(Hello)


// 2 Задание
var firsNumber, secondNumber;
firsNumber = +prompt('Введите число : ');
secondNumber = parseInt(prompt('Введите второе число : '));
if (firsNumber > secondNumber) {
    alert(firsNumber + ' Больше');
}else{
    alert(secondNumber + ' Больше')
}


// 3 Задание
const color = prompt('With color :')
if (color == 'red') {
    alert('Stop');
}else if(color == 'yellow'){
    alert('Wait');
}else if(color == 'green'){
    alert('Go');
}else {
    alert('Not Correct color');
}
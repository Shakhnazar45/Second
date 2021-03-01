function solutionOfDate(dateOfBirth){
    var numEl = '';
for (var index in dateOfBirth) {
  if ( parseInt(dateOfBirth[index]) ) {
    numEl += dateOfBirth[index]
  }
}
parseInt(numEl);
var a, b, c, d, year, month, day;
year = numEl/1000;
year = Math.trunc(year);
month = (numEl/100)%10;
month = Math.trunc(month);
day = numEl %100;
day = Math.trunc(day);

    var a, b, c, d;
    a = year / 1000;
    b = (year / 100) % 10;
    c = (year / 10) % 10;
    d = year % 10;
    a = Math.trunc(a);
    b = Math.trunc(b);
    c = Math.trunc(c);
    d = Math.trunc(d);
    year = a+ b+ c+ d;
    year = Math.trunc(year);
    if(year >= 10){
        a = year / 10;
        b = year % 10;
        a = Math.trunc(a);
        b = Math.trunc(b);
        year = a+b;
        year = Math.trunc(year);
        
    }
    
    a = day / 10;
    b = day % 10;
    a = Math.trunc(a);
    b = Math.trunc(b);
    day = a+b;
    day = Math.trunc(day);
    
    
    var result;
    result = year + month + day;
    result = Math.trunc(result);
    if(result >= 10){
        a = result / 10;
        b = result % 10;
        a = Math.trunc(a);
        b = Math.trunc(b);
        result = a + b;
        result = Math.trunc(result);
    }
    console.log( "year  :  1 + 8 + 7 + 9 = 25 --> 2 + 5 = " + year + "\nmonth: 0 + 3 = " + month + "\nday: 1 + 4 = " + day + "\nresult: 7 + 3 + 5 = 15 --> 1 + 5 = " + result);
}
var dateOfBirth = prompt();
solutionOfDate(dateOfBirth);
/*
var el = 'rate-5356';
// numEl изначально строка, чтобы числа не складывались друг с другом, а приписывались
var numEl = '';
// Перебираем каждый символ. Если символ можно распарсить как номер, приписываем к строке
for (var index in el) {
  if ( parseInt(el[index]) ) {
    numEl += el[index]
  }
}
parseInt(numEl); // 5356
console.log(numEl)*/
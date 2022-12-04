const func1 = function(number){
    return number * number;
}
console.log(func1(10));

//both are same
//in below code we can '=>' as a function

const func = number => number * number;
console.log(func(5));

const jobs = [
    {id: 1, city: 'NYC'},
    {id: 2, city: 'Landon'},
    {id: 3, city: 'Mexico'}  
];

const city = jobs.filter (job => job.city == 'Mexico');
console.log(city);
function randomNum(num){
    i =Math.floor(Math.random()*num)
}

function undefinedFun(v){
    if (arr[i]== undefined){
        arr[i] = v
    }
}

function mash(){return "house"}
console.log(mash())

function getHome(){
    arr = ["mansion", "apartment", "shack", "house", process.argv[2], "abandoned warehouse"];
    i = randomNum(arr.length);
    undefinedFun("condo"); 
    return arr[i]
}
console.log(getHome());

function getChildrenCount(){
    num = randomNum((100)+1)
    arr = [num, process.argv[3]]
    i = Math.floor(Math.random()*arr.length)
    undefinedFun(3)
    return arr[i]
}

function getCar(){
    arr = ["lambo", "convertible", "box with wheels", process.argv[4]]
    i = randomNum(arr.length)
    undefinedFun("bike")
    return arr[i]
}

function getSpouce(){
    arr = ["Sam", "Alex", "Avery", "Baily", process.argv[5]]
    i = Math.floor(Math.random()*arr.length)
    undefinedFun("no one")
    return arr[i]
}

function getSalary(){
    num = Math.floor(Math.random()*500)
    arr = [i, process.argv[6]]
    i = Math.floor(Math.random()*arr.length)
    undefinedFun(20)
    return arr[i]
}

function getAge(){
    i = randomNum(118)
    while (i < 30){i+=2}
    return i
}

function getCareer(){
    arr = ["Programmer", "Doctor", "Lawyer", "McDonalds Employee", process.argv[7]]
    i = randomNum(arr.length)
    undefinedFun("no one");
    return arr[i];
}
console.log("You will live in a " + getHome() + ", and you will have " +
getChildrenCount() + " kids and you will drive a " + getCar() + "! You will Marry "
+ getSpouce() + ", make " + getSalary() + " dollars a week, being a " +getCareer() +" and you will die at age "
+ getAge() + ".")
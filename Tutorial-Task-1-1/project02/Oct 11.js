function square(x) {
    x * x
}

let result = square(2)
document.write(result)

square2 = x => x * x //round brackets and "return" unnessecary, neither in new line bc online one line

let result2 = square2(3) 
document.write(result2)

//rest parameter (must be last parameter in brack)
// arith series
function ArithSeries(...x) //makes sure any num of parameters works
{
    let total = 0
    for(let num of x)
        {
            total += num
        }
    const eq = x.join('+') + ' = ' + String(total)
    document.write(eq)
}
ArithSeries(1,2,3)

function countColors(PersonName, ...colors)
{
    document.write(PersonName + ' has ' + colors.length + ' colors ' + '<br>')
}
countColors('Alice', 'Red', 'Green')

//Spread operator ...
const fruits = ['apple', 'banana', 'orange']
const veg = ['potatoes', 'tomatoes', 'spinach']
const foods = []
document.write(fruits + '<br>')
document.write(...fruits + '<br>')
foods.push(fruits)
foods.push(veg)
console.log(foods)
foods.length = 0; //clear array
foods.push(...fruits)
foods.push(...veg)
console.log(foods) //nested loops avoided

//callback function = do this and when your done do this


//map applies through array without altering


function isAdult(person)
{
    return person.age >= 18
}
const people = [
    {name:'A', age:6}
    {name:'B', age:19}
    {name:'C', age:21}
]
const FirstAdult = people.find(isAdult) //find and filter
console.log(FirstAdult)
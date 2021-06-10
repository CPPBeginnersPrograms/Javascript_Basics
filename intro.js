// console.log("hello world")

var number = 2
// if(number == 0)
// {
//     console.log("true")
// }
// else
// {
//     console.log("false")
// }

switch(number)
{
    
    case 1:
    if(number == 4)
    {
        console.log("its 4")
    }
    break;

    case 2:
    if(number == 2)
    {
        console.log("it's 3")
    }
    break;

    default:
        console.log("no number matching")
}
const addobj={
    k1: 23,
    k2: 44
}

function addfun()
{
    return addobj.k1 + addobj.k2;
}

console.log("value:", addfun());

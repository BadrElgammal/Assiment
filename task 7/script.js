//-----------------------------problem 1-----------------------
function revarce(num)
{
    switch (num)
    {
        case 1:
            return 0;
            break;
        case 0:
            return 1;
            break;
        default:
            return -1;
    }
}

console.log(revarce(0));
//-----------------------------problem 2-----------------------
function sum(num)
{
    var numstring=num.toString().split('');
    var sumdigit=0;
    numstring.forEach(function(p)
    {
        sumdigit+=parseInt(p);
    })
    console.log(sumdigit);
}
sum(123);
//-----------------------------problem 3-----------------------
function problem3(filterarray)
{
    var numarray=[];
    var x=0;
    filterarray.forEach(function(p)
    {
        if(typeof(p) === 'number')
        {
            numarray[x]=p;
            x++;
        }
    })
    console.log (numarray);
}
problem3(['23',1,'45','65',56,32,76,'34'])
//-----------------------------problem 4-----------------------
function problem4(chickens,cows,pigs)
{
    var sum=0;
    sum+=chickens*2+cows*4+pigs*4;
    console.log(sum);
}
problem4(2,3,5);
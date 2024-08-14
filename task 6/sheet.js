//------------------------problem 1-----------------------------
function problem1(x)
{
    console.log(x);
}
problem1(5);

//--------------------------problem 2------------------------------

function problem2(x)
{
    if(x%3===0 && x%4===0)
        console.log('Yes');
    else
        console.log('No');
}

problem2(9);




//--------------------------problem 3------------------------------
function max(x,y)
{
    if(x>=y)
        console.log(x);
    else
        console.log(y);
}

max(10,7);


//-----------------------------------problem 4--------------------------
function problem4(x)
{
    if(x<0)
        console.log('Negative');
    else
        console.log('positive');
}

problem4(10);

//---------------------------------problem 5------------------------
function problem5(x,y,z)
{
    console.log(Math.max(x,y,z));
    console.log(Math.min(x,y,z));
}

problem5(7,8,5);



//---------------------------------problem 6---------------
function problem6(x)
{
    if(x%2===0)
        console.log('even');
    else
        console.log('odd');
}

problem6(7);

//----------------------------problem 8-------------------
function problem8(x)
{
    var charac='aAeEiIoOuU';
    if(charac.includes(x))
        console.log('vowel');
    else
        console.log('Consonant');
}

problem8('O');

//-----------------------------problem 9-----------------------------
function problem9(x)
{
    for(var i=1;i<=x;i++)
        console.log(i);
}

problem9(5);

//-----------------------------problem 10-----------------------------
function problem10(x)
{
    for(var i=1;i<=12;i++)
    {
        console.log(x*i);
    }
}
problem10(5);

//-----------------------------problem 11-----------------------------
function problem11(x)
{
    for(var i=1;i<=x;i++)
    {
        if(i%2===0)
            console.log(i);
    }
}
problem11(15);
//-----------------------------problem 12-----------------------------
function problem12(num,pow)
{
    console.log(Math.pow(num,pow));
}
problem12(4,3);
//-----------------------------problem 12-----------------------------
function problem_12(sub1,sub2,sub3,sub4,sub5)
{
    var total=sub1+sub2+sub3+sub4+sub5;
    console.log(total);
    console.log(total/5);
    console.log((total/500)*100);
}
problem_12(95,76,58,90,89);
//-----------------------------problem 13-----------------------------
function problem13(monthnum)
{
    switch (monthnum)
    {
        case 1:
            console.log(31);
            break;
        case 2:
            console.log(29);
            break;
        case 3:
            console.log(31);
            break;
        case 4:
            console.log(30);
            break;
        case 5:
            console.log(31);
            break;
        case 6:
            console.log(30);
            break;
        case 7:
            console.log(31);
             break;
        case 8:
             console.log(31); 
             break;
        case 9:
            console.log(30);
            break;
        case 10:
            console.log(31);
            break;
        case 11:
            console.log(30);
             break;
        case 12:
             console.log(31); 
             break;
    }   
}
problem13(1);
//-----------------------------problem 14-----------------------------
function problem14(Physics, Chemistry, Biology, Mathematics , Computer)
{
    var total=Physics+ Chemistry+ Biology+ Mathematics + Computer;
    var percentge=total/5;
    console.log(percentge+'%');
    if(percentge>=90)
        console.log('A');
    else if(percentge>=80)
        console.log('B');
    else if(percentge>=70)
        console.log('C');
    else if(percentge>=60)
        console.log('D');
    else if(percentge>=40)
        console.log('E');
    else if(percentge<40)
        console.log('F');
}
problem14(95,76,58,90,89);
//-----------------------------problem 15-----------------------------
function problem15(monthnum)
{
    switch (monthnum)
    {
        case 1:
            console.log(31);
            break;
        case 2:
            console.log(29);
            break;
        case 3:
            console.log(31);
            break;
        case 4:
            console.log(30);
            break;
        case 5:
            console.log(31);
            break;
        case 6:
            console.log(30);
            break;
        case 7:
            console.log(31);
             break;
        case 8:
             console.log(31); 
             break;
        case 9:
            console.log(30);
            break;
        case 10:
            console.log(31);
            break;
        case 11:
            console.log(30);
             break;
        case 12:
             console.log(31); 
             break;
    }   
}
problem15(1);
//-----------------------------problem 16-----------------------------
function problem16(x)
{
    switch(x)
    {
        case 'a':
        case 'A':
            console.log('vowel');
            break;
        case 'e':
        case 'E':
            console.log('vowel');
            break;
        case 'i':
        case 'I':
            console.log('vowel');
            break;
        case 'o':
        case 'O':
            console.log('vowel');
            break;
        case 'u':
        case 'U':
            console.log('vowel');
            break;
        default :
            console.log('Consonant');
            break;
    }
}
problem16('O');
//-----------------------------problem 17-----------------------------
function problem17(num1,num2)
{
    const comparison = num1 > num2 ? 1 : num1 < num2 ? -1 : 0;
    switch(comparison)
    {
        case 1:
            console.log(num1);
            break;
        case -1:
            console.log(num2);
            break;
        default:
             console.log('equal');
    }
}
problem17(7,4);
//-----------------------------problem 18-----------------------------
function problem18(num)
{
    const comparison = num%2===0 ? 1 : 0;
    switch(comparison)
    {
        case 1:
            console.log('even');
            break;
        case 0:
            console.log('odd');
    }
}
problem18(4);
//-----------------------------problem 19-----------------------------
function problem19(num)
{
    const comparison = num>0 ? 1 :num<0 ? -1 :0;
    switch(comparison)
    {
        case 1:
            console.log('positive');
            break;
        case -1:
            console.log('negative');
            break;
        default:
            console.log('Zero');
            break;
    }
}
problem19(-1);
//-----------------------------problem 20-----------------------------
function problem20(num1,num2,operator)
{
    switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num1 / num2;
          break;
        default:
          console.log('Invalid operator!');
          return;
      }
      console.log(result);
}
problem20(4,7,'*');
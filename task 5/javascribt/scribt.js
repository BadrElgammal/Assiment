var sora =document.querySelector('.section1 .contaner img');
var text =document.querySelector('.section1 .contaner .text');
var btns=document.querySelectorAll('.section1 button');

var Detals=
[
    {
        img:'../images/image-About/about-img.webp',
        text:'<h2>WHO WE ARE?</h2> <p>Market disruption is an accepted reality for business, as new competition and technologies drive the pace of change faster than ever before. Our clients want employees who are prepared to lead, differentiate and adapt in a constantly changing world. They want advisers who are curious about the world, and embrace collaboration and candour. We bring the right talent to every client issue, regardless of where the client is. We partner with our clients to deliver solutions in the world is largest economies as well as newly opening markets. We are global citizens, industry savvy, diverse and have a thirst for innovation. Our strength is our ability to adopt a new type of thinking and use cutting-edge legal technologies to help clients overcome the challenges of competing in today s new world economic order. We are JFC.</p>'
    },
    {
        img:'../images/image-About/About-us.webp',
        text : '<h2>ABOUT COMPANY?</h2> <p>Our company is established in 2006, Specialized at consultant works for companies and finishing their legal services.<br> We have many important clients as KOREAN EMBASSY IN EGYPT, KOREAN ASSOCIATION IN EGYPT, etc..<br> We have many employees included 5 lawyers and 1 official accountant. Our managers are :<br> -Philip Kim<br> -Mohamed Ismail<br> -Marina Girgis</p>'
    },
    {
        img :'../images/image-About/About-uss.webp',
        text:'<h2>HOW CAN I CONTACT YOU?</h2> <p>You can freely contact us through our social media accounts or our number that is written on this website.</p> <div class="link"> <a href="./contact.html">Go to Contact Page</a> <img src="../images/images-page2/arrow.webp" alt=""></img>'
    }
]

btns.forEach(function(p,indx)
{
    p.addEventListener('click',function()
    {
        sora.src=Detals[indx].img;
        text.innerHTML=Detals[indx].text;
    })
})


// var sora =document.querySelector('.section1 .contaner img');
// var text =document.querySelector('.section1 .contaner .text');
// var btn1=document.querySelector('.section1 .btn1');
// var btn2=document.querySelector('.section1 .btn2');
// var btn3=document.querySelector('.section1 .btn3');
// var Detals=
// [
//     {
//         img:'../images/image-About/about-img.webp',
//         text:'<h2>WHO WE ARE?</h2> <p>Market disruption is an accepted reality for business, as new competition and technologies drive the pace of change faster than ever before. Our clients want employees who are prepared to lead, differentiate and adapt in a constantly changing world. They want advisers who are curious about the world, and embrace collaboration and candour. We bring the right talent to every client issue, regardless of where the client is. We partner with our clients to deliver solutions in the world is largest economies as well as newly opening markets. We are global citizens, industry savvy, diverse and have a thirst for innovation. Our strength is our ability to adopt a new type of thinking and use cutting-edge legal technologies to help clients overcome the challenges of competing in today s new world economic order. We are JFC.</p>'
//     },
//     {
//         img:'../images/image-About/About-us.webp',
//         text : '<h2>ABOUT COMPANY?</h2> <p>Our company is established in 2006, Specialized at consultant works for companies and finishing their legal services.<br> We have many important clients as KOREAN EMBASSY IN EGYPT, KOREAN ASSOCIATION IN EGYPT, etc..<br> We have many employees included 5 lawyers and 1 official accountant. Our managers are :<br> -Philip Kim<br> -Mohamed Ismail<br> -Marina Girgis</p>'
//     },
//     {
//         img :'../images/image-About/About-uss.webp',
//         text:'<h2>HOW CAN I CONTACT YOU?</h2> <p>You can freely contact us through our social media accounts or our number that is written on this website.</p> <div class="link"> <a href="./contact.html">Go to Contact Page</a> <img src="../images/images-page2/arrow.webp" alt=""></img>'
//     }
// ]
// btn1.addEventListener('click',function()
// {
//     sora.src=Detals[0].img;
//     text.innerHTML=Detals[0].text;
// })
// btn2.addEventListener('click',function()
// {
//     sora.src=Detals[1].img;
//     text.innerHTML=Detals[1].text;
// })
// btn3.addEventListener('click',function()
// {
//     sora.src=Detals[2].img;
//     text.innerHTML=Detals[2].text;
// })
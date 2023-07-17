var Quotes=[

{
    quote:"In three words I can sum up everything I've learned about life: it goes on",
    auther:"Robert Frost",
},
{
    quote:`Don’t walk in front of me… I may not follow
    Don’t walk behind me… I may not lead
    Walk beside me… just be my friend`,
    auther:" Albert Camus",
},
{
    quote:"Life is what happens to us while we are making other plans.",
    auther:"Allen Saunders",
},
{
    quote:"That which does not kill us makes us stronger.",
    auther:"Friedrich Nietzsche",
},
{
    quote:"It is never too late to be what you might have been.",
    auther:"George Eliot",
},
{
    quote:"I'm not upset that you lied to me, I'm upset that from now on I can't believe you.",
    auther:"Friedrich Nietzsche",
},
{
    quote:"We don't see things as they are, we see them as we are.",
    auther:"Anaïs Nin",
},
{
    quote:"Logic will get you from A to Z; imagination will get you everywhere.",
    auther:"Albert Einstein",
},
{
    quote:"Do what you can, with what you have, where you are.",
    auther:"Theodore Roosevelt",
},
{
    quote:"Do one thing every day that scares you.",
    auther:"Eleanor Roosevelt",
},


]

function randomQuote(){
var box=Math.floor(Math.random()*Quotes.length);
document.getElementById('quote').innerHTML=Quotes[box].quote
document.getElementById('author').innerHTML=Quotes[box].auther



}
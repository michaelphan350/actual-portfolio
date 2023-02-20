let Amap = () => {
    var quotes = [
        '“The secret of getting ahead is getting started.” <b>-Mark Twain</b>' ,
        '"I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life, and that is why I succeed." <b>-Michael Jordan</b>' ,
        '“We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes―understanding that failure is not the opposite of success, it’s part of success.” <b>-Arianna Huffington</b>',
        '“Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.” <b>-Socrates</b>',
        '“Happiness is not something ready made. It comes from your own actions.” <b>-Dalai Lama XIV</b>',
        '"Keep your face always toward the sunshine, and shadows will fall behind you." <b>-Walt Whitman</B>',
        '"Success is not final, failure is not fatal: it is the courage to continue that counts."<b>-Winston Churhill</b>',
        '"What lies behind you and what lies in front of you, pales in comparison to what lies inside of you."<b>-Ralph Waldo Emerson</b>',
        '"It is during our darkest moments that we must focus to see the light."<b>-Aristotle</b>',
        '"Weaknesses are just strengths in the wrong environment." <b>-Marianne Cantwell'
    ]
    function changeQuote() {
        var randomQuote = Math.floor(Math.random() * (quotes.length));
        document.getElementById("aText").innerHTML = quotes[randomQuote]
    }

    changeQuote();
}
let Bmap = () => {
    var colors = [
        "blue",
        "red",
        "purple",
        "cyan",
        "grey",
        "maroon",
        "fusha",
        "orange"
    ]
    function changeColor() {
        let myColor = document.querySelector(".imageDiv")
        var randomColor = Math.floor(Math.random() * (colors.length));
        myColor.style.backgroundColor = colors[randomColor]
    }

    changeColor();
}
let Xmap = "You pressed the X button"
let Ymap = "You pressed the Y button"
let Startmap = () => {

    function reload () {
        window.location.reload(false)
    }
    reload ()
}
let Menumap = () => {
        function menu () {
        let myPicture = document.querySelector("#controller")
        myPicture.style.opacity = "50%";
        let myElement = document.querySelector("#figcaption")
        myElement.style.display = "block";

    }
    menu();
}
let Lanamap = "You pressed the L. Analog stick"

let Ranamap = "You pressed the R. Analog"
let Ldirmap = "You pressed the L. Directional Pad"


export { Amap, Bmap, Xmap, Ymap, Startmap, Menumap, Lanamap, Ranamap, Ldirmap }
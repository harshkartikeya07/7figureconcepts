

$(document).ready(function () {
    //Owl
    $('.hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        navText: ['PREV', 'NEXT'],
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    })

    $('#projects-slider').owlCarousel({
        loop: true,
        nav: false,
        items: 2,
        dots: true,
        smartSpeed: 600,
        center: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
                margin: 8,
            }
        }
    })

    $('.reviews-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 900,
        items: 1,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,
    })
});




document.getElementById('whats-chat').addEventListener("mouseover", showchatbox);
document.getElementById('chat-top-right').addEventListener("click", closechatbox);
document.getElementById('send-btn').addEventListener("click", sendmsg);
window.addEventListener("load", showchatboxtime);
function showchatbox(){
document.getElementById('chat-box').style.right='8%'
}
function closechatbox(){
document.getElementById('chat-box').style.right='-500px'


}
// function showchatboxtime(){
// setTimeout(launchbox,40000)
// }
function launchbox(){
document.getElementById('chat-box').style.right='8%'

}
function sendmsg(){
var msg = document.getElementById('whats-in').value;
var relmsg = msg.replace(/ /g,"%20");
 window.open('https://api.whatsapp.com/send?phone=+918368117295&text='+relmsg,'_blank');

}


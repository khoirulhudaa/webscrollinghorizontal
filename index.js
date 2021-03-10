function Look() {
    document.getElementById('ch8').style.backgroundColor = "rgb(127, 9, 238);";
    document.getElementById('look2').style.display = "inline";
    setTimeout(() => {
        document.getElementById('ch8').style.marginTop = "0px";
    }, 150)
}

function Hidden() {
    document.getElementById('ch8').style.backgroundColor = "rgb(127, 9, 238);";
    document.getElementById('look2').style.display = "none";
    setTimeout(() => {
        document.getElementById('ch8').style.marginTop = "-1453px";
    }, 150)
}
const mainNode = document.querySelector('main');
mainNode.addEventListener('mousemove', (e) => {
    var moveX = (e.clientX / - 8);
    var moveY = (e.clientY / - 8);
    mainNode.style.backgroundPosition = moveX + 'px ' + moveY + 'px';
});

$(window).mousemove(function (evt) {
    var change;
    var posX = evt.clientX;
    var posY = evt.clientY;
    var left = change * 20;
    var posX = posX * 2;
    posY = posY * 2;
    $('.bg-logos2b').css('top', ((0 + (posY / 33)) + "px"));
    $('.bg-logos2b').css('right', ((0 + (posX / 33)) + "px"));
    $('.bg-logos2c').css('top', ((0 + (posY / 63)) + "px"));
    $('.bg-logos2c').css('right', ((0 + (posX / 33)) + "px"));
    $('.bg-logos2d').css('top', ((0 + (posY / 30)) + "px"));
    $('.bg-logos2d').css('right', ((330 + (posX / 60)) + "px"));
});

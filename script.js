var supportPageOff = window.pageXOffset !== undefined;
var yFirst = supportPageOff ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

if (navigator.userAgent.match(/Trident\/7\./)) {
    document.addEventListener('scroll', function (event) {
        let banner = document.getElementById('ban');
        event.preventDefault();
        // let st = window.pageYOffset;

        var supportPageOffset = window.pageXOffset !== undefined;
        var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

        if (yFirst < y) {
            banner.classList.add('hide');
        } else {
            banner.classList.remove('hide');
        }
        setTimeout(function() {
            yFirst = y;
        }, 200); 
        console.log(yFirst, y);
    })
}
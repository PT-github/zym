!function(n, e) {
    var t = n.documentElement
        , i = "orientationchange" in window ? "orientationchange" : "resize"
        , a = function() {
            var n = t.clientWidth;
            if (n) {
                var e = n / 320 * 18;
                e = e > 54 ? 54 : e,
                ~~e !== e && (e = ~~e),
                /windows phone|iphone|android/gi.test(window.navigator.userAgent) || (e = 18),
                    t.REM2PX = 20,
                    t.style.fontSize = e + "px",
                n > 850 ? t.className = 's_pc' : t.className = 's_phone';
                var i = window.devicePixelRatio;
                document.querySelector('meta[name="viewport"]');
                t.setAttribute("data-dpi", i)
            }
        }
    ;
    n.addEventListener && (e.addEventListener(i, a, !1),
        n.addEventListener("DOMContentLoaded", a, !1),
        a())
}(document, window);
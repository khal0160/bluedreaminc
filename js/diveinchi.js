let app = {
    pages: [],
    show: new Event('show'),
    init: ()=>{
        console.log("after app.init")
        app.addListeners();
        app.pages = document.querySelectorAll('.page');
        app.pages.forEach((pg)=>{
            pg.addEventListener('show', app.pageShown);
        })
        document.querySelectorAll('.simButton').forEach((link)=>{
            link.addEventListener('click', app.nav);
        })
    },
    addListeners: ()=>{
            var elems = document.querySelectorAll('.dropdown-trigger');
            var instances = M.Dropdown.init(elems, []);
    },
    nav: ev=>{
        ev.preventDefault();
        let btn = ev.target;
        let target = btn.getAttribute("data-target");
        console.log("Navigate to", target);
        document.querySelector(".page.active").classList.remove("active");
        document.getElementById(target).classList.add("active");
    },
}
const ready = "cordova" in window ? "deviceready" : "DOMContentLoaded";
document.addEventListener(ready, app.init);
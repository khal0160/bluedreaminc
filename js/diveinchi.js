let app = {
    init: ()=>{
        console.log("after app.init")
        //add click listeners for navigation
        app.buildHome();
        app.addListeners();

    },
    addListeners: ()=>{
    },
    nav: ev=>{
        let btn = ev.target;
        let target = btn.getAttribute("data-target");
        console.log("Navigate to", target);
        document.querySelector(".page.active").classList.remove("active");
        document.getElementById(target).classList.add("active");
    },
    //buildHead
    buildHead: ()=>{
        console.log("after app.buildHead");
        let body = document.getElementById("body");
        let headTitle = document.createElement("div");
        //headTitle.textContent="DIVEINCHI";
        headTitle.classList.add("col", "s6","offset-s6")
        body.appendChild(headTitle);

    },
    //buildMid
    //buildFooter
    buildHome: ()=>{
        console.log("after app.buildHome");
        // Header
        app.buildHead();
        // Middle
        let middle = document.createElement("div");
        middle.id="middle";
        body.appendChild(middle);
        // Footer
        let footer = document.createElement("div");
        footer.id="footer";
        body.appendChild(footer);
    }


}
const ready = "cordova" in window ? "deviceready" : "DOMContentLoaded";
document.addEventListener(ready, app.init);
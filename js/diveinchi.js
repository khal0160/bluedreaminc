let app = {
    init: ()=>{
        console.log("after app.init")
        //add click listeners for navigation
        app.buildHome();
        app.addListeners();

    },
    addListeners: ()=>{
        // //from home to sim 1
        // document.getElementById("sim1btn").addEventListener("click", app.nav);
        // //from home to sim 2
        // document.getElementById("sim2btn").addEventListener("click", app.nav); 
        // //from home to sim 3
        // document.getElementById("sim3btn").addEventListener("click", app.nav); 
        // //from home to sim 4 
        // document.getElementById("sim4btn").addEventListener("click", app.nav);
        // //from home to sim 5 
        // document.getElementById("sim5btn").addEventListener("click", app.nav);
        // //from home to sim 6 
        // document.getElementById("sim6btn").addEventListener("click", app.nav);
        // //from home to sim 7 
        // document.getElementById("sim7btn").addEventListener("click", app.nav);
        // //from home to sim 8 
        // document.getElementById("sim8btn").addEventListener("click", app.nav);
        // //from home to sim 9 
        // document.getElementById("sim9btn").addEventListener("click", app.nav);
        // //from home to sim 10 
        // document.getElementById("sim10btn").addEventListener("click", app.nav);

    },
    nav: ev=>{
        let btn = ev.target;
        let target = btn.getAttribute("data-target");
        console.log("Navigate to", target);
        document.querySelector(".page.active").classList.remove("active");
        document.getElementById(target).classList.add("active");
    },
    buildHome: ()=>{
        console.log("after app.buildHome");
        // find the html body element
        let body = document.getElementById("body");
        // Header
        let header = document.createElement("div");
        header.id="header";
        header.textContent="DIVEINCHI";
        body.appendChild(header);
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
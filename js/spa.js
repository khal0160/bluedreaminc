// Tundra JS
let app = {
    pages: [],
    show: new Event('show'),
    init: () => {
      console.log("after app.init")
      app.pages = document.querySelectorAll('.page');
      app.pages.forEach((pg)=>{
        pg.addEventListener('show', app.pageShown);
      })
      history.replaceState({}, 'Card', '#card');
      window.addEventListener('popstate', app.poppin);
      app.KEY = "device" in window ? "REVIEW" + device.uuid : "REVIEWTEMPKEY";
     app.addListeners();
    },
    addListeners: () => {
        console.log("after addListeners");
        document.getElementById("diveinchiCharacter").addEventListener("click", app.openDiveinchi);
        document.getElementById("homeButton").addEventListener("click", app.nav);
        document.getElementById("s1Button").addEventListener("click", app.nav);
        document.getElementById("s2Button").addEventListener("click", app.nav);
        document.getElementById("s3Button").addEventListener("click", app.nav);
        document.getElementById("s4Button").addEventListener("click", app.nav);
        document.getElementById("s5Button").addEventListener("click", app.nav);
        document.getElementById("s6Button").addEventListener("click", app.nav);
        document.getElementById("s7Button").addEventListener("click", app.nav);
        document.getElementById("s8Button").addEventListener("click", app.nav);
        document.getElementById("s9Button").addEventListener("click", app.nav);
        document.getElementById("s10Button").addEventListener("click", app.nav);
    },
    nav: ev => {
      console.log("nav is being triggered")
      ev.preventDefault();
      let currentPage = ev.target.getAttribute('data-target');
      document.querySelector('.active').classList.remove('active');
      document.getElementById(currentPage).classList.add('active');
      console.log(currentPage);
      history.pushState({}, currentPage, `#${currentPage}`);
      document.getElementById(currentPage).dispatchEvent(app.show);
      let btn = ev.target;
      let target = btn.getAttribute("data-target");
      console.log("Navigate to", target);
      document.querySelector(".page.active").classList.remove("active");
      document.getElementById(target).classList.add("active");
    },
    pageShown: ev =>{
      console.log('Page', ev.target.id, 'just shown');
    },
    poppin: ev=>{
      console.log(location.hash, 'popstate event');
      let hash = location.hash.replace('#' ,'');
      document.querySelector('.active').classList.remove('active');
      document.getElementById(hash).classList.add('active');
      console.log(hash)
      history.pushState({}, currentPage, `#${currentPage}`);
      document.getElementById(hash).dispatchEvent(app.show);
    },
    openDiveinchi: ()=>{
      let btn = document.getElementById("characterPage");
      btn.dataset.target = "diveinchiSection"
      app.nav;
    }
  };
  const ready = "cordova" in window ? "deviceready" : "DOMContentLoaded";
  document.addEventListener(ready, app.init);

let app = {
    pages: [],
    simulations: [
      {
        name: "Testing",
        trackCount: 11, 
        description: "Blah Blah Blah",
        
      },
      {
        name: "Good Deeds And Synth",
        trackCount: 6, 
        description: "Blah Blah Blah",
      },
      {
        name: "Instant Gratification",
        trackCount: 27, 
        description: "Blah Blah Blah",
      },
      {
        name: "Micro dosing Fear",
        trackCount: 9, 
        description: "Blah Blah Blah",
      },
      {
        name: "Alternate Immersion",
        trackCount: 6, 
        description: "Blah Blah Blah",
      },
      {
        name: "Logical Eternity",
        trackCount: 3, 
        description: "Blah Blah Blah",
      },
      {
        name: "HitClips",
        trackCount: 7, 
        description: "Blah Blah Blah",
      },
      {
        name: "Lasouf",
        trackCount: 0, 
        description: "Blah Blah Blah",
      },
      {
        name: "Lorem Ipsum",
        trackCount: 8, 
        description: "Blah Blah Blah",
      },
      {
        name: "Plastic 604",
        trackCount: 10, 
        description: "Blah Blah Blah",
      },
    ],
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
        
        
        document.getElementById("homeButton").addEventListener("click", app.nav);
        document.getElementById("s1Button").addEventListener("click", app.nav);
        document.getElementById("s2Button").addEventListener("click", app.buildSimulation(2));
        document.getElementById("s3Button").addEventListener("click", app.buildSimulation(3));
        document.getElementById("s4Button").addEventListener("click", app.buildSimulation(4));
        document.getElementById("s5Button").addEventListener("click", app.buildSimulation(5));
        document.getElementById("s6Button").addEventListener("click", app.buildSimulation(6));
        document.getElementById("s7Button").addEventListener("click", app.buildSimulation(7));
        document.getElementById("s8Button").addEventListener("click", app.buildSimulation(8));
        document.getElementById("s9Button").addEventListener("click", app.buildSimulation(9));
        document.getElementById("s10Button").addEventListener("click", app.buildSimulation(10));
        
    },
    nav: ev => {
      console.log("nav is being triggered")
      ev.preventDefault();
      let currentPage = ev.target.getAttribute('data-target');
      console.log(currentPage);
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
    buildSimulation : (simNumber) =>{
      let body = document.getElementById("body");
      let simPage = document.createElement("section");
      simPage.classList.add("page");
      //<section class="page">
      body.appendChild(simPage);
      let simHead = document.createElement("div");
      simHead.classList.add("albumHead");
      //<div class="albumHead">Simulation_1: Testing</div>
      simHead.textContent="Simulation_"+simNumber+": Testing";
      //simHead.textContent("Simulation_"+simNumber+": Testing");
      simPage.appendChild(simHead);
      //<div class="albumContainer">
      let simContainer = document.createElement("div");
      simContainer.classList.add("albumContainer");
      simPage.appendChild(simContainer);
      //<div class="row">
      let simRow = document.createElement("div");
      simRow.classList.add("row");
      simContainer.appendChild(simRow);
      //<div class = "cover">
      let simCover = document.createElement("div");
      //<img src="">
      //<img src="">
      let frontCover = document.createElement("img");
      frontCover.src="";
      frontCover.classList.add("frontCover");
      
      let backCover = document.createElement("img");
      backCover.src="";
      backCover.classList.add("backCover");
      simCover.appendChild(frontCover);
      simCover.appendChild(backCover);

      console.log(app.simulations[simNumber-1]);
      //find the number of tracks in the simulation with the given simNumber
      //loop that number of times creating
      //<div class="row">
      //<img src="art/s1_2.jpg" alt="Dont fight it and you wont get hurt" width="300" height="300f">
      //<audio controls src="audio/s1_2.mp3"></audio>
    },
    buildStore :() =>{
      //find body
      //add stuff
    }
  };
  const ready = "cordova" in window ? "deviceready" : "DOMContentLoaded";
  document.addEventListener(ready, app.init);
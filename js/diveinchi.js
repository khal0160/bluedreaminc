
let app = {
    // PAGES ARRAY
    pages: [],
    // AUDIO PLAYER 
    audioPlayer: undefined, 
    // GLOBAL CURRENT TRACK STRING
    currentTrack: "",
    // GLOBAL LATEST UPLOAD STRING
    latestUpload: "",
    // INITIATE FUNCTION
    init: ()=>{
        console.log("after init")
        // DISPLAY LOADING SCREEN
        app.loading();
        // GRAB PAGES 
        app.pages = document.querySelectorAll('.page');
        // 
        app.pages.forEach((pg)=>{
            pg.addEventListener('show', app.pageShown);
        })
        // 
        app.addListeners();
        //
        audiojs.events.ready(function() {
            var as = audiojs.createAll();
          });
    },
    // ADDLISTENERS FUNCTION
    addListeners: ()=>{
        console.log("after addListeners")
        // document.getElementById("footPlayButton").addEventListener("click", app.playPause);
        document.getElementById("listenButton").addEventListener("click", app.pageNav);
        document.getElementById("watchButton").addEventListener("click", app.pageNav);
        document.getElementById("shopButton").addEventListener("click", app.pageNav);
        document.getElementById("headTitle").addEventListener("click", app.pageNav);
        document.getElementById("sim1Button").addEventListener("click", app.simMenuNav);
        document.getElementById("sim2Button").addEventListener("click", app.simMenuNav);
        document.getElementById("sim3Button").addEventListener("click", app.simMenuNav);
        document.getElementById("sim4Button").addEventListener("click", app.simMenuNav);
        document.getElementById("sim5Button").addEventListener("click", app.simMenuNav);
        document.getElementById("sim6Button").addEventListener("click", app.simMenuNav);
        document.getElementById("sim7Button").addEventListener("click", app.simMenuNav);
        document.getElementById("sim8Button").addEventListener("click", app.simMenuNav);
        document.getElementById("sim9Button").addEventListener("click", app.simMenuNav);
        document.getElementById("sim10Button").addEventListener("click", app.simMenuNav);
    },
    // NAV FUNC TO ACTIVATE CLICKED PAGE
    nav: ev=>{
        console.log("after nav");
        ev.preventDefault();
        let btn = ev.target;
        let tar = btn.getAttribute("data-target");
        console.log("Navigate to", tar);
        document.querySelector(".page.active").classList.remove("active");
        document.getElementById(tar).classList.add("active");
        app.buildSimulation(btn);
    },
    // MENU NAV FUNC 
    pageNav: ev=>{
        console.log("after pageNav");
        ev.preventDefault();
        let btn = ev.target;
        let dataTar = btn.getAttribute("data-target");
        let dataId = btn.getAttribute("id")
        console.log("Navigate to", dataTar);
        document.querySelector(".page.active").classList.remove("active");
        document.getElementById(dataTar).classList.add("active");
        console.log(dataTar);
        if(dataTar=="listenPage"){
            app.buildListenPage(dataTar);
            if(dataId != "listenButton"){
                app.clicked("listenButton");
            }
            else{
                app.clicked(dataId)
            }
        }
        if(dataTar=="watchPage"){ 
            app.buildAlgorithmsPage(dataTar);
            app.clicked(dataId);
        }
        if(dataTar=="shopPage"){
            app.buildShopPage(dataTar);
            app.clicked(dataId);
        }
    },
    // SIM MENU NAV FUNC 
    simMenuNav: ev=>{
        console.log("after simMenuNav");
        ev.preventDefault();
        let btn = ev.target;
        let dataTar = btn.getAttribute("data-target");
        let dataId = btn.getAttribute("id")
        console.log("Navigate to", dataTar);
        console.log(dataTar);
        
        if(dataTar=="sim1Page"){ 
            console.log("sim1Page selected")
            app.selected(dataId)
        }
        
        if(dataTar=="sim2Page"){
            console.log("sim2Page selected")
            app.selected(dataId)
        }

        if(dataTar=="sim3Page"){ 
            console.log("sim3Page selected")
            app.selected(dataId)
        }
        
        if(dataTar=="sim4Page"){
            console.log("sim4Page selected")
            app.selected(dataId)
        }

        if(dataTar=="sim5Page"){ 
            console.log("sim5Page selected")
            app.selected(dataId)
        }
        
        if(dataTar=="sim6Page"){
            console.log("sim6Page selected")
            app.selected(dataId)
        }

        if(dataTar=="sim7Page"){ 
            console.log("sim7Page selected")
            app.selected(dataId)
        }
        
        if(dataTar=="sim8Page"){
            console.log("sim8Page selected")
            app.selected(dataId)
        }

        if(dataTar=="sim9Page"){ 
            console.log("sim9Page selected")
            app.selected(dataId)
        }
        
        if(dataTar=="sim10Page"){
            console.log("sim10Page selected")
            app.selected(dataId)
        }
    },
    // BUILD THIS SIMULATION
    buildSimulation: tar =>{
        console.log('After buildSimulation');
        let target= tar.getAttribute('data-target');
        let find = app.simulations.find(element=>element.albumId === target);
        let temp = document.getElementById('albumRow');
        let content = temp.content; 
        let clone = content.cloneNode(true); 
        document.getElementById(target).appendChild(clone);
        document.querySelector('.albumArt').setAttribute("src",find.albumFrontCover)
        //BUILD TRACKLIST
        for(i=1; i < find.albumTrackCount+1;i++){
            let temp = document.getElementById('trackRow');
            let content = temp.content;
            let clone = content.cloneNode(true);
            document.getElementById(target).appendChild(clone);
            let allRows = document.getElementById(target).getElementsByClassName("row");
            let lastRow = allRows[allRows.length - 1];
            let track = app.trackList.find(element=>element.albumId === target && element.trackPosition === i);
            if (track !== undefined) {
                artSrc = track.trackArt;
                trackSrc = track.trackAudio;
                lastRow.querySelector('.trackArt').src = artSrc;
                lastRow.querySelector('.trackAudioSource').src = trackSrc;
                lastRow.querySelector('.trackTitle').textContent=track.trackName;
                lastRow.querySelector('.playTrackButton').addEventListener('click', app.playPause);
                lastRow.querySelector('.playTrackButton').setAttribute('trackPosition', i);
                lastRow.querySelector('.playTrackButton').setAttribute('trackId', track.trackId);
                lastRow.querySelector('.trackProgress').setAttribute('trackId', track.trackId);
                lastRow.querySelector('.trackCurrentTime').setAttribute('trackId', track.trackId);
                lastRow.querySelector('.trackEndTime').setAttribute('trackId', track.trackId);

            }
        }
    },
    // PLAY OR PAUSE FUNCTION
    playPause: ev=> {
        console.log("after playPause")
        // DEFINE EVENT TRACK NAME
        let trackId = ev.target.getAttribute("trackId")
        let oldTrackId = app.currentTrack.trackId
        // IF NAME EXISTS
        if (trackId!= null && trackId!= undefined){
            // IF CURRENTTRACK IS NOT EMPTY
            if (app.currentTrack.trackId!= trackId) {
                console.log("currentTrack is different than target")
                // UPDATE CURRENT TRACK
                app.updateCurrentTrack(trackId);
                // CHECK CURRENT TRACK STATE
                app.checkCurrentTrackState(ev, oldTrackId);
            } 
            // IF CURRENTTRACK IS EMPTY
            else {
                console.log("currentTrack is the same as target")
                // CHECK CURRENT TRACK STATE
                app.checkCurrentTrackState(ev, oldTrackId);          
            }
        }
        else{
            console.log("No track name found")
        }
    },
    // TRACKING TIME
    trackTime: ev=> {
        //Start Time Tracking
        currentPercent=app.audioPlayer.currentTime / app.audioPlayer.duration * 100;
        let progresses = document.querySelectorAll(".trackProgress");
        for (i = 0; i < progresses.length; i++) {
            if (progresses[i].getAttribute('trackid') == ev.target.getAttribute('trackid')) {
                progresses[i].style.width = currentPercent+ "%";
            }
        }
        let startTimes = document.querySelectorAll(".trackCurrentTime");
        let startTime = null;
        for (i = 0; i < startTimes.length; i++) {
            if (startTimes[i].getAttribute('trackid') == ev.target.getAttribute('trackid')) {
                startTime = startTimes[i];
            }
        }
        let endTimes = document.querySelectorAll(".trackEndTime");
        let endTime = null;
        for (i = 0; i < endTimes.length; i++) {
            if (endTimes[i].getAttribute('trackid') == ev.target.getAttribute('trackid')) {
                endTime = endTimes[i];
            }
        }
        currentMinute= Math.floor(app.audioPlayer.currentTime/60);
        currentSeconds= Math.floor(app.audioPlayer.currentTime-currentMinute*60);
        if(currentMinute<10){currentMinute = "0"+ currentMinute};
        if(currentSeconds<10){currentSeconds = "0"+ currentSeconds};
        startTime.textContent= currentMinute +":"+ currentSeconds;
        
        document.getElementById("footCurrentTime").textContent= currentMinute +":"+ currentSeconds;
        document.getElementById("trackCurrentTime").textContent= currentMinute +":"+ currentSeconds;
        //End Time Tracking
        currentEndMinute= Math.floor(app.audioPlayer.duration/60)-currentMinute;
        currentEndSeconds= 60-currentSeconds;
        if(currentEndMinute<10){currentEndMinute = "0"+ currentEndMinute};
        if(currentEndSeconds<10){currentEndSeconds = "0"+ currentEndSeconds};
        if(app.currentTrack.state==="playing"){
            endTime.textContent= currentEndMinute +":"+ currentEndSeconds;
            //document.querySelector("currentTrackEndTime").textContent= currentEndMinute +":"+ currentEndSeconds;
            //document.getElementById("footCurrentTime").textContent=a
            document.getElementById("footEndTime").textContent= currentEndMinute +":"+ currentEndSeconds;
        }
    },
    // CURRENT TRACK UPDATE
    updateCurrentTrack(trackId){
        console.log("after checkCurrentTrack: " + trackId);
        // Find the track from the trackList array
        let findTrack = app.trackList.find(element=>element.trackId == trackId);
        // Create a new object
        app.currentTrack = new Object();
        // Define object's variables
        app.currentTrack.name=findTrack.trackName;
        app.currentTrack.albumId=findTrack.albumId;
        app.currentTrack.albumPosition=findTrack.trackPosition;
        app.currentTrack.art=findTrack.trackArt;
        app.currentTrack.audio=findTrack.trackAudio;
        app.currentTrack.length=findTrack.trackLength;
        app.currentTrack.state="paused";
        app.currentTrack.currentTime="";
        app.currentTrack.endTime="";
        app.currentTrack.trackPosition=findTrack.trackPosition;
        app.currentTrack.trackId=findTrack.trackId;
        
    },
    // CHECK CURRENT TRACK IS PAUSED OR PLAYING
    checkCurrentTrackState(ev, oldTrackId){
        console.log("after checkCurrentTrackState");
        //IF CurrentTrack is PAUSED 
        if(app.currentTrack.state === "paused") {
            // IF audioPlayer is UNDEFINED
            console.log("playing");
            if (app.audioPlayer === undefined) {
                // audioPlayer gets defined
                app.audioPlayer = new Audio(app.currentTrack.audio);
            }
            if (app.currentTrack.trackId !== oldTrackId) {
                console.log("pausing current track because track has changed")
                app.audioPlayer.pause();
                console.log("changing audio source because track has changed")
                app.audioPlayer = new Audio(app.currentTrack.audio);
                console.log("changing all play button to play_arrow")
                let playButtons = document.querySelectorAll('.playTrackButton');

                for (i = 0; i < playButtons.length; i++) {
                    playButtons[i].textContent = "play_arrow";
                }
            }
            console.log("playing " + app.currentTrack.trackId)
            // IF DEFINED
            app.audioPlayer.play();
            app.audioPlayer.addEventListener('timeupdate', app.trackTime)
            // CHANGE STATE TO PLAYING
            app.currentTrack.state = "playing";
            ev.target.textContent="pause";
            document.getElementById("footPlayButton").textContent="pause";
            document.getElementById("footTrackName").textContent= app.currentTrack.name;
            document.getElementById("currentTrackArt").src=app.currentTrack.art;
        } 
        //IF CurrentTrack is PLAYING
        else if (app.currentTrack.state === "playing") {
            console.log("paused");
            app.audioPlayer.pause();
            app.audioPlayer.addEventListener('timeupdate', app.trackTime)
            // CHANGE STATE TO PAUSED
            app.currentTrack.state = "paused";
            document.getElementById("footPlayButton").textContent="play_arrow";
            ev.target.textContent="play_arrow";
            document.getElementById("playButton").textContent="play_arrow";
            document.getElementById("footTrackName").textContent= app.currentTrack.name;
 
        }
    },
    // BUILD LISTEN PAGE
    buildListenPage: ev=>{
        console.log("after buildListenPage");  
    },
    // BUILD ALGORITHMS PAGE
    buildAlgorithmsPage: ()=>{
        console.log("after buildAlgorithmsPage");
        
    },
    // BUILD VIDEO CATALOG PAGE
    buildVideoCatalogPage: ev=>{
        let videoInstruction =document.createElement("div");
        videoInstruction.classList.add("center");
        videoInstruction.innerHTML="No Videos, yet!";
        document.querySelector(".grid").innerHTML=""
        document.querySelector(".grid").appendChild(videoInstruction);
    },
    // BUILD SHOP PAGE
    buildShopPage: ev=>{
        console.log("after buildShopPage");
    },
    // LOADING FUNCTIONALITY
    loading: ()=>{
        document.getElementById('loading').classList.remove("hidden")
        setTimeout(function() {
            document.getElementById('loading').classList.add("hidden")
          }, 1000);
    },
    // CLICKED FUNCTIONALITY
    clicked: (id)=>{
        console.log("after clicked")
        document.querySelector(".clicked").classList.remove("clicked");
        document.getElementById(id).classList.add("clicked");  
    },
    // SELECTED FUNCTIONALITY
    selected: (id)=>{
        console.log("after selected")
        document.querySelector(".selected").classList.remove("selected");
        document.getElementById(id).classList.add("selected");  
    }, 
}
const ready = "DIVEICHI" in window ? "deviceready" : "DOMContentLoaded";
document.addEventListener(ready, app.init);


let app = {
    // PAGES ARRAY
    pages: [],
    // ARRAY OF ALBUM INFO OBJECTS
    simulations: [
        {
            albumId: "one",
            albumName: "Testing",
            albumTrackCount: 11, 
            albumDescription: "Blah Blah Blah",
            albumFrontCover: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s1_FrontCover.jpg",
            albumBackCover: "",
        },
        {
            albumId: "two",
            albumName: "Good Deeds And Synth",
            albumTrackCount: 6, 
            albumDescription: "Blah Blah Blah",
            albumFrontCover: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s2_FrontCover.jpg",
            albumBackCover: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s2_BackCover.jpg",
        },
        {
            albumId: "three",
            albumName: "Instant Gratification",
            albumTrackCount: 26, 
            albumDescription: "Blah Blah Blah",
            albumFrontCover: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_FrontCover.jpg",
            albumBackCover: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_BackCover.jpg",
        },
        {
            albumId: "four",
            albumName: "Micro dosing Fear",
            albumTrackCount: 9, 
            albumDescription: "Blah Blah Blah",
            albumFrontCover: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s4_FrontCover.jpg",
            albumBackCover: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s4_BackCover.jpg",
        },
        {
            albumId: "five",
            albumName: "Alternate Immersion",
            albumTrackCount: 6, 
            albumDescription: "Blah Blah Blah",
            albumFrontCover: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s5_FrontCover.jpg",
            albumBackCover: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s5_BackCover.jpg",
        },
        {
            albumId: "six",
            albumName: "Logical Eternity",
            albumTrackCount: 2, 
            albumDescription: "Blah Blah Blah",
            albumFrontCover: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s6_FrontCover.jpg",
            albumBackCover: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s6_BackCover.jpg",
        },
        {
            albumId: "seven",
            albumName: "HitClips",
            albumTrackCount: 7, 
            albumDescription: "Blah Blah Blah",
            albumFrontCover: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s7_FrontCover.jpg",
            albumBackCover: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s7_BackCover.jpg",
        },
        {
            albumId: "eight",
            albumName: "Lasouf",
            albumTrackCount: 0, 
            albumDescription: "Blah Blah Blah",
            albumFrontCover: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s8_FrontCover.jpg",
            albumBackCover: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s8_BackCover.jpg",
        },
        {
            albumId: "nine",
            albumName: "Lorem Ipsum",
            albumTrackCount: 8, 
            albumDescription: "Blah Blah Blah",
            albumFrontCover: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s9_FrontCover.jpg",
            albumBackCover: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s9_BackCover.jpg",
        },
        {
            albumId: "ten",
            albumFrontCover: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s10_FrontCover.png",
            albumBackCover: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s10_BackCover.png",
            albumName: "Plastic 604",
            albumTrackCount: 10, 
            albumDescription: "Blah Blah Blah",
        },
    ],
    // ARRAY OF TRACK INFO OBJECTS
    trackList:[
        {
            trackName: "Achievement Unlocked: New Level Of Abstraction",
            albumId: "one",
            trackPosition: 1,
            trackId: 1,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s1_1.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s1_1.mp3",
            trackLength: 1.29,
        },
        {
            trackName: "Dont Fight It And You Wont Get Hurt",
            albumId: "one",
            trackPosition: 2,
            trackId: 2, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s1_2.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s1_2.mp3",
            trackLength: 1.02,
        },
        {
            trackName: "Just A Few More",
            albumId: "one",
            trackPosition: 3, 
            trackId: 3,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s1_3.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s1_3.mp3",
            trackLength: 0.55,
        },
        {
            trackName: "Dont Act Like You Dont See Me",
            albumId: "one",
            trackPosition: 4, 
            trackId: 4,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s1_4.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s1_4.mp3",
            trackLength: 0.54,
        },
        {
            trackName: "Oh So You Bboy Huh, Ok Lets Go",
            albumId: "one",
            trackPosition: 5,
            trackId: 5, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s1_5.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s1_5.mp3",
            trackLength: 1.52,
        },
        {
            trackName: "There You Are",
            albumId: "one",
            trackPosition: 6, 
            trackId: 6,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s1_6.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s1_6.mp3",
            trackLength: 0.54,
        },
        {
            trackName: "Pretty People Malevolent Thoughts",
            albumId: "one",
            trackPosition: 7, 
            trackId: 7,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s1_7.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s1_7.mp3",
            trackLength: 1.20,
        },
        {
            trackName: "Balance",
            albumId: "one",
            trackPosition: 8, 
            trackId: 8,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s1_8.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s1_8.mp3",
            trackLength: 0.54,
        },
        {
            trackName: "Electric",
            albumId: "one",
            trackPosition: 9, 
            trackId: 9,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s1_9.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s1_9.mp3",
            trackLength: 0.54,
        },
        {
            trackName: "Locked In Memory And In Heart",
            albumId: "one",
            trackPosition: 10, 
            trackId: 10,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s1_10.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s1_10.mp3",
            trackLength: 0.54,
        },
        {
            trackName: "Road Ends Ahead",
            albumId: "one",
            trackPosition: 11, 
            trackId: 12,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s1_11.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s1_11.mp3",
            trackLength: 0.54,
        },
        {
            trackName: "Intro",
            albumId: "two",
            trackPosition: 1, 
            trackId: 13,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s2_BackCover.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s2_1.mp3",
        },
        {
            trackName: "1",
            albumId: "two",
            trackPosition: 2, 
            trackId: 14,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s2_BackCover.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s2_2.mp3",
        },
        {
            trackName: "2",
            albumId: "two",
            trackPosition: 3, 
            trackId: 15,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s2_BackCover.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s2_3.mp3",
        },
        {
            trackName: "3",
            albumId: "two",
            trackPosition: 4,
            trackId: 16, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s2_BackCover.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s2_4.mp3",
        },
        {
            trackName: "4",
            albumId: "two",
            trackPosition: 5, 
            trackId: 17,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s2_BackCover.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s2_5.mp3",
        },
        {
            trackName: "5",
            albumId: "two",
            trackPosition: 6, 
            trackId: 18,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s2_BackCover.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s2_6.mp3",
        },
        {
            trackName: "Achievement Unlocked New Level Of Production",
            albumId: "three",
            trackPosition: 1, 
            trackId: 19,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_1.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_1.mp3",
        },
        {
            trackName: "I",
            albumId: "three",
            trackPosition: 2, 
            trackId: 20,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_2.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_2.mp3",
        },
        {
            trackName: "Oh My",
            albumId: "three",
            trackPosition: 3, 
            trackId: 21,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_3.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_3.mp3",
        },
        {
            trackName: "Montreal Scene",
            albumId: "three",
            trackPosition: 4, 
            trackId: 22,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_4.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_4.mp3",
        },
        {
            trackName: "Blue Dream",
            albumId: "three",
            trackPosition: 5, 
            trackId: 23,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_5.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_5.mp3",
        },
        {
            trackName: "Prince Of Darkness",
            albumId: "three",
            trackPosition: 6,
            trackId: 24, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_6.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_6.mp3",
        },
        {
            trackName: "Jocker Tantrum",
            albumId: "three",
            trackPosition: 7, 
            trackId: 25,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_7.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_7.mp3",
        },
        {
            trackName: "I Never Got Why Youd Do That",
            albumId: "three",
            trackPosition: 8, 
            trackId: 26,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_8.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_8.mp3",
        },
        {
            trackName: "Rabbit Hole",
            albumId: "three",
            trackPosition: 9,
            trackId: 27, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_9.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_9.mp3",
        },
        {
            trackName: "Conquering Vibe",
            albumId: "three",
            trackPosition: 10,
            trackId: 28, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_10.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_10.mp3",
        },
        {
            trackName: "Raised By The Internet",
            albumId: "three",
            trackPosition: 11,
            trackId: 29, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_11.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_11.mp3",
        },
        {
            trackName: "Past Present Future",
            albumId: "three",
            trackPosition: 12, 
            trackId: 30,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_12.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_12.mp3",
        },
        {
            trackName: "Cathartic",
            albumId: "three",
            trackPosition: 13, 
            trackId: 31,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_13.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_13.mp3",
        },
        {
            trackName: "Catacomb Vision",
            albumId: "three",
            trackPosition: 14,
            trackId: 32, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_14.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_14.mp3",
        },
        {
            trackName: "Wounded Hearts With Damaged Souls",
            albumId: "three",
            trackPosition: 15, 
            trackId: 33,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_15.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_15.mp3",
        },
        {
            trackName: "Rhythm In The Beat",
            albumId: "three",
            trackPosition: 16,
            trackId: 34, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_16.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_16.mp3",
        },
        {
            trackName: "Time Travel Race Car",
            albumId: "three",
            trackPosition: 17, 
            trackId: 35,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_17.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_17.mp3",
        },
        {
            trackName: "Truth To Passion",
            albumId: "three",
            trackPosition: 18, 
            trackId: 36,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_18.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_18.mp3",
        },
        {
            trackName: "Fight Or Flight Which Do You Choose",
            albumId: "three",
            trackPosition: 19, 
            trackId: 37,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_19.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_19.mp3",
        },
        {
            trackName: "Dummy Trap",
            albumId: "three",
            trackPosition: 20, 
            trackId: 38,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_20.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_20.mp3",
        },
        {
            trackName: "Please Try Again Later",
            albumId: "three",
            trackPosition: 21, 
            trackId: 39,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_21.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_21.mp3",
        },
        {
            trackName: "Dethroned",
            albumId: "three",
            trackPosition: 21, 
            trackId: 40,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_22.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_22.mp3",
        },
        {
            trackName: "Where Is Earl",
            albumId: "three",
            trackPosition: 23, 
            trackId: 41,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_23.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_23.mp3",
        },
        {
            trackName: "Good Morning",
            albumId: "three",
            trackPosition: 24, 
            trackId: 42,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_24.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_24.mp3",
        },
        {
            trackName: "Soul Room",
            albumId: "three",
            trackPosition: 25, 
            trackId: 43,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_25.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_25.mp3",
        },
        {
            trackName: "Demetreus Mathew Thomson",
            albumId: "three",
            trackPosition: 26, 
            trackId: 44,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_26.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_26.mp3",
        },
        {
            trackName: "Why Are You Terrified",
            albumId: "four",
            trackPosition: 1, 
            trackId: 45,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s4_1.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s4_1.mp3",
        },
        {
            trackName: "I Cant Feel Enough",
            albumId: "four",
            trackPosition: 2, 
            trackId: 46,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s4_2.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s4_2.mp3",
        },
        {
            trackName: "Lord Forgive Me For I Have Sinned",
            albumId: "four",
            trackPosition: 3, 
            trackId: 47,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s4_3.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s4_3.mp3",
        },
        {
            trackName: "Lost In The Desert, Microdosing Fear",
            albumId: "four",
            trackPosition: 4, 
            trackId: 48,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s4_4.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s4_4.mp3",
        },
        {
            trackName: "Dancing Moral Trails",
            albumId: "four",
            trackPosition: 5, 
            trackId: 49,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s4_5.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s4_5.mp3",
        },
        {
            trackName: "Lost In The Amazon, Micro dosing Fear",
            albumId: "four",
            trackPosition: 6, 
            trackId: 50,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s4_6.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s4_6.mp3",
        },
        {
            trackName: "Clearing Clouds",
            albumId: "four",
            trackPosition: 7, 
            trackId: 51,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s4_7.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s4_7.mp3",
        },
        {
            trackName: "Merry Go Round",
            albumId: "four",
            trackPosition: 8, 
            trackId: 52,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s4_8.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s4_8.mp3",
        },
        {
            trackName: "Young Dive In Chi",
            albumId: "four",
            trackPosition: 9, 
            trackId: 53,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s4_9.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s4_9.mp3",
        },
        {
            trackName: "Shopping In The Early 2000s",
            albumId: "five",
            trackPosition: 1, 
            trackId: 54,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s5_1.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s5_1.mp3",
        },
        {
            trackName: "Walking To My Tesla To Swim With Whales",
            albumId: "five",
            trackPosition: 2, 
            trackId: 55,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s5_2.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s5_2.mp3",
        },
        {
            trackName: "Seen It Before",
            albumId: "five",
            trackPosition: 3, 
            trackId: 56,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s5_3.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s5_3.mp3",
        },
        {
            trackName: "97 To Billings Bridge",
            albumId: "five",
            trackPosition: 4, 
            trackId: 57,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s5_4.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s5_4.mp3",
        },
        {
            trackName: "You Pass Butter",
            albumId: "five",
            trackPosition: 5, 
            trackId: 58,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s5_5.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s5_5.mp3",
        },
        {
            trackName: "Burn Out",
            albumId: "five",
            trackPosition: 6, 
            trackId: 59,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s5_6.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s5_6.mp3",
        },
        {
            trackName: "Imminent Onus",
            albumId: "six",
            trackPosition: 1, 
            trackId: 60,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s6_1.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s6_1.mp3",
        }, 
        {
            trackName: "Ancient Philosophy",
            albumId: "six",
            trackPosition: 2, 
            trackId: 61,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s6_2.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s6_2.mp3",
        },
        {
            trackName: "DreamScape",
            albumId: "seven",
            trackPosition: 1, 
            trackId: 62,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s7_1.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s7_1.mp3",
        },
        {
            trackName: "Felicia",
            albumId: "seven",
            trackPosition: 2, 
            trackId: 63,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s7_2.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s7_2.mp3",
        },
        {
            trackName: "Nirvana",
            albumId: "seven",
            trackPosition: 3, 
            trackId: 64,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s7_3.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s7_3.mp3",
        },
        {
            trackName: "NeverKnown",
            albumId: "seven",
            trackPosition: 4, 
            trackId: 65,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s7_4.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s7_4.mp3",
        },
        {
            trackName: "Unknown",
            albumId: "seven",
            trackPosition: 5, 
            trackId: 66,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s7_5.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s7_5.mp3",
        },
        {
            trackName: "Laughter",
            albumId: "seven",
            trackPosition: 6, 
            trackId: 67,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s7_6.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s7_6.mp3",
        },
        {
            trackName: "Glitch",
            albumId: "seven",
            trackPosition: 7, 
            trackId: 68,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s7_7.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s7_7.mp3",
        },
        {
            trackName: "What I Gotta Do To Play",
            albumId: "nine",
            trackPosition: 1, 
            trackId: 69,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s9_1.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s9_1.mp3",
        },
        {
            trackName: "Bicycle For The Mind",
            albumId: "nine",
            trackPosition: 2, 
            trackId: 70,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s9_2.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s9_2.mp3",
        },
        {
            trackName: "SoundCloud Gaara",
            albumId: "nine",
            trackPosition: 3, 
            trackId: 71,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s9_3.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s9_3.mp3",
        },
        {
            trackName: "Defeat Your Own Mind",
            albumId: "nine",
            trackPosition: 4, 
            trackId: 72,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s9_4.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s9_4.mp3",
        },
        {
            trackName: "Everydays Journey",
            albumId: "nine",
            trackPosition: 5, 
            trackId: 73,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s9_5.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s9_5.mp3",
        },
        {
            trackName: "I Still Love You",
            albumId: "nine",
            trackPosition: 6, 
            trackId: 74,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s9_6.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s9_6.mp3",
        },
        {
            trackName: "Selflish",
            albumId: "nine",
            trackPosition: 7, 
            trackId: 75,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s9_7.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s9_7.mp3",
        },
        {
            trackName: "Jacuzzi On A Balcony",
            albumId: "nine",
            trackPosition: 8, 
            trackId: 76,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s9_8.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s9_8.mp3",
        },
        {
            trackName: "Front Street Boys",
            albumId: "ten",
            trackPosition: 1, 
            trackId: 77,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s10_1.png",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s10_1.wav",
        },
        {
            trackName: "All Rise",
            albumId: "ten",
            trackPosition: 2, 
            trackId: 78,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s10_2.png",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s10_2.wav",
        },
        {
            trackName: "Step Up",
            albumId: "ten",
            trackPosition: 3, 
            trackId: 79,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s10_3.png",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s10_3.wav",
        },
        {
            trackName: "No You Never Thought",
            albumId: "ten",
            trackPosition: 4, 
            trackId: 80,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s10_4.png",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s10_4.wav",
        },
        {
            trackName: "Sunday Night Train Freestyle",
            albumId: "ten",
            trackPosition: 5, 
            trackId: 81,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s10_5.png",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s10_5.wav",
        },
        {
            trackName: "Lets Drive Away",
            albumId: "ten",
            trackPosition: 6, 
            trackId: 82,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s10_6.png",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s10_6.wav",
        },
        {
            trackName: "Ostracized From Normality",
            albumId: "ten",
            trackPosition: 7, 
            trackId: 83,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s10_7.png",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s10_7.wav",
        },
        {
            trackName: "Counterfeit Baby",
            albumId: "ten",
            trackPosition: 8, 
            trackId: 84,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s10_8.png",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s10_8.wav",
        },
        {
            trackName: "Save Your Apologies",
            albumId: "ten",
            trackPosition: 9, 
            trackId: 85,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s10_9.png",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s10_9.wav",
        },
        {
            trackName: "Youthful Apathy",
            albumId: "ten",
            trackPosition: 10, 
            trackId: 86,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s10_10.png",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s10_10.wav",
        },
        {
            trackName: "Hit The Ground Hard",
            albumId: "ten",
            trackPosition: 11, 
            trackId: 87,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s10_11.png",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s10_11.wav",
        },
        {
            trackName: "Encore That",
            albumId: "ten",
            trackPosition: 12, 
            trackId: 88,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s10_12.png",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s10_12.wav",
        },

        

    ],
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
        document.getElementById("listenButton").addEventListener("click", app.menuNav);
        document.getElementById("catalogButton").addEventListener("click", app.menuNav);
        document.getElementById("shopButton").addEventListener("click", app.menuNav);
        document.getElementById("audioChoice").addEventListener("click", app.clickedChoice);
        document.getElementById("videoChoice").addEventListener("click", app.clickedChoice);
        document.getElementById("philoButton").addEventListener("click", app.clickedChoice2);
        document.getElementById("lotusButton").addEventListener("click", app.clickedChoice2);
        document.getElementById("glitchButton").addEventListener("click", app.clickedChoice2);
        document.getElementById("diveinchiButton").addEventListener("click", app.clickedChoice2);
        document.getElementById("lasoufButton").addEventListener("click", app.clickedChoice2);
        document.getElementById("enterButton").addEventListener("click", app.enterAlgorithm);
        document.getElementById("headTitle").addEventListener("click", app.menuNav);
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
    menuNav: ev=>{
        console.log("after menuNav");
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
        if(dataTar=="algorithmsPage"){ 
            app.buildAlgorithmsPage(dataTar);
            app.clicked(dataId);
        }
        if(dataTar=="catalogPage"){
            app.buildAudioCatalogPage(dataTar);
            app.clicked(dataId);
        }
        if(dataTar=="shopPage"){
            app.buildShopPage(dataTar);
            app.clicked(dataId);
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
    // BUILD AUDIO CATALAG PAGE
    buildAudioCatalogPage: ev=>{
        console.log("after buildCatalogPage");
        let audioInstruction =document.createElement("div");
        audioInstruction.classList.add("center");
        audioInstruction.innerHTML="No Audio, yet!";
        document.querySelector(".grid").innerHTML=""
        document.querySelector(".grid").appendChild(audioInstruction);
        // document.querySelector(".grid").innerHTML="";
        // for (let i = app.trackList.length-1; i >=0; i--) {
        //     let img = document.createElement("img");
        //     img.src = app.trackList[i].trackArt;
        //     img.classList.add("gridBox");
        //     document.querySelector(".grid").appendChild(img);
        // }  
        
    },
    // BUILD VIDEO CATALAG PAGE
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
    // AUDIO OR VIDEO CLICK CHOICE
    clickedChoice: ev =>{
        ev.preventDefault();
        console.log("after clickedChoice")
        console.log(ev.target);
        let btn = ev.target;
        let dataTar = btn.getAttribute("data-target");
        if(dataTar == "videoChoice"){
            app.buildVideoCatalogPage();
        }
        else if(dataTar == "audioChoice"){
            app.buildAudioCatalogPage();
        }
        document.querySelector(".clickedChoice").classList.remove("clickedChoice");
        document.getElementById(dataTar).classList.add("clickedChoice");
    },
    
}
const ready = "DIVEICHI" in window ? "deviceready" : "DOMContentLoaded";
document.addEventListener(ready, app.init);

const playlistSounds = document.getElementById('playlist-sounds');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');
const shuffleButton = document.getElementById('shuffle');

const allSounds = [
    {
        id: 0,
        title: "",
        length: "",
        src: ""
    },
    {
        id: 1,
        title: "",
        length: "",
        src: ""
    },
    {
        id: 2,
        title: "",
        length: "",
        src: ""
    },
    {
        id: 3,
        title: "",
        length: "",
        src: ""
    },
    {
        id: 4,
        title: "",
        length: "",
        src: ""
    },
    {
        id: 5,
        title: "",
        length: "",
        src: ""
    },
    {
        id: 6,
        title: "",
        length: "",
        src: ""
    },
    {
        id: 7,
        title: "",
        length: "",
        src: ""
    },
    {
        id: 8,
        title: "",
        length: "",
        src: ""
    },
    {
        id: 9,
        title: "",
        length: "",
        src: ""
    },
    {
        id: 10,
        title: "",
        length: "",
        src: ""
    },
    {
        id: 11,
        title: "",
        length: "",
        src: ""
    },
    {
        id: 12,
        title: "",
        length: "",
        src: ""
    }   
];

const audio = new Audio();
let userData = {
    sounds: [...allSounds],
    currentSound: null,
    soundCurrentTime: 0,
};

/* Finds the sounds and sets the current time */
const playSound = (id) => {
    const sounds = userData?.sounds.find((sounds) => sounds.id === id);
    audio.src = sounds.src;
    audio.title = sounds.title;

    if (userData?.currentSound === null || userData?.currentSound.id !== sounds.id) {
        audio.currentTime = 0;
    } else {
        audio.currentTime = userData.soundCurrentTime;
    }
    userData.currentSound = sounds;
    playButton.classList.add("playing");

    audio.play();
};

const pauseSound = () => {
    userData.soundCurrentTime = audio.currentTime;

    playButton.classList.remove("playing");
    audio.pause();
};

const playNextSound = () => {
    if (userData?.currentSound === null) {
        playSound(userData?.sounds[0].id);
    } else {
        const currentSoundIndex = getCurrentSoundIndex();
        const nextSound = userData?.sounds[currentSoundIndex + 1];

        playSound(nextSound.id);
    }
};

const playPreviousSound = () => {
    if (userData?.currentSound === null) return;
    else {
        const currentSoundIndex = getCurrentSoundIndex();
        const previousSound = userData?.sounds[currentSoundIndex - 1];

        playSound(previousSound.id);
    }
};

const shuffle = () => {
    userData?.sounds.sort(() => Math.random() - 0.5);
    userData.currentSound = null;
    userData.soundCurrentTime = 0;

    renderSounds(userData?.sounds);
    pauseSound();
    setPlayerDisplay();
    setPlayButtonAccessibleText();
};

const setPlayerDisplay = () => {
    const playingSound = document.getElementById("player-sound-title");
    const soundArtist = document.getElementById("player-sound-artist");
    const currentTitle = userData?.currentSound?.title;
    const currentArtist = userData?.currentSound?.artist;

    playingSound.textContent = currentTitle ? currentTitle : "";
    soundArtist.textContent = currentArtist ? currentArtist : "";
};

const highlightCurrentSound = () => {
    const playlistSoundElements = document.querySelectorAll(".playlist-sound");
    const soundToHighlight = document.getElementById(
        `sound-${userData?.currentSound?.id}`
    );

    playlistSoundElements.forEach((soundEl) => {
        soundEl.removeAttribute("aria-current");
    });

    if (soundToHighlight) soundToHighlight.setAttribute("aria-current", "true");
};

const renderSounds = (array) => {
    const soundsHTML = array
        .map((sound) => {
            return `
      <li id="sound-${sound.id}" class="playlist-sound">
      <button class="playlist-sound-info">
          <span class="playlist-sound-title">${sound.title}</span>
          <span class="playlist-sound-duration">${sound.duration}</span>
      </button>
      <button class="playlist-sound-delete" aria-label="Delete ${sound.title}">
            
      </button>
      </li>
      `})
        .join("");

    playlistSounds.innerHTML = soundsHTML;
};

const setPlayButtonAccessibleText = () => {
    const sound = userData?.currentSound || userData?.sounds[0];

    playButton.setAttribute(
        "aria-label",
        sound?.title ? `Play ${sound.title}` : "Play"
    );
};

const getCurrentSoundIndex = () => userData?.sounds.indexOf(userData.currentSound);

playButton.addEventListener("click", () => {
    if (userData?.currentSound === null) {
        playSound(userData?.sounds[0].id);
    } else {
        playSound(userData?.currentSound.id);
    }
});

pauseButton.addEventListener("click", pauseSound);

nextButton.addEventListener("click", playNextSound);

previousButton.addEventListener("click", playPreviousSound);

shuffleButton.addEventListener("click", shuffle);

renderSounds(userData?.sounds);
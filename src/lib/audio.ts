
let audioContext: AudioContext | null = null;
const audioBufferCache: { [key: string]: AudioBuffer } = {};

const getAudioContext = () => {
    if (typeof window !== 'undefined' && !audioContext) {
        audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioContext;
};

async function playSound(url: string) {
    const context = getAudioContext();
    if (!context) {
        console.error("AudioContext is not supported in this browser.");
        return;
    }

    if (context.state === 'suspended') {
        try {
            await context.resume();
        } catch (e) {
            console.error("Could not resume AudioContext:", e);
            return;
        }
    }

    try {
        let audioBuffer: AudioBuffer;

        if (audioBufferCache[url]) {
            // Use cached buffer
            audioBuffer = audioBufferCache[url];
        } else {
            // Fetch and cache the buffer
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const arrayBuffer = await response.arrayBuffer();
            audioBuffer = await context.decodeAudioData(arrayBuffer);
            audioBufferCache[url] = audioBuffer;
        }
        
        const source = context.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(context.destination);
        source.start(0);
    } catch (error) {
        console.error("Audio playback failed:", error);
    }
}

export function playCorrectSound() {
    // A pleasant chime sound from a reliable source (MP3 format)
    playSound('https://cdn.pixabay.com/audio/2022/03/15/audio_a46a3011b2.mp3');
}

export function playIncorrectSound() {
    // A classic error sound from a reliable source (MP3 format)
    playSound('https://cdn.pixabay.com/audio/2022/03/10/audio_c6347c7c4b.mp3');
}

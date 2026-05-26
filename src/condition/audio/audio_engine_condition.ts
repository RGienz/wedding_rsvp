import { ref } from 'vue'

export function background_audio() {
    const isPlaying = ref(false)
    const audioPlayer = ref<HTMLAudioElement | null>(null)
    
    const audioUrl = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'

    const toggleAudio = () => {
        if (!audioPlayer.value) return
        
        if (isPlaying.value) {
            audioPlayer.value.pause()
        } else {
            audioPlayer.value.play().catch(err => {
                // console.log("Browser audio autostart restriction handled cleanly:", err)
            })
        }
        isPlaying.value = !isPlaying.value
    }

    const trigger_timer_setup = () => {
        const trigger_click_button = () => {
        if (!isPlaying.value && audioPlayer.value) {
            audioPlayer.value.volume = 0.4
            audioPlayer.value.play().then(() => {
            isPlaying.value = true
            }).catch(() => {})
        }
        document.removeEventListener('click', trigger_click_button)
        }
        document.addEventListener('click', trigger_click_button)
    }

    return {
        isPlaying,
        audioPlayer,
        audioUrl,
        toggleAudio,
        trigger_timer_setup
    }
}
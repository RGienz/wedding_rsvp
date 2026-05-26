import { onMounted } from 'vue'

export function useLifecycle(trigger_timer_setup: () => void) {
  onMounted(() => {
    trigger_timer_setup()
  })
}
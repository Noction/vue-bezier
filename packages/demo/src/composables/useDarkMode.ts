import { onMounted, ref, watch } from 'vue'

const isDark = ref(false)

export function useDarkMode() {
  onMounted(() => {
    // Check localStorage and system preference
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    isDark.value = savedTheme === 'dark' || (!savedTheme && prefersDark)

    // Apply initial theme
    updateTheme()
  })

  watch(isDark, () => {
    updateTheme()
  })

  function updateTheme() {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
    else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  function toggle() {
    isDark.value = !isDark.value
  }

  return {
    isDark,
    toggle,
  }
}

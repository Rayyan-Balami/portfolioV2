import * as React from 'react'

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: string;
  storageKey?: string;
}

export function ThemeProvider({ children, defaultTheme = 'light', storageKey = 'theme' }: ThemeProviderProps) {
  const [theme, setTheme] = React.useState(
    () => localStorage.getItem(storageKey) || defaultTheme
  )

  React.useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    localStorage.setItem(storageKey, theme)
  }, [theme, storageKey])

  const value = React.useMemo(
    () => ({
      theme,
      setTheme: (newTheme: string) => setTheme(newTheme),
    }),
    [theme]
  )

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

type ThemeProviderState = {
  theme: string
  setTheme: (theme: string) => void
}

const ThemeContext = React.createContext<ThemeProviderState | undefined>(undefined)

export const useTheme = () => {
  const context = React.useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
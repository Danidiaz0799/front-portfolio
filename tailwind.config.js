/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        'primary-light': 'var(--primary-light)',
        secondary: 'var(--secondary)',
        'secondary-dark': 'var(--secondary-dark)',
        'secondary-light': 'var(--secondary-light)',
        accent: 'var(--accent)',
        'accent-dark': 'var(--accent-dark)',
        'accent-light': 'var(--accent-light)',
        background: 'var(--background)',
        'background-alt': 'var(--background-alt)',
        'background-dark': 'var(--background-dark)',
        'background-dark-alt': 'var(--background-dark-alt)',
        text: 'var(--text)',
        'text-light': 'var(--text-light)',
        'text-lighter': 'var(--text-lighter)',
        'text-white': 'var(--text-white)',
        border: 'var(--border)',
        'border-dark': 'var(--border-dark)',
        success: 'var(--success)',
        warning: 'var(--warning)',
        error: 'var(--error)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
        inner: 'var(--shadow-inner)',
        primary: 'var(--shadow-primary)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        DEFAULT: 'var(--radius)',
        md: 'var(--radius)', // Alias for default
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        full: 'var(--radius-full)',
      },
      // Puedes añadir más extensiones si definiste otras variables CSS (spacing, etc.)
    },
  },
  plugins: [],
}


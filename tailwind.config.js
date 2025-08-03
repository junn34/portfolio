/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // App Router 사용 시
    './pages/**/*.{js,ts,jsx,tsx}', // Pages Router 사용 시
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        border: 'var(--border)',
        ring: 'var(--ring)',
        input: 'var(--input)',
        accent: 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',
        // 필요한 다른 색상도 계속 추가 가능
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },
    },
  },
  darkMode: 'class', // 다크모드 변수 적용 위해 필수
  plugins: [],
};

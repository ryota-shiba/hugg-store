module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F8F5F0',
        surface: '#EDEAE3',
        text: '#1C1A17',
        muted: '#6B6455',
        accent: '#C85A38',
        'accent-lt': '#D4836B',
        dark: '#3D3528',
        border: '#DDD8CF',
      },
      fontFamily: {
        mincho: ['"Shippori Mincho"', 'serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Noto Sans JP"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(61, 53, 40, 0.12)',
      },
    },
  },
  plugins: [],
}

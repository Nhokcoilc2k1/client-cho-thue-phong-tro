/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}', './public/index.html'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Helvetica', 'Arial', 'sans-serif'],
            },
            width: {
                1120: '1120px',
            },
            backgroundColor: {
                primary: '#f5f5f5',
                secondary1: '#1266dd',
                secondary2: '#f73859',
            },
            maxWidth: {
                600: '600px',
            },
            textColor: {
                text: '#333',
            },
        },
    },
    plugins: [],
};

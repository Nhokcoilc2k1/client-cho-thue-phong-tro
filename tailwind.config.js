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
                1024: '1024px',
                1004: '1004px',
                984: '984px',
                768: '768px',
                640: '640px',
            },
            backgroundColor: {
                primary: '#f5f5f5',
                primary2: '#e5e5e5',
                secondary1: '#1266dd',
                secondary2: '#f73859',
                bgSearch: '#febb02',
            },
            maxWidth: {
                600: '600px',
                1120: '1120px',
            },
            textColor: {
                text: '#333',
                primary2: '#1266dd',
                icon: '#777',
                hv: '#f60',
            },
            boxShadow: {
                hv1: '0 0 10px 1px rgb(0 0 0 / 10%)',
                hv2: '0 0 10px 10px rgb(0 0 0 / 5%)',
            },
        },
    },
    plugins: [],
};

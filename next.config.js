module.exports = {
    async rewrites() {
        // hanya terapkan rewrites di development 
        return [
            {
                source: '/',
                destination: '/index.html',
            },
            {
                source: '/:path*',
                destination: '/:path*',
            },
        ];
    },
};
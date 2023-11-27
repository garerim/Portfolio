/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')();
 
module.exports = withNextIntl({
    eslint: {
        ignoreDuringBuilds: true,
    },
    experimental: {
        serverActions: true
    }
});

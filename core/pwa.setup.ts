import {VitePWAOptions} from "vite-plugin-pwa";

export const pwaSetup = {
    srcDir: 'core',
    filename: 'sw.js',
    base: "/",
    // workbox: {
    //     cleanupOutdatedCaches: true,
    // },
    // strategies: 'injectManifest',

    // registerType: 'autoUpdate',
    includeAssets: [
        'favicon.svg',
        'robots.txt',
        'apple-touch-icon.png',

        "index.html",
        "about",
        "about/index.html",
        "quasar.prod.css"
    ],
    manifest: {
        name: "PWA Router",
        short_name: "PWA Router",
        theme_color: "#ffffff",
        icons: [
            {
                src: "pwa-192x192.png",
                sizes: "192x192",
                type: "image/png"
            },
            {
                src: "/pwa-512x512.png",
                sizes: "512x512",
                type: "image/png"
            }, {
                src: "pwa-512x512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "any maskable"
            }
        ]
    },
    // devOptions: {"enabled": false, "type": "module", navigateFallback: "index.html"}
} as Partial<VitePWAOptions>


// export const pwaSetup = {
//     // workbox: {
//     //     cleanupOutdatedCaches: false,
//     // },
//     registerType: 'autoUpdate',
//     base: '/',
//     srcDir: 'core',
//     filename: 'sw.ts',
//     // includeAssets: [
//     //     'favicon.svg',
//     //     'favicon.ico',
//     //     'robots.txt',
//     //     'apple-touch-icon.png',
//     // ],
//     manifest: {
//         name: 'Human Resources',
//         short_name: 'HR app',
//         description: 'R',
//         theme_color: '#f57c00',
//         icons: [
//             {
//                 src: 'icon-192x192.png',
//                 sizes: '192x192',
//                 type: 'image/png',
//             },
//             {
//                 src: 'icon-512x512.png',
//                 sizes: '512x512',
//                 type: 'image/png',
//             },
//             {
//                 src: 'icon-512x512.png',
//                 sizes: '512x512',
//                 type: 'image/png',
//                 purpose: 'any maskable',
//             },
//         ],
//     },
// } as any
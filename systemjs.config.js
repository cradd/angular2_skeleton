(function(global) {
    System.config({
        paths: {
            'npm_': 'node_modules/'
        },
        map: {
            app: 'app',
            '@angular/core': 'npm_@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm_@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm_@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm_@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm_@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm_@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm_@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm_@angular/forms/bundles/forms.umd.js',

            'rxjs': 'npm_rxjs',
            'angular-in-memory-web-api': 'npm_angular-in-memory-web-api'
        },

        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'angular-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            }
        }
    });
})(this);
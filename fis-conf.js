/**
 * 将 fis 的构建根目录切换到 ./src 目录下，以便更好的管理源代码
 */
fis.project.setProjectRoot('src');

/**
 * 处理less
 */
fis.match('*.less', {
    parser: fis.plugin('less'),
    rExt: '.css'
});

/**
 * 将page里面的页面，重命名并发布到web根目录中
 */
fis.match("/pages/(*)/*(.html)", {
    release: '/$1$2',
    useCache: false
});
/*fis.match("/pages/(*)/*(.html)", {
    release: '/pages/$1/$1$2',
    useCache: false
});*/


/*fis.match('*.{less,css}', {
    packTo: 'static/css/common.css'
});*/

/*fis.match('*.js', {
    packTo: 'static/js/all.js'
});*/

/**
 * 发布上线的版本
 */
fis.project.currentMedia() === 'dist' && fis.util.del(fis.project.getProjectPath('../public'));

fis.media('dist')
    .match('*.{js,css,less,png,jpg,jpeg,gif,svg}', {
        useHash: true
    })
    .match('*.png', {
        optimizer: fis.plugin('png-compressor')
    })
    .match('*.{css,less}', {
        optimizer: fis.plugin('clean-css')
    })
    .match('*.{js,tpl}', {
        optimizer: fis.plugin('uglify-js')
    })
    .match('*.min.js', {
        optimizer: null
    })
    .match('::package', {
        spriter: fis.plugin('csssprites')
        /*postpackager: fis.plugin('loader', {
            allInOne: true
        })*/
    });
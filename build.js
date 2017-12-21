'use strict';
const {execSync} = require('child_process');
const {writeFileSync} = require('fs');
const {resolve} = require('path');
const ghPages = require('gh-pages');

// 生成网页
execSync(`gitbook build`);
console.log('生成网页静态文件成功');

// 自定义域名
writeFileSync(resolve('_book', 'CNAME'), 'go.wuhaolin.cn');

// 发布
ghPages('_book', (err) => {
    if (err) {
        console.error('发布失败', err);
    }
    console.info('发布成功');
});



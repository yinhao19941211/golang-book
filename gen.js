'use strict';
const {execSync} = require('child_process');
const {writeFileSync} = require('fs');
const {resolve} = require('path');

// 生成网页
console.log('开始生成网页静态文件');
execSync(`node ${resolve(__dirname, 'node_modules/.bin/gitbook')} build`);
console.log('生成网页静态文件成功');

// 自定义域名
writeFileSync(resolve('_book', 'CNAME'), 'go.wuhaolin.cn');
console.log('生成静态网站完毕');
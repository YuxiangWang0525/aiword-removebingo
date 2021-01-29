// ==UserScript==
// @name         单词教练记忆曲线隐藏Bingo脚本
// @namespace    http://removebingo.yuxiangwang0525.com
// @version      1.1.5
// @description  隐藏Bingo
// @author       YuxiangWang_0525
// @match        https://aiword.pgcxhy.com.cn/aiword/homepage.html
// @icon         https://ima.warma.website/rb.png
// ==/UserScript==
(function() {
    'use strict';
setTimeout(function(){
setInterval(function() {
	var b = document.getElementsByClassName("is_Ok")[0];
    b.parentNode.removeChild(b);
		}, 0);
},"1000");
})();
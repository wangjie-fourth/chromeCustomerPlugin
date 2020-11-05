chrome.runtime.onInstalled.addListener(function() {
    console.log('插件以加载')
    document.addEventListener('DOMContentLoaded', function () {
        chrome.extension.getBackgroundPage().console.log('触发DOMContentLoaded事件')
        // window.PC = new PopupController();
    });
});



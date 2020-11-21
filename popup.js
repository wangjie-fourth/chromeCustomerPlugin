let message = document.querySelector('#message');
let clearCacheButton = document.querySelector('#clearCache')
let chooseLink = document.querySelector('#chooseLink')

clearCacheButton.addEventListener('click', clearCache);
chooseLink.addEventListener('click', startLinkChoose)

function startLinkChoose() {
    chrome.tabs.executeScript(null, {
        file: "getPagesSource.js"
    }, function() {
        // If you try and inject into an extensions page or the webstore/NTP you'll get an error
        if (chrome.runtime.lastError) {
            message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
        }
    });
}

function clearCache() {
    chrome.browsingData.remove(
        {'since': new Date().getTime() - 24 * 60 * 60 * 1000}, {
            'appcache': true,
            'cache': true,
            'cacheStorage': true,
            'cookies': true,
            'downloads': true,
            'fileSystems': true,
            'formData': true,
            'history': true,
            'indexedDB': true,
            'localStorage': true,
            'serverBoundCertificates': true,
            'serviceWorkers': true,
            'pluginData': true,
            'passwords': true,
            'webSQL': true
        },
        () => {
            alert('清除完毕')
        });
}



function onWindowLoad() {

    chrome.tabs.executeScript(null, {
        file: "getPagesSource.js"
    }, function() {
        // If you try and inject into an extensions page or the webstore/NTP you'll get an error
        if (chrome.runtime.lastError) {
            message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
        }
    });

}

window.onload = onWindowLoad;

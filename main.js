document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.getSelected(function(tab) {

    chrome.cookies.getAll(
      {
        url: 'https://pan.baidu.com',
        name: 'BDUSS'
      },
      function(cookies) {
        var BAIDU_BDUSS = cookies[0].value;
        document.getElementById("cookies-BDUSS").innerText = BAIDU_BDUSS;
      }
    );

    chrome.cookies.getAll(
      {
        url: 'https://pan.baidu.com',
        name: 'STOKEN'
      },
      function(cookies) {
        var BAIDU_STOKEN = cookies[0].value;
        document.getElementById("cookies-STOKEN").innerText = BAIDU_STOKEN;
      }
    );

    chrome.cookies.getAll(
      {
        url: 'https://pan.baidu.com'
      },
      function(cookies) {
        var BAIDU_ALL = "";
        for (var i in cookies) {
          BAIDU_ALL += cookies[i].name + "=" + cookies[i].value + ";";
        }
        document.getElementById("cookies-ALL").innerText = BAIDU_ALL;
      }
    );

  })
})

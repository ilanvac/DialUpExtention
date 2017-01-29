// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


(function () {
    var current = 1;

    function updateIcon() {
        var file = "./Assets/img/icon-" + current + ".png";
        chrome.browserAction.setIcon({path: file});

        current++;
        if (current > 2) {
            current = 1;
        }

    }

    //ON CLICK UPDATE THE ICON
    chrome.browserAction.onClicked.addListener(function () {
        updateIcon();
        cm.getParams(ws.init);

    });
    updateIcon();

})();

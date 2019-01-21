// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';



chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({token: '#123'}, function() {
    console.log('The color is green.');
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'www.fnac.pt'},
        pageUrl: {hostEquals: 'www.aliexpress.com'},
        pageUrl: {hostEquals: 'www.pccomponentes.pt'},
        pageUrl: {hostEquals: 'www.amazon.com'},
        pageUrl: {hostEquals: 'www.worten.pt'},
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});

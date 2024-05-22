chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'SCREEN_SHARE_REQUEST') {
    console.log('Received SCREEN_SHARE_REQUEST');
    chrome.desktopCapture.chooseDesktopMedia(
      ['screen', 'window', 'tab'],
      sender.tab,
      (streamId) => {
        if (streamId) {
          console.log('Stream ID obtained: ', streamId);
          sendResponse({ streamId });
        } else {
          console.error('Failed to obtain streamId');
          sendResponse({ error: 'Failed to obtain streamId' });
        }
      }
    );
    return true; // Keeps the message channel open for sendResponse
  }
});

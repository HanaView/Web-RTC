chrome.runtime.sendMessage({ type: 'SCREEN_SHARE_REQUEST' }, (response) => {
  if (chrome.runtime.lastError) {
    console.error('runtime.lastError:', chrome.runtime.lastError);
  }
  if (response && response.streamId) {
    console.log('Stream ID received:', response.streamId);
    window.postMessage(
      { type: 'SCREEN_SHARE_RESPONSE', streamId: response.streamId },
      '*'
    );
  } else {
    console.error('Failed to get streamId.', response.error);
  }
});

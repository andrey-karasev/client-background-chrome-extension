chrome.runtime.onStartup.addListener(() => {
  createAlarm();
});

chrome.runtime.onInstalled.addListener(() => {
  createAlarm();
});

chrome.alarms.onAlarm.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]?.id) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'toggleBackground' });
    }
  });
});

function createAlarm() {
  chrome.alarms.create('toggleBackground', { periodInMinutes: 0.15 });
}

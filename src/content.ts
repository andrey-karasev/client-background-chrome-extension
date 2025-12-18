let originalBackground = '';
let isToggled = false;

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'toggleBackground') {
    if (!isToggled) {
      originalBackground = document.body.style.backgroundColor || getComputedStyle(document.body).backgroundColor;
      document.body.style.backgroundColor = '#c4c4c42f';
    } else {
      document.body.style.backgroundColor = originalBackground;
    }
    isToggled = !isToggled;
  }
});

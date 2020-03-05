export function hiddenIframe() {
  const iframe = document.createElement('iframe');
  iframe.style.width = '0';
  iframe.style.height = '0';
  iframe.style.border = 'none';
  return iframe;
}

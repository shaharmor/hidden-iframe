import { hiddenIframe } from './entry';

describe('hiddenIframe', () => {
  it('returns an iframe', () => {
    expect(hiddenIframe()).toBeInstanceOf(HTMLIFrameElement);
  });

  it('sets hidden styles', () => {
    const iframe = hiddenIframe();
    expect(iframe.style.width).toEqual('0px');
    expect(iframe.style.height).toEqual('0px');
    expect(iframe.style.border).toEqual(''); // https://github.com/jsdom/cssstyle/blob/master/lib/properties/border.js#L17
  });
});

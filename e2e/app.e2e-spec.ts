import { URibsPage } from './app.po';

describe('u-ribs App', () => {
  let page: URibsPage;

  beforeEach(() => {
    page = new URibsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

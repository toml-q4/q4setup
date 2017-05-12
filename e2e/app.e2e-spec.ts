import { Q4setupPage } from './app.po';

describe('q4setup App', () => {
  let page: Q4setupPage;

  beforeEach(() => {
    page = new Q4setupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

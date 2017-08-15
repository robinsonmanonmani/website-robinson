import { WebsiteRobinsonPage } from './app.po';

describe('website-robinson App', () => {
  let page: WebsiteRobinsonPage;

  beforeEach(() => {
    page = new WebsiteRobinsonPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

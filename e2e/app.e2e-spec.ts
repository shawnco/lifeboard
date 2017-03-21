import { LifeboardPage } from './app.po';

describe('lifeboard App', function() {
  let page: LifeboardPage;

  beforeEach(() => {
    page = new LifeboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { ArchiPage } from './app.po';

describe('archi App', function() {
  let page: ArchiPage;

  beforeEach(() => {
    page = new ArchiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

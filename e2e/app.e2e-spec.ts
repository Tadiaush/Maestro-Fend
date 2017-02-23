import { MaestroPage } from './app.po';

describe('maestro App', function() {
  let page: MaestroPage;

  beforeEach(() => {
    page = new MaestroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

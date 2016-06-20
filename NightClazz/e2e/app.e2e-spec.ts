import { NightClazzPage } from './app.po';

describe('night-clazz App', function() {
  let page: NightClazzPage;

  beforeEach(() => {
    page = new NightClazzPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { AdminLteAngularPage } from './app.po';

describe('admin-lte-angular App', () => {
  let page: AdminLteAngularPage;

  beforeEach(() => {
    page = new AdminLteAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

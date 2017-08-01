import { StockManagerOrgPage } from './app.po';

describe('stock-manager-org App', () => {
  let page: StockManagerOrgPage;

  beforeEach(() => {
    page = new StockManagerOrgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

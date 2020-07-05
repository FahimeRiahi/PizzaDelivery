export class Config {
  private static url = 'https://pizza-delivery-back-end.herokuapp.com/'; /* if run api locally uncomment this line */

  public static getUrl() {
    return this.url;
  }

  public static setUrl(url: string) {
    this.url = url;
  }

}

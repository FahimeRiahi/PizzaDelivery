export class Config {
  private static url = 'http://localhost:3000/'; /* if run api locally uncomment this line */

  public static getUrl() {
    return this.url;
  }

  public static setUrl(url: string) {
    this.url = url;
  }

}

export class ExcecaoCustomizada extends Error {
  public constructor(message: string, name: string) {
    super(message);
    this.name = name;
  }
}

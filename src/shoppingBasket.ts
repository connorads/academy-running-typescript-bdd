export class ShoppingBasket {
  constructor(private readonly addItem: (units: number, item: string) => void) {}

  getContents(): string {
      throw new Error("Method not implemented.");
  }

  add(units: number, itemName: string) {
      this.addItem(units, itemName);
  }
}

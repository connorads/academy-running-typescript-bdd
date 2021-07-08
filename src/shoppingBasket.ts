export interface Item {
  name: string;
  units: number;
  unitPrice: number;
}

export class ShoppingBasket {
  constructor(
    private readonly addItem: (units: number, item: string) => void,
    private readonly getItems: () => Item[]
  )
  {}

  getContents(): string {
      const items = this.getItems();

      const itemsString = items
        .map(item => `${item.units} x ${item.name} // ${item.units} x ${item.unitPrice.toFixed(2)} = £${(item.units * item.unitPrice).toFixed(2)}`)
        .join("\n");

      const creationDateString = "Creation date: 22/01/2021";

      const total = items.reduce((acc, prev) => acc + prev.unitPrice * prev.units, 0);
      const totalString = `£${total.toFixed(2)}`;
      
      return `${creationDateString}
${itemsString}
Total: ${totalString}`
  }

  add(units: number, itemName: string) {
      this.addItem(units, itemName);
  }
}

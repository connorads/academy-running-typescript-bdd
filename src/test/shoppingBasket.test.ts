import { ShoppingBasket } from "../shoppingBasket";

describe("Shopping basket", () => {
  it("Should add item to basket", () => {
      const mockAddItem = jest.fn();
      const basket = new ShoppingBasket(mockAddItem);

      basket.add(1, "Rambo");
      
      expect(mockAddItem).toHaveBeenCalledWith(1, "Rambo");
  });
});

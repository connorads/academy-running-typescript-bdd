import {ShoppingBasket} from "../shoppingBasket";

describe("Shopping basket", () => {
    it("Should add item to basket", () => {
        const mockAddItem = jest.fn();
        const mockGetStuff = jest.fn();
        const basket = new ShoppingBasket(mockAddItem, mockGetStuff);

        basket.add(1, "Rambo");

        expect(mockAddItem).toHaveBeenCalledWith(1, "Rambo");
    });

    it("should print the contents", () => {
        const mockAddItem = jest.fn();
        const mockGetItems = jest.fn().mockReturnValue([{
              units: 2,
              name: "The Hobbit",
              unitPrice: 5
            },
            {
              units: 5,
              name: "Breaking Bad",
              unitPrice: 7
            }]
        )
        const basket = new ShoppingBasket(mockAddItem, mockGetItems);

        expect(basket.getContents()).toEqual("Creation date: 22/01/2021\n" +
            "2 x The Hobbit // 2 x 5.00 = £10.00\n" +
            "5 x Breaking Bad // 5 x 7.00 = £35.00\n" +
            "Total: £45.00");
    });
});

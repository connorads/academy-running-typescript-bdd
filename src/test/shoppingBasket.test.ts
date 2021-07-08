import {ShoppingBasket} from "../shoppingBasket";

describe("Shopping basket", () => {
    it("Should add item to basket", () => {
        const mockAddItem = jest.fn();
        const basket = new ShoppingBasket(mockAddItem);

        basket.add(1, "Rambo");

        expect(mockAddItem).toHaveBeenCalledWith(1, "Rambo");
    });

    it("should print the contents", () => {
        const mockAddItem = jest.fn();
        const mockGetStuff = jest.fn().mockReturnValue({
            creationDate: "22/01/2021",
            items: [{
                name: "The Hobbit",
                price: 10
            },
                {
                    name: "The Hobbit",
                    price: 10
                },
                {}]
        })
        const basket = new ShoppingBasket(mockAddItem, mockGetStuff);

        expect(basket.getContents()).toEqual("Creation date: 22/01/2021\n" +
            "2 x The Hobbit // 2 x 5.00 = £10.00\n" +
            "5 x Breaking Bad // 5 x 7.00 = £35.00\n" +
            "Total: £45.00");
    });
});

import {defineFeature, loadFeature} from "jest-cucumber";
import { ShoppingBasket } from "../../shoppingBasket";

const feature = loadFeature('./src/specs/features/basket.feature')

defineFeature(feature, test => {    
    const mockAddItem = jest.fn();
    const mockGetItems = jest.fn(() => [{
      units: 2,
      name: "The Hobbit",
      unitPrice: 5
    },
    {
      units: 5,
      name: "Breaking Bad",
      unitPrice: 7
    }]);
    
    const shoppingBasket = new ShoppingBasket(mockAddItem, mockGetItems);

    let basketContents = "";

    test('Add items to shopping basket', ({ given, and, when, then }) => {
    	given(/^I add (\d+) units of "(.*)" to my shopping basket$/, (units: string, item: string) => {
            const numberOfUnits = Number(units);
            shoppingBasket.add(numberOfUnits, item);
    	});

    	and(/^I add (\d+) units of "(.*)"$/, (units: string, item: string) => {
            const numberOfUnits = Number(units);
            shoppingBasket.add(numberOfUnits, item);
    	});

    	when('I check the content of my shopping basket', () => {
            basketContents = shoppingBasket.getContents();
    	});

    	then('it should contain the following information:', (docString: string) => {
            expect(basketContents).toEqual(docString);
    	});
    });
})
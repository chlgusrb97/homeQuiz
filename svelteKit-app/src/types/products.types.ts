export type ProductOrder =
	| 'appetizer01'
	| 'appetizer02'
	| 'appetizer03'
	| 'appetizer04'
	| 'appetizer05'
	| 'appetizer06'
	| 'meatPasta01'
	| 'meatPasta02'
	| 'meatPasta03'
	| 'meatPasta04'
	| 'meatPasta05'
	| 'meatPasta06'
	| 'meatPasta07'
	| 'meatPasta08'
	| 'wine01'
	| 'wine02'
	| 'wine03'
	| 'wine04';

export type ProductData = {
	description: string;
	id: string;
	name: string;
	picture?: string;
	price: number;
};

export type Products = Record<ProductOrder, ProductData> & Record<string, ProductData>;

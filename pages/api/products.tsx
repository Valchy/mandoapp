// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
// import fakeMenu from "../../database/fakeMenu.json";

type Product = {
	product_id: number;
	name: string;
	price: number;
	section_id: number;
	description: string;
	spicy_level: number;
	allergens: string[];
	diet: string[];
	type: string;
	image?: string;
};

globalThis.products = globalThis.products; // ?? fakeMenu;

export default function handler(req: NextApiRequest, res: NextApiResponse<Product[]>) {
	if (req.method === 'POST' && req.body) {
		const product = req.body;
		product.product_id = products.length + 1;
		product.image = 'https://as2.ftcdn.net/v2/jpg/02/73/82/69/1000_F_273826938_g3zTc4k5UtVsYDgZnPyVkzR6WEmyeuhB.jpg';
		globalThis.products.push(req.body);
		res.status(201).json(products);
	} else if (req.method === 'PUT' && req.body) {
		const product = req.body;
		let index = (product.product_id = globalThis.products.findIndex(item => item.product_id === product.product_id));
		globalThis.products.splice(index, 1, product);
		res.status(201).json(globalThis.products);
	} else {
		res.status(200).json(products);
	}
}

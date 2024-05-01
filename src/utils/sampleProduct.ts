import { faker } from "@faker-js/faker";
import { Product } from "../types/Product";

function generateProduct(): Product {
  return {
    name: faker.commerce.productName(),
    slug: faker.lorem.slug(),
    image: faker.image.fashion(),
    category: faker.helpers.arrayElement(["tshirt", "shoe", "watch"]),
    brand: faker.commerce.productMaterial(),
    price: faker.datatype.number({
      min: 100,
      max: 800,
      precision: 1,
    }),
    countInStock: faker.datatype.number({ min: 0, max: 100 }),
    descriptioin: faker.lorem.lines(2),
    rating: faker.datatype.number({ min: 1, max: 5 }),
    numReviews: faker.datatype.number({ min: 1, max: 10 }),
  };
}

function generateProductArray(): Product[] {
  const products: Product[] = [];
  for (let i = 0; i < 10; i++) {
    products.push(generateProduct());
  }
  return products;
}

export const sampleProducts: Product[] = generateProductArray();

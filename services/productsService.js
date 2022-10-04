const faker = require('faker');

const sequelize = require('./../libs/sequelize');

class ProductsService {
    constructor() {
        this.products = [];
        this.generate();
        // this.pool = pool;
        // this.pool.on('error', (err) => console.error(err));
    }

    async generate() {
        const limit = 100;
        for (let i = 0; i < limit; i++) {
            this.products.push(
                {
                    id: faker.datatype.uuid(),
                    name: faker.commerce.productName(),
                    price: parseInt(faker.commerce.price()),
                    image: faker.image.imageUrl(),
                }
            );
        }
    }

    async create(data) {
        const newProduct = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.products.push(newProduct);
        return newProduct;
    }

    async find() {
        const query = 'SELECT * FROM tasks';
        const [data] = await sequelize.query(query)
        return {
            data
        };
    }

    async findOne(id) {
        return this.products.find(item => item.id === id);
    }

    async update() {

    }

    async delete() {

    }

}

module.exports = ProductsService;
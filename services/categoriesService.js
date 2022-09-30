const faker = require('faker');

class categoriesService{
    constructor(){
        this.categories = [];
        this.generate();
    }

    generate(){
        for (let i = 0; i < 10; i++) {
            this.categories.push(
                {
                    id: faker.datatype.number(),
                    name: faker.music.genre()
                }
            );
        }
    }

    index(){
        return this.categories;
    }
}

module.exports = categoriesService;
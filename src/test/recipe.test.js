import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../server';

chai.use(chaiHttp);
chai.should();

describe('GET', () => {
    describe('GET all recipes', () => {
        it('should get all recipes', ((done) => {
            chai.request(app)
                .get('/api/recipes')
                .end((err, res) => {
                    res.should.have.status(200);
                })
            done();
        }))
    })

    describe('GET single recipes', () => {
        const _id = '5d97a53e7d948138c8a32920';
        it('should get a recipe', ((done) => {
            chai.request(app)
                .get(`/api/recipes/${_id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                })
            done();
        }))
    })
})

describe('POST recipe', () => {
    it('should post a recipe', ((done) => {
        chai.request(app)
            .post('/api/recipes')
            .send({
                title: "rice",
                ingredients: "water, rice",
                instructions: "boil water",
                time: 23,
                difficulty: 3
            })
            .end((err, res) => {
                res.should.have.status(201);
                res.should.be.a('object');
            })
        done();
    }))
})

describe('PUT recipe', () => {
    const _id = '5d97a53e7d948138c8a32920';
    it('should modify a recipe', ((done) => {
        chai.request(app)
            .put(`/api/recipes/${_id}`)
            .send({
                title: "semo",
                ingredients: "water, semo",
                instructions: "boil water",
                time: 23,
                difficulty: 3
            })
            .end((err, res) => {
                res.should.have.status(200);
            })
        done();
    }))
})

describe('DELETE recipe', () => {
    const _id = '5d97a53e7d948138c8a32920';
    it('should delete a recipe', ((done) => {
        chai.request(app)
            .delete(`/api/recipes/${_id}`)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.a('object');
            })
        done();
    }))
})
const expect = require("chai").expect;
const request = require("supertest");
const app = require ("../server/routes/api/posts.js")

describe("GET /" , () =>{
    it("should return jobs", async ()=> {
        const res = await request(app).get("/api/posts/");
        expect(res.status).to.equal(200);
    })

})
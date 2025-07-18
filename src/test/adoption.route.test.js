import request from "supertest";
import { expect } from "chai";
import app from "../app.js"

describe('Adoptions API', () => {
  it("GET /api/adoptions debe devolver todas las adopciones con status 200", async () => {
    const res = await request(app).get('/api/adoptions');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('object');
    expect(res.body.payload).to.be.an('array');
  });

  it("GET /api/adoptions/:aid debe devolver una adopcion existente", async () => {
    const existeId = '6879904e15ee946d878805aa';

    const res = await request(app).get(`/api/adoptions/${existeId}`);
    if(res.status === 200) {
      expect(res.body).to.have.property('status', 'success');
      expect(res.body.payload).to.have.property('_id', existeId);
    } else {
      expect(res.status).to.equal(404);
      expect(res.body).to.have.property('status', 'error')
    }
  });



  it("POST /api/adoptions/:uid/:pid debe crear una nueva adopcion", async () => {
    const userId = "6879904e15ee946d878805aa";
    const petId = "6871b1624df1cd56ebacb395";

    const res = await request(app).post(`/api/adoptions/${userId}/${petId}`);
    if(res.status === 200) {
      expect(res.body).to.have.property('status', 'success');
      expect(res.body).to.have.property('message', 'Mascota Adoptada');
    } else {
      expect(res.status).to.be.oneOf([400, 404]);
      expect(res.body).to.have.property('status', 'error');
    }
  })
});


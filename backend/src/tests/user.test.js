const { default: mongoose } = require("mongoose");
const userModel = require("../models/User");
const request = require("supertest");
const app = require("../../app");

describe("Testes nos métodos do UserController", () => {
  describe("Registrar usuário", () => {
    it("Criando usuário 1", async () => {
      const req = await request(app).post("/api/users/cadastrar").send({
        name: "Erick Lucas",
        age: 21,
        cpf: "16767687774",
        email: "erkei0909@gmail.com",
        password: "senha123",
      });
      const userSelected = await userModel.findOne({
        email: "erkei0909@gmail.com",
      });
      expect(req.status).toEqual(201);
      expect(userSelected).toBeTruthy();
      expect(userSelected.name).toBe("Erick Lucas");
      expect(userSelected.age).toBe(21);
      expect(userSelected.cpf).toBe("16767687774");
    }, 8000);

    it("Criando usuário 2", async () => {
      const req = await request(app).post("/api/users/cadastrar").send({
        name: "Guilherme Almeida",
        age: 31,
        cpf: "15717167776",
        email: "elcn1234@gmail.com",
        password: "senha123",
      });
      const userSelected = await userModel.findOne({
        email: "elcn1234@gmail.com",
      });
      expect(userSelected).toBeTruthy();
      expect(req.status).toEqual(201);
      expect(userSelected.name).toBe("Guilherme Almeida");
      expect(userSelected.age).toBe(31);
      expect(userSelected.cpf).toBe("15717167776");
    }, 7000);

    it("Criando usuário Inválido", async () => {
      const req = await request(app).post("/api/users/cadastrar").send({
        name: "Erick Lucas",
        age: 21,
        cpf: "16767687774",
        email: "erkei0909@gmail.com",
        password: "senha123",
      });
      expect(req.status).toEqual(400);
    }, 5000);
  });

  describe("Login de usuários", () => {
    it("Login User 1", async () => {
      const requestLogin = await request(app).post("/api/users/login").send({
        email: "erkei0909@gmail.com",
        password: "senha123",
      });
      expect(requestLogin.status).toEqual(202);
    });

    it("Login User 2", async () => {
      const requestLogin = await request(app).post("/api/users/login").send({
        email: "elcn1234@gmail.com",
        password: "senha123",
      });
      expect(requestLogin.status).toEqual(202);
    });
  });

  describe("Recuperar senha do usuário", () => {
    it("Recover User 1", async () => {
      const requestPassword = await request(app)
        .put("/api/users/recover/password")
        .send({
          email: "erkei0909@gmail.com",
          cpf: "16767687774",
          password: "senhaNova",
        });
      const requestLogin = await request(app).post("/api/users/login").send({
        email: "erkei0909@gmail.com",
        password: "senhaNova",
      });
      expect(requestPassword.status).toEqual(200);
      expect(requestLogin.status).toEqual(202);
    });
    it("Recover User 2", async () => {
      const requestPassword = await request(app)
        .put("/api/users/recover/password")
        .send({
          email: "elcn1234@gmail.com",
          cpf: "15717167776",
          password: "senhaNova",
        });
      const requestLogin = await request(app).post("/api/users/login").send({
        email: "elcn1234@gmail.com",
        password: "senhaNova",
      });
      expect(requestPassword.status).toEqual(200);
      expect(requestLogin.status).toEqual(202);
    });
  });
  describe("Editar Dados", () => {
    it("Editando todos os dados do usuário 1", async () => {});
  });

  describe("Deletando usuários", () => {
    it("Deletando usuário 1", async () => {
      const requestLogin = await request(app).post("/api/users/login").send({
        email: "erkei0909@gmail.com",
        password: "senhaNova",
      });
      const userSelected = await userModel.findOne({
        email: "erkei0909@gmail.com",
      });
      const req = await request(app)
        .post(`/api/users/remove/${userSelected._id.toString()}`)
        .send({
          token: requestLogin.text,
          email: userSelected.email,
        });
      console.log(requestLogin.text);
      const userSelected2 = await userModel.findOne({
        email: "erkei0909@gmail.com",
      });
      expect(req.status).toEqual(200);
      expect(userSelected2).toBeFalsy();
    });

    it("Deletando usuário 2", async () => {
      const requestLogin = await request(app).post("/api/users/login").send({
        email: "elcn1234@gmail.com",
        password: "senhaNova",
      });
      const userSelected = await userModel.findOne({
        email: "elcn1234@gmail.com",
      });
      const req = await request(app)
        .post(`/api/users/remove/${userSelected._id.toString()}`)
        .send({
          token: requestLogin.text,
        });
      const userSelected2 = await userModel.findOne({
        email: "elcn1234@gmail.com",
      });
      expect(req.status).toEqual(200);
      expect(userSelected2).toBeFalsy();
    });
  });
});

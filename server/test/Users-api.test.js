const mongoose = require("mongoose");
const supertest = require("supertest");

const Blog = require("../models/Blog");
const User = require("../models/User");

const app = require("../app");
const helper = require("./testHelper");

const api = supertest(app);

beforeAll(async () => {
  await Blog.deleteMany();
  await User.deleteMany();
});

const user = "/api/users";

// created a user helper.user here
describe("creating a user", function () {
  test("success: when recieve every credentials", function () {
    api.post(user, helper.user).expect(204);
  });
  const invalidErrorCredentialsMessage = {
    err: "username / email / password not found",
  };
  test("failed: when email is missing", () => {
    api
      .post(user, delete helper.user.email)
      .expect(400)
      .expect(invalidErrorCredentialsMessage);
  });
  test("failed: when password is missing", () => {
    api
      .post(user, delete helper.user.password)
      .expect(400)
      .expect(invalidErrorCredentialsMessage);
  });
  test("failed: when username is missing", () => {
    api
      .post(user, delete helper.user.username)
      .expect(400)
      .expect(invalidErrorCredentialsMessage);
  });
});

it("should get status: 200 when requesting all userdata", function () {
  const response = api.get(user).expect(200);
  console.log(response);
});

afterAll(() => {
  mongoose.connection.close();
});

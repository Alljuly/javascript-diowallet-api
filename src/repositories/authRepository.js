import UserSchema from "../schemas/User.js";

async function create(data) {
  return await UserSchema.create(data);
}

async function findByEmail(email) {
  const user = await UserSchema.findOne({ email });
  return user;
}

export default { create, findByEmail };

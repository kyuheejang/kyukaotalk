const passwordHash = require('password-hash');

const usersDAL = require('./usersDAL');

async function postUser(userId, password) {
  // step1. userId check
  let exUser;
  try {
    exUser = await usersDAL.readUser(userId);
  } catch (err) {
    throw err;
  }
  if (exUser) {
    const err = Error('duplicated userId');
    err.status = 400;
    throw err;
  }

  // service code
  let user;
  try {
    const hashedPassword = passwordHash.generate(password);
    user = await usersDAL.createUser(userId, hashedPassword);
  } catch (err) {
    throw err;
  }
  return user;
}

async function updateUser(userId, password) {
  let user;
  try {
    const hashedPassword = passwordHash.generate(password);
    user = await usersDAL.updateUser(userId, hashedPassword);
  } catch (err) {
    throw err;
  }
  return user;
}

async function deleteUser(userId) {
  let user;
  try {
    user = await usersDAL.deleteUser(userId);
  } catch (err) {
    throw err;
  }
  return user;
}

module.exports.postUser = postUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;

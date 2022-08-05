const Migrations = artifacts.require("Migrations");

module.exports = async function (deployer) {
  const instance = await deployer.deploy(Migrations);
};

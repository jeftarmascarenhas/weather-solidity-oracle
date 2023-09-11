import { ethers } from "hardhat";
import { deployWeatherOracle } from "./deploy-weather-oracle";

async function deployWeather() {
  const weatherOracle = await deployWeatherOracle();
  const weather = await ethers.deployContract("Weather", [
    weatherOracle.target,
  ]);

  await weather.waitForDeployment();

  console.log("Weather address: ", weather.target);
}

deployWeather().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

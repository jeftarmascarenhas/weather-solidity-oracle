import { ethers } from "hardhat";
import { deployWeatherOracle } from "./deploy-weather-oracle";

async function deployWeather() {
  
  const weatherOracle = await deployWeatherOracle()
  const Weather = await ethers.getContractFactory("Weather");
  const weather = await Weather.deploy(weatherOracle.address);

  await weather.deployed()

  console.log("Weather address: ", weather.address);
}

deployWeather().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

import { ethers } from "hardhat";
import { deployWeatherOracle } from "./deploy-weather-oracle";

async function deployWeather() {}

deployWeather().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

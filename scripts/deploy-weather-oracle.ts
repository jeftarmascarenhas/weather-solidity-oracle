import { ethers } from "hardhat";

export async function deployWeatherOracle() {
  const weatherOracle = await ethers.deployContract("WeatherOracle");

  await weatherOracle.waitForDeployment();
  console.log("Weather Oracle address: ", weatherOracle.target);
  return weatherOracle;
}

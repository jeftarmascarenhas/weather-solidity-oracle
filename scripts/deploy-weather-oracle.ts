import { ethers } from "hardhat";

export async function deployWeatherOracle() {

  const WeatherOracle = await ethers.getContractFactory("WeatherOracle");
  const weatherOracle = await WeatherOracle.deploy();
  await weatherOracle.deployed()

  console.log("Weather Oracle address: ", weatherOracle.address);
  return weatherOracle
}

// deployWeatherOracle()
// .catch((error) => {
//   console.error(error)
//   process.exitCode = 1;
// })

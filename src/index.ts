import { ethers } from "hardhat";

const weatherAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

const lat = "-8.033862706436462";
const lon = "-34.91740605416537";

async function main() {
  try {
    const weather = await ethers.getContractAt("Weather", weatherAddress);
    // const getWeather = await weather.getWeather(lat, lon);
    // await getWeather.wait();

    // const temp = await weather.temp();
    // await temp.wait();

    const tempResult = await weather.tempResult();
    console.log("WEATHER temp: ", tempResult);
  } catch (error: any) {
    console.log("ERROR: ", error?.message);
  }
}

main().then(() => {
  process.exit();
});

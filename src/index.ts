import { ethers } from "hardhat";

const weatherAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

// const contract = new web3.eth.Contract(weather.abi as any[], weatherAddress, {
//   from: "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
// });

const lat = "-8.033862706436462";
const lon = "-34.91740605416537";

function delay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 3000);
  });
}

async function main() {
  try {
    const weather = await ethers.getContractAt("Weather", weatherAddress);
    const getWeather = await weather.getWeather(lat, lon);
    await getWeather.wait();

    // const temp = await weather.temp();
    // await temp.wait()

    // const tempResult = await weather.tempResult();
    // console.log("WEATHER temp: ", tempResult);
  } catch (error: any) {
    console.log("ERROR: ", error?.message);
  }
}

main().then(() => {
  process.exit();
});

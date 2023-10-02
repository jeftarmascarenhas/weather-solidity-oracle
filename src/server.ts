import axios from "axios";
import { ethers } from "hardhat";

const weatherAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

async function callApi(lat: string, log: string) {
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&units=metric&appid=34d1b6206a66637b6d2ccbe2c2890987`
    );
    return data?.main.temp;
  } catch (error) {
    console.error(error);
  }
}

async function main() {
  console.log("running Oracle");

  const weatherOracle = await ethers.getContractAt(
    "WeatherOracle",
    weatherAddress
  );

  const newJob = weatherOracle.filters.NewJob();
  weatherOracle.on(newJob, async (data: any, error: any) => {
    console.log("initJob");
    if (error) {
      console.log("error: ", error);
      return;
    }
    const { lat, lon } = data.args;
    const temp = await callApi(lat, lon);

    console.log("temp: ", temp);

    const jobId = await weatherOracle.jobId();

    console.log("jobId: ", jobId);

    await weatherOracle.updateWeather(temp, jobId);
    const jobResults = await weatherOracle.jobResults(jobId);
    console.log("jobResults: ", jobResults);
  });
}

main();

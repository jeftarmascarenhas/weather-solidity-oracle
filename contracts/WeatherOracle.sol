// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

contract WeatherOracle {
    mapping(uint256 => bool) public jobStatus;
    mapping(uint256 => uint256) public jobResults;

    uint256 public jobId;

    event NewJob(string lat, string lon, uint256 jobId);

    function getWeather(string memory _lat, string memory _lon) external {
        emit NewJob(_lat, _lon, jobId);
        jobId++;
    }

    function updateWeather(uint256 _temp, uint256 _jobId) external {
        jobResults[_jobId] = _temp;
        jobStatus[_jobId] = true;
    }
}

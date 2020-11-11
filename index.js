const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');

const main = async() => {
  try {
    const BUILD_URL = core.getInput('BUILD_URL');

    axios.default.get(BUILD_URL);
  } catch (error) {
    core.setFailed(error.message);
  }
};

main();

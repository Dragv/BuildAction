const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');

try {
  axios.default.get(process.env.BUILD_URL);
} catch (error) {
  core.setFailed(error.message);
}


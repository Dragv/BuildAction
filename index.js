const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');

const main = async() => {
  try {
    const { name } = await octokit.request('GET /repos/{owner}/{repo}/actions/secrets/{secret_name}', {
      owner: 'Dragv',
      repo: 'BuildAction',
      secret_name: 'BUILD_URL'
    });
    console.log(name);
    await axios.default.get(name);
  } catch (error) {
    core.setFailed(error.message);
  }
}

main();

const core = require('@actions/core');
const github = require('@actions/github');

try {
  core.info('My private action is running!');
  // Add your action logic here
} catch (error) {
  core.setFailed(error.message);
}
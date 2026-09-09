import * as core from '@actions/core';
import * as github from '@actions/github';

try {
  core.info('My private action is running!');
  // Add your action logic here
} catch (error) {
  core.setFailed(error.message);
}
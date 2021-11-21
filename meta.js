// https://github.com/vuejs-templates/webpack for more info
module.exports = {
  prompts: {
    name: {
      type: 'string', // Question type
      required: true, // Is question Required
      message: 'Project name',
    },
  },
  completeMessage: 'Project Complete!',
};

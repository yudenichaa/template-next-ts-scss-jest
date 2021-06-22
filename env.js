const env = {
  IMAGES_HOST: {
    value: process.env.IMAGES_HOST,
    type: 'string',
  },
};

module.exports = env;

for (const [envVariableName, envVariableData] of Object.entries(env)) {
  switch (envVariableData.type) {
    case 'string': {
      checkIfEnvVariableExists(envVariableName);
      break;
    }
    case 'number': {
      tryConvertEnvVariableToNumber(envVariableName);
      break;
    }
    default: {
      throw new Error(
        `Unknown env variable type: ${envVariableData.type}, variable name: ${envVariableName}`
      );
    }
  }
}

function checkIfEnvVariableExists(envVariableName) {
  if (!process.env[envVariableName]) {
    throw new Error(`required env variable '${envVariableName}' not defined`);
  }
}

function tryConvertEnvVariableToNumber(envVariableName) {
  checkIfEnvVariableExists(envVariableName);
  const result = +process.env[envVariableName];
  if (Number.isNaN(result))
    throw new Error(`env variable '${envVariableName}' is NaN`);
}

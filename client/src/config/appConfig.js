import ENVIRONMENT from './environment';

const endpoint = ENVIRONMENT === 'production' ?
  'http://node-env.eba-h2rsrmam.eu-central-1.elasticbeanstalk.com' : 'http://127.0.0.1:5000';

export default endpoint;
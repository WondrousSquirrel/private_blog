import { Pool } from 'pg';

import { postgresConfig } from '../config';

const pool = new Pool(postgresConfig);

export default pool;
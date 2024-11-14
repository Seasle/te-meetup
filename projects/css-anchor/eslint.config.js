import tsConfig from '@te-meetup/eslint-config/ts';
import tsEslint from 'typescript-eslint';

export default tsEslint.config({ ignores: ['dist'] }, ...tsConfig);

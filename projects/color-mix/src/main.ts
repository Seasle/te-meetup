import feather from 'feather-icons';
import { onReady } from './utils';

import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import './style.css';

onReady(() => {
  feather.replace();
});

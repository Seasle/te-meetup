import { codeToHtml } from 'shiki';
import { onReady } from './utils';

import '@fontsource/inter/400.css';
import './style.css';

onReady(async () => {
  const codeExampleBlocks = document.querySelectorAll<HTMLDivElement>('.code-example__block');
  for (const codeExampleBlock of codeExampleBlocks) {
    const code = codeExampleBlock.textContent?.trim();
    const lang = codeExampleBlock.dataset.lang;
    if (code === undefined || lang === undefined) {
      continue;
    }

    codeExampleBlock.innerHTML = await codeToHtml(code, {
      lang,
      theme: 'min-light',
      tabindex: -1,
    });
  }
});

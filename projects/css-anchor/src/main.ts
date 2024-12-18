import { codeToHtml, type DecorationItem } from 'shiki';
import { onReady } from './utils';

import '@fontsource/inter/400.css';
import './style.css';

const decorationsByCodeVariant: Record<string, DecorationItem[]> = {
  shared: [
    {
      start: { line: 3, character: 4 },
      end: { line: 3, character: 23 },
      properties: { class: 'interactive-line' },
    },
    {
      start: { line: 6, character: 2 },
      end: { line: 6, character: 10 },
      properties: { class: 'interactive-line' },
    },
    {
      start: { line: 7, character: 2 },
      end: { line: 7, character: 19 },
      properties: { class: 'interactive-line' },
    },
    {
      start: { line: 8, character: 4 },
      end: { line: 8, character: 14 },
      properties: { class: 'interactive-line' },
    },
    {
      start: { line: 9, character: 6 },
      end: { line: 9, character: 26 },
      properties: { class: 'interactive-line' },
    },
    {
      start: { line: 10, character: 4 },
      end: { line: 10, character: 5 },
      properties: { class: 'interactive-line' },
    },
    {
      start: { line: 11, character: 2 },
      end: { line: 11, character: 3 },
      properties: { class: 'interactive-line' },
    },
    {
      start: { line: 17, character: 2 },
      end: { line: 17, character: 39 },
      properties: { class: 'interactive-line' },
    },
  ],
};

onReady(async () => {
  const codeExampleBlocks = document.querySelectorAll<HTMLDivElement>('.code-example__block');
  for (const codeExampleBlock of codeExampleBlocks) {
    const code = codeExampleBlock.textContent?.trim();
    const lang = codeExampleBlock.dataset.lang;
    const codeVariant = codeExampleBlock.dataset.codeVariant;
    if (code === undefined || lang === undefined) {
      continue;
    }

    codeExampleBlock.innerHTML = await codeToHtml(code, {
      lang,
      theme: 'min-light',
      decorations: codeVariant !== undefined ? decorationsByCodeVariant[codeVariant] : undefined,
      tabindex: -1,
    });
  }
});

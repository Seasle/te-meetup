import { codeToHtml, type ShikiTransformer, type DecorationItem } from 'shiki';
import { onReady } from './utils';

import '@fontsource/inter/400.css';
import './style.css';

const decorationTypes = [
  {
    expression: /rgba?\([a-z0-9\s#%/]+\)/gim,
    name: 'color-function',
  },
];

const colorDecorationTransformer: ShikiTransformer = {
  name: 'color-decoration-transformer',
  preprocess(code, options) {
    const decorations: DecorationItem[] = [];
    const lines = code.split('\n');

    lines.forEach((line, lineIndex) => {
      for (const decorationType of decorationTypes) {
        const matches = line.matchAll(decorationType.expression);

        for (const match of matches) {
          decorations.push({
            start: {
              line: lineIndex,
              character: match.index,
            },
            end: {
              line: lineIndex,
              character: match.index + match[0].length,
            },
            properties: {
              class: decorationType.name,
              style: `--color: ${match[0]}`,
            },
          });
        }
      }
    });

    options.decorations ??= [];
    options.decorations.push(...decorations);
  },
};

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
      transformers: [colorDecorationTransformer],
    });
  }
});

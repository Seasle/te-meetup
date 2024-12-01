import { codeToHtml, type DecorationItem, type ShikiTransformer } from 'shiki';
import feather from 'feather-icons';
import { onReady } from './utils';

import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import './style.css';

const code = `.status {
  --base-color: currentColor;

  --fill-color: color-mix(in srgb, var(--base-color) 20%, var(--background-color));
  --border-color: color-mix(in srgb, var(--base-color) 75%, var(--background-color));
  --text-color: color-mix(in srgb, var(--base-color) 90%, var(--background-color));
}`;

const decorationTypes = [
  {
    expression: /(--[a-z-]+):/gim,
    name: 'variable-declaration',
  },
  {
    expression: /(var\((--[a-z-]+)\))/gim,
    name: 'variable-usage',
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
              character: match.index + match[1].length,
            },
            properties: {
              class: decorationType.name,
              dataName: (match[2] ?? match[1]).replace(/^-+/g, ''),
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
  feather.replace();

  const codeExample = document.querySelector('.code-example');
  if (codeExample !== null) {
    codeExample.innerHTML = await codeToHtml(code, {
      lang: 'css',
      theme: 'min-light',
      transformers: [colorDecorationTransformer],
    });
  }
});

import feather from 'feather-icons';
import { isInputElement, onReady } from './utils';

import '@fontsource/inter/400.css';
import './style.css';

const updateControlState = (field: HTMLInputElement) => {
  const control = field.closest('.control');
  if (control === null) {
    return;
  }

  const isFieldEmpty = field.value === '';

  control.classList.toggle('control--not-empty', !isFieldEmpty);
};

addEventListener('input', (event) => {
  const { target: field } = event;
  if (!isInputElement(field) || !field.classList.contains('control__field')) {
    return;
  }

  updateControlState(field);
});

onReady(() => {
  document
    .querySelectorAll<HTMLInputElement>('.control__field')
    .forEach((field) => updateControlState(field));

  feather.replace();
});

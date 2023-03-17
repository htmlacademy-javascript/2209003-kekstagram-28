import { getCssFilterValue } from '../filters/logic.js';

export const transformFormData = (formData) => {
  const url = URL.createObjectURL(formData.get('filename'));

  const filterValue = getCssFilterValue(
    formData.get('effect'),
    formData.get('effect-level'),
  );
  const style = `
    transform: scale(${formData.get('scale')});
    filter: ${filterValue};
  `.replaceAll(/\s/g, '');

  const description = [
    formData.get('description'),
    formData.get('hashtags')
  ].join(' ').trim();

  return {
    url,
    style,
    description,
  };
};

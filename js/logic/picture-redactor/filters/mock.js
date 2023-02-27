export const Filters = {
  NONE: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
};

export const SliderSettings = {
  [Filters.NONE]: {
    start: 100,
    step: 1,
    connect: 'lower',
    range: {
      min: 0,
      max: 100
    },
  },
  [Filters.CHROME]: {
    start: 1,
    step: 0.1,
    connect: 'lower',
    range: {
      min: 0,
      max: 1,
    },
  },
  [Filters.SEPIA]: {
    start: 1,
    step: 0.1,
    connect: 'lower',
    range: {
      min: 0,
      max: 1,
    },
  },
  [Filters.MARVIN]: {
    start: 100,
    step: 1,
    connect: 'lower',
    range: {
      min: 0,
      max: 100,
    },
  },
  [Filters.PHOBOS]: {
    start: 3,
    step: 0.1,
    connect: 'lower',
    range: {
      min: 0,
      max: 3,
    },
  },
  [Filters.HEAT]: {
    start: 3,
    step: 0.1,
    connect: 'lower',
    range: {
      min: 1,
      max: 3,
    },
  },
};

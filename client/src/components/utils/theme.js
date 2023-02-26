const fleurimondColors = {
  black: '#000000',
  graySmoke: '#b7c2d0',
  smoke: '#5f6b78',
  lightSmoke: '#dae0e5',
  white: '#ffffff',
  haitianGold: '#d4af37',
  me: '#4c3e10',
  trueBlack: '#000000',
  woooRed: '#ff0000',
  infrared: '#eb3745',
  fierceFuchsia: '#d92b85',
  roboticRed: '#c31279',
  orneryOrange: '#fd7333',
  tipOffTangerine: '#f19425',
  sassySaffron: '#fbb627',
  leapingLemon: '#ffcc33',
  livingLime: '#c9da2c',
  giganticGreen: '#8dbd3e',
  bebeBlue: '#94ceda',
  steelTeal: '#00a0ac',
  jocelyneTeal: '#389583',
  palesasAquaDark: 'rgba(91, 220, 148, 0.55)',
  palesasAqua: '#5bdc94',
  lightAqua: '#8de4af',
  blue: '#0aa2dc',
  dutchieBlue: '#4c9be2',
  Palesa: 'rgba(69, 101, 238, 0.95) ',
  irateIris: '#4500bc',
  midnight: '#01002e',
  exam: '#3d44dc',
  galacticGrape: '#8800b8',
  sharkBlack: '#242626',
  deepCerulean: '#007da3',
  cerulean: '#00b3e6',
  foam: '#f7fcfe',
  chenin: '#e2e367',
  buttons: {
    blue: '#1b4677',
    darkBlue: '#0d223b',
    lightBlue: '#c6d1dd',
    lightFuschia: '#dac5d0',
  },
  modals: {
    innerBorders: '#e5e5e5',
    text: '#333333',
  },
};

export { fleurimondColors };

export default {
  colors: {},
  buttons: {
    primary: {
      color: fleurimondColors.white,
      backgroundColor: fleurimondColors.buttons.blue,
      borderColor: fleurimondColors.buttons.blue,

      '&:hover,&:active,&:focus': {
        backgroundColor: fleurimondColors.buttons.darkBlue,
        borderColor: fleurimondColors.buttons.darkBlue,
        color: fleurimondColors.white,
      },

      '&:disabled': {
        backgroundColor: fleurimondColors.buttons.lightBlue,
        borderColor: fleurimondColors.buttons.lightBlue,
        color: '#ecf0f3',
      },
    },
    secondary: {
      color: fleurimondColors.buttons.blue,
      backgroundColor: fleurimondColors.white,
      borderColor: fleurimondColors.buttons.blue,

      '&:hover,&:active,&:focus': {
        backgroundColor: '#edf1f5',
        borderColor: fleurimondColors.buttons.blue,
        color: fleurimondColors.buttons.blue,
      },

      '&:disabled': {
        backgroundColor: fleurimondColors.white,
        borderColor: fleurimondColors.buttons.lightBlue,
        color: fleurimondColors.buttons.lightBlue,
      },
    },
    tertiary: {
      color: fleurimondColors.buttons.blue,
      backgroundColor: fleurimondColors.white,
      borderColor: '#dbdbdb',

      '&:hover,&:active,&:focus': {
        backgroundColor: '#f7f7f7',
        borderColor: '#cccccc',
        color: fleurimondColors.buttons.blue,
      },

      '&:disabled': {
        backgroundColor: fleurimondColors.white,
        borderColor: '#e8e8e8',
        color: fleurimondColors.buttons.lightBlue,
      },
    },
    urgentPrimary: {
      color: fleurimondColors.white,
      backgroundColor: fleurimondColors.fierceFuchsia,
      borderColor: fleurimondColors.fierceFuchsia,

      '&:hover,&:active,&:focus': {
        backgroundColor: '#6d1643',
        borderColor: '#6d1643',
        color: fleurimondColors.white,
      },

      '&:disabled': {
        backgroundColor: fleurimondColors.buttons.lightFuschia,
        borderColor: fleurimondColors.buttons.lightFuschia,
        color: '#f5f0f3',
      },
    },
    urgentSecondary: {
      color: fleurimondColors.fierceFuchsia,
      backgroundColor: fleurimondColors.white,
      borderColor: fleurimondColors.fierceFuchsia,

      '&:hover,&:active,&:focus': {
        backgroundColor: '#fdf4f9',
        borderColor: fleurimondColors.fierceFuchsia,
        color: fleurimondColors.fierceFuchsia,
      },

      '&:disabled': {
        backgroundColor: fleurimondColors.white,
        borderColor: fleurimondColors.buttons.lightFuschia,
        color: fleurimondColors.buttons.lightFuschia,
      },
    },
  },
  fontSizes: [12, 13, 14, 16, 18, 25],
  space: [0, 5, 10, 20, 40, 80],
};

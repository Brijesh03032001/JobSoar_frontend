import { createTheme, MantineColorsTuple } from '@mantine/core';

const primaryColor: MantineColorsTuple = [
  '#e6faf8',
  '#d0f2ee',
  '#a3e5dd',
  '#72d7cc',
  '#4dcabd',
  '#2EB19F', // Main brand color
  '#26a08f',
  '#1e8b7d',
  '#17766c',
  '#0f615b'
];

const secondaryColor: MantineColorsTuple = [
  '#e7f5f3',
  '#d0e8e5',
  '#a4d3cc',
  '#75bdb3',
  '#4fa99d',
  '#3D9A8B', // Secondary brand color
  '#348975',
  '#2a7560',
  '#20614d',
  '#164d3b'
];

const accentColor: MantineColorsTuple = [
  '#e6f8fb',
  '#cfeff4',
  '#a3dde7',
  '#73cbda',
  '#4fbdce',
  '#63C2D2', // Accent color
  '#51a3b0',
  '#3f8a95',
  '#2d7079',
  '#1b575e'
];

export const theme = createTheme({
  primaryColor: 'brand',
  colors: {
    brand: primaryColor,
    secondary: secondaryColor,
    accent: accentColor,
  },
  fontFamily: 'var(--font-geist-sans), -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
  headings: {
    fontFamily: 'var(--font-geist-sans), -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    fontWeight: '700',
  },
  defaultRadius: 'md',
  primaryShade: 5,
  white: '#ffffff',
  black: '#1a1a1a',
  other: {
    backgroundLight: '#B7EDFF',
  },
});

// Keeping things DRY - reusable variants
import tw from 'twin.macro';

export const uniformTransition = tw`transition-all delay-75 duration-300 ease-out hover:(ease-in duration-200)`;

export const uniformSlowTransition = tw`transition-all delay-150 duration-500 ease-out hover:(ease-in duration-300)`;

export const bgColorVariants = {
  teal: tw`bg-accent-teal`,
  olive: tw`bg-accent-olive`,
  pink: tw`bg-accent-pink`,
  purple: tw`bg-accent-purple`,
  blue: tw`bg-accent-blue`,
  gray: tw`bg-accent-gray`,
  dark: tw`bg-primary-dark`,
  darkest: tw`bg-primary-darkest`,
  light: tw`bg-primary-light`,
  white: tw`bg-white`,
  white50: tw`bg-white/50`,
};

export const textColorVariants = {
  teal: tw`text-accent-teal`,
  olive: tw`text-accent-olive`,
  pink: tw`text-accent-pink`,
  purple: tw`text-accent-purple`,
  blue: tw`text-accent-blue`,
  gray: tw`text-accent-gray`,
  dark: tw`text-primary-dark`,
  darkest: tw`text-primary-darkest`,
  light: tw`text-primary-light`,
  white: tw`text-white`,
};

export const maxWidthVariants = {
  sm: tw`max-w-screen-sm`,
  md: tw`max-w-screen-md`,
  lg: tw`max-w-screen-lg`,
  xl: tw`max-w-screen-xl`,
  max: tw`max-w-screen-2xl`,
};

export const textAlignVariants = {
  left: tw`text-left`,
  center: tw`text-center`,
  right: tw`text-right`,
  justify: tw`text-justify`,
  autoL: tw`text-center md:text-left`,
  autoR: tw`text-center md:text-right`,
};

export const fontStyleVariants = {
  normal: tw`font-normal`,
  bold: tw`font-bold`,
  'semi-bold': tw`font-semibold`,
  'extra-bold': tw`font-extrabold`,
  italic: tw`italic`,
  'italic-bold': tw`font-bold italic`,
};

export const fontSizeVariants = {
  paragraph: tw`text-base md:text-lg xl:text-xl xl:leading-9`,
  base: tw`text-sm md:text-base`, // 1rem
  sm: tw`text-sm`, // 0.875rem
  xs: tw`text-xs`, // 0.75rem
  lg: tw`text-lg`, // 1.125rem
  xl: tw`text-xl`, // 1.25rem
  '2xl': tw`text-2xl`, // 1.5rem
  '3xl': tw`text-3xl`, // 1.875rem
  '4xl': tw`text-4xl`, // 2.25rem
  '5xl': tw`text-5xl`, // 3rem
};

const monoBase = `font-mono uppercase text-base tracking-widest md:text-2xl`;

export const headingVariants = {
  page: tw`text-5xl md:text-8xl`,
  sm: tw`text-4xl md:text-6xl`,
  xs: tw`font-bold text-2xl md:text-4xl`,
  mono: tw`${monoBase} font-normal`,
  monoBold: tw`${monoBase} font-bold`,
};

export const sectionVariants = {
  default: tw`border-t border-b`,
  top: tw`border-t`,
  clean: tw`border-0`,
};

const gridGap = `gap-x-5 md:gap-x-7 xl:gap-x-10`;

export const layoutVariants = {
  grid: tw`grid grid-cols-4 md:grid-cols-12 ${gridGap}`,
  'grid-cols-8': tw`grid md:grid-cols-8 ${gridGap}`,
};

export const gridColVariants = {
  'span-2': tw`md:col-span-2`, // 12/2
  'span-3': tw`md:col-span-3`, // 12/3
  'span-4': tw`md:col-span-4`, // third 12/4
  'span-5': tw`md:col-span-5`, // 12/5
  'span-6': tw`md:col-span-6`, // half 12/6
  'span-7': tw`md:col-span-7`, // 12/7
  'span-8': tw`md:col-span-8`, // 12/8
  'span-9': tw`md:col-span-9`, // 12/9
  'span-10': tw`md:col-span-10`, // 12/10
  auto: tw`md:auto-cols-max`,
  full: tw`md:col-span-full`,
};

export const gridColStartVariants = {
  'start-1': tw`col-start-1`,
  'start-2': tw`col-start-2`,
  'start-3': tw`col-start-3`,
  'start-4': tw`col-start-4`,
  'start-5': tw`col-start-5`,
  'start-6': tw`col-start-6`,
  'start-7': tw`col-start-1 md:col-start-7`,
  'start-8': tw`col-start-1 md:col-start-8`,
  'start-9': tw`col-start-1 md:col-start-9`,
  'start-10': tw`col-start-1 md:col-start-10`,
  'start-11': tw`col-start-1 md:col-start-11`,
  'start-12': tw`col-start-1 md:col-start-12`,
};

export const gridColAlignVariants = {
  left: tw`justify-self-start`,
  right: tw`justify-self-end`,
  center: tw`justify-self-center`,
};

export const iconSizeVariants = {
  normal: tw`text-4xl w-20 h-20 md:text-5xl md:w-24 md:h-24 xl:text-6xl xl:w-36 xl:h-36`,
  sm: tw`text-2xl w-14 h-14`,
  lg: tw`text-5xl w-28 h-28`,
};

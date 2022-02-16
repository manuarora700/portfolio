import svgEmoji from '../utils/emoji';
import { format, differenceInCalendarDays } from 'date-fns';
import { FaSass } from 'react-icons/fa';

// minus one day so it counts 001 from the start (original date: 2021,3,22)
export const circa = new Date(2021, 3, 21);
const dateFormat = 'dd.MM.yy';

const tags = {
  mo: { label: 'moment', color: 'purple', note: 'special' },
  ic: { label: 'initial commit', color: 'pink', note: 'code' },
  ac: { label: 'achievement', color: 'yellow', note: 'special' },
  ex: { label: 'exploring', color: 'teal', note: 'code' },
  wi: { label: 'WIP', color: 'purple', note: 'standard' },
};

export const journalDays = [
  {
    date: format(new Date('2021/3/22'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 3, 22), circa),
    tag: tags.mo,
    code: '',
    note: 'Start of coding journey!',
    emoji: svgEmoji('🔰'),
  },
  {
    date: format(new Date('2021/4/25'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 4, 25), circa),
    tag: tags.ac,
    code: '',
    note: 'Built the first HTML5 & SCSS only portfolio.',
    emoji: svgEmoji('🤩'),
  },
  {
    date: format(new Date('2021/3/30'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 3, 30), circa),
    tag: tags.ic,
    code: 'scss',
    note: 'Extremely helpful to manage CSS.',
    emoji: svgEmoji('😍'),
  },
  {
    date: format(new Date('2021/4/28'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 4, 28), circa),
    tag: tags.ic,
    code: 'ruby',
    note: 'First OOP language. Everything is an object in Ruby. Simplicity and productivity emphases.',
    emoji: svgEmoji('🤓'),
  },
  {
    date: format(new Date('2021/5/27'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 5, 27), circa),
    tag: tags.ac,
    code: '',
    note: 'Built the first Ruby Terminal App.',
    emoji: svgEmoji('🥳'),
  },
  {
    date: format(new Date('2021/5/31'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 5, 31), circa),
    tag: tags.ic,
    code: 'ruby on rails',
    note: 'Quick full-stack Ruby framework that compress the complexity of modern web apps.',
    emoji: svgEmoji('🚂'),
  },
  {
    date: format(new Date('2021/6/14'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 6, 14), circa),
    tag: tags.ex,
    code: 'postgresql',
    note: "Relational database. It's quite complex to setup, but great for handling complex data",
    emoji: svgEmoji('👥'),
  },
  {
    date: format(new Date('2021/6/22'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 6, 22), circa),
    tag: tags.ex,
    code: 'bootstrap',
    note: `Certainly helps style clean UI faster, can be customised too.`,
    emoji: svgEmoji('😎'),
  },
  {
    date: format(new Date('2021/8/17'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 8, 17), circa),
    tag: tags.mo,
    code: '',
    note: `First debut posting a question at Stack Overflow.`,
    emoji: svgEmoji('🙈'),
  },
  {
    date: format(new Date('2021/8/19'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 8, 19), circa),
    tag: tags.ac,
    code: '',
    note: `Built the first Ruby on Rails marketplace app.`,
    emoji: svgEmoji('😆'),
  },
  {
    date: format(new Date('2021/8/23'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 8, 23), circa),
    tag: tags.ic,
    code: 'Javascript',
    note: `Compared to Ruby, this 'only built in 10 days' language has many gotchas to be aware of.`,
    emoji: svgEmoji('🙄'),
  },
  {
    date: format(new Date('2021/9/1'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 9, 1), circa),
    tag: tags.ex,
    code: 'Node.js',
    note: `Taking JavaScript beyond web browser development.`,
    emoji: svgEmoji('🤔'),
  },
  {
    date: format(new Date('2021/9/28'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 9, 28), circa),
    tag: tags.ic,
    code: 'React.js',
    note: `Amazing JavaScript library! Component based UI building made easy with state management.`,
    emoji: svgEmoji('😳'),
  },
  {
    date: format(new Date('2021/10/12'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 10, 12), circa),
    tag: tags.ex,
    code: 'Styled-components',
    note: `At first I hated it. But in fact, very helpful to combine both CSS and JS to style UI.`,
    emoji: svgEmoji('💅🏼'),
  },
  {
    date: format(new Date('2021/11/6'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 11, 6), circa),
    tag: tags.ex,
    code: 'MERN',
    note: `Hope to get deeper in each of the stack, esp. MongoDB and Express.js.`,
    emoji: svgEmoji('🌞'),
  },
  {
    date: format(new Date('2021/12/2'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 12, 2), circa),
    tag: tags.wi,
    code: '',
    note: `First group project & Git collaboration`,
    emoji: svgEmoji('🤝'),
  },
  {
    date: format(new Date('2021/12/3'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 12, 3), circa),
    tag: tags.mo,
    code: '',
    note: `Really trying to embrace 'learning by doing' as a team despite not (fully) understanding everything...`,
    emoji: svgEmoji('🔥'),
  },
  {
    date: format(new Date('2021/12/10'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 12, 10), circa),
    tag: tags.ex,
    code: 'material ui',
    note: `A level up from Bootstrap. CSS-in-JS based for styling UI with a lot of interactivity and also customisable.`,
    emoji: svgEmoji('😳'),
  },
  {
    date: format(new Date('2021/12/26'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 12, 26), circa),
    tag: tags.ic,
    code: 'next.js',
    note: `React.js framework that enables server-side rendering and generate static websites.`,
    emoji: svgEmoji('👍🏼'),
  },
  {
    date: format(new Date('2021/12/27'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 12, 27), circa),
    tag: tags.wi,
    code: '',
    note: `Revamping portfolio website using Next.js.`,
    emoji: svgEmoji('😱'),
  },
  {
    date: format(new Date('2021/12/31'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 12, 31), circa),
    tag: tags.ac,
    code: '',
    note: `End of 2021 → Total of 577 GitHub contributions so far.`,
    emoji: svgEmoji('🐙'),
  },
  {
    date: format(new Date('2022/1/18'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 1, 18), circa),
    tag: tags.ac,
    code: '',
    note: `Completed Coder Academy Full-stack boot camp.`,
    emoji: svgEmoji('🎊'),
  },
  {
    date: format(new Date('2022/1/20'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 1, 20), circa),
    tag: tags.wi,
    code: '',
    note: `Revisiting and re-exploring Vanilla JavaScript.`,
    emoji: svgEmoji('🤯'),
  },
  {
    date: format(new Date('2022/1/21'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 1, 21), circa),
    tag: tags.ex,
    code: 'tailwind css',
    note: `Extremely fast utility first CSS framework. Very customisable.`,
    emoji: svgEmoji('🥰'),
  },
  {
    date: format(new Date('2022/1/26'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 1, 26), circa),
    tag: tags.ex,
    code: 'twin.macro',
    note: `Helps blend the magic of Tailwind CSS with the flexibility of CSS-in-JS. Getting the best of both utilities!`,
    emoji: svgEmoji('😳'),
  },
];

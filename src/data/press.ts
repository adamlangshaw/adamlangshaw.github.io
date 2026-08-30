export type PressItem = {
  outlet: string;
  date: string;
  headline: string;
  note: string;
  url: string;
  linkLabel: string;
  logo: string; // path under /img/logo/
  todo?: string;
};

export const PRESS: PressItem[] = [
  {
    outlet: 'Hoover Institution',
    date: 'Jul 24, 2026',
    headline:
      'Hoover Institution congratulates the 2026 winners of its Distinguished Undergraduate Essay Competition',
    note: 'Names Adam Langshaw as a winner of the 2026 competition.',
    url: 'https://www.hoover.org/',
    linkLabel: 'hoover.org',
    logo: '/img/logo/hooverlogo.svg',
  },
  {
    outlet: 'South Florida Sun Sentinel',
    date: 'Jun 19, 2025',
    headline: "Class of 2025: Broward County's high school valedictorians and salutatorians",
    note: 'Listed as salutatorian of Cypress Bay High School, weighted GPA 5.6061.',
    url: 'https://www.sun-sentinel.com/',
    linkLabel: 'sun-sentinel.com',
    logo: '/img/logo/sunsentinel.png',
  },
  {
    outlet: 'Local 10 · WPLG Miami',
    date: 'May 14, 2025',
    headline: '8 Broward County Public School seniors awarded National Merit Scholarships',
    note: 'Named among the Broward recipients.',
    url: 'https://www.local10.com/',
    linkLabel: 'local10.com',
    logo: '/img/logo/local10.png',
  },
  {
    outlet: 'IMACS',
    date: '2025',
    headline: 'From Broward County to Stanford: how EMF math builds fluent university-level learners',
    note: 'On the EMF math track Adam came up through.',
    url: 'https://www.imacs.org/',
    linkLabel: 'imacs.org',
    logo: '/img/logo/imacs.png',
    todo: 'IMACS to add name + link before launch',
  },
];

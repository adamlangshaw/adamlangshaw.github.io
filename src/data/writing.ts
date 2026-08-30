export type Article = {
  title: string;
  category: 'Opinion' | 'Sports';
  date: string; // ISO
  display: string; // e.g. "Jun 4, 2026"
  url: string;
  image: string; // path under /img/writing/
  alt: string;
};

// Newest first.
export const WRITING: Article[] = [
  {
    title: 'Why Stanford must follow Harvard on grade reform',
    category: 'Opinion',
    date: '2026-06-04',
    display: 'Jun 4, 2026',
    url: 'https://stanforddaily.com/2026/06/04/why-stanford-must-follow-grade-reform/',
    image: '/img/writing/grade-reform.jpg',
    alt: 'Illustration accompanying the Stanford Daily essay on grade reform',
  },
  {
    title: "Aden Valencia's will: how a freshman became a national wrestling champion",
    category: 'Sports',
    date: '2026-04-14',
    display: 'Apr 14, 2026',
    url: 'https://stanforddaily.com/2026/04/14/valencia-freshman-wrestling-champion/',
    image: '/img/writing/valencia.jpg',
    alt: 'Aden Valencia competing for Stanford wrestling',
  },
  {
    title: 'Why America needs birthright citizenship',
    category: 'Opinion',
    date: '2026-04-07',
    display: 'Apr 7, 2026',
    url: 'https://stanforddaily.com/2026/04/07/america-needs-birthright-citizenship/',
    image: '/img/writing/birthright.jpg',
    alt: 'The Statue of Liberty, accompanying the Stanford Daily essay on birthright citizenship',
  },
  {
    title: 'Stanford wrestling upsets No. 12 Pitt',
    category: 'Sports',
    date: '2026-02-18',
    display: 'Feb 18, 2026',
    url: 'https://stanforddaily.com/2026/02/18/stanford-wrestling-upsets-no-12-pitt/',
    image: '/img/writing/pitt.jpg',
    alt: 'Stanford wrestler Angelo Posada in a match against Pitt',
  },
  {
    title: 'In defense of legacy admissions',
    category: 'Opinion',
    date: '2026-02-02',
    display: 'Feb 2, 2026',
    url: 'https://stanforddaily.com/2026/02/02/langshaw-in-defense-of-legacy-admissions/',
    image: '/img/writing/legacy.jpg',
    alt: 'Image accompanying the Stanford Daily essay on legacy admissions',
  },
  {
    title: 'Stanford wrestling dominates Cal Poly in lopsided win',
    category: 'Sports',
    date: '2026-02-01',
    display: 'Feb 1, 2026',
    url: 'https://stanforddaily.com/2026/02/01/stanford-dominates-cal-poly-in-win/',
    image: '/img/writing/calpoly.jpg',
    alt: 'Stanford wrestling in a dual meet against Cal Poly',
  },
  {
    title: "California's proposed wealth tax is short-sighted",
    category: 'Opinion',
    date: '2026-01-20',
    display: 'Jan 20, 2026',
    url: 'https://stanforddaily.com/2026/01/20/langshaw-californias-proposed-wealth-tax-is-short-sighted/',
    image: '/img/writing/wealthtax.jpg',
    alt: 'The California State Capitol in Sacramento',
  },
  {
    title: "Stanford wrestling's comeback falls short in loss to No. 6 NC State",
    category: 'Sports',
    date: '2026-01-19',
    display: 'Jan 19, 2026',
    url: 'https://stanforddaily.com/2026/01/19/stanford-suffers-loss-to-nc-state/',
    image: '/img/writing/ncstate.jpg',
    alt: 'Aden Valencia wrestling for Stanford against NC State',
  },
  {
    title: 'On the capture of Nicolás Maduro',
    category: 'Opinion',
    date: '2026-01-06',
    display: 'Jan 6, 2026',
    url: 'https://stanforddaily.com/2026/01/06/on-the-capture-of-nicolas-maduro/',
    image: '/img/writing/maduro.jpg',
    alt: 'Image accompanying the Stanford Daily essay on the capture of Nicolás Maduro',
  },
];

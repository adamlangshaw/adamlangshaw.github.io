export type Role = {
  role: string;
  id?: string;
  contract?: boolean;
  org: string;
  meta?: string;
  dates: string;
  logo: string; // path under /img/logo/
  summary: string;
};

// Reverse chronological: ongoing roles first (by start), then past.
export const EXPERIENCE: Role[] = [
  {
    id: 'hoover-student-fellow',
    role: 'Hoover Student Fellow',
    org: 'Hoover Institution',
    dates: 'Oct 2026 - present',
    meta: '2026–27 fellowship',
    logo: '/img/logo/hooverlogo.svg',
    summary: 'Works with Senior Fellow Eric Hanushek through the Hoover Institution Student Fellowship Program, providing research support in education policy and economics. Participates in faculty mentorship, research activities, and programming across the Hoover Institution.',
  },
  {
    role: 'Student Manager, Football',
    org: 'Stanford Athletics',
    dates: 'Apr 2026 - present',
    logo: '/img/logo/stanford.png',
    summary:
      'Support the players and coaching staff through the season, at every practice, home game, and select road trips with the team, assisting with day-to-day football operations.',
  },
  {
    role: 'Opinions Managing Editor',
    org: 'The Stanford Daily',
    meta: 'Vol. 270',
    dates: 'Jan 2026 - present',
    logo: '/img/logo/stanforddaily.png',
    summary:
      "Commission, edit, and publish the opinion section's columns and op-eds across politics, higher education, and health policy. Also a member of The Stanford Daily Editorial Board.",
  },
  {
    role: 'Vertical AI Integration',
    contract: true,
    org: 'Inquire LLC',
    dates: 'Jun 2024 - present',
    logo: '/img/logo/inquire.png',
    summary:
      'Built automated data pipelines and applied AI tooling for a business client, including large-scale data processing and workflow automation.',
  },
  {
    role: 'Research Intern',
    org: 'CarePredict',
    meta: 'Plantation, FL',
    dates: 'Jun - Sep 2025',
    logo: '/img/logo/carepredict.png',
    summary:
      "Research supporting the company's projects in remote patient monitoring and aging-in-place health technology.",
  },
];

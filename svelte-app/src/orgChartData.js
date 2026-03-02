export const orgChart = {
  name: 'SEOC Manager',
  level: 'command',
  children: [
    { name: 'Safety', level: 'section' },
    { name: 'Liaison', level: 'section' },
    { name: 'ESF 15 Public Information', level: 'section' },
    {
      name: 'Operations Section Chief',
      level: 'section',
      children: [
        {
          name: 'Health Service Branch',
          level: 'branch',
          children: [
            { name: 'ESF 6 Mass Care, Housing, & Human Services', level: 'unit' },
            { name: 'ESF 8 Public Health & Medical Services', level: 'unit' },
            { name: 'ESF 11 Agriculture', level: 'unit' }
          ]
        },
        {
          name: 'Infrastructure Branch',
          level: 'branch',
          children: [
            { name: 'ESF 1 Transportation', level: 'unit' },
            { name: 'ESF 3 Public Works & Engineering', level: 'unit' },
            { name: 'ESF 12 Energy & Utilities', level: 'unit' },
            { name: 'ESF 17 Cyber Security', level: 'unit' }
          ]
        },
        {
          name: 'Public Safety Branch',
          level: 'branch',
          children: [
            { name: 'ESF 4 Firefighting', level: 'unit' },
            { name: 'ESF 9 Search & Rescue', level: 'unit' },
            { name: 'ESF 10 Hazardous Materials', level: 'unit' },
            { name: 'ESF 13 Law Enforcement & Security', level: 'unit' }
          ]
        }
      ]
    },
    {
      name: 'Planning Section Chief',
      level: 'section',
      children: [
        {
          name: 'Resource Unit',
          level: 'branch',
          children: [
            { name: 'Documentation Unit', level: 'branch' },
            { name: 'Situation Unit', level: 'branch' },
            { name: 'Hazard Analysis', level: 'branch' },
            { name: 'Information Technology (IT)', level: 'branch' },
            { name: 'Geographic Information System (GIS)', level: 'branch' }
          ]
        }
      ]
    },
    {
      name: 'Logistics',
      level: 'section',
      children: [
        {
          name: 'Supply Branch',
          level: 'branch',
          children: [
            { name: 'Donations Manager', level: 'unit' },
            { name: 'Ordering Manager', level: 'unit' },
            { name: 'Receiving & Distribution Manager', level: 'unit' }
          ]
        },
        {
          name: 'Support Branch',
          level: 'branch',
          children: [
            { name: 'ESF 2 Communications', level: 'unit' },
            { name: 'Private Sector EOC Representative', level: 'unit' },
            { name: 'Volunteer Manager', level: 'unit' },
            { name: 'Information Technology (IT)', level: 'unit' },
            { name: 'Geographic Information System (GIS)', level: 'unit' }
          ]
        }
      ]
    },
    {
      name: 'Recovery',
      level: 'section',
      children: [
        {
          name: 'Individual Assistance',
          level: 'branch',
          children: [
            { name: 'Public Assistance', level: 'branch' },
            { name: 'Mitigation', level: 'branch' },
            { name: 'Commonwealth Council for Recovery & Resilience', level: 'branch' }
          ]
        }
      ]
    },
    { name: 'Admin/Finance', level: 'section' }
  ]
};

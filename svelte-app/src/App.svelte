<script>
  import Header from './Header.svelte';
  import Stats from './Stats.svelte';
  import ResumeSection from './ResumeSection.svelte';

  const profile = {
    name: 'Tommy Adams',
    title: 'Emergency Management Professional | Educator | Public Servant-Leader',
    location: 'Kentucky, USA | Honorable Kentucky Colonel',
    photoSrc: './images/tommy-portrait.jpg',
    photoAlt: 'Tommy Adams',
    statement: `I am a Section Supervisor with Kentucky Emergency Management (KYEM), leading the Chemical Stockpile Emergency Preparedness Program (CSEPP) and serving on the State EOC team during activations as Planning Section Chief. With over 17 years of higher education teaching experience and 5+ years in emergency management and search & rescue, I bring operational leadership, policy development, and trauma-informed communication skills to high-consequence environments. As a Wilderness First Responder, Rope Rescue Technician, and Swift Water Rescue Technician with Wolfe County Search & Rescue, I have responded to time-sensitive incidents including the Eastern Kentucky floods of 2022. I hold a Master's degree in Political Communication from San Diego State University, reached Ph.D. candidacy at Penn State, and completed executive education at the Naval Postgraduate School's Center for Homeland Defense and Security. My work bridges strategic program management with hands-on emergency response, always grounded in community service, equity, and whole-community preparedness.`
  };

  const stats = [
    { number: '17+', label: 'Years Teaching Experience' },
    { number: '5+',  label: 'Years Emergency Management' },
    { number: '7+',  label: 'Years Daily Running Streak' },
    { number: '30+', label: 'Countries Visited' },
  ];

  const emergencyHighlights = [
    'Supervise staff and volunteers in high-risk emergency preparedness environment',
    'Write, update, and implement all-hazards emergency plans and site-specific response plans',
    'Coordinate multi-agency emergency responses with law enforcement, fire, public health, and military',
    'Develop and deliver emergency preparedness training, drills, and exercises',
    'Manage FEMA-funded programs and ensure federal grant compliance (2 CFR 200, FAR 31.2)',
    'Serve as primary point of contact for emergency management initiatives and EOC activations',
    'Apply de-escalation, trauma-informed communication, and restorative practices',
  ];

  const educationHighlights = [
    'Award-Winning Teacher: Critical Thinking Teacher of the Year Nominee (2015), Teacher Who Made a Difference Award (2014)',
    'Technology Mentor & Advocate: Pearson Higher Ed Faculty Advisor, integrated learning technologies across institutions',
    'Public Speaking & Conflict Management: 2x National Qualifier in competitive speech and debate (high school)',
    'De-escalation & Trauma-Informed Communication: Applied with vulnerable populations, disaster survivors, and community members in crisis',
    'Change Management: Led teams through new policies, systems, and operational transitions',
  ];

  const publicServiceHighlights = [
    'Manage organizational financial reporting, reconciliation, and audit preparation',
    'Oversee grant-funded initiatives, track expenditures, and document performance for funders',
    'Prepare comprehensive financial reports with visual data presentation',
    'Ensure regulatory compliance and financial accountability across public and nonprofit sectors',
    'Build and maintain relationships with law enforcement, fire, public health, human services, volunteer organizations, and military partners',
  ];

  const coreSkills = [
    'Emergency Operations',
    'Incident Command (ICS)',
    'Staff Supervision',
    'Policy Development',
    'Federal Grants Management',
    'Budget & Resource Management',
    'De-escalation & Conflict Resolution',
    'Training & Curriculum Design',
    'Multi-Agency Coordination',
    'Public Speaking',
    'Technical Rescue Operations',
    'Strategic Communications',
  ];

  const affiliations = [
    'Kentucky Emergency Management',
    'Wolfe County Search & Rescue',
    'Naval Postgraduate School',
    'Penn State University',
    'Texas A&M University',
    'Ohio Northern University',
    'NOLS',
    'National Communication Association',
    'FEMA',
  ];
</script>

<div class="container">
  <Header
    name={profile.name}
    title={profile.title}
    location={profile.location}
    photoSrc={profile.photoSrc}
    photoAlt={profile.photoAlt}
  />

  <div class="profile">
    <p>{profile.statement}</p>
  </div>

  <Stats {stats} />

  <div class="content">

    <ResumeSection icon="🚨" title="Emergency Management Leadership" highlights={emergencyHighlights}>
      <p><strong>Kentucky Emergency Management (May 2023 – Present):</strong> Section Supervisor overseeing Chemical Stockpile Emergency Preparedness Program (CSEPP) stewardship and drawdown. Serve on State EOC team during activations in multiple roles: Planning Section Chief, Field Operations, Logistics, Public Safety Branch, and ESF5 Emergency Management Support Function. FEMA-funded position requiring high-level coordination with federal, state, and local partners including U.S. Army and National Guard.</p>
      <p><strong>Wolfe County Search & Rescue (January 2021 – Present):</strong> Officer, Treasurer, and Finance Officer for 501(c)(3) nonprofit. Active team member with certifications as Wilderness First Responder, Rope Rescue Technician, and Swift Water/Moving Water Rescue Technician. FEMA National Incident Management System (ICS) certified. Responded to Eastern Kentucky floods (2022) and numerous search operations.</p>
    </ResumeSection>

    <ResumeSection icon="🎓" title="Education & Communication Excellence" highlights={educationHighlights}>
      <p><strong>17+ Years of University-Level Teaching:</strong> Taught at 10+ institutions including Ohio Northern University (Visiting Assistant Professor), Texas A&M University (Full-time Faculty), Bluegrass Community & Technical College (Communications Area Faculty), University of Kentucky, Penn State, San Diego State, and internationally at Shanghai University. Designed curricula, mentored faculty, and coached hundreds of students through challenging communication scenarios.</p>
      <p><strong>Published Author & Award Winner:</strong> Author of "Memes as a Communicative Act" in <em>Meme Life</em> (2021), which won the National Communication Association Book Award (2023). Research Partner on <em>Towers of Rhetoric: Memory and Reinvention</em> (2018). Keynote speaker and presenter at national conferences.</p>
    </ResumeSection>

    <ResumeSection icon="🤝" title="Public Service & Nonprofit Leadership" highlights={publicServiceHighlights}>
      <p><strong>Federal Grants Management Certificate:</strong> Completed comprehensive training in Subawarding for Pass-through Entities, Cost Principles (2 CFR 200 and FAR 31.2), Writing Successful Federal Grants, and Uniform Administrative Requirements for Federal Grants.</p>
      <p><strong>Nonprofit Leadership Experience:</strong> Currently serve as Treasurer & Finance Officer for Wolfe County Search & Rescue (501c3). Previously Executive Director and Interim President of Friends of Hemp (2019–2020), and Communication Director for Hemp Feed Coalition (2019–2020). Candidate for State Representative, Kentucky House District 73 (2022).</p>
    </ResumeSection>

    <ResumeSection icon="⚡" title="Core Competencies & Certifications" skills={coreSkills}>
      <p><strong>FEMA/Emergency Management Training:</strong> ICS 100, 200, 300, 305, 400, 700, 800; IS 2200 Basic EOC Functions; G 2300 Intermediate Emergency Operations; IS 29 Public Information Officer; IS 120 Introduction to Exercises; G-191 EOC Interface; IS 235 Emergency Planning; IS 240 Leadership and Influence; IS 241 Decision Making and Problem Solving; IS 242 Effective Communication; IS 244 Developing and Managing Volunteers; Chemical Incident Response (CHEMKPF AWR-947-W); WebPuff; IPAWS Alert System; WEB EOC Communication System</p>
      <p><strong>Search & Rescue Certifications:</strong> NOLS Wilderness First Responder; Swift Water Rescue; Technical Rope Rescue; B-Search and Rescue; Land Navigation, GPS & GAIA; Lost Person Behavior; Search Management</p>
      <p><strong>Executive Education:</strong> Radiological Emergency Preparedness Executive Education Program, Center for Homeland Defense and Security, Naval Postgraduate School (2025)</p>
    </ResumeSection>

    <ResumeSection icon="🏃" title="Personal Excellence & Global Experience">
      <div class="trail-photo-banner">
        <img src="./images/tommy-trail-running.jpg" alt="Tommy Adams trail running on a mountain ridge" />
        <div class="trail-photo-caption">Running the ridgeline — one of 2,500+ consecutive days and counting</div>
      </div>
      <p><strong>Running Every Single Day Since October 2018:</strong> Over seven years without missing a day. This daily commitment reflects the discipline, resilience, and iterative refinement process I bring to every aspect of my life and work.</p>
      <p><strong>Globally-Minded Traveler:</strong> Visited 30+ countries across six continents including Italy, UK, Germany, France, China, Japan, Thailand, Australia, Brazil, New Zealand, and many others. Studied abroad in Florence, Italy (Pepperdine University International Programs) and taught in Shanghai, China as Visiting Professor.</p>
      <p><strong>Honors & Recognition:</strong> Honorable Kentucky Colonel (Governor Andy Beshear, 2022); Public Service Recognition – Kentucky Emergency Management/Team Kentucky (2023); National Communication Association Book Award Winner (2023)</p>
      <p><strong>Community Service & Mentorship:</strong> Active volunteer and mentor with A Running Start (2021–Present); founder of campus run clubs; advisor to student organizations; judge for business pitch competitions; extensive committee service across academic and community organizations</p>
    </ResumeSection>

    <ResumeSection icon="🏢" title="Professional Affiliations & Education" orgs={affiliations}>
      <p><strong>Education:</strong> Ph.D. Candidacy – Communication Arts & Sciences (Rhetoric, Politics, & Democratic Deliberation), Penn State University; M.A. Communication Studies (Political Communication), San Diego State University; B.A. Speech Communication & Philosophy (Double Major), Pepperdine University</p>
    </ResumeSection>

  </div>
</div>

<style>
  .container {
    max-width: 850px;
    margin: 0 auto;
    background: white;
    box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    border-radius: 8px;
    overflow: hidden;
  }

  .profile {
    padding: 40px;
    background: #f8f9fa;
    border-bottom: 4px solid #3498db;
  }

  .profile p {
    font-size: 1.05em;
    color: #2c3e50;
    text-align: justify;
    line-height: 1.8;
    margin: 0;
  }

  .content {
    padding: 40px;
  }

  /* Pass paragraph spacing into section slots */
  .content :global(p) {
    margin-bottom: 15px;
  }

  .content :global(p:last-child) {
    margin-bottom: 0;
  }

  /* Trail running banner */
  .trail-photo-banner {
    margin-bottom: 25px;
    border-radius: 6px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 4px 15px rgba(0,0,0,0.15);
  }

  .trail-photo-banner img {
    width: 100%;
    height: 260px;
    object-fit: cover;
    object-position: center 40%;
    display: block;
  }

  .trail-photo-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0,0,0,0.65));
    color: white;
    padding: 30px 20px 14px;
    font-size: 0.9em;
    font-style: italic;
    letter-spacing: 0.3px;
  }

  @media (max-width: 768px) {
    .content { padding: 30px 25px; }
    .trail-photo-banner img { height: 180px; }
  }

  @media print {
    .container {
      box-shadow: none;
      max-width: 100%;
      border-radius: 0;
    }
  }
</style>

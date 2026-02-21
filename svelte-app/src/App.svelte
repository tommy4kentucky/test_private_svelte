<script>
  import Header from './Header.svelte';
  import Stats from './Stats.svelte';
  import ResumeSection from './ResumeSection.svelte';
  import data from './data.json';

  const profile = {
    name: data.name,
    title: data.title,
    location: data.location,
    linkedin: data.linkedin || '',
    cvLink: data.cvLink || '',
    photoSrc: './images/tommy-portrait.jpg',
    photoAlt: data.name,
    statement: data.statement
  };

  const stats = data.stats;
  const emergencyHighlights = data.emergencyHighlights;
  const educationHighlights = data.educationHighlights;
  const publicServiceHighlights = data.publicServiceHighlights;
  const coreSkills = data.coreSkills;
  const affiliations = data.affiliations;
  const strava = data.strava || '';
  const publications = data.publications || [];
  const awards = data.awards || [];
  const workExperience = data.workExperience || [];
  const educationDegreesList = data.educationDegreesList || [];
  const teachingInstitutions = data.teachingInstitutions || [];

  const photos = [
    { src: './images/05-sar-portrait-orange-field.jpg', alt: 'Tommy Adams in orange SAR Arc\'teryx jacket', caption: 'SAR Operations — Floyd County' },
    { src: './images/13-sar-highline-valley.jpg', alt: 'Tommy Adams smiling in helmet at highline over valley', caption: 'Highline Rigging — Red River Gorge' },
    { src: './images/12-sar-rappel-sandstone.jpg', alt: 'Tommy Adams rappelling sandstone cliff with helmet', caption: 'Technical Rope Rescue' },
    { src: './images/01-flood-rescue-team.jpg', alt: 'Floyd County flood rescue team training', caption: 'Flood Rescue — Floyd County' },
  ];

  function paragraphs(text) {
    return text.split('\n\n');
  }
</script>

<div class="container">
  <Header
    name={profile.name}
    title={profile.title}
    location={profile.location}
    linkedin={profile.linkedin}
    cvLink={profile.cvLink}
    photoSrc={profile.photoSrc}
    photoAlt={profile.photoAlt}
  />

  <div class="profile">
    {#each paragraphs(profile.statement) as para}
      <p>{para}</p>
    {/each}
  </div>

  <Stats {stats} />

  <div class="photo-mosaic">
    {#each photos as photo}
      <div class="photo-cell">
        <img src={photo.src} alt={photo.alt} />
        <div class="photo-caption">{photo.caption}</div>
      </div>
    {/each}
  </div>

  <div class="content">

    <ResumeSection icon="🚨" title="Emergency Management / Search & Rescue" highlights={emergencyHighlights}>
      <div class="sar-banner">
        <img src="./images/07-sar-cliff-edge-fog.jpg" alt="Tommy Adams at cliff edge overlooking fog-filled valley during SAR operation" />
        <div class="sar-banner-caption">Cliff rescue operations — Red River Gorge area</div>
      </div>
      {#each paragraphs(data.emergencyContent) as para}
        <p>{para}</p>
      {/each}
    </ResumeSection>

    <ResumeSection icon="🎓" title="Teaching & Communication" highlights={educationHighlights}>
      <div class="classroom-banner">
        <img src="./images/10-classroom-professor.png" alt="Tommy Adams in the classroom" />
        <div class="classroom-banner-caption">17+ years shaping communicators — across 10+ universities</div>
      </div>
      {#each paragraphs(data.educationContent) as para}
        <p>{para}</p>
      {/each}
      {#if teachingInstitutions.length > 0}
        <div class="teaching-grid-label">Institutions taught at</div>
        <div class="teaching-grid">
          {#each teachingInstitutions as inst}
            <div class="teaching-card">{inst}</div>
          {/each}
        </div>
      {/if}
      {#if educationDegreesList.length > 0}
        <div class="degrees-label">Academic Degrees</div>
        <div class="degrees">
          {#each educationDegreesList as d}
            <div class="degree-card">
              <span class="degree-label">{d.degree}</span>
              <span class="degree-field">{d.field}</span>
              <span class="degree-inst">{d.institution}</span>
            </div>
          {/each}
        </div>
      {/if}
    </ResumeSection>

    <ResumeSection icon="🤝" title="Nonprofit & Public Service Leadership" highlights={publicServiceHighlights}>
      {#each paragraphs(data.publicServiceContent) as para}
        <p>{para}</p>
      {/each}
    </ResumeSection>

    <ResumeSection icon="💼" title="Work Experience">
      {#each workExperience as job}
        <div class="job">
          <div class="job-header">
            <div class="job-title-wrap">
              <span class="job-title">{job.title}</span>
              <span class="job-org">{job.org}</span>
            </div>
            <span class="job-dates">{job.dates}</span>
          </div>
          <ul class="job-bullets">
            {#each job.bullets as bullet}
              <li>{bullet}</li>
            {/each}
          </ul>
        </div>
      {/each}
    </ResumeSection>

    {#if publications.length > 0}
    <ResumeSection icon="📚" title="Publications & Scholarship">
      <div class="pub-list">
        {#each publications as pub}
          <div class="pub-item">
            <div class="pub-title">"{pub.title}"</div>
            <div class="pub-meta">{pub.role} · {pub.publisher} · {pub.year}</div>
            {#if pub.award}
              <div class="pub-award">🏆 {pub.award}</div>
            {/if}
          </div>
        {/each}
      </div>
    </ResumeSection>
    {/if}

    {#if awards.length > 0}
    <ResumeSection icon="🏆" title="Awards & Recognition">
      <ul class="awards-list">
        {#each awards as award}
          <li>{award}</li>
        {/each}
      </ul>
    </ResumeSection>
    {/if}

    <ResumeSection icon="🏃" title="Personal Excellence & Global Perspective">
      <p><strong>Running Every Single Day Since October 2018:</strong> Over seven years without missing a day. This daily commitment reflects the discipline, resilience, and iterative refinement process I bring to every aspect of my life and work.{#if strava} <a class="strava-link" href={strava} target="_blank" rel="noopener noreferrer">Follow on Strava →</a>{/if}</p>
      <p><strong>Globally-Minded Traveler:</strong> Visited 30+ countries across six continents including Italy, UK, Germany, France, China, Japan, Thailand, Australia, Brazil, New Zealand, and many others. Studied abroad in Florence, Italy (Pepperdine University International Programs) and taught in Shanghai, China as Visiting Professor.</p>
    </ResumeSection>

    <ResumeSection icon="🌱" title="Community Service & Volunteer Work">
      <p>Active volunteer and mentor with <strong>A Running Start</strong> (2021–Present), a nonprofit supporting young runners. Founder of campus run clubs at multiple institutions. Advisor to student organizations, judge for business pitch competitions, and extensive committee service across academic and community organizations.</p>
      <p>Member of Wolfe County Search & Rescue since 2021 — contributing not only as a field responder but as an officer, treasurer, and finance officer supporting the organizational health of the team.</p>
    </ResumeSection>

    <ResumeSection icon="⚡" title="Core Competencies & Certifications" skills={coreSkills} collapsible={true}>
      {#each paragraphs(data.certificationsContent) as para}
        <p>{para}</p>
      {/each}
    </ResumeSection>

    <ResumeSection icon="🏢" title="Professional Affiliations" orgs={affiliations} collapsible={true}>
    </ResumeSection>

  </div>

  <div class="footer-photo">
    <img src="./images/08-ridge-run-sunset.jpg" alt="Tommy Adams looking off into the distance at sunset on a Kentucky ridge" />
  </div>
</div>

<style>
  .container {
    max-width: 850px;
    margin: 0 auto;
    background: white;
    box-shadow: 0 4px 24px rgba(0,0,0,0.12);
    border-radius: 6px;
    overflow: hidden;
  }

  .profile {
    padding: 35px 40px;
    background: #faf8f5;
    border-bottom: 2px solid #4a7c6b;
  }

  .profile p {
    font-size: 1em;
    color: #2d3a35;
    text-align: left;
    line-height: 1.75;
    margin: 0 0 12px;
  }

  .profile p:last-child {
    margin-bottom: 0;
  }

  /* Footer panoramic photo */
  .footer-photo {
    overflow: hidden;
  }

  .footer-photo img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: center 55%;
    display: block;
  }

  @media (max-width: 768px) {
    .footer-photo img { height: 180px; }
  }

  @media (max-width: 400px) {
    .footer-photo img { height: 140px; }
  }

  /* Photo mosaic — 4 photos in clean 2×2 grid */
  .photo-mosaic {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 220px 220px;
    gap: 3px;
    background: #1e3a2f;
  }

  .photo-cell {
    overflow: hidden;
    background: #e8e2d8;
    position: relative;
    cursor: default;
  }

  .photo-cell img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }

  .photo-cell:hover img {
    transform: scale(1.04);
  }

  .photo-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0,0,0,0.72));
    color: white;
    padding: 24px 12px 10px;
    font-size: 0.78em;
    font-style: italic;
    letter-spacing: 0.3px;
    opacity: 0;
    transform: translateY(6px);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .photo-cell:hover .photo-caption {
    opacity: 1;
    transform: translateY(0);
  }

  @media (hover: none) {
    .photo-caption { opacity: 1; transform: none; }
  }

  .content {
    padding: 40px;
  }

  /* Pass paragraph spacing into section slots */
  .content :global(p) {
    margin-bottom: 12px;
  }

  .content :global(p:last-child) {
    margin-bottom: 0;
  }

  /* SAR action banner */
  .sar-banner {
    margin-bottom: 20px;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
  }

  .sar-banner img {
    width: 100%;
    height: 260px;
    object-fit: cover;
    object-position: center 30%;
    display: block;
  }

  .sar-banner-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0,0,0,0.6));
    color: white;
    padding: 28px 18px 12px;
    font-size: 0.85em;
    font-style: italic;
    letter-spacing: 0.3px;
  }


  @media (max-width: 768px) {
    .content { padding: 25px 18px; }
    .profile { padding: 25px 18px; }
    .sar-banner img { height: 160px; }
    .classroom-banner img { height: 160px; }
    .teaching-grid { grid-template-columns: repeat(2, 1fr); }
    .photo-mosaic { grid-template-rows: 160px 160px; }
  }

  @media (max-width: 400px) {
    .content { padding: 20px 15px; }
    .profile { padding: 20px 15px; }
    .photo-mosaic { grid-template-rows: 130px 130px; }
    .sar-banner img { height: 140px; }
    .classroom-banner img { height: 140px; }
  }

  /* Work experience */
  .job {
    margin-bottom: 28px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e8e2d8;
  }

  .job:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .job-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 10px;
  }

  .job-title-wrap {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .job-title {
    font-weight: 700;
    color: #1e3a2f;
    font-size: 1em;
    line-height: 1.3;
  }

  .job-org {
    font-size: 0.9em;
    color: #4a7c6b;
    font-weight: 600;
  }

  .job-dates {
    font-size: 0.85em;
    color: #7a8a84;
    white-space: nowrap;
    padding-top: 2px;
  }

  .job-bullets {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .job-bullets li {
    padding: 5px 0 5px 22px;
    position: relative;
    font-size: 0.95em;
    color: #34403b;
    line-height: 1.6;
  }

  .job-bullets li::before {
    content: "•";
    position: absolute;
    left: 6px;
    color: #4a7c6b;
  }

  /* Degrees */
  .degrees {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 22px;
  }

  .degree-card {
    display: flex;
    align-items: baseline;
    gap: 10px;
    background: #f5f2ec;
    border-left: 3px solid #4a7c6b;
    padding: 10px 16px;
    border-radius: 0 4px 4px 0;
  }

  .degree-label {
    font-weight: 700;
    color: #1e3a2f;
    font-size: 0.9em;
    min-width: 120px;
    flex-shrink: 0;
  }

  .degree-field {
    color: #34403b;
    font-size: 0.9em;
    flex: 1;
  }

  .degree-inst {
    font-size: 0.85em;
    color: #4a7c6b;
    font-weight: 600;
    white-space: nowrap;
  }

  /* Classroom banner */
  .classroom-banner {
    margin-bottom: 22px;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
  }

  .classroom-banner img {
    width: 100%;
    height: 260px;
    object-fit: cover;
    object-position: center 20%;
    display: block;
  }

  .classroom-banner-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0,0,0,0.65));
    color: white;
    padding: 28px 18px 12px;
    font-size: 0.85em;
    font-style: italic;
    letter-spacing: 0.3px;
  }

  /* Teaching grid */
  .teaching-grid-label {
    font-size: 0.75em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    color: #4a7c6b;
    margin-top: 22px;
    margin-bottom: 10px;
  }

  .teaching-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    gap: 8px;
    margin-bottom: 28px;
  }

  .teaching-card {
    background: #f0f6f3;
    border-left: 3px solid #4a7c6b;
    padding: 10px 14px;
    font-size: 0.88em;
    font-weight: 600;
    color: #1e3a2f;
    border-radius: 0 4px 4px 0;
  }

  /* Degrees sub-section */
  .degrees-label {
    font-size: 0.75em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    color: #4a7c6b;
    margin-bottom: 10px;
  }

  .strava-link {
    color: #fc4c02;
    font-weight: 600;
    text-decoration: none;
    white-space: nowrap;
  }

  .strava-link:hover {
    text-decoration: underline;
  }

  /* Publications */
  .pub-list {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .pub-item {
    background: #faf8f5;
    border: 1px solid #e0d9cf;
    border-radius: 4px;
    padding: 16px 20px;
  }

  .pub-title {
    font-weight: 700;
    color: #1e3a2f;
    font-size: 1em;
    margin-bottom: 4px;
  }

  .pub-meta {
    font-size: 0.88em;
    color: #7a8a84;
    margin-bottom: 6px;
  }

  .pub-award {
    font-size: 0.88em;
    color: #8a6a1a;
    font-weight: 600;
    background: #fdf5dc;
    display: inline-block;
    padding: 3px 10px;
    border-radius: 3px;
    border: 1px solid #e8d898;
  }

  /* Awards */
  .awards-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .awards-list li {
    padding: 10px 16px 10px 44px;
    position: relative;
    background: #faf8f5;
    border-radius: 4px;
    color: #2d3a35;
    font-size: 0.95em;
    border: 1px solid #e0d9cf;
  }

  .awards-list li::before {
    content: "🏆";
    position: absolute;
    left: 12px;
    top: 10px;
  }

  @media (max-width: 768px) {
    .job-header { flex-direction: column; gap: 4px; }
    .job-dates { font-size: 0.82em; }
    .degree-card { flex-direction: column; gap: 4px; }
    .degree-label { min-width: unset; }
    .degree-inst { white-space: normal; }
  }

  @media print {
    .container {
      box-shadow: none;
      max-width: 100%;
      border-radius: 0;
    }
  }
</style>

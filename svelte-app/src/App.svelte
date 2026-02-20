<script>
  import Header from './Header.svelte';
  import Stats from './Stats.svelte';
  import ResumeSection from './ResumeSection.svelte';
  import data from './data.json';

  const profile = {
    name: data.name,
    title: data.title,
    location: data.location,
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

  const photos = [
    { src: './images/photo-1.jpg', alt: 'Tommy Adams — field work', caption: '' },
    { src: './images/photo-2.jpg', alt: 'Tommy Adams — international', caption: '' },
    { src: './images/photo-3.jpg', alt: 'Tommy Adams — community', caption: '' },
    { src: './images/photo-4.jpg', alt: 'Tommy Adams — leadership', caption: '' }
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
    photoSrc={profile.photoSrc}
    photoAlt={profile.photoAlt}
  />

  <div class="profile">
    {#each paragraphs(profile.statement) as para}
      <p>{para}</p>
    {/each}
  </div>

  <Stats {stats} />

  <div class="photo-strip">
    {#each photos as photo}
      <div class="photo-cell">
        <img src={photo.src} alt={photo.alt} />
      </div>
    {/each}
  </div>

  <div class="content">

    <ResumeSection icon="🚨" title="Emergency Management Leadership" highlights={emergencyHighlights}>
      {#each paragraphs(data.emergencyContent) as para}
        <p>{para}</p>
      {/each}
    </ResumeSection>

    <ResumeSection icon="🎓" title="Education & Communication Excellence" highlights={educationHighlights}>
      {#each paragraphs(data.educationContent) as para}
        <p>{para}</p>
      {/each}
    </ResumeSection>

    <ResumeSection icon="🤝" title="Public Service & Nonprofit Leadership" highlights={publicServiceHighlights}>
      {#each paragraphs(data.publicServiceContent) as para}
        <p>{para}</p>
      {/each}
    </ResumeSection>

    <ResumeSection icon="⚡" title="Core Competencies & Certifications" skills={coreSkills}>
      {#each paragraphs(data.certificationsContent) as para}
        <p>{para}</p>
      {/each}
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
      <p><strong>Education:</strong> {data.educationDegrees}</p>
    </ResumeSection>

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

  /* Photo strip */
  .photo-strip {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
  }

  .photo-cell {
    aspect-ratio: 1;
    overflow: hidden;
    background: #e8e2d8;
  }

  .photo-cell img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
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

  /* Trail running banner */
  .trail-photo-banner {
    margin-bottom: 20px;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
  }

  .trail-photo-banner img {
    width: 100%;
    height: 240px;
    object-fit: cover;
    object-position: center 40%;
    display: block;
  }

  .trail-photo-caption {
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
    .trail-photo-banner img { height: 180px; }
    .photo-strip { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 400px) {
    .content { padding: 20px 15px; }
    .profile { padding: 20px 15px; }
    .photo-strip { grid-template-columns: repeat(2, 1fr); }
  }

  @media print {
    .container {
      box-shadow: none;
      max-width: 100%;
      border-radius: 0;
    }
  }
</style>

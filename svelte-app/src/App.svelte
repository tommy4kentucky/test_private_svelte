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
    .content { padding: 25px 18px; }
    .profile { padding: 25px 18px; }
    .profile p { text-align: left; font-size: 0.98em; }
    .trail-photo-banner img { height: 180px; }
  }

  @media (max-width: 400px) {
    .content { padding: 20px 15px; }
    .profile { padding: 20px 15px; }
  }

  @media print {
    .container {
      box-shadow: none;
      max-width: 100%;
      border-radius: 0;
    }
  }
</style>

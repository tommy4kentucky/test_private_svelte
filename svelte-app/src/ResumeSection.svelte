<script>
  export let icon = '';
  export let title = '';
  export let highlights = [];  // array of strings
  export let skills = [];      // array of strings (rendered as badge pills)
  export let orgs = [];        // array of strings (rendered as org badges)
</script>

<div class="section">
  <div class="section-header">
    {#if icon}
      <span class="section-icon">{icon}</span>
    {/if}
    <h3 class="section-title">{title}</h3>
  </div>

  <div class="section-content">
    <slot />

    {#if highlights.length > 0}
      <ul class="highlights">
        {#each highlights as item}
          <li>{item}</li>
        {/each}
      </ul>
    {/if}

    {#if skills.length > 0}
      <div class="skills-grid">
        {#each skills as skill}
          <div class="skill-badge">{skill}</div>
        {/each}
      </div>
    {/if}

    {#if orgs.length > 0}
      <div class="org-list">
        {#each orgs as org}
          <div class="org-badge">{org}</div>
        {/each}
      </div>
    {/if}
  </div>
</div>

<style>
  .section {
    margin-bottom: 45px;
  }

  .section:last-child {
    margin-bottom: 0;
  }

  .section-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 3px solid #3498db;
  }

  .section-icon {
    font-size: 2em;
    margin-right: 15px;
    color: #3498db;
  }

  .section-title {
    font-size: 1.6em;
    font-weight: 700;
    color: #2c3e50;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0;
  }

  .section-content {
    color: #34495e;
    font-size: 1.05em;
    line-height: 1.8;
  }

  /* Highlights */
  .highlights {
    list-style: none;
    margin-top: 15px;
    padding: 0;
  }

  .highlights li {
    padding: 12px 0 12px 35px;
    position: relative;
    color: #2c3e50;
    font-size: 1.05em;
  }

  .highlights li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #27ae60;
    font-weight: 700;
    font-size: 1.3em;
  }

  /* Skills */
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 15px;
    margin-top: 20px;
  }

  .skill-badge {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 12px 20px;
    border-radius: 25px;
    text-align: center;
    font-weight: 600;
    font-size: 0.95em;
    box-shadow: 0 3px 10px rgba(0,0,0,0.15);
    transition: all 0.3s ease;
  }

  .skill-badge:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.25);
  }

  /* Orgs */
  .org-list {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 15px;
  }

  .org-badge {
    background: #ecf0f1;
    padding: 10px 20px;
    border-radius: 20px;
    color: #2c3e50;
    font-weight: 600;
    font-size: 0.95em;
    border: 2px solid #bdc3c7;
  }

  @media (max-width: 768px) {
    .section-title { font-size: 1.3em; }
    .skills-grid { grid-template-columns: 1fr; }
  }

  @media print {
    .skill-badge:hover { transform: none; }
  }
</style>

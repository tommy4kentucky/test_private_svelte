<script>
  export let icon = '';
  export let title = '';
  export let highlights = [];  // array of strings
  export let skills = [];      // array of strings (rendered as badge pills)
  export let orgs = [];        // array of strings (rendered as org badges)
  export let collapsible = false;

  let open = !collapsible;

  function toggle() {
    if (collapsible) open = !open;
  }
</script>

<div class="section">
  <div class="section-header" class:clickable={collapsible} on:click={toggle} role={collapsible ? 'button' : undefined} tabindex={collapsible ? 0 : undefined} on:keydown={e => (e.key === 'Enter' || e.key === ' ') && toggle()}>
    {#if icon}
      <span class="section-icon">{icon}</span>
    {/if}
    <h3 class="section-title">{title}</h3>
    {#if collapsible}
      <span class="toggle-indicator" class:open>{open ? '−' : '+'}</span>
    {/if}
  </div>

  {#if open}
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
  {/if}
</div>

<style>
  .section {
    margin-bottom: 40px;
  }

  .section:last-child {
    margin-bottom: 0;
  }

  .section-header {
    display: flex;
    align-items: center;
    margin-bottom: 18px;
    padding-bottom: 12px;
    border-bottom: 2px solid #4a7c6b;
  }

  .section-header.clickable {
    cursor: pointer;
    user-select: none;
    margin-bottom: 0;
  }

  .section-header.clickable:hover .section-title {
    color: #2d5a47;
  }

  .section-icon {
    font-size: 1.8em;
    margin-right: 12px;
  }

  .section-title {
    font-size: 1.4em;
    font-weight: 700;
    color: #1e3a2f;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0;
    flex: 1;
  }

  .toggle-indicator {
    font-size: 1.4em;
    font-weight: 300;
    color: #4a7c6b;
    width: 28px;
    text-align: center;
    line-height: 1;
    transition: transform 0.2s ease;
  }

  .section-content {
    color: #34403b;
    font-size: 1em;
    line-height: 1.7;
    padding-top: 18px;
  }

  /* Highlights */
  .highlights {
    list-style: none;
    margin-top: 12px;
    padding: 0;
  }

  .highlights li {
    padding: 10px 0 10px 30px;
    position: relative;
    color: #2d3a35;
    font-size: 1em;
  }

  .highlights li::before {
    content: "—";
    position: absolute;
    left: 0;
    color: #4a7c6b;
    font-weight: 700;
  }

  /* Skills */
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 12px;
    margin-top: 18px;
  }

  .skill-badge {
    background: #2d5a47;
    color: white;
    padding: 10px 18px;
    border-radius: 4px;
    text-align: center;
    font-weight: 600;
    font-size: 0.9em;
    letter-spacing: 0.3px;
  }

  /* Orgs */
  .org-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 15px;
  }

  .org-badge {
    background: #f5f2ec;
    padding: 8px 16px;
    border-radius: 4px;
    color: #2d3a35;
    font-weight: 600;
    font-size: 0.9em;
    border: 1px solid #d4cdc2;
  }

  @media (max-width: 768px) {
    .section-title { font-size: 1.15em; letter-spacing: 0.5px; }
    .skills-grid { grid-template-columns: repeat(2, 1fr); }
    .highlights li { padding-left: 24px; font-size: 0.95em; }
    .section-icon { font-size: 1.5em; margin-right: 10px; }
  }

  @media (max-width: 400px) {
    .skills-grid { grid-template-columns: 1fr; }
    .section-title { font-size: 1.05em; }
  }

  @media print {
    .section-content { display: block !important; }
    .toggle-indicator { display: none; }
  }
</style>

<script>
  export let stats = [];
  // Each stat: { number, label }
</script>

<div class="stats">
  {#each stats as stat}
    <div class="stat-box">
      <span class="stat-number">{stat.number}</span>
      <span class="stat-label">{stat.label}</span>
    </div>
  {/each}
</div>

<style>
  .stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    background: #faf8f5;
  }

  .stat-box {
    padding: 30px 20px;
    text-align: center;
    border-right: 1px solid #e8e2d8;
    border-bottom: 1px solid #e8e2d8;
  }

  .stat-number {
    font-size: 2.8em;
    font-weight: 700;
    color: #2d5a47;
    display: block;
    margin-bottom: 8px;
  }

  .stat-label {
    font-size: 0.85em;
    color: #6b7c75;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    .stats { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 400px) {
    .stats { grid-template-columns: 1fr; }
    .stat-box { border-right: none; }
    .stat-number { font-size: 2.2em; }
  }

  @media print {
    .stat-box:hover { transform: none; }
  }
</style>

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
    background: white;
  }

  .stat-box {
    padding: 35px 20px;
    text-align: center;
    border-right: 1px solid #ecf0f1;
    border-bottom: 1px solid #ecf0f1;
    transition: all 0.3s ease;
  }

  .stat-box:hover {
    background: #f8f9fa;
    transform: translateY(-3px);
  }

  .stat-number {
    font-size: 3em;
    font-weight: 700;
    color: #3498db;
    display: block;
    margin-bottom: 10px;
  }

  .stat-label {
    font-size: 0.95em;
    color: #7f8c8d;
    text-transform: uppercase;
    letter-spacing: 1px;
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

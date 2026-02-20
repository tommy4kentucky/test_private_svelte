<script>
  export let name;
  export let title;
  export let location;
  export let photoSrc;
  export let photoAlt;
</script>

<div class="header">
  <div class="topo-overlay"></div>
  <div class="header-content">
    {#if photoSrc}
      <div class="profile-photo">
        <img src={photoSrc} alt={photoAlt} />
      </div>
    {/if}
    <h2>{title}</h2>
    <h1>{name}</h1>
    <div class="location">{location}</div>
  </div>
</div>

<style>
  .header {
    background: linear-gradient(160deg, #1e3a2f 0%, #2d5a47 100%);
    color: white;
    padding: 50px 40px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .topo-overlay {
    position: absolute;
    inset: 0;
    opacity: 0.08;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cpath d='M40 200c30-60 80-100 160-100s130 40 160 100' fill='none' stroke='%23fff' stroke-width='1.2'/%3E%3Cpath d='M20 240c40-70 100-120 180-120s150 50 180 120' fill='none' stroke='%23fff' stroke-width='1'/%3E%3Cpath d='M60 160c25-50 70-80 140-80s115 30 140 80' fill='none' stroke='%23fff' stroke-width='1.2'/%3E%3Cpath d='M80 130c20-40 60-65 120-65s100 25 120 65' fill='none' stroke='%23fff' stroke-width='1'/%3E%3Cpath d='M0 280c50-80 120-140 200-140s150 60 200 140' fill='none' stroke='%23fff' stroke-width='1'/%3E%3Cpath d='M100 100c15-30 50-50 100-50s85 20 100 50' fill='none' stroke='%23fff' stroke-width='1.2'/%3E%3Cpath d='M0 320c60-90 140-160 200-160s140 70 200 160' fill='none' stroke='%23fff' stroke-width='0.8'/%3E%3Cpath d='M120 75c10-20 40-35 80-35s70 15 80 35' fill='none' stroke='%23fff' stroke-width='1'/%3E%3Cpath d='M0 360c70-100 150-180 200-180s130 80 200 180' fill='none' stroke='%23fff' stroke-width='0.8'/%3E%3C/svg%3E");
    background-size: 400px 400px;
  }

  .header-content {
    position: relative;
    z-index: 1;
  }

  h1 {
    font-size: 2.8em;
    margin-bottom: 10px;
    font-weight: 700;
    letter-spacing: 1px;
  }

  h2 {
    font-size: 1.3em;
    font-weight: 300;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #c8a45c;
    margin-bottom: 5px;
  }

  .location {
    font-size: 0.95em;
    font-weight: 300;
    margin-top: 10px;
    opacity: 0.85;
    letter-spacing: 0.5px;
  }

  .profile-photo {
    width: 170px;
    height: 170px;
    margin: 0 auto 25px;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid #c8a45c;
    box-shadow: 0 5px 20px rgba(0,0,0,0.3);
  }

  .profile-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 20%;
  }

  @media (max-width: 768px) {
    h1 { font-size: 2em; }
    h2 { font-size: 1.05em; letter-spacing: 1.5px; }
    .header { padding: 35px 20px; }
    .profile-photo { width: 130px; height: 130px; }
  }

  @media (max-width: 400px) {
    h1 { font-size: 1.6em; }
    h2 { font-size: 0.9em; }
    .profile-photo { width: 110px; height: 110px; }
  }
</style>

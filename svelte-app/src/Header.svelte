<script>
  export let name;
  export let title;
  export let location;
  export let photoSrc;
  export let photoAlt;
</script>

<div class="header">
  {#if photoSrc}
    <div class="profile-photo">
      <img src={photoSrc} alt={photoAlt} />
    </div>
  {/if}
  <h2>{title}</h2>
  <h1>{name}</h1>
  <div class="location">📍 {location}</div>
</div>

<style>
  .header {
    background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
    color: white;
    padding: 50px 40px;
    text-align: center;
  }

  h1 {
    font-size: 2.8em;
    margin-bottom: 10px;
    font-weight: 700;
    letter-spacing: 1px;
  }

  h2 {
    font-size: 1.5em;
    font-weight: 300;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #3498db;
    margin-bottom: 5px;
  }

  .location {
    font-size: 1em;
    font-weight: 300;
    margin-top: 10px;
    opacity: 0.9;
  }

  .profile-photo {
    width: 180px;
    height: 180px;
    margin: 0 auto 25px;
    border-radius: 50%;
    overflow: hidden;
    border: 5px solid #3498db;
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
    h2 { font-size: 1.1em; letter-spacing: 1.5px; }
    .header { padding: 35px 20px; }
    .profile-photo { width: 130px; height: 130px; }
  }

  @media (max-width: 400px) {
    h1 { font-size: 1.6em; }
    h2 { font-size: 0.95em; }
    .profile-photo { width: 110px; height: 110px; }
  }
</style>

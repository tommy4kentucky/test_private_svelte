<script>
  const colors = ['#ff0000', '#ff8800', '#ffff00', '#00cc44', '#0088ff', '#cc00ff'];
  const count = 40;
  const lights = Array.from({ length: count }, (_, i) => ({
    color: colors[i % colors.length],
    delay: ((i * 0.27) % 2.4).toFixed(2),
    duration: (1.1 + (i % 7) * 0.22).toFixed(2),
  }));
</script>

<div class="lights-strip" aria-hidden="true">
  <div class="wire"></div>
  {#each lights as light, i}
    <div class="drop" style="left: {((i + 0.5) / count) * 100}%">
      <div class="cord"></div>
      <div
        class="bulb"
        style="background:{light.color}; box-shadow:0 0 10px 5px {light.color},0 0 28px 10px {light.color}aa,0 0 50px 16px {light.color}55; animation-delay:{light.delay}s; animation-duration:{light.duration}s"
      ></div>
    </div>
  {/each}
</div>

<style>
  .lights-strip {
    position: relative;
    height: 72px;
    background: #0d0808;
    overflow: visible;
    z-index: 10;
  }

  .wire {
    position: absolute;
    top: 10px;
    left: 0;
    right: 0;
    height: 3px;
    background: #5a3030;
    box-shadow: 0 0 6px rgba(180, 80, 80, 0.4);
  }

  .drop {
    position: absolute;
    top: 10px;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cord {
    width: 2px;
    height: 16px;
    background: #6a3535;
  }

  .bulb {
    width: 16px;
    height: 22px;
    border-radius: 50% 50% 45% 45%;
    animation: flicker 1.5s ease-in-out infinite alternate;
  }

  @keyframes flicker {
    0%, 80%  { opacity: 1; }
    88%      { opacity: 0.15; }
    93%      { opacity: 0.95; }
    97%      { opacity: 0.2; }
    100%     { opacity: 1; }
  }
</style>

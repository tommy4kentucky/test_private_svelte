<script>
  const colors = ['#ff0000', '#ff8800', '#ffff00', '#00cc44', '#0088ff', '#cc00ff'];
  const count = 30;
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
        style="background:{light.color}; box-shadow:0 0 6px 3px {light.color},0 0 16px 5px {light.color}88; animation-delay:{light.delay}s; animation-duration:{light.duration}s"
      ></div>
    </div>
  {/each}
</div>

<style>
  .lights-strip {
    position: relative;
    height: 56px;
    background: #0d0808;
    overflow: visible;
    z-index: 10;
  }

  .wire {
    position: absolute;
    top: 8px;
    left: 0;
    right: 0;
    height: 2px;
    background: #2a1515;
  }

  .drop {
    position: absolute;
    top: 8px;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cord {
    width: 1px;
    height: 14px;
    background: #3a2020;
  }

  .bulb {
    width: 10px;
    height: 15px;
    border-radius: 50% 50% 45% 45%;
    animation: flicker 1.5s ease-in-out infinite alternate;
  }

  @keyframes flicker {
    0%, 80%  { opacity: 1; }
    88%      { opacity: 0.1; }
    93%      { opacity: 0.9; }
    97%      { opacity: 0.2; }
    100%     { opacity: 1; }
  }
</style>

<script>
  export let node;

  const levelClass = {
    command: 'command',
    section: 'section',
    branch: 'branch',
    unit: 'unit'
  };
</script>

<li>
  <div class={`node ${levelClass[node.level] || 'unit'}`}>{node.name}</div>
  {#if node.children?.length}
    <ul>
      {#each node.children as child}
        <svelte:self node={child} />
      {/each}
    </ul>
  {/if}
</li>

<style>
  li {
    list-style: none;
    position: relative;
    text-align: center;
    padding: 1.2rem 0.5rem 0 0.5rem;
  }

  li::before,
  li::after {
    content: '';
    position: absolute;
    top: 0;
    right: 50%;
    border-top: 2px solid #8bbf7a;
    width: 50%;
    height: 1.2rem;
  }

  li::after {
    right: auto;
    left: 50%;
    border-left: 2px solid #8bbf7a;
  }

  li:only-child::before,
  li:only-child::after {
    display: none;
  }

  li:only-child {
    padding-top: 0;
  }

  li:first-child::before,
  li:last-child::after {
    border: 0;
  }

  li:last-child::before {
    border-right: 2px solid #8bbf7a;
    border-radius: 0 5px 0 0;
  }

  li:first-child::after {
    border-radius: 5px 0 0 0;
  }

  ul {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 1.2rem 0 0 0;
    position: relative;
  }

  ul::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    border-left: 2px solid #8bbf7a;
    width: 0;
    height: 1.2rem;
  }

  .node {
    display: inline-block;
    min-width: 170px;
    max-width: 260px;
    padding: 0.7rem 0.8rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.88rem;
    color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.18);
  }

  .command { background: #f2b600; }
  .section { background: #5ea741; }
  .branch { background: #3f89ca; }
  .unit { background: #ef7f2c; }
</style>

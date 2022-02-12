<script lang="ts">
  import { page } from '$app/stores';

  $: pathname = $page.url.pathname;

  const items = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];
</script>

<nav>
  <h1>Svalte</h1>
  <ul>
    {#each items as { path, title }}
      <li><a class:selected={path === pathname} href={path}>{title}</a></li>
    {/each}
  </ul>
</nav>

<style lang="scss">
  nav {
    flex-shrink: 0;
    width: clamp(160px, 20%, 300px);
    height: 100%;
    border-right: 1px solid #ccc;
    padding: 32px;
    box-sizing: border-box;

    h1 {
      font-size: 24px;
      margin: 0;
      margin-bottom: 24px;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      margin-bottom: 12px;
      display: flex;
      flex-direction: column;
    }

    a {
      border-radius: 8px;
      padding: 8px;
      color: $text-color;
      font-size: 16px;
      &.selected {
        background-color: $highlight-color;
        color: #ffffff;
        font-weight: 600;
      }
      text-decoration: none;
    }
  }
</style>

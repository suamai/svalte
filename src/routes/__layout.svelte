<script>
  import SideNav from '@/components/navigation/SideNav.svelte';
</script>

<div class="main-layout">
  <SideNav />
  <main>
    <slot />
  </main>
</div>

<style lang="scss">
  .main-layout {
    display: flex;
    width: 100%;
    height: 100%;
    main {
      padding: 32px;
    }
  }
</style>

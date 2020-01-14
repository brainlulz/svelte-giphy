<script>
  export let segment;
</script>

<style>
  .navBar {
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .list {
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    align-items: center;
    font-size: 2rem;
    padding: 0;
  }
  .navigationLink.selected {
    color: #ef233c;
  }
</style>

<nav class="navBar">
  <ul class="list">
    <li>
      <a class="navigationLink" class:selected={segment === undefined} href="./">
        Home
      </a>
    </li>
    <li>
      <a
        class="navigationLink"
        rel="prefetch"
        class:selected={segment === 'favorited'}
        href="./favorited">
        Favorited
      </a>
    </li>
  </ul>
</nav>

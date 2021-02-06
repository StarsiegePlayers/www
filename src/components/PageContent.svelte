<style lang="scss">
  #main-content {
    padding-top: 1.5rem;
  }

  @media print {
    // remove margins, expand 100%, always, while in print
    #main-content {
      margin: 0;
      width: 100%;
      min-width: 100%;
    }
  }
</style>

<div id="main-content" class="container">
    <slot />
</div>
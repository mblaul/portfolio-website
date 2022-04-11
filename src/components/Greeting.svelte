<script>

</script>

<section>
  <h1 id="greeting-header">
    Hello!
  </h1>
  <p class="greeting-paragraph">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
</section>

<style>
  section {
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  
  .greeting-paragraph {
    align-self: flex-end;
  }
  
  #greeting-header {
    animation: animate-greeting;
    animation-fill-mode: forwards;
    animation-duration: 2.5s;
    animation-delay: 1s;
    visibility: hidden;
  }

  @keyframes animate-greeting {
    0% {
      opacity: 0;
      transform: scale(0) translate(35vw, 0px);
    }

    50% {
      visibility: visible;
      opacity: 0;
      transform: scale(0) translate(35vw, 0px);
    }

    100% {
      visibility: visible;
      opacity: 1;
      transform: scale(1) translate(0px, 0px);
    }
  }
</style>
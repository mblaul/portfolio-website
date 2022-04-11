<script lang="ts">
  import { browser } from '$app/env';
  import { getRandomDecimal, getRandomInt } from '../scripts/helpers/numberHelpers'
  import { getArrayOfLength } from '../scripts/helpers/arrayHelpers';
  const stars = getArrayOfLength(200);
  const twinklingStars = getArrayOfLength(stars.length * .33);
</script>

<div class="background">
  <object 
    title="Rocket launch into space"
    type="image/svg+xml"
    data="./saturn-v.svg"
    class="rocket"
  />
  {#if browser}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="starfield"
    >
      {#each stars as star}
        <circle
          cx={getRandomInt(document.body.clientWidth)}
          cy={getRandomInt(document.body.clientHeight)}
          r={getRandomInt(3)}
          class="star"
          fill="white"
        />
      {/each}

    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="starfield"
    >
      {#each twinklingStars as twinklingStar}
        {@const twinkleDuration = getRandomDecimal({ max: 3, min: 1 })}
        <circle
          cx={getRandomInt(document.body.clientWidth)}
          cy={getRandomInt(document.body.clientHeight)}
          r={getRandomInt(3)}
          class="star twinkle"
          style:animation-duration={`${twinkleDuration}s`}
          fill="white"
        />
      {/each}
      <path
        class="shooting-star"
        d="M 50 1000 L 250 1100 Z"
        fill="transparent" 
        stroke="white"
      />
    </svg>
    {/if}
</div>

<style>
  .background {
    position: relative;
    width: 100vw;
    height: 300vh;
    z-index: 0;
  }

  .starfield {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .twinkle {
    animation-name: twinkle-animation;
    animation-iteration-count: infinite;
  }

  @keyframes twinkle-animation {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .rocket {
    position: absolute;
    top: 40%;
    left: 35%;
    height: 10rem;
    width: 10rem;
    animation: enter-orbit 1 4s ease-in;
    animation-fill-mode: forwards;
    z-index: 10;
  }
  

  @keyframes enter-orbit {
    from {
      transform: translateY(0px, 0px);
    }
    to {
      transform: translate(0px, calc(-200vh));
    }
  }

  .shooting-star {
    stroke-dasharray: 500;
    animation: dash 5s linear;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 1000;
    }
  }
</style>
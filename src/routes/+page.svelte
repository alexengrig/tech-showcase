<script lang="ts">
  import type { ShowcaseData } from '$lib/types'

  export let data: ShowcaseData
</script>

<h1>tech-showcase</h1>

<div>
  <div>
    {#each data.groups as group}
      <div>
        <h2 title="{group.description}">{group.name}</h2>
        <ul>
          {#each group.services as service}
            <li>
              <a href="{service.link}" title="{service.description}">{service.name}</a>
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</div>

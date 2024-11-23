<!--
  - Copyright 2024 Alexengrig Dev.
  -
  - Licensed under the Apache License, Version 2.0 (the "License");
  - you may not use this file except in compliance with the License.
  - You may obtain a copy of the License at
  -
  -     http://www.apache.org/licenses/LICENSE-2.0
  -
  - Unless required by applicable law or agreed to in writing, software
  - distributed under the License is distributed on an "AS IS" BASIS,
  - WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  - See the License for the specific language governing permissions and
  - limitations under the License.
  -->

<script lang="ts">

    export let name: string
    export let description: string | undefined
    export let tags: string[] | undefined
    export let logo: string | undefined
    export let link: string
</script>

<a class="card card-hover overflow-hidden" href="{link}">
    <div class="card-header">
        <img src="{logo}" alt="Logo of {name}" class="h-16"/>
        <h3 class="h3 mt-4">{name}</h3>
    </div>
    <div class="p-4">
        {#if description}
            {description}
        {/if}
    </div>
    <div class="card-footer">
        {#if tags}
            {#each tags as tag}
                <span class="chip variant-ghost">{tag}</span>
            {/each}
        {/if}
    </div>
</a>

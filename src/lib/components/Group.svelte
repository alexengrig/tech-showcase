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
    import { Accordion, AccordionItem } from '@skeletonlabs/skeleton'
    import type { ServiceData } from '$lib/types'
    import Service from '$lib/components/Service.svelte'

    export let name: string
    export let description: string | undefined
    export let services: ServiceData[]
</script>

<div>
    <Accordion>
        <AccordionItem open>
            <svelte:fragment slot="lead">
                <h3 class="h3">{name}</h3>
            </svelte:fragment>
            <svelte:fragment slot="summary">
                {#if description}
                    <p>{description}</p>
                {/if}
            </svelte:fragment>
            <svelte:fragment slot="content">
                <div class="w-full text-token grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 pb-4">
                    {#each services as service}
                        <Service
                                name={service.name}
                                description={service.description}
                                tags={service.tags}
                                logo={service.logo}
                                link={service.link}
                        />
                    {/each}
                </div>
            </svelte:fragment>
        </AccordionItem>
    </Accordion>
</div>

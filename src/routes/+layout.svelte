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
    import '../app.postcss'
    import { AppBar, AppShell, autoModeWatcher, LightSwitch } from '@skeletonlabs/skeleton'
    import type { ShowcaseData } from '$lib/types'

    export let data: ShowcaseData
</script>

<svelte:head>{@html '<script>(' + autoModeWatcher.toString() + ')();</script>'}</svelte:head>

<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
    <svelte:fragment slot="header">
        <AppBar>
            <svelte:fragment slot="lead">
                <strong class="text-xl uppercase">{data.title}</strong>
            </svelte:fragment>
            <svelte:fragment slot="trail">
                <LightSwitch/>
            </svelte:fragment>
        </AppBar>
    </svelte:fragment>
    <slot/>
    <svelte:fragment slot="footer">
        <AppBar>
            <svelte:fragment slot="lead">
                <a href="{data.copyright.link}">{data.copyright.text}</a>
            </svelte:fragment>
            <svelte:fragment slot="trail">
                <a href="https://github.com/alexengrig/tech-showcase">
                    Powered by tech-showcase
                </a>
            </svelte:fragment>
        </AppBar>
    </svelte:fragment>
</AppShell>

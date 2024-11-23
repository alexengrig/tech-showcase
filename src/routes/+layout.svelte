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
</script>

<svelte:head>{@html '<script>(' + autoModeWatcher.toString() + ')();</script>'}</svelte:head>

<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
    <svelte:fragment slot="header">
        <AppBar>
            <svelte:fragment slot="lead">
                <strong class="text-xl uppercase">tech-showcase</strong>
            </svelte:fragment>
            <svelte:fragment slot="trail">
                <LightSwitch/>
            </svelte:fragment>
        </AppBar>
    </svelte:fragment>
    <slot/>
</AppShell>

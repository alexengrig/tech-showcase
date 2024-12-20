/*
 * Copyright 2024 Alexengrig Dev.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export interface CopyrightData {
  text: string
  link: string
}

export interface ItemData {
  name: string
  description?: string
  tags?: string[]
  logo?: string
  link: string
}

export interface GroupData {
  name: string
  description?: string
  items: ItemData[]
}

export interface ShowcaseData {
  title: string
  copyright: CopyrightData
  groups: GroupData[]
}

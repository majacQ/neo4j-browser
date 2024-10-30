/*
 * Copyright (c) "Neo4j"
 * Neo4j Sweden AB [http://neo4j.com]
 *
 * This file is part of Neo4j.
 *
 * Neo4j is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
export const PREVIEW_EVENT = 'preview/PREVIEW_EVENT'

interface PreviewUiSwitchAction {
  type: typeof PREVIEW_EVENT
  category: 'preview'
  label: string
  data: {
    switchedTo: 'preview' | 'classic'
    timeSinceLastSwitch: number | null
  }
}

interface PreviewPageLoadAction {
  type: typeof PREVIEW_EVENT
  category: 'preview'
  label: string
  data: {
    previewUI: boolean
    hasTriedPreviewUI: boolean
  }
}

export const trackNavigateToPreview = (): PreviewUiSwitchAction => {
  const now = Date.now()
  localStorage.setItem('hasTriedPreviewUI', 'true')

  const timeSinceLastSwitchMs = localStorage.getItem('timeSinceLastSwitchMs')
  localStorage.setItem('timeSinceLastSwitchMs', now.toString())

  let timeSinceLastSwitch = null
  if (timeSinceLastSwitchMs !== null) {
    timeSinceLastSwitch = now - parseInt(timeSinceLastSwitchMs)
  }

  return {
    type: PREVIEW_EVENT,
    category: 'preview',
    label: 'ui-switch',
    data: {
      switchedTo: 'preview',
      timeSinceLastSwitch: timeSinceLastSwitch
    }
  }
}

export const trackPageLoad = (): PreviewPageLoadAction => {
  const hasTriedPreviewUI = localStorage.getItem('hasTriedPreviewUI') === 'true'

  return {
    type: PREVIEW_EVENT,
    category: 'preview',
    label: 'page-load',
    data: { previewUI: false, hasTriedPreviewUI }
  }
}

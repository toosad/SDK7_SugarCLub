import { Color4 } from '@dcl/sdk/math'
import { ReactEcsRenderer } from '@dcl/sdk/react-ecs'
import * as ui from 'dcl-ui-toolkit'
ReactEcsRenderer.setUiRenderer(ui.render)
export const denyannouncement = ui.createComponent(ui.Announcement, {startHidden: true, value: 'VIP access denied!', duration: 1, color: Color4.White(), })
export const acceptannouncement = ui.createComponent(ui.Announcement, { startHidden: true, value: 'VIP access granted!', duration: 1, color: Color4.White(), })
export const Drinkannouncement = ui.createComponent(ui.Announcement, { startHidden: true, value: 'Drinks at the Bar!', duration: 1, color: Color4.White(), })
export const DrinkSTARTannouncement = ui.createComponent(ui.Announcement, { startHidden: true, value: 'Press E to start drinking!', yOffset: 100, duration: 1, color: Color4.White(), })
export const refillannouncement = ui.createComponent(ui.Announcement, { startHidden: true, value: 'Refill!!', duration: 1, color: Color4.White(), })


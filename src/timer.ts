import { Entity, engine } from "@dcl/sdk/ecs";
import * as utils from '@dcl-sdk/utils'
import * as ui from 'dcl-ui-toolkit'
import { Color4 } from "@dcl/sdk/math";
import { drinkCount, drinkCounter, health, resetDrinkCount } from "./drinkingGame";
export let gameStarted = false;

export function createTimer(initialSeconds: number): any {
  let seconds = initialSeconds;


  const timerText = ui.createComponent(ui.UICounter, { startHidden: false, size: 75, xOffset: -700, yOffset: 600, value: initialSeconds, color: Color4.Green() }); // Create the UI component with initial value

  function formatTimeString(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return (
      mins.toLocaleString(undefined, { minimumIntegerDigits: 2 }) +
      ":" +
      secs.toLocaleString(undefined, { minimumIntegerDigits: 2 })
    );
  }

  function updateTimeString(): string {
    return formatTimeString(seconds);
  }

  function startTimer() {
    if (!gameStarted) {
      gameStarted = true;
      timerText.set(seconds) // Update the UI component with the initial value

      const timerId = utils.timers.setInterval(() => {
        if (seconds > 0) {
          seconds--;
          timerText.set(seconds)  // Update the UI component with the updated value
        } else {
          utils.timers.clearInterval(timerId);
          gameStarted = false;
          console.log("Timer finished!");
          const DrinkFinishannouncement = ui.createComponent(ui.Announcement, { startHidden: true, value: "Game Over! You Drank:  " + drinkCount + "  Drinks", yOffset: 100, duration: 1, color: Color4.White(), })

          DrinkFinishannouncement.show()
         
          utils.timers.setTimeout(async () => { 
            DrinkFinishannouncement.hide()
            timerText.hide()
            health.hide()
            drinkCounter.hide()
            
            health.set(0)
            
           }, 2000)
           resetDrinkCount()
           console.log("DRINKCOUNT" + drinkCount)
    


        }
      }, 1000);
    }
  }

  startTimer();

  return {
    updateTimeString,
    startTimer,
    gameStarted,
    timerText, // Provide access to the UI component
  };
}
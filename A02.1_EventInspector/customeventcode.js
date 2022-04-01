"use strict";
// namespace Greet {
//     window.addEventListener("load", hndLoad);
//     function hndLoad(_event: Event): void {
//       let input: HTMLInputElement | null = document.querySelector("input");
//       if (!input)
//         return;
//       console.log(input);
//       input.addEventListener("change", hndChange);
//       document.addEventListener("greet", hndGreet);
//     }
//     function hndChange(_event: Event): void {
//       console.log(_event);
//       // test if value == "Hello"
//       let customEvent: CustomEvent = new CustomEvent("greet", { bubbles: true });
//       _event.target?.dispatchEvent(customEvent);
//     }
//     function hndGreet(_event: Event) {
//       let target: HTMLInputElement = <HTMLInputElement>_event.target;
//       console.log("Greeted with", target.value);
//     }
//   }
//   // define a custom event that bubbles and carries some information
// let event: CustomEvent = new CustomEvent("someSpecialType", {bubbles: true, detail: {someKey: someData}});
// // send the event from some dispatcher
// someEventTarget.dispatchEvent(event);
//# sourceMappingURL=customeventcode.js.map
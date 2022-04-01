namespace EventInspector2 {

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {

        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);

        let div0: HTMLDivElement = <HTMLDivElement>document.getElementById("div0");
        div0.addEventListener("keyup", logInfo);

        let div1: HTMLDivElement = <HTMLDivElement>document.getElementById("div1");
        div1.addEventListener("keyup", logInfo);

        document.body.addEventListener("keyup", logInfo);
        //create span and append to dom
        let mouseSpan: HTMLSpanElement = document.createElement("span");
        document.body.appendChild(mouseSpan);

        //displays a span element that follows the mouse courser
        function setInfoBox(_event: MouseEvent): void {
            // console.log("SetInfoBox");

            //get mouse position and add offset
            let xPos: number = _event.x + 20;
            let yPos: number = _event.y + 20;

            // console.log(xpos, ypos);
            
            //turn position into string to use it below
            let xPosString: string = xPos.toString();
            let yPosString: string = yPos.toString();

            //set mousespan position to mouse position
            mouseSpan.style.left = xPosString + "px";
            mouseSpan.style.top = yPosString + "px";

            // text in span
            mouseSpan.innerHTML = "position: x " + xPos + " px" + " / y " + yPos + " px";
        }

        //logs event's type, target, currentTarget and the whole event object to the browser-console
        function logInfo(_event: Event): void {
            // console.log("logInfo");

            //target
            let target: EventTarget = <EventTarget>_event.target;
            console.log("Target: ", target);

            //currentTarget
            let currentTarget: EventTarget = <EventTarget>_event.currentTarget;
            console.log("Current Target: ", currentTarget);

            //event's type
            let eventType: string = _event.type;
            console.log("Event's Type: ", eventType);

            //event object
            let eventObjects: Event = _event;
            console.log("Event Object: ", eventObjects);

            //button custom event
            // let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button");

            // function buttonEvent(_event: Event): void {
            //     console.log("button wurde geklickt");
            //     console.log(_event);
                
            //     let customEvent: CustomEvent = new CustomEvent("hello", {bubbles: true});
            //     button.dispatchEvent(customEvent);                
            // }

            // button.addEventListener("click", buttonEvent);         
        
        }//loginfo

    }//handleLoad

}//namespace
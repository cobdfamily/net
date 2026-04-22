import { Accessibility, Elements, System } from '@cobd/bluefin';

let app = new Elements.UIApp( 'active' );
app.activeElement = app.activeElement.parentNode;

console.log( app.activeElement.role );



console.log( `Battery: ${System.getBatteryPercentage()}% - ${(System.getIsCharging() ? "Charging":"Not Charging")}` );


setInterval( () => {
let title = "me";

}, 2000 );


import './lesson_11.scss';

import { greetWidget } from './scrypts/dom';

const widgets = document.querySelectorAll('.greet-widget');

for(const widgetElement of widgets) {
    console.log(widgetElement);
    greetWidget(widgetElement);
}

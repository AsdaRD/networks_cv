import {Car} from './components/car';
import { Controller } from './components/controller';


class Game {
    constructor(target = document.querySelector('body'), players = 2) {
        this._target = target;
        this._players = players;
        this._render();
    }
    _render() {
        for(let i = 0; i < this._players; i++) {
            this._field = document.createElement('div');

            this._car = new Car(20, this._field);
            this._controller = new Controller(this._car, this._field);

            this._target.appendChild(this._field);
        }
    }
}
const myGame = new Game();

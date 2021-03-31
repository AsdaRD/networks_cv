export class DateCR {
    constructor() {
        this.date = new Date();
        this.day = this.date.getDate();
        this.month = this.date.getMonth();
        this.year = this.date.getFullYear();
        this.hours = this.date.getHours();
        this.minutes = this.date.getMinutes();
        if (this.hours < 10 && this.minutes < 10) {
            this.full_date = `${this.day}.${this.month}.${this.year} in 0${this.hours}:0${this.minutes}`;
        }else if (this.hours < 10 && this.minutes > 10) {
            this.full_date = `${this.day}.${this.month}.${this.year} in 0${this.hours}:${this.minutes}`;
        } else if (this.hours > 10 && this.minutes < 10) {
            this.full_date = `${this.day}.${this.month}.${this.year} in ${this.hours}:0${this.minutes}`;
        } else {
            this.full_date = `${this.day}.${this.month}.${this.year} in ${this.hours}:${this.minutes}`;
        }
    }
}
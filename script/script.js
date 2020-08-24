class InputRange {
    constructor() {
        this.allRanges = [...document.querySelectorAll('.inputRange')];
        this._init();
    }
    _init() {
        this._eventHandlers();
        console.log(this.allRanges);
    }
    _eventHandlers() {
        for (const range of this.allRanges) {
            range.addEventListener('input', () => this._changeRange(range, range.max));
        }
    }
    _changeRange(range, max) {
        let value = range.value;
        let currentValue = ((value-range.min/2)*100)/max;
        range.style.background = `-webkit-linear-gradient(left, #F26422 0%, #F26422 ${currentValue}%, #D0D0D0 ${currentValue}%, #D0D0D0 100%)`;
    }
}
const inputRange = new InputRange();

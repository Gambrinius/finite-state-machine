class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
        this.currentConfig = config;
        this.currentState = config.initial;
    }

    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {
        return this.currentState;
    }

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {
        if (this.currentConfig.states[state] == undefined)
        {
            throw new Error();
        }

        this.currentState = state;
    }

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {
        let newState = this.currentConfig.states[this.currentState].transitions[event];

        if (newState == undefined)
        {
            throw new Error();
        }

        this.changeState(newState);
    }

    /**
     * Resets FSM state to initial.
     */
    reset() {
        this.currentState = this.currentConfig.initial;
    }

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {
        let arrayOfStates = Object.keys(this.currentConfig.states);
        if(event == undefined){
            return arrayOfStates;
        } else {
            let newArrayOfStates = [];

            for(let key in arrayOfStates){
                if(this.currentConfig.states[arrayOfStates[key]].transitions[event]){
                    newArrayOfStates.push(arrayOfStates[key]);
                }
            }

            return newArrayOfStates;
        }

    }

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {
        
    }

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {
        
    }

    /**
     * Clears transition history
     */
    clearHistory() {

    }
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/

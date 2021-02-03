import { updateSelectedActivityType } from "./actions"
import { Action, StoreState } from "./types"

export const INITIAL_STORE: StoreState = {
    selectedActivity: -1,
    activityLog: {}
}

/** 
 * Reducer for global store state.
 * 
 * @param store StoreState
 * @param action Action
 * 
 * @returns StoreState
 */
const reducer = (store: StoreState = INITIAL_STORE, action: Action): StoreState => {
    switch (action.type) {
        case updateSelectedActivityType:
            const selectedActivity = action.payload
            return {
                ...store,
                selectedActivity,
            }
    }
    return store
}

export default reducer
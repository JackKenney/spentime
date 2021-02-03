import { Action, ActivityLog, NO_ACTIVITY, StoreState } from "./types"
import {
    addActivityType,
    updateSelectedActivityType
} from "./actions"

export const INITIAL_STORE: StoreState = {
    selectedActivity: NO_ACTIVITY,
    activityLog: {
        NO_ACTIVITY: [],
    }
}

function appendDate(activityLog: ActivityLog, activityName: string, date: Date): ActivityLog {
    const len = activityLog[activityName].length
    if (len > 0 && activityLog[activityName][len - 1].length == 1) {
        // add end time to last entry
        activityLog[activityName][len - 1].push(date)
        return activityLog
    } else {
        // add start time to new entry
        activityLog[activityName].push([date])
        return activityLog
    }
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
    let { activityLog } = store;
    const now = new Date();
    switch (action.type) {
        case addActivityType:
            const activityName = action.payload;
            activityLog[activityName] = [];
            return {
                ...store,
                activityLog,
            }
        case updateSelectedActivityType:
            const lastActivity = store.selectedActivity;
            activityLog = appendDate(activityLog, lastActivity, now);
            const selectedActivity = action.payload;
            activityLog = appendDate(activityLog, selectedActivity, now);
            return {
                ...store,
                activityLog,
                selectedActivity,
            }
    }
    return store
}

export default reducer
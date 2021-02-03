
/** Generalized action structure. */
export interface Action {
    [x: string]: any // fills place of payload in upward compatible manner
    type: string
}

/** Global redux store state structure. */
export interface StoreState {
    selectedActivity: string,
    activityLog: ActivityLog,
}

export interface ActivityLog {
    [key: string]: Date[][], // tuples of start and end datetimes
}

export const NO_ACTIVITY = "NO_ACTIVITY"
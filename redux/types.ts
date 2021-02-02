
/** Generalized action structure. */
export interface Action {
    [x: string]: any // fills place of payload in upward compatible manner
    type: string
}

/** Global redux store state structure. */
export interface StoreState {
    selectedActivity: number,
    activityLog: ActivityLog,
}

export interface ActivityLog {
    [key: string]: Date[][], // start and end datetime
}

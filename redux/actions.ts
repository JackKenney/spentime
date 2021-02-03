export const updateSelectedActivityType = "UPDATE_ACTIVITY"
export const addActivityType = "ADD_ACTIVITY"

export const addActivity = (activityName: string) => (
    {
        payload: activityName,
        type: addActivityType,
    }
)

export const updateSelectedActivity = (selectedActivity: string) => (
    {
        payload: selectedActivity,
        type: updateSelectedActivityType,
    }
)
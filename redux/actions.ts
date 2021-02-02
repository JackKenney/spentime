export const updateActivityType = "UPDATE_ACTIVITY"


export const updateActivity = (selectedActivity: number) => (
    {
        payload: selectedActivity,
        type: updateActivityType,
    }
)

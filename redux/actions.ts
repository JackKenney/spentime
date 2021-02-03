export const updateSelectedActivityType = "UPDATE_ACTIVITY"


export const updateSelectedActivity = (selectedActivity: number) => (
    {
        payload: selectedActivity,
        type: updateSelectedActivityType,
    }
)

import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import FeedbackData from "../../data/FeedbackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState(FeedbackData)

    const updatedFeedback = (id, updatedItem) => {
        setFeedback(
            feedback.map((item) => 
                (item.id === id) ? { ...item, ...updatedItem} : item)
        )
    }

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        
        if(window.confirm('Are you sure you want to delete ?'))
        {
            setFeedback(feedback.filter((item) => 
                (item.id !== id)
            ))
        }
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updatedFeedback,
        feedbackEdit
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;
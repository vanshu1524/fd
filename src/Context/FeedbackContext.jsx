import { createContext , useState } from 'react'
import {v4 as uuid4} from 'uuid'
const FeedbackContext = createContext()
 
export const FeedbackProvider = ({ children }) =>{
 const [feedback, setFeedback] = useState([
     {
       id: 1,
       text: 'This item is from context',
       rating: 10,
     },
     {
      id: 2,
      text: 'This item is from context',
      rating: 9,
   },
   {
      id: 3,
      text: 'This item is from context',
      rating: 7,
   },
 ])
 const [feedbackEdit, setFeedbackEdit] = useState({
   item: {},
   edit: false
})

const updateFeedback = (id, updItem) => {
  setFeedback(
   feedback.map((item) => (item.id === id ? { ...item, ...
   updItem } : item))
  )
}

 const addFeedback = (newFeedback) => {
   newFeedback.id = uuid4()
  setFeedback([newFeedback, ...feedback])
}

 const deleteFeedback = (id) => {
   if (window.confirm('Are you sure you want to delete ?')){
       setFeedback(feedback.filter((item) => item.id !== id))
   }
}

const editFeedback = (item) => {
   setFeedbackEdit({
      item,
      edit: true 
     })
}

 return (
    <FeedbackContext.Provider
     value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
     }}
     
     >
        {children}
     </FeedbackContext.Provider>
    )
}

export default FeedbackContext
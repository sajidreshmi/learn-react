import React from 'react'
import { Route, useParams } from 'react-router-dom'
import Comments from '../components/comments/Comments'
const QuoteDetails = () => {
    const params = useParams()
    return (
        <div>
            Quote Details! {params.quoteId}
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments></Comments>
            </Route>
        </div>
    )
}

export default QuoteDetails

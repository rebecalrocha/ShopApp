import React from "react"
import Alert from 'react-bootstrap/Alert'
import { connect } from 'react-redux'
import { closeMessage } from '../actions'

const AlertDismissible = ({message, remove}) => {

    let show = false;
    if(message.text)
        show = true;
    
    return (
            <Alert style={{position: "absolute"}} variant={message.type}>
                { show?
                    <span>
                        {message.text}
                        <button className="close" onClick={() => {remove(); show = false}}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </span> : null
                }
            </Alert>
        );
    

}

const mapStateToProps = state => ({
    message: state.messageReducer
})

const mapDispatchToProps = dispatch => ({
    remove: () => dispatch(closeMessage())
})
  
export default connect(mapStateToProps, mapDispatchToProps)(AlertDismissible)
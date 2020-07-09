import React from 'react'
import { connect } from 'react-redux'
import { closeMessage } from '../actions'

const AlertDismissible = ({ message, remove }) => {
  let show = false
  if (message.text) { show = true }

  return (
    <div>
      {show
        ? <div className={`alert alert-${message.type}`}>
          {message.text}
          <button className='close' onClick={() => { remove(); show = false }}>
            <span aria-hidden='true'>&times;</span>
          </button>
        </div> : null}
    </div>
  )
}

const mapStateToProps = state => ({
  message: state.messageReducer
})

const mapDispatchToProps = dispatch => ({
  remove: () => dispatch(closeMessage())
})

export default connect(mapStateToProps, mapDispatchToProps)(AlertDismissible)

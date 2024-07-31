const Notification = props => {
  //  Write your code here.
  const {className, iconImage} = props
  return (
    <div className={className}>
      <img className='icon-msg' src={iconImage} />
      <p className='text'>information Message</p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div className='notify-container'>
    <h1 class='notify-heading'>Notification</h1>
    <div className='notify-element-container'>
      <Notification
        className='notify-bar info-msg'
        iconImage='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
        name='information Message'
      />
      <Notification
        className='notify-bar success-msg'
        iconImage='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
        text='Success Message'
      />
      <Notification
        className='notify-bar warning-msg'
        iconImage='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
        text='Warning Message'
      />
      <Notification
        className='notify-bar error-msg'
        iconImage='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
        text='Error Message'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))

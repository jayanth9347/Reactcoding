const Notification = props => {
  const {className, message} = props

  const containerClassName = {`notification-container ${className}`}

  return (
    <div className={containerClassName}>
      <img src={iconUrl} />
      <p > {message} </p>
    </div>
  )
}


const element = (

  <div>
  <h1> List </h1>
  </div>

)

ReactDOM.render(element, document.getElementById('root'))
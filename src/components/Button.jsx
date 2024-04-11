export default function Button (props) {
  const handleClick = () => {
    console.log('Clic !')
  }

  return (
    <button style={{ color: props.color }} onClick={handleClick}>
      {props.title} {props.icon}
    </button>
  )
}

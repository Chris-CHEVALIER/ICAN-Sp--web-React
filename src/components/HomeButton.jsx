export default function HomeButton (props) {
  const handleClick = () => {
    console.log('Clic !')
  }

  return (
    <button style={{ backgroundColor: props.color }} onClick={handleClick}>
      {props.title} {props.icon}
    </button>
  )
}
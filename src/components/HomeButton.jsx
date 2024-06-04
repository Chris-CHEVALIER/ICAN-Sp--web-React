export default function HomeButton ({ myStyle, children }) {
  const handleClick = () => {
    console.log('Clic !')
  }

  return (
    <button style={myStyle} onClick={handleClick}>
      {children}
    </button>
  )
}

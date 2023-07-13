const Footer = () => {
  const date = new Date().getFullYear()

  return (
    <footer>
      <p>Copyright <b>Reserved</b> {date}</p>
    </footer>
  )
}

export default Footer
export function NavBar({ chosenNavItem, setChosenNavItem }) {
  const navItems = ["Word List", "History", "Favorites"]

  function handleClick(item) {
    setChosenNavItem(item)
  }

  return (
    <nav className="navbar">
      {navItems.map((item) => (
        <p
          key={item}
          className={`navbar__item ${
            item === chosenNavItem && "navbar__item--selected"
          }`}
          onClick={() => handleClick(item)}
        >
          {item}
        </p>
      ))}
    </nav>
  )
}

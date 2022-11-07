export function NavBar({ chosenNavItem, setChosenNavItem }) {
  const navItems = ["Word List", "History", "Favorites"]

  function handleClick(item) {
    setChosenNavItem(item)
  }

  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
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
      </div>
    </nav>
  )
}

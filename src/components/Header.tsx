import Logo from "./Logo";
import NavMenu from "./NavMenu";
import SwitchTheme from "./SwitchTheme";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-3 px-4 shadow-md bg-bgNavMenu">
      {/* Logo */}
      <Logo />
      <div className="flex space-x-2 lg:flex lg:flex-row-reverse lg:gap-10">
        {/* ThemeSwitch */}
        <SwitchTheme />
        {/* NavMenu */}
        <NavMenu />
      </div>
    </header>
  );
}

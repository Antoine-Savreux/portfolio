import Logo from "./Logo";
import NavMenu from "./NavMenu";
import SwitchTheme from "./SwitchTheme";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-2 px-6">
      {/* Logo */}
      <Logo />
      <div className="flex space-x-2">
        {/* ThemeSwitch */}
        <SwitchTheme />
        {/* NavMenu */}
        <NavMenu />
      </div>
    </header>
  );
}

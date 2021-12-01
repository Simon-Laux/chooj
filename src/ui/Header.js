import "KaiUI/src/components/Header/Header.scss";
import colors from "KaiUI/src/theme/colors.scss";

function Header({ backgroundColor, text }) {
  return (
    <header
      className="kai-header"
      style={{ background: backgroundColor || colors.headerBlue }}
      $HasTextChildren
    >
      <h1 className="h1" $HasTextChildren>
        {text}
      </h1>
    </header>
  );
}

export default Header;

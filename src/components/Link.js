import useNavigation from "../hooks/use-navigation";
import classNames from "classnames";

function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();
  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );

  const handleClick = (e) => {
    if (e.ctrlKey || e.metaKey) return;
    e.preventDefault();
    navigate(to);
  };

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;

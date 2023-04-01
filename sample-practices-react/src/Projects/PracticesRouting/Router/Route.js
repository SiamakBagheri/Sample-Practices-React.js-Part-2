const Route = ({ path, children }) => {
  const pathName = window.location.pathname;

  if (!pathName) {
    return <p>Loading</p>;
  } else {
    if (pathName !== path) {
      return null;
    }
    return children;
  }
};

export default Route;

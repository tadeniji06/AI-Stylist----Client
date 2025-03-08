const Button = ({ className, onClick, title }) => {
  return (
    <button
      className={`${className} px-4 py-2 rounded-md`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;

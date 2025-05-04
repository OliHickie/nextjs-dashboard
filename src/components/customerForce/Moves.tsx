const Moves: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <h2 className="global-subheading">Moves</h2>
      <ul>
        {children}
      </ul>
    </div>
  );
};

export default Moves;

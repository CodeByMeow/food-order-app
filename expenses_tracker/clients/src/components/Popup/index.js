const Popup = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container h-screen fixed top-0 left-0 bg-white py-4">
      <div className="flex px-4">
        <button className="w-1/3 text-left">Cancel</button>
        <h4 className="w-1/3 text-center">Exprense</h4>
      </div>
      <form onSubmit={handleOnSubmit}></form>
    </div>
  );
};

export default Popup;

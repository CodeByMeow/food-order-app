import Transaction from "../Transaction";
const History = () => {
  return (
    <div className="container">
      <div className="flex justify-between px-4 ">
        <span className="w-16 flex-shrink-0 "></span>
        <span className="text-06 flex-1 border-b-2 border-solid py-4">
          Today
        </span>
        <span className="text-5D border-b-2 border-solid py-4">$12.00</span>
      </div>
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
    </div>
  );
};

export default History;

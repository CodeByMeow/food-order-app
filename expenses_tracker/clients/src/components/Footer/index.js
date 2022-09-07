import { TbSmartHome, TbChartPie, TbSettings } from "react-icons/tb";
const Footer = () => {
  return (
    <div className="container fixed bottom-0 bg-white">
      <div className="h-16 py-3 flex justify-evenly text-5D border-solid border-t-2">
        <div className="text-3xl text-06">
          <TbSmartHome />
        </div>
        <div className="text-3xl">
          <TbChartPie />
        </div>
        <div className="text-3xl">
          <TbSettings />
        </div>
      </div>
    </div>
  );
};

export default Footer;

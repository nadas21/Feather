import "./main.css";
import logo from "../../assets/landie.png"

export const Ortasi = () => {
  return (
    <section className="Section">
      <div className="container">
       <div className="ortasi-inner">
        <div className="ortasi-box">
            <h4 className="ortasi-text-h4">©2020 Yourcompany</h4>
 <img src={logo} alt="" />
 <button className="ortasi-brn">Purchase now</button>
        </div>
        <div className="ortasi-list">
            <h4 className="ortasi-h4">Home</h4>
            <h4 className="ortasi-h4">About</h4>
            <h4 className="ortasi-h4">Contact</h4>
        </div>
       </div>
      </div>
    </section>
  );
};

import qiz from "../../assets/qiz.png"
import odam from "../../assets/odam.png"
import gul from "../../assets/gul.png"
import "./main.css";

export const Nav = () => {
  return (
    <section className="Section">
      <div className="container">
        <div className="nav-inner">
          <div className="nav-list">
            <img className="nav-qiz" src={qiz} alt="" width={480} height={315} />
            <div className="nav-text">
              <h2 className="nav-text-h2">Light, Fast & Powerful</h2>
              <p className="nav-text-p">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>

            </div>
          </div>

          <div className="nav-list">
            <img className="nav-qiz" src={odam} alt="" width={480} height={315} />
            <div className="nav-text">
              <h2 className="nav-text-h2">Light, Fast & Powerful</h2>
              <p className="nav-text-p">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
            </div>
          </div>
          <div className="nav-list">
            <img className="nav-qiz" src={gul} alt="" width={480} height={315} />
            <div className="nav-text">
              <h2 className="nav-text-h2">Light, Fast & Powerful</h2>
              <p className="nav-text-p">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
<button className="nav-btn">Purchase Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

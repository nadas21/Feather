import telefon from "../../assets/telefon.png";
import "./main.css";


export const Section = () => {
  return (
    <section className="Section">
      <div className="container">
        <div className="section-inner">
          <div className="section-box">
           <div className="section-item-list">
           <h2 className="section-text">Light, Fast & Powerful</h2>
            <p className="section-p">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
            <div className="section-teglar">
              <div className="section-list">
                <h3 className="section-text-h3">Title Goes Here</h3>
                <p className="section-text-p">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.{" "}
                </p>
              </div>
              <div className="section-list">
                <h3 className="section-text-h3">Title Goes Here</h3>
                <p className="section-text-p">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.{" "}
                </p>
              </div>
            </div>
           </div>
            <img className="section-telefon" src={telefon} alt="" width={540} height={524} />
          </div>
        </div>
      </div>
    </section>
  );
};

import "./index.css";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-box">
            <h1 className="hero-title">
              Introduce Your Product Quickly & Effectively
            </h1>
            <p className="hero-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
            <div className="hero-mini-box">
              <button className="hero-btn">Purchase UI Kit</button>
              <button className="hero-btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

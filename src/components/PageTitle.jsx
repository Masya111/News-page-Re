import titleImageMobile from "../images/image-web-3-mobile.jpg";
import titleImageDesktop from "../images/image-web-3-desktop.jpg";
export default function PageTitle() {
  return (
    <div className="title-container">
      <picture>
        <source srcset={titleImageDesktop} media="(min-width: 1000px)" />
        <img src={titleImageMobile} alt="Title-image" className="title-image" />
      </picture>
      <h1 className="title">The Bright Future of Web 3.0?</h1>
      <div className="description">
        <p className="title-description">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people.But is it
          really fulfilling its promise?
        </p>
        <button className="read-more">READ MORE</button>
      </div>
    </div>
  );
}

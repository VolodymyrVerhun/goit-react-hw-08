import image from "../../assets/image3.png";
import style from "./HomePage.module.css";
export default function HomePage() {
  return (
    <>
      <h2>Application For Saving Contacts</h2>
      <div className={style.container}>
        <img className={style.image} src={image} alt="phone" />
        <div className={style.overlay}></div>
      </div>
    </>
  );
}

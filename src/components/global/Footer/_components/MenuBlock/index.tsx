import { data } from "@data/index";
import MainContainer from "@/src/components/containers/MainContainer";
import Button from "@/src/components/ui/Button";
import ContactPhone from "@components/nodes/tel/ContactPhone";

import MenuComponent from "./MenuComponent";

import s from "./style.module.scss";

const MenuBlock = () => {
  const workingHours = Object.entries(data.workingHours);
  return (
    <MainContainer el="section" className={s["menu-container"]}>
      <div className={s.information}>
        <p className={s.information__description}>
          Receive 15% off your first purchase of £30+ when you sign up to the
          world of Dr.Jart+ *
        </p>
        <ContactPhone withoutText containerClassName={s.information__tel} />
        <p className={s["information__working-hours"]}>
          {workingHours.map(([day, time]) => (
            <>
              <span key={day}>
                {day} - {time}
              </span>{" "}
              <br />
            </>
          ))}
        </p>
      </div>
      <div className={s.menu}>
        <MenuComponent />
      </div>
      <div className={s.feedback}>
        <Button>Обратная связь</Button>
      </div>
    </MainContainer>
  );
};

export default MenuBlock;

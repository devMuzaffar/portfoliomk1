import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";

const iconSize = 32;

const contactList = [
  {
    icon: <LuPhone size={iconSize} />,
    title: "Phone",
    text: "+92 342 356 7141",
  },
  {
    icon: <LuMail size={iconSize} />,
    title: "Email",
    text: "Muzaffarhassan64@Gmail.com",
  },
  {
    icon: <LuMapPin size={iconSize} />,
    title: "Location",
    text: "House No.125/C, Unit # 6, Latifabad",
  },
];

export default contactList;

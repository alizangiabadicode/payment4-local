export interface CardsType {
  title: string;
  desc: string;
  buttonText: string;
  imageUrl: string;
}
import imgOne from "../../images/img-card-one.png";
import imgTwo from "../../images/img-card-two.png";
import imgThree from "../../images/img-card-three.png";
import imgFour from "../../images/img-card-four.png";

export const cards: CardsType[] = [
  {
    title: "Create a cryptocurrency payment gateway for your project",
    desc: "Empower your project with Payment4's tailored cryptocurrency payment gateway.",
    buttonText: "Sign up",
    imageUrl: imgOne,
  },
  {
    title: "Branded payment page",
    desc: "Place your logo on payment page and customize its appearance.",
    buttonText: "create payment page",
    imageUrl: imgTwo,
  },
  {
    title: "Payment Link",
    desc: "Create an invoice, share the link and get paid- it’s an easy payment solution for your online business of any kind.",
    buttonText: "create payment link",
    imageUrl: imgThree,
  },
  {
    title: "Affiliation",
    desc: "Earn commissions, enjoy seamless withdrawals with Payment4's Affiliation, fostering community engagement through unique referral codes.",
    buttonText: "Join us",
    imageUrl: imgFour,
  },
];

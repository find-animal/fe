import icon_shelter from "../../assets/icon_shelter.png";
import icon_animal from "../../assets/icon_animal.png";
import icon_home from "../../assets/icon_home.png";
import icon_book from "../../assets/icon_book.png";
import icon_profile from "../../assets/icon_profile.png";
import icon_shelter_clicked from "../../assets/icon_shelter_clicked.png";
import icon_animal_clicked from "../../assets/icon_animal_clicked.png";
import icon_home_clicked from "../../assets/icon_home_clicked.png";
import icon_book_clicked from "../../assets/icon_book_clicked.png";
import icon_profile_clicked from "../../assets/icon_profile_clicked.png";

export const icons = [
  {
    src: icon_shelter,
    clicked_src: icon_shelter_clicked,
    alt: "shelter",
    link: "/shelters",
  },
  {
    src: icon_animal,
    clicked_src: icon_animal_clicked,
    alt: "animal",
    link: "/animals",
  },
  {
    src: icon_home,
    clicked_src: icon_home_clicked,
    alt: "home",
    link: "/",
  },
  {
    src: icon_book,
    clicked_src: icon_book_clicked,
    alt: "book",
    link: "/informations",
  },
  {
    src: icon_profile,
    clicked_src: icon_profile_clicked,
    alt: "profile",
    link: "/mypage",
  },
];

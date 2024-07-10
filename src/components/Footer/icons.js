import icon_shelter from "../../assets/icon_shelter.png";
import icon_heart from "../../assets/icon_footer_heart.png";
import icon_home from "../../assets/icon_home.png";
import icon_book from "../../assets/icon_book.png";
import icon_profile from "../../assets/icon_profile.png";
import icon_shelter_clicked from "../../assets/icon_shelter_clicked.png";
import icon_heart_clicked from "../../assets/icon_footer_heart_clicked.png";
import icon_home_clicked from "../../assets/icon_home_clicked.png";
import icon_book_clicked from "../../assets/icon_book_clicked.png";
import icon_profile_clicked from "../../assets/icon_profile_clicked.png";

export const icons = [
  {
    src: icon_book,
    clicked_src: icon_book_clicked,
    alt: "book",
    link: "/animal-news",
    text: "동물 소식",
  },
  {
    src: icon_shelter,
    clicked_src: icon_shelter_clicked,
    alt: "shelter",
    link: "/shelters",
    text: "보호소 찾기",
  },
  {
    src: icon_home,
    clicked_src: icon_home_clicked,
    alt: "home",
    link: "/",
    text: "홈",
  },
  {
    src: icon_heart,
    clicked_src: icon_heart_clicked,
    alt: "animal",
    link: "/animals",
    text: "관심 목록",
  },

  {
    src: icon_profile,
    clicked_src: icon_profile_clicked,
    alt: "profile",
    link: "/mypage",
    text: "마이페이지",
  },
];

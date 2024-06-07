import React, { useEffect, useState } from "react";
import styles from "./index.styles.module.css";
import AnimalContents from "./_components/AnimalContents/AnimalContents";
import AnimalHeader from "./_components/AnimalHeader/AnimalHeader";
import ShelterContents from "./_components/ShelterContents/ShelterContents";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function AnimalDetails() {
  const { id } = useParams();
  const [animalDetails, setAnimalDetails] = useState(null);

  const fetchAnimalDetails = async () => {
    try {
      const res = await axios.get(`/api/v1/animals/${id}`);
      setAnimalDetails(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAnimalDetails();
  }, [id]);

  if (!animalDetails) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      <AnimalHeader image={animalDetails.popFile} />
      <div className={styles.contents_container}>
        <p className={styles.special_mark}>{animalDetails.specialMark}</p>
        <div className={styles.details_container}>
          <AnimalContents
            specialMark={`"${animalDetails.specialMark}"`}
            animalBreed={animalDetails.animalBreed}
            age={animalDetails.age}
            color={animalDetails.colorCd}
            sex={animalDetails.sex}
            weight={animalDetails.weight}
            happenPlace={animalDetails.happenPlace}
            neuterYn={animalDetails.neuterYn}
          />
          <ShelterContents
            shelterTel = {animalDetails.shelter.officeTel}
            shelterNm={animalDetails.shelter.careNm}
            shelterAddr={animalDetails.shelter.careAddr}
            managerTel={animalDetails.shelter.careTel}
          />
        </div>
      </div>
    </div>
  );
}

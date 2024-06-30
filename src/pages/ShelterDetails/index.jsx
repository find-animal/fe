import React, { useCallback, useEffect, useState } from "react";
import styles from "./index.styles.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import BackIconHeader from "../../components/BackIconHeader";
import Heart from "../../components/Heart";
import Divider from "../../components/Divider";
import KakaoMap from "./_components/KakaoMap";
import Toast from "../../components/Toast";

export default function ShelterDetails() {
  const { id } = useParams();
  const [shelterDetails, setShelterDetails] = useState(null);
  const [toast, setToast] = useState("");

  const fetchShelterDetails = async () => {
    try {
      const res = await axios.get(`/api/v1/shelter/${id}`);
      setShelterDetails(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchShelterDetails();
  }, [id]);

  if (!shelterDetails) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }

  const { careNm, careTel, chargeNm, officeTel, careAddr } = shelterDetails;

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(careAddr);
      setToast("주소가 복사되었습니다.");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <BackIconHeader text={"상세정보"} />
      <div className={styles.title}>
        <p>{careNm}</p>
        <Heart id={id} type={"shelter"} isCheckedHeart={true} />
      </div>
      <div className={styles.contents}>
        <p>전화번호: {careTel ? careTel : "없음"}</p>
        <p>책임자 이름: {chargeNm ? chargeNm : "없음"}</p>
        <p>사무실 전화번호: {officeTel ? officeTel : "없음"}</p>
      </div>
      <Divider />
      <div className={styles.map_container}>
        <div className={styles.map_title}>
          <p>찾아 오시는 길</p>
          <button onClick={handleCopyAddress}>주소복사</button>
        </div>
        <p>{careAddr ? careAddr : "없음"}</p>
      </div>
      {careAddr && <KakaoMap careAddr={shelterDetails.careAddr} />}
      {toast && <Toast  toast={toast} setToast={setToast} />}
    </div>
  );
}

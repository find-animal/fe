import React, { useEffect, useRef } from "react";
import styles from "./KaKaoMap.styles.module.css";
import map_marker from "../../../assets/map_marker.png";

const { kakao } = window;

export default function KakaoMap({ careAddr }) {
  const container = useRef();

  useEffect(() => {
    kakao.maps.load(() => {
      const map = new kakao.maps.Map(container.current, {
        center: new kakao.maps.LatLng(37.50802, 127.062835),
        level: 3,
      });
      const geocoder = new kakao.maps.services.Geocoder();

      geocoder.addressSearch(careAddr, function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

          const imageSize = new kakao.maps.Size(50, 52);
          const imageOption = { offset: new kakao.maps.Point(27, 69) };

          const markerImage = new kakao.maps.MarkerImage(
            map_marker,
            imageSize,
            imageOption,
          );

          const marker = new kakao.maps.Marker({
            map: map,
            position: coords,
            image: markerImage,
          });

          map.setCenter(coords);
        }
      });
    });
  }, [careAddr, container]);

  return <div className={styles.map} ref={container} />;
}

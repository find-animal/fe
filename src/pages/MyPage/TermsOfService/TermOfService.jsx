import React from "react";
import styles from "./TermOfService.styles.module.css";
import GoBackIcon from "../../../components/GoBackIcon";

export default function TermOfService() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <GoBackIcon/>
                <p>이용약관</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius laborum recusandae maxime earum dolore
                    eligendi culpa! Sapiente fugiat nihil ab cumque commodi. Dolores officiis est quibusdam expedita
                    iste asperiores explicabo.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, illum eveniet cum, quam animi
                    delectus minus architecto voluptatum illo consequatur id fugiat debitis in obcaecati perspiciatis
                    deserunt, mollitia porro quas.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam fuga autem rerum nemo quis,
                    laboriosam sapiente molestias voluptas at aliquid vero id impedit? Quas, at saepe minus alias vel
                    beatae?
                </p>
            </div>
        </div>
    );
}

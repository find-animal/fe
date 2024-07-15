import React from 'react'
import BackIconHeader from "../../../components/BackIconHeader";
import NoticeList from "./_components/NoticeList/NoticeList";
import styles from './Notice.styles.module.css'

export default function Notice() {
  return (
    <div>
      <BackIconHeader text={'공지사항'} />
      <div className={styles.list_container}>
        <NoticeList title={'첫번째 공지사항 제목입니다.'} contents={'첫번째 공지사항 내용입니다.'} />
        <NoticeList title={'두번째 공지사항 제목입니다.'} contents={'두번째 공지사항 내용입니다.두번째 공지사항 내용입니다.두번째 공지사항 내용입니다.두번째 공지사항 내용입니다.'} />
      </div>
    </div>
  )
}

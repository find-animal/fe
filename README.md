# 🐕 find-animal 🐈

<div align="center">
  <img src="https://github.com/find-animal/fe/assets/130431829/c4c6c29c-4e8f-48cf-917c-7eac4ae33c8f"/> 
</div>

## 📝목차
[1. 프로젝트 소개](#-1-프로젝트-소개)<br>
[2. 개발 환경](#-2-개발-환경)<br>
[3. 기능 설명](#-3-기능-설명)<br>
[4. 주목할 만한 기능](#-4-주목할-만한-기능)<br>
[5. 느낀점](#-5-느낀점)
  
<br>

## 📃 1. 프로젝트 소개
### 개요
이 프로젝트는 유기동물 정보를 실시간으로 조회하고, 사용자가 관심 있는 유기동물 및 보호소 정보를 쉽게 관리할 수 있도록 돕는 웹 애플리케이션입니다. 유기동물 문제는 현대 사회에서 중요한 이슈로 떠오르고 있으며, 많은 사람들이 유기동물의 입양과 보호에 관심을 가지고 있습니다. 그러나 이러한 정보를 효율적으로 찾고 관리하기는 쉽지 않습니다. 이 프로젝트는 이러한 문제를 해결하기 위해 개발되었습니다.

### 목적
이 프로젝트의 주요 목적은 유기동물에 대한 관심을 높이고, 입양을 촉진하며, 관련 정보를 사용자에게 편리하게 제공하는 것입니다. 사용자는 유기동물의 실시간 정보를 조회할 수 있으며, 다양한 필터를 통해 자신에게 맞는 유기동물을 쉽게 찾을 수 있습니다. 또한, 보호소 정보와 유기동물의 상세 정보를 제공하여 입양 절차를 보다 원활하게 돕습니다.

### 기간
이 프로젝트는 2024년 5월 22일부터 2024년 7월 말까지 진행예정입니다.

### 역할분담
프론트엔드 1명, 백엔드 1명으로 구성되어있습니다.<br>
백엔드 레포지토리: https://github.com/find-animal/BE_find_animal
  
<br>

## ⛅ 2. 개발 환경
- 기술 스택: <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/Recoil-3578E5?style=flat-square&logo=Recoil&logoColor=black"/>
- 버전 관리 : <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white"/> <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/>
- 협업 툴 : <img src="https://img.shields.io/badge/Discord-5865F2?style=flat-square&logo=Discord&logoColor=white"/> <img src="https://img.shields.io/badge/Slack-4A154B?style=flat-square&logo=Slack&logoColor=white"/>
- 디자인 : <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white"/>

<br>

## 📃 3. 기능 설명
### 1) 로그인
- 사용자가 앱을 실행했을 때, 로그인 정보가 없는 경우 자동으로 로그인 페이지가 나타납니다. 접근 제한 설정으로 인해 로그인 이전에는 '로그인', '회원가입', '비밀번호 찾기' 페이지에만 접근할 수 있습니다.
- 아이디와 비밀번호를 입력했을 때만 로그인 버튼이 활성화됩니다.
- 사용자가 잘못된 아이디나 비밀번호를 입력하면, 오류 메시지를 표시하여 올바른 정보를 다시 입력하도록 안내합니다.

<div align="center">
  <img src="https://github.com/find-animal/fe/assets/130431829/923ed6c1-e569-4738-a106-17d5c00f1498" height="800px"/>     
  <img src="https://github.com/find-animal/fe/assets/130431829/4c5b0847-063d-4a70-97cc-f00f836e99ce" height="800px"/>
</div>

### 2) 회원가입
- 회원가입 버튼은 아이디 중복확인과 이메일 인증이 완료된 후에만 활성화됩니다.
- 아이디 중복확인 후, 이미 사용 중인 아이디일 경우 "이미 사용중인 아이디입니다"라는 오류 메시지를 표시합니다. 중복확인이 완료되어 사용 가능한 아이디일 경우에는 토스트 메시지로 "사용 가능한 아이디입니다"를 띄웁니다.

<div align="center">
  <img src="https://github.com/find-animal/fe/assets/130431829/b9cbbbea-e3df-4ca8-8442-f8c6423c26e6" height="800px"/>     
  <img src="https://github.com/find-animal/fe/assets/130431829/a978999e-d96c-4510-8ba0-80bf284aa669" height="800px"/>
</div>

- 이메일을 입력하고 이메일 인증을 요청하면, 인증번호를 입력할 수 있는 입력 창이 표시됩니다. 사용자는 입력한 메일로 발송된 인증번호를 입력하여 이메일을 인증할 수 있습니다.
- 비밀번호 보기 기능을 사용하면 숨겨진 비밀번호를 확인할 수 있습니다. 비밀번호가 지정된 형식에 맞지 않으면 사용자에게 오류 메시지를 표시하여 올바른 형식을 입력하도록 안내합니다.
  
<div align="center">
  <img src="https://github.com/find-animal/fe/assets/130431829/07cae847-335d-4aff-baea-939c82e33c62" height="800px"/>     
  <img src="https://github.com/find-animal/fe/assets/130431829/f06d0018-3d5b-46e2-8ae6-a3f20e0a8453" height="800px"/>
</div>

### 3) 아이디 찾기
- 사용자가 아이디를 잊었을 때, 가입 시 입력한 이메일로 인증하여 아이디를 찾을 수 있습니다.
  
<div align="center">
  <img src="https://github.com/find-animal/fe/assets/130431829/d2886438-c289-4672-816c-8d2f9835fd6e" height="800px"/>     
  <img src="https://github.com/find-animal/fe/assets/130431829/7e2cc4cf-e206-4c79-9ba7-449fea2b3485" height="800px"/>
</div>

### 4) 비밀번호 찾기
- 사용자가 비밀번호를 잊었을 때, 가입 시 입력한 아이디와 이메일을 입력하여 비밀번호를 변경하고 변경된 비밀번호를 사용하여 로그인할 수 있습니다.
- 기타 로직은 회원가입과 유사합니다.
    
<div align="center">
  <img src="https://github.com/find-animal/fe/assets/130431829/d45589e5-929a-4b6f-ba9f-14c04401b2a1" height="800px"/>
</div>

### 5) 메인(유기동물 정보)
- 사용자가 앱을 실행했을 때, 로그인 정보가 있는 경우 메인 페이지가 자동으로 열립니다. 메인 페이지에는 유기동물 API에서 받아온 데이터가 무한 스크롤 방식으로 표시됩니다.
- 관심보호소 등록 버튼을 클릭하면, 보호소 찾기 페이지로 이동합니다.
- Filter 버튼을 클릭하면, 필터 옵션을 설정할 수 있는 창이 나타납니다.
    
<div align="center">
  <img src="https://github.com/find-animal/fe/assets/130431829/776da6d3-7acc-4e52-94ca-9641e3a86bd4" height="800px"/>     
  <img src="https://github.com/find-animal/fe/assets/130431829/61660c5b-d1cc-4368-a9ee-96075d6466b6" height="800px"/>
</div>

- 성별, 위치, 보호 지역, 입양 가능 여부에 따라 유기동물을 필터링할 수 있습니다.
- 필터 옵션을 선택한 후 확인 버튼을 클릭하면, 선택한 옵션에 맞춰 필터링된 유기동물 리스트가 표시됩니다.
- 필터 옵션은 Recoil을 이용하여 전역 변수로 저장되어, 필터 창을 다시 열었을 때 이전에 선택한 옵션이 유지됩니다.
    
<div align="center">
  <img src="https://github.com/find-animal/fe/assets/130431829/f098c3ea-1d53-4027-afc8-9095a32540d6" height="800px"/>     
  <img src="https://github.com/find-animal/fe/assets/130431829/a309f767-42b4-47ce-958e-e5ffc8985dc2" height="800px"/>
</div>

### 6) 유기동물 상세정보
- 메인 페이지에서 유기동물 리스트 중 하나를 선택하면 해당 유기동물의 상세 정보 페이지로 이동합니다.
- 동물 사진을 클릭하면 모달 창이 열려 전체 사진을 볼 수 있습니다.
- 상세 정보 페이지에서는 유기동물의 기본 정보와 함께 보호소 정보가 제공됩니다.
- 하트 아이콘을 클릭하여 관심 동물 리스트에 추가할 수 있습니다.
- 전화 아이콘을 클릭하면 바로 해당 보호소로 전화를 걸 수 있습니다.
      
<div align="center">
  <img src="https://github.com/find-animal/fe/assets/130431829/f96e690b-bcb3-40d3-883e-303a778583cf" height="800px"/>     
  <img src="https://github.com/find-animal/fe/assets/130431829/fac718de-fa57-4b16-89a2-8458b661be9f" height="800px"/>     
</div>

### 7) 동물 소식
- 네이버 뉴스 API를 이용하여 동물 관련 뉴스만을 표시합니다.
- 사용자가 뉴스를 클릭하면 해당 뉴스의 상세 정보가 새 창으로 열립니다.
      
<div align="center">
  <img src="https://github.com/find-animal/fe/assets/130431829/c2b75ec6-d749-4e23-8508-463e53e08221" height="800px"/>     
</div>

### 8) 보호소 찾기 + 보호소 상세정보
- 유기동물 공공데이터 API를 통해 받아온 보호소 목록을 무한 스크롤로 표시합니다.
- 보호소 리스트를 선택하면 해당 보호소의 상세 정보 페이지로 이동합니다.
- 상세 정보 페이지에는 보호소의 기본 정보와 함께 카카오맵 API를 활용하여 보호소 위치를 지도로 확인할 수 있습니다.
- 하트 아이콘을 클릭하여 관심 보호소 리스트에 해당 보호소를 추가할 수 있습니다.
- 주소복사 버튼을 클릭하면 해당 주소가 클립보드에 복사됩니다.
        
<div align="center">
  <img src="https://github.com/find-animal/fe/assets/130431829/7c85a7d9-5afe-4170-95f2-8dc47164129d" height="800px"/>     
  <img src="https://github.com/find-animal/fe/assets/130431829/c2efa264-51a3-4937-9f74-26ed300e8df8" height="800px"/>    
</div>

### 9) 관심 목록
- 유기동물 상세 정보와 보호소 상세 정보 페이지에서 추가한 관심 리스트가 모아져 표시됩니다.
- 관심 목록 페이지에서는 각 항목 옆에 있는 하트 아이콘을 클릭하여 바로 해당 리스트를 삭제할 수 있습니다.
          
<div align="center">
  <img src="https://github.com/find-animal/fe/assets/130431829/cea84346-7e94-437e-bf39-e50bdb884124" height="800px"/>   
</div>

### 10) 마이페이지
- 아직 구현 중입니다.
- 로그아웃 버튼을 클릭하면 사용자가 로그아웃되고, localStorage에 저장된 로그인 정보가 삭제됩니다. 이후 로그인 페이지로 자동 이동합니다.
          
<div align="center">
  <img src="https://github.com/find-animal/fe/assets/130431829/0dae91df-ebf7-4e59-8e2c-9cc5cd6126b2" height="800px"/>   
</div>

<br>

## 4. 주목 할만한 기능

<br>

## 5. 느낀점

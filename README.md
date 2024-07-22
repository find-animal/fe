# 🐕 find-animal 🐈

<div align="center">
  <img src="https://github.com/user-attachments/assets/05d7bde0-35d8-4eba-8040-7a6dbbe21a81"/> 
  출처: canva <br>
  * 리팩토링 단계에서 디자인이 조금씩 변할 수 있습니다.*
</div>

## 📝목차
[1. 프로젝트 소개](#-1-프로젝트-소개)<br>
[2. 개발 환경](#-2-개발-환경)<br>
[3. 기능 설명](#-3-기능-설명)<br>
[4. 폴더 구조](#-4-폴더-구조)<br>
[5. 느낀점 및 개선할 부분](#-5-느낀점-및-개선할-부분)
  
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
  <img src="https://github.com/user-attachments/assets/43125339-26f3-413f-9526-644a840d69ca" height="600px"/>     
</div>

### 2) 회원가입
- 회원가입 버튼은 아이디 중복확인과 이메일 인증이 완료된 후에만 활성화됩니다.
- 아이디 중복확인 후, 이미 사용 중인 아이디일 경우 "이미 사용중인 아이디입니다"라는 오류 메시지를 표시합니다. 중복확인이 완료되어 사용 가능한 아이디일 경우에는 토스트 메시지로 "사용 가능한 아이디입니다"를 띄웁니다.
- 이메일을 입력하고 이메일 인증을 요청하면, 인증번호를 입력할 수 있는 입력 창이 표시됩니다. 사용자는 입력한 메일로 발송된 인증번호를 입력하여 이메일을 인증할 수 있습니다.
- 비밀번호 보기 기능을 사용하면 숨겨진 비밀번호를 확인할 수 있습니다. 비밀번호가 지정된 형식에 맞지 않으면 사용자에게 오류 메시지를 표시하여 올바른 형식을 입력하도록 안내합니다.

<div align="center">
  <img src="https://github.com/user-attachments/assets/c9c0b03c-bab5-407e-82cc-ff2eee44762c" height="600px"/>
</div>



### 3) 아이디 찾기
- 사용자가 아이디를 잊었을 때, 가입 시 입력한 이메일로 인증하여 아이디를 찾을 수 있습니다.
  
<div align="center">
  <img src="https://github.com/user-attachments/assets/dfd92025-4ba2-4b29-9aeb-fde393bc3550" height="600px"/>   
</div>

### 4) 비밀번호 찾기
- 사용자가 비밀번호를 잊었을 때, 가입 시 입력한 아이디와 이메일을 입력하여 비밀번호를 변경하고 변경된 비밀번호를 사용하여 로그인할 수 있습니다.
- 기타 로직은 회원가입과 유사합니다.
    
<div align="center">
  <img src="https://github.com/user-attachments/assets/64338b16-ac42-45cc-8d21-5e35aa15e84d" height="600px"/>
</div>

### 5) 메인(유기동물 정보)
- 사용자가 앱을 실행했을 때, 로그인 정보가 있는 경우 메인 페이지가 자동으로 열립니다. 메인 페이지에는 유기동물 API에서 받아온 데이터가 무한 스크롤 방식으로 표시됩니다.
- 관심보호소 등록 버튼을 클릭하면, 보호소 찾기 페이지로 이동합니다.

- 성별, 위치, 보호 지역, 입양 가능 여부에 따라 유기동물을 필터링할 수 있습니다.
- 필터 옵션은 Recoil을 이용하여 전역 변수로 저장되어, 필터 창을 다시 열었을 때 이전에 선택한 옵션이 유지됩니다.
    
<div align="center">
  <img src="https://github.com/user-attachments/assets/2745b7e7-78df-4063-9ce6-3feec2ecdde1" height="600px"/>     
</div>

### 6) 유기동물 상세정보
- 메인 페이지에서 유기동물 리스트 중 하나를 선택하면 해당 유기동물의 상세 정보 페이지로 이동합니다.
- 동물 사진을 클릭하면 모달 창이 열려 전체 사진을 볼 수 있습니다.
- 상세 정보 페이지에서는 유기동물의 기본 정보와 함께 보호소 정보가 제공됩니다.
- 하트 아이콘을 클릭하여 관심 동물 리스트에 추가할 수 있습니다.
- 전화 아이콘을 클릭하면 바로 해당 보호소로 전화를 걸 수 있습니다.
      
<div align="center">
  <img src="https://github.com/user-attachments/assets/b35081f4-19bc-4d0e-8473-c31657f1c8dd" height="600px"/>     
</div>

### 7) 동물 소식
- 네이버 뉴스 API를 이용하여 동물 관련 뉴스만을 표시합니다.
- 사용자가 뉴스를 클릭하면 해당 뉴스의 상세 정보가 새 창으로 열립니다.
      
<div align="center">
  <img src="https://github.com/user-attachments/assets/a589ea1f-7398-4706-8be6-936182d6f627" height="600px"/>     
</div>

### 8) 보호소 찾기 + 보호소 상세정보
- 유기동물 공공데이터 API를 통해 받아온 보호소 목록을 무한 스크롤로 표시합니다.
- 보호소 리스트를 선택하면 해당 보호소의 상세 정보 페이지로 이동합니다.
- 상세 정보 페이지에는 보호소의 기본 정보와 함께 카카오맵 API를 활용하여 보호소 위치를 지도로 확인할 수 있습니다.
- 하트 아이콘을 클릭하여 관심 보호소 리스트에 해당 보호소를 추가할 수 있습니다.
- 주소복사 버튼을 클릭하면 해당 주소가 클립보드에 복사됩니다.
        
<div align="center">
  <img src="https://github.com/user-attachments/assets/12a9e60d-8ded-4eb3-863c-4a0ce836df61" height="600px"/>     
</div>

### 9) 관심 목록
- 유기동물 상세 정보와 보호소 상세 정보 페이지에서 추가한 관심 리스트가 모아져 표시됩니다.
- 관심 목록 페이지에서는 각 항목 옆에 있는 하트 아이콘을 클릭하여 바로 해당 리스트를 삭제할 수 있습니다.
          
<div align="center">
  <img src="https://github.com/user-attachments/assets/20147cf5-6326-4145-af96-09e5781a2fd5" height="600px"/>   
</div>

### 10) 마이페이지
- 아직 구현 중입니다.
- 로그아웃 버튼을 클릭하면 사용자가 로그아웃되고, localStorage에 저장된 로그인 정보가 삭제됩니다. 이후 로그인 페이지로 자동 이동합니다.
          
<div align="center">
  <img src="https://github.com/user-attachments/assets/d62b7658-6ef4-426a-94ac-d99310107d0d" height="600px"/>   
</div>

<br>

## 📦 4. 폴더 구조
- apis 폴더: Recoil 상태 관리에 필요한 atoms.js 파일과 JWT 토큰 처리를 위한 axiosInstance.js 파일이 있습니다.
- assets 폴더: 이미지 파일들이 있습니다.
- components 폴더: 다양한 컴포넌트들이 있습니다. 각 컴포넌트 폴더에는 .jsx 파일과 styles.module.css 파일이 있으며, 아래 폴더 구조에서는 생략했습니다.
- pages 폴더: 홈 화면, 동물 소식 화면 등 여러 화면들을 포함합니다. 각 페이지 폴더에는 .jsx 파일과 styles.module.css 파일이 있으며, 아래 폴더 구조에서는 생략했습니다.
- _components 폴더: 특정 페이지에서만 사용하는 컴포넌트들을 모아두었습니다.
- routes 폴더: 로그인 전과 후의 라우팅을 담당하는 js파일들이 있습니다.
  
📦.idea (생략) <br>
📦node_module (생략) <br>
📦public (생략) <br>
📦src <br>
 ┣ 📂apis <br>
 ┃ ┣ 📜atoms.js <br>
 ┃ ┗ 📜axiosInstance.js <br>
 ┣ 📂assets (생략) <br>
 ┣ 📂components <br>
 ┃ ┣ 📂AnimalFilter <br>
 ┃ ┃ ┣ 📂AdoptFilter <br>
 ┃ ┃ ┣ 📂AgeFilter <br>
 ┃ ┃ ┣ 📂LocationFilter <br>
 ┃ ┃ ┣ 📂SexFilter <br>
 ┃ ┣ 📂BackIconHeader <br>
 ┃ ┣ 📂Button <br>
 ┃ ┣ 📂Divider <br>
 ┃ ┣ 📂Footer <br>
 ┃ ┃ ┣ 📜icons.js <br>
 ┃ ┣ 📂GoBackIcon <br>
 ┃ ┣ 📂Header <br>
 ┃ ┣ 📂Heart <br>
 ┃ ┣ 📂InputBox <br>
 ┃ ┣ 📂Layout <br>
 ┃ ┣ 📂ShelterFilter <br>
 ┃ ┣ 📂ShelterInfo <br>
 ┣ 📂pages <br>
 ┃ ┣ 📂AnimalDetails <br>
 ┃ ┃ ┣ 📂_components <br>
 ┃ ┃ ┃ ┣ 📂AnimalContents <br>
 ┃ ┃ ┃ ┣ 📂AnimalHeader <br>
 ┃ ┃ ┃ ┗ 📂ShelterContents <br>
 ┃ ┣ 📂AnimalNews <br>
 ┃ ┃ ┣ 📂_components <br>
 ┃ ┣ 📂AnimalShelterLike <br>
 ┃ ┃ ┣ 📂_components <br>
 ┃ ┃ ┃ ┗ 📂AnimalLikeList <br>
 ┃ ┣ 📂FindId <br>
 ┃ ┣ 📂FindPwd <br>
 ┃ ┣ 📂Home <br>
 ┃ ┃ ┣ 📂_components <br>
 ┃ ┃ ┃ ┗ 📂AnimalInfo <br>
 ┃ ┣ 📂LogIn <br>
 ┃ ┣ 📂MyPage <br>
 ┃ ┃ ┣ 📂AccInform <br>
 ┃ ┃ ┣ 📂AccountDeletion <br>
 ┃ ┃ ┣ 📂ChangePwd <br>
 ┃ ┃ ┣ 📂Notice <br>
 ┃ ┃ ┣ 📂TermsOfService <br>
 ┃ ┃ ┣ 📂_components <br>
 ┃ ┃ ┃ ┗ 📂MyPageList <br>
 ┃ ┣ 📂NotFound <br>
 ┃ ┣ 📂ShelterDetails <br>
 ┃ ┃ ┣ 📂_components <br>
 ┃ ┃ ┃ ┣ 📂KaKaoMap <br>
 ┃ ┣ 📂Shelters <br>
 ┃ ┗ 📂SignUp <br>
 ┣ 📂routes <br>
 ┃ ┣ 📜PrivateRoute.jsx <br>
 ┃ ┗ 📜Routers.jsx <br>
 ┣ 📜App.css <br>
 ┣ 📜App.js <br>
 ┣ 📜App.test.js <br>
 ┣ 📜index.css <br>
 ┣ 📜index.js <br>
 ┣ 📜logo.svg <br>
 ┣ 📜reportWebVitals.js <br>
 ┣ 📜service-worker.js <br>
 ┣ 📜serviceWorkerRegistration.js <br>
 ┣ 📜setupProxy-sample.js <br>
 ┣ 📜setupProxy.js <br>
 ┗ 📜setupTests.js <br>
📜.env <br>
📜.gitignore <br>
📜package.json <br>
📜Readme.md <br>
📜yarn.lock <br>
<br>

## 💡 5. 느낀점 및 개선할 부분
### 1) 느낀점
  - React로 투두 리스트나 간단한 사이트를 만드는 경험은 있었지만, 이렇게 하나의 웹이나 앱을 완성해본 것은 처음이라 많은 걱정이 있었습니다. 프로젝트를 시작하기 전에, 이론 공부를 통해 여러 작은 프로젝트를 만드는 것이 유익할 것이라고 생각했지만, 실제로 이렇게 하나의 큰 프로젝트를 다른 분들과 협업하며 진행하면서 전체적인 프로젝트의 흐름을 더 잘 이해할 수 있었습니다. <br>
프로젝트를 진행하면서, 기능을 설계하고 구현하는 과정에서 예상치 못한 문제들을 해결해나가는 경험이 매우 값졌습니다. 특히, 팀원들과의 협업 과정에서 코드 리뷰를 통해 개선점을 찾고, 서로의 아이디어를 공유하며 더 나은 방향으로 나아가는 방법을 배울 수 있었습니다. 협업을 할 때의 커뮤니케이션 방법, 역할 분담, 코드 일관성 유지 등 신경 써야 할 부분들을 실감하며, 이러한 경험이 앞으로의 프로젝트에 큰 도움이 될 것이라 느꼈습니다.

### 2) 개선할 부분
- 기능명세서 작성 및 디자인 완료 후 구현: 피그마에서 디자인을 먼저 하고 바로 구현을 시작했지만, 이로 인해 나중에 수정사항이 많이 발생하여 비효율적이었습니다. 앞으로는 기능명세서를 명확히 작성하고, 디자인을 완전히 마친 후에 구현을 시작할 계획입니다.

- padding과 margin 변수 처리: padding과 margin을 최대한 일관되게 적용하려 했지만, 여전히 아쉬운 부분이 남았습니다. 다음 프로젝트에서는 색상을 변수 처리한 것처럼, padding과 margin도 변수로 처리하여 일관성을 높일 계획입니다.

- 컴포넌트화 및 폴더 구조: 코드를 컴포넌트화할지 여부와 폴더 구조를 어떻게 구성할지에 대한 고민이 많았습니다. 컴포넌트화하면 props가 많아지고, 컴포넌트화하지 않으면 코드가 길어지는 문제가 있었습니다. 다음 프로젝트에서는 컴포넌트화에 대해 더 깊이 공부하고, 폴더 구조도 더 효율적으로 개선할 계획입니다.

- 함수명 및 변수명 통일: 함수명과 변수명을 최대한 일관되게 하려고 노력했지만, 일부 부족한 부분이 있었습니다. 앞으로는 함수명과 변수명을 더욱 일관되게 통일하여 코드 가독성을 높이도록 하겠습니다.


# 📝 My-Market-Kurly Clone Coding
Market Kurly : https://www.kurly.com

<br>

## 👨‍👧‍👦 1. Project Duration & Team Members

- 제작 기간 : October 11, 2021 ~ October 16, 2021
- 6인 1조 팀 프로젝트
   - Backend (Node.js)
    황유정, 임성찬, 오정민
    
   - Frontend (React) 
    장원배, 이승민, 신유빈
    
    - Frontend Github
    https://github.com/calvin9150/kurly-frontend
<br>
 
## 🔨 2. 기술 스택
- `Backend`
  - Node.js
  - Express
  - JWT
  - MongoDB
  - Swagger

- 사용 언어
  - Javascript
<br>

## 🔗 3. 시연 동영상 링크
![market_kurly](https://user-images.githubusercontent.com/90595291/138447202-80d76971-4a98-4bcd-8396-26793c40be5f.png)
[https://youtu.be/Rln2mID2syc](https://youtu.be/Rln2mID2syc)

<br>

## 🖥 4. API 설계 & WireFrame
[https://www.notion.so/1-Market-Hally-7b93dd22647647678e61fa3d19d18d12]

<br>

## 📝 5. SWAGGER(API 명세)
![swagger](https://user-images.githubusercontent.com/59908525/138449937-43175527-0f87-40c3-ad6d-2f1ee4dd5715.PNG)

<br>

## 🖥 6. 핵심기능
- 로그인, 회원가입
  - JWT를 이용하여 회원가입과 로그인을 구현하였습니다.
  - 아이디는 6자리이상의 한/영문자, 숫자로 구성되어야합니다.
  - 비밀번호는 한/영문자(소/대문자), 숫자, 특수문자가 최소 1자리 포함된 10자리 이상으로 구성되어야합니다.

- 물품 목록 등록, 조회
  - DB에 상품 물품을 등록할 수 있습니다. 
  - DB에 저장된 물품들의 정보를 조회할 수 있습니다.

- 장바구니 CRUD
  - 사용자인증을 통하여, 자신의 장바구니 페이지 목록조회가 가능합니다.
  - 장바구니에 목록을 추가할 수 있습니다.
  - 물품 수량을 수정/삭제할 수 있습니다.
  
<br>  

## 🖥 7. 해결한 문제/ 앞으로 해결할 문제
- `Backend`
- 비밀번호에 모든 특수문자로 구성할 수 있도록 허용을 하려면 어떻게 할까요?         
    ```jsx
        exports.passwordSchema = Joi.object({
           password: Joi.string()
            .pattern(new RegExp(/^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{10,}$/))
            .required(),
        }).unknown();
     ```       


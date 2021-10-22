
# 📝 My-Market-Kurly Clone Coding
Market Kurly : https://www.kurly.com


## 👨‍👧‍👦 1. 제작 기간 & 팀원 소개

- 제작 기간 : 2021/10/11 ~ 2021/10/16
- 6인 1조 팀 프로젝트
   - Backend (Node.js)
    황유정, 임성찬, 오정민
    
   - Frontend (React)
    장원배, 이승민, 신유빈

 
## 🔨 2. 기술 스택
- `Backend`
  - Node.js
  - Express
  - JWT
  - MongoDB
  - Swagger

- 사용 언어
  - Javascript
<br><br>

## 🔗 3. 시연 동영상 링크
![market_kurly](https://user-images.githubusercontent.com/90595291/138447202-80d76971-4a98-4bcd-8396-26793c40be5f.png)
[https://youtu.be/Rln2mID2syc](https://youtu.be/Rln2mID2syc)

<br><br>

## 🖥 4 API 설계 & WireFrame
[https://www.notion.so/1-Market-Hally-7b93dd22647647678e61fa3d19d18d12]

<br><br>

## 🖥 5. SWAGGER(API 명세)
![swagger](https://user-images.githubusercontent.com/59908525/138449937-43175527-0f87-40c3-ad6d-2f1ee4dd5715.PNG)

<br><br>

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
  
<br><br>  

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
- 왜 mysql이 아닌, nosql를 사용하였는가?
    - 상품들마다 필요한 물품의 정보들이 달라서, 관계들이 물품을 등록하거나 지울 때마다 다를 수 있어서. 
    - 테이블에서 
- BackEnd에서 작업을 하다가 정해진 API 설계 그대로 못 하고, 중간에 url을 바꾸게 되는 경우가 생기는데 그때마다 서로 맞추는 것보다 더 효율적인 방법이 있을까요?
    - swagger를 쓰면 된다! → 저희 팀은 안 쓰긴 했는데, 다른 팀이 쓴 것을 보니 front, back에 둘 다 좋은 것 같다.


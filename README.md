# wanted_pre_onboarding

### Toggle

<img width="100%" src="https://user-images.githubusercontent.com/92242083/154052171-50ac6568-69c7-4163-bafc-a1fcd803db89.gif" />

Input(checkbox) handing boolean values as a state data과 CSS 활용
Input 태그의 checked 선택자를 활용하는 게 코드가 간결할 것이라 생각

1. 체크박스 타입의 'input' 스테이트 값을 checked 속성의 isToggled 변수로 저장
2. 'input'에 onChange 속성의 이벤트가 발생할 때마다, 토글에 저장된 스테이트 값이 setIsToggled을 사용하여 불린 타입으로 변경 (true/false)
3. 'button' 클릭할 때마다, isToggled 스테이트 값이 참/거짓으로 변경
4. 'input' checked속성이 참 값일 때, 'label'의 배경색이 변경 & 'button' x방향으로 -100% 이동
5. 'input' checked속성이 거짓 값일 때, 'label''& 'button' 배경색, 위치가 제자리로 이동

### Modal

버튼을 클릭하면 새로운 팝업 창이 활성화
토글 컴포넌트와 비슷하게 modal의 state 값이 거짓이면 팝업이 뜨지 않고, 참일 시에만 팝업이 활성화되도록 구현하는 게 간결할 것이라 생각

1. 'button'에 onClick 함수 속성을 추가
2. modal, setModal을 초기값이 false인 불린 타입의 스테이트로 useState를 사용하여 설정
3. 'button'에 onClick이 발생하면 setModal을 이용하여 modal의 값을 true로 변경
4. modal값이 false일 때, undefined설정하여 팝업관련 태그가 활성화되지 않게 함
5. modal 값이 true 일 때, 팝업이 활성화되고 전체 background 색상이 변경되게 css로 색상변경
6. 팝업 안에 'button'에도 onClick 속성을 설정하여 이 'button'이 클릭되면 modal이 false로 다시 변경되고 팝업이 비활성화

### Tab

1. tab 스테이트 값을 제일 처음에 보여야 하는 tab1으로 초기화
2. tabLength스테이트 값을 탭의 갯수만큼 배열의 길이로 잡아 초기화 [‘1’,’2’,’3’]
3. 탭의 길이만큼 Tab'list'가 생성되도록 맵핑
4. 각각의 탭을 클릭할 때마다, 탭 스테이트와 펼쳐지는 메뉴가 동일하면 전시
5. tabLength의 index를 사용하여 선택된 selectedTab이 동일하면 스타일링을 다르게 변경

### Tag

1. state 데이터(tagData)를 태그들의 배열로 초기값을 설정
2. 'ul', 'li'를 사용하여 일체의 리스트로 태그 배열의 관리가 수월하게 jsx 마크업
3. 'list' 안에는 태그 값과 x를 수평으로 정렬하기 위해 인라인 레벨 태그인 'span'으로 추가
4. 내장 함수 map()에 ‘tag’, ’index’를 인자로 설정하여 배열인 태그들을 출력
5. 사용자에게 입력 값인 또 다른 태그를 받아 오기 위해 'input' 추가
6. 해당 'input'에 ‘enter’를 누르면 이벤트를 발생시키는 onKeyUp와 addTagData함수 속성을 추가
7. ‘enter’를 누르면 addTagData함수 실행
8. addTagData: 사용자에게 받아온 태그를 기존 스테이트 배열(…tagData)에 끝에 setTagData을 사용하여 새로운 배열을 추가
9. 태그를 삭제하기 위해 removeTagData속성을 'ul'태그 안에 onClick이벤트와 연결
10. removeTagData: 내장 함수 filter()를 사용하여 클릭된 이벤트의 index 와 인자로 받아온 배열 값들을 돌면서 해당 index와 동일하면 배열에서 삭제 후, setTagData로 태그 배열 업데이트

### AutoComplete

1. 자동 완성 기능에 사용할 문자 배열을data 변수에 저장
2. 자동 제안 auto, 클로즈 버튼 closeBtn, 선택된 단어 ‘seleted’ 스테이트 값을 초기화
3. 사용자에게 받아온 값에서 자동 완성 단어들을 제안하기 위해 onTextChanged함수를 onChange 속성에 설정
4. onTextChanged: 사용자에게 받아온 입력 값에 data안에 있는 제안할 문자값이 있으면 받아온 입력 값으로 filter()를 해주고 출력
5. data안의 문자열 중 제안할 단어가 없으면 renderSuggestions() 실행하지 않음
6. renderSuggestions(): 제안 단어 존재 시, 실행, 제안된 단어들을 리렌더링
7. 'button' 클로즈 버튼을 누르면 제안 단어와 함께 사용자가 입력한 'input' 데이터 사라짐

### ClickToEdit

1. 사용자에게 이름과 나이를 'input'으로 받음
2. 받아온 이름과 나이를 ref속성으로 변수 설정 (nameRef, ageRef)
3. 최상위 div 박스에 onClick 이벤트 설정
4. 박스 컨테이너 내부에 아무 데나 클릭하면 'p'태그에 설정된 {name}, {age} 변수 값이 변경

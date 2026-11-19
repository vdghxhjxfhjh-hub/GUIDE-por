// 작품 속 계정 전환용 설정입니다. 실제 보안 인증/기밀 저장 기능은 아닙니다.
// ID와 접근 코드는 아래에서 변경하세요. 화면에는 계정 목록을 표시하지 않습니다.
window.GUIDE_ACCOUNTS = {
 assistant: {id:'AS-001',code:'WELCOME01',label:'조교',english:'ASSISTANT',level:'01',department:'육성지원부',badge:'신규 입사',initial:'A',profileImage:'assets/profile-placeholder.svg',
 title:'당신의 첫 근무를<br>함께 시작합니다<span>.</span>',description:'작은 관찰과 세심한 지원이 후보생의 하루를 지킵니다.<br>업무를 시작하기 전, 오늘의 안내를 확인하세요.',eyebrow:'A NEW DAY AT GUIDE',assignment:'현 기수 5명 · 지원 명단 등록',assignmentNote:'현 후보생 명단에서 기본 정보와 소통 참고사항을 확인하세요.',clearance:'조교 · 기본 업무 열람',scope:'배정된 업무와 공개된 운영 지침을<br>확인할 수 있습니다.',checkTitle:'첫 근무 준비',checks:['조교 업무 지침 확인','근무 동선 및 시설 위치 확인','보고 체계와 연락 부서 확인'],scheduleTitle:'첫날 일정',scheduleTag:'입사 안내 일정',schedule:[['09:00','신규 직원 오리엔테이션','행정동 · 안내 데스크','30분'],['10:00','시설 및 안전 동선 안내','교육동 · 공용 구역','60분'],['13:00','훈련 지원 업무 참관','훈련실 · 담당 교관 동행','90분'],['16:00','업무 인계 및 질의','육성지원부 · 조교실','30분']],documents:['GA-001','GA-002','GA-003','GA-004','GA-005']},
 instructor: {id:'IN-001',code:'FIELD01',label:'교관',english:'INSTRUCTOR',level:'02',department:'교육운영부',badge:'교육 담당',initial:'I',
 // 교관 외부 이미지: images.js의 staff.instructor에서 변경하세요.
 // 아래 값은 기본 실루엣이며 images.js 설정이 우선합니다.
 profileImage:'assets/profile-placeholder.svg',
 title:'오늘의 훈련을<br>안전하게 이끕니다<span>.</span>',description:'후보생의 상태를 확인하고 교육의 흐름을 조율합니다.<br>훈련에 앞서 운영 지침과 점검 사항을 확인해 주세요.',eyebrow:'TRAINING & SUPERVISION',assignment:'훈련 운영 계정',assignmentNote:'교육 일정과 현장 운영 지침을 열람할 수 있습니다.',clearance:'교관 · 교육 운영 열람',scope:'훈련 운영과 평가에 필요한<br>업무 문서를 확인할 수 있습니다.',checkTitle:'훈련 전 점검',checks:['훈련 계획과 준비 항목 확인','시설 및 장비 점검 확인','조교 업무 분담 확인'],scheduleTitle:'교육 운영 일정',scheduleTag:'기본 근무 일정',schedule:[['09:00','훈련 계획 확인','교육운영부 · 교관실','30분'],['10:00','시설 및 장비 점검','교육동 · 훈련 구역','30분'],['13:00','훈련 지도 및 현장 관찰','교육동 · 훈련실','90분'],['16:00','평가 기록 및 인계','교육운영부 · 교관실','30분']],documents:['GI-001','GI-002','GI-003','GA-002','GA-004']},
 researcher: {id:'RE-001',code:'RECORD01',label:'연구원',english:'RESEARCHER',level:'03',department:'연구지원부',badge:'연구 담당',initial:'R',
 // 연구원 외부 이미지: images.js의 staff.researcher에서 변경하세요.
 // 아래 값은 기본 실루엣이며 images.js 설정이 우선합니다.
 profileImage:'assets/profile-placeholder.svg',
 title:'관찰을 기록하고,<br>변화를 확인합니다<span>.</span>',description:'정확한 기록은 신뢰할 수 있는 연구의 시작입니다.<br>자료 취급 절차와 관찰 기록 지침을 확인해 주세요.',eyebrow:'OBSERVATION & RECORDS',assignment:'연구 기록 계정',assignmentNote:'연구 업무 지침과 기록 관리 절차를 열람할 수 있습니다.',clearance:'연구원 · 연구 업무 열람',scope:'승인된 연구 지침과 기록 관리<br>문서를 확인할 수 있습니다.',checkTitle:'연구 업무 준비',checks:['관찰 기록 양식 확인','측정 장비 점검 확인','자료 인계 절차 확인'],scheduleTitle:'연구 업무 일정',scheduleTag:'기본 근무 일정',schedule:[['09:00','기록 및 인계 사항 확인','연구지원부 · 기록실','30분'],['10:00','측정 장비 점검','연구동 · 측정실','60분'],['13:00','관찰 자료 정리','연구지원부 · 분석실','90분'],['16:00','기록 검토 및 인계','연구지원부 · 기록실','30분']],documents:['GR-001','GR-002','GR-003']}
};

// 현재 설정 반영: 기존 로그인 ID와 접근 코드는 유지합니다.
Object.assign(window.GUIDE_ACCOUNTS.researcher,{department:'연구관리실',badge:'기밀 연구원',title:'연구의 기본은<br>재도전과 재반복<span>.</span>',description:'결합 진행과 생체 변화를 24시간 기록합니다.<br>근거가 부족한 판정은 수치화하지 않고 유보됩니다.',assignment:'현 기수 관찰 · 제한 배정',assignmentNote:'진행군 3명 / 판정 유보 1명 / 대상 제외 1명',clearance:'지정 연구원 · 기록 열람',scope:'배정된 개체 정보와 관찰 자료,<br>제한 인계 기록을 확인할 수 있습니다.',checks:['대상별 결합 지표 및 유보 사유 확인','회수 내피·개체 인계 기록 대조','사망·변질·대상 제외 분류 확인'],scheduleTitle:'연구 관찰 일정',scheduleTag:'제한 배정 업무',schedule:[['09:00','전일 관찰 및 예외 대상 확인','연구관리실 · 기록실','30분'],['10:00','결합 지표 대조 및 판정 검토','연구동 · 분석실','60분'],['13:00','회수 내피 및 격리 인계 기록 검토','연구관리실 · 제한 자료실','90분'],['16:00','상태 변경 보고 및 원자료 보존','연구관리실 · 기록실','30분']]});

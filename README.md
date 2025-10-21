# 업데이트 예정입니다.


🚧 **작업중(Project in progress)**  
이 저장소는 TK의 하드웨어/로보틱스/IoT 실험 코드와 문서를 정리·업로드하는 공간입니다.  
**마지막 갱신:** 2025-9-21 KST

---

## 진행 중인 주요 프로젝트 (대화 발췌 요약)

1) **로보틱스**
- /robotics/gripper_poc/ 디렉터리 구성, 캘리브·테스트 스크립트 업로드

2) **머신비전**
- USB 카메라 캘리브(체커보드), 색/형상 검출 개선, 자동 ROI 고정
- 라이브 검출 스크립트 개선 요청 사항 정리(프레임 크기/자동 포커스/바 UI 설명)

3) **Modbus/게이트웨이 데이터 수집 → DB/MQTT**
- RS-485/RTU 질의, 소켓/Modbus-TCP 변환, 1분/5초 주기 폴링, 재시도/None 재수집
- `mariaDB/SQLite` 기록 및 Slack 알림, 테이블/리포트 표준화

4) **서비스 운영(라즈베리파이)**
- systemd 서비스로 CSV → MQTT/DB 업로드, 장애 재시작 및 상태 모니터링
- 환경변수/로그/10시 헬스핑 슬랙 알림 스크립트 정리 예정

5) **금속검출기/포토센서 알람 PC 연동**
-  24/48V 신호 → 옵토아이솔레이션 → DI/Modbus → PC 폴링(200–500ms) → 엣지 검출

6) **개인프로젝트 (게임/로직)**
- 개인 프로젝트 스크립트 정리 및 실행 예시/의존성 문서화

---

## TODO
- [ ] 디렉터리 구조 초안 반영 (`robotics/`, `vision/`, `gateways/`, `services/`, `docs/`)
- [ ] 각 프로젝트별 README, 실행 예시, 의존성(`requirements.txt`) 추가
- [ ] RS-485 장치별 프로토콜 요약표(주소/FC/스케일) 정리
- [ ] systemd 유닛/로그·재시작 정책 샘플 업로드
- [ ] Slack 알림(webhook) 예제 코드 통합
- [ ] 스크린샷/배선도(24/48V 주의사항 포함) 업로드

---

## 예정 디렉터리 구조(안)
robotics/
└─ gripper_poc/ # HX711, 캘리브, 픽/소팅 스크립트
vision/
├─ calibration/ # 체커보드 캘리브
└─ detection/ # 색/형상 검출, 라이브 데모
gateways/
├─ modbus_rtu/ # RS-485 질의 샘플
└─ modbus_tcp/ # 게이트웨이 변환·폴링
services/
├─ csv_to_mqtt/
└─ csv_to_mysql/
docs/
├─ wiring/ # 24/48V DI, 옵토아이솔레이터
└─ protocols/ # NX9/DSFOX/FOX reg map 요약
games/
├─ hobby/ # 배포예정
└─ onweb/ # 배포판

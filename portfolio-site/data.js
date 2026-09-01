window.PORTFOLIO_DATA = {
  experience: [
    {
      period: '2024.10 — Present',
      title: 'AIXERA (구 에스엠해썹) · AX팀 / Physical AI',
      body: '식품·바이오 제조현장에서 협동로봇, 머신비전, 산업통신, 센서 데이터 수집 및 운영 소프트웨어를 연결하는 자동화 시스템을 개발하고 있습니다.'
    },
    {
      period: '2022.08 — 2024.08',
      title: '아주대학교 공과대학원 · 스마트융합건축학과 석사',
      body: 'Yaskawa 6축 로봇, PLC, RoboDK, Rhino/Grasshopper를 이용해 로봇 기반 적층제조와 In-situ 이미지 피드백 보정 구조를 연구했습니다.'
    }
  ],
  projects: [
    {
      title: '풀무원 로봇 기반 제품 물성 자동 체킹 시스템',
      badge: 'Field System',
      featured: true,
      summary: 'FR5 로봇팔과 감압·촉각센서를 연동해 제품을 자동으로 검사하고, 검사 포인트·시퀀스·DI 입력·센서 이벤트를 운영할 수 있는 현장 시스템을 개발했습니다.',
      bullets: [
        'FR5 2대, PGC-140 그리퍼, 촉각센서, DI 토글 스위치 연동',
        '제품별 검사 포인트 티칭, 시퀀스 저장·재생, 속도·대기 조건 관리',
        '비블로킹 MoveJ + 상태 폴링으로 이동 중 외부 입력 감시 및 정지 대응',
        '촉각센서 I2C 프로토콜 분석, 변화량 기반 이벤트 검출, CSV·JSON·그래프 저장',
        'PyQt5 기반 운영 GUI와 로봇 SDK 오류·상태 로그 제공',
        '센서 실측값을 자동 보정 동작에 연결하는 부분은 후속 개발 항목으로 남아 있음'
      ],
      stack: ['Fairino FR5','Python','PyQt5','I2C','DI','PGC-140']
    },
    {
      title: '자연어 비전 픽킹',
      badge: 'Robot Vision',
      summary: '한국어 명령으로 대상을 찾고 RGB-D 위치를 로봇 좌표로 변환해 파지하는 FR5 비전 매니퓰레이션 시스템입니다.',
      bullets: ['Qwen2.5-VL 기반 open-vocabulary 감지','다중 높이 스캔과 불안정 출력 파싱 폴백','MoveJ 완료 대기 및 안정화 Pose 평균','반복 편향을 gripper offset으로 보정'],
      stack: ['Qwen2.5-VL','RealSense','FR5','Python']
    },
    {
      title: 'YOLO11 OBB 방향 정렬',
      badge: 'Vision',
      summary: '직접 수집·라벨링한 데이터로 회전 박스를 학습하고 제품 방향을 맞춰 슬롯에 배치했습니다.',
      bullets: ['데이터 수집 → 라벨링 → 학습 → 배포 루프 구성','OBB 각도를 J6 회전값으로 연결','클래스별 그리퍼 폭 자동 설정','매 픽 후 재스캔으로 가림 상황 대응'],
      stack: ['YOLO11 OBB','PyTorch','FR5']
    },
    {
      title: 'ROS2 식판 검증·보정 시스템',
      badge: 'ROS2',
      summary: '식판 상태를 인식하고 기준과 비교해 부족한 물체를 보충하는 규칙 기반 로봇 작업 시스템입니다.',
      bullets: ['카메라 → YOLO → 셀 매핑 → 차이 분석 → 작업계획 → 안전검사 → 실행 → 재검사','ROS2 노드와 Topic/Service 분리','기준 식판·공급 위치·안전 한계를 JSON/YAML 설정으로 분리','ROS 없이 판단 로직을 검증하는 mvp_validation.py 구성'],
      stack: ['ROS2 Humble','YOLO','JSON/YAML','FR5']
    },
    {
      title: 'Unity 디지털 트윈 / ServoJ 실기 검증',
      badge: 'Sim2Real',
      summary: '실제 FR5 관절 상태를 Unity로 보내고, ServoJ 스트리밍을 실기에서 검증한 디지털 트윈 초기 단계입니다.',
      bullets: ['실시간 관절각 UDP JSON 송출','Unity URDF 모델과 실제 로봇 동작 동기화','ServoJ 125Hz 보간 및 작업영역 안전 클램프','ML-Agents 정책 학습과 ONNX 실기 배포는 향후 단계'],
      stack: ['Unity','UDP','ServoJ','URDF']
    },
    {
      title: '3D 스캔 · RGB-D 외관검사',
      badge: 'Inspection',
      summary: '알루미늄 프로파일을 근접 RGB-D로 스캔하고 포인트클라우드와 검사 GUI를 구성했습니다.',
      bullets: ['D455의 최소거리 한계로 D435i로 교체','Color/Depth 스트리밍과 스캔 포인트 순차 이동','포인트클라우드 재구성 및 표시','depth 단독으로는 미세 표면결함 요구사항을 만족하지 못한다고 결론'],
      stack: ['RealSense','OpenCV','PyQt5','Point Cloud']
    },
    {
      title: '벽 장착 FR5 충돌 오탐 진단',
      badge: 'Diagnostics',
      summary: '벽 장착 후 반복되던 Axis 2 Collision Fault를 잔여토크 측정으로 분리 진단했습니다.',
      bullets: ['설치각 zangle 오설정과 기구 간섭을 분리','J1 잔여토크 변동폭을 기준으로 설치각 재설정','수정 후 다축 프로그램 완주 검증','진단 스크립트와 반복 세팅 절차 문서화'],
      stack: ['FR5 SDK','Torque Analysis','Python']
    },
    {
      title: 'Industrial IoT / Smart Factory Data Pipeline',
      badge: 'IIoT',
      summary: '현장 설비와 센서를 Raspberry Pi 기반 Edge Node에서 수집해 DB·MQTT·알림으로 연결했습니다.',
      bullets: ['Modbus TCP/RTU, RS232/RS485, Socket, MQTT 연동','MariaDB/SQLite 저장 및 Flask 기반 데이터 전달','systemd 자동실행, 재시도, 장애복구, Slack 헬스체크','금속검출기·수위·온도 등 제조 현장 신호 통합'],
      stack: ['Raspberry Pi','Modbus','MQTT','MariaDB','Linux']
    }
  ],
  skills: [
    { title: 'Robotics', body: 'Fairino FR5, myCobot, Yaskawa 6축 로봇, Pick & Place, Robot Pose, TCP/Base Frame, 엔드이펙터' },
    { title: 'Vision & Sensor', body: 'RealSense D435/D455, OpenCV, YOLO, VLM, OBB, RGB-D, 촉각센서, Hand-Eye Calibration' },
    { title: 'Software', body: 'Python, ROS2, Linux/Ubuntu, Docker, PyQt5, Flask, systemd' },
    { title: 'Simulation', body: 'Unity URDF, Isaac Sim, RoboDK, Digital Twin, Sim-to-Real 검증' },
    { title: 'Industrial Interface', body: 'RS232/RS485, Modbus RTU/TCP, MQTT, Socket, DI/IO, Raspberry Pi, Arduino' },
    { title: 'Data & Ops', body: 'MariaDB, SQLite, JSON/YAML 설정, 로그, 원격 유지보수, 장애 진단' }
  ],
  education: [
    { title: '아주대학교 공과대학원 스마트융합건축학과 · 석사', detail: '2022.08 — 2024.08 · 6축 로봇 기반 적층제조 및 이미지 피드백 공정 연구' },
    { title: '단국대학교 건축공학과 · 학사', detail: '2013.03 — 2022.08' }
  ]
};

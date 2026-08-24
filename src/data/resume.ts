export const personal = {
  nameKo: '이재복',
  nameEn: 'Jaebok',
  role: 'Data Scientist',
  tagline: '데이터를 분석하는 것에서 끝나지 않고, 실제 서비스에서 활용되어 고객과 비즈니스에 가치를 만들어내는 데이터 사이언티스트 이재복입니다.',
  birth: '1998년생 (27세)',
  military: '군필 · 육군 병장 만기전역 (2018.08 - 2020.03)',
  location: '서울 관악구',
  phone: '010-6426-9707',
  email: 'j_be_@naver.com',
  portfolio: 'https://ds-portfolio-white.vercel.app/',
  careerDoc: 'https://ds-workexperience-ver2-seven.vercel.app/',
  intro: [
    '데이터를 분석하는 것에서 끝나는 것이 아니라, 실제 서비스에서 활용되어 고객과 비즈니스에 가치를 만들어내는 AI를 개발하는 데이터 사이언티스트입니다.',
    '문제를 정확하게 정의하고 가장 적합한 방법을 선택하여 실제 서비스의 성과로 연결하는 것이 데이터 사이언티스트의 역할이라고 생각합니다.',
    '새로운 모델을 적용하는 것보다 문제를 이해하는 것이, 모델을 개발하는 것보다 운영 환경에서 지속적으로 개선하는 것이 더 큰 가치를 만든다고 믿으며, 기술이 실제 가치로 이어지는 AI 서비스를 만들기 위해 꾸준히 성장하고 있습니다.',
  ],
};

export const education = {
  school: '안양대학교',
  major: '통계데이터사이언스학과 (4년제)',
  gpa: '3.85/4.5',
  timeline: [
    { period: '2017.03 - 2023.02', note: '졸업 · 주간' },
    {
      period: '2021.03 - 2022.06',
      note: '통계학과 행정인턴 — 전공 강의 조교 3학기, 통계 프로그램 라이선스 발급·갱신 관리',
    },
  ],
};

export const certificates = [
  { name: '빅데이터분석기사', detail: '한국데이터산업진흥원 · 2022.07' },
  { name: '데이터분석준전문가 (ADsP)', detail: '한국데이터산업진흥원 · 2021.09' },
  { name: '사회조사분석사 2급', detail: '한국산업인력공단 · 2022.06' },
  { name: '컴퓨터활용능력 1급', detail: '대한상공회의소 · 2021.03' },
];

export type Career = {
  company: string;
  period: string;
  role: string;
  bullets: string[];
};

export const careers: Career[] = [
  {
    company: '이에이엔테크놀로지',
    period: '2024.10 ~ 2026.06',
    role: '리에이블 · 프로 · Data Scientist (1년 9개월)',
    bullets: [
      '건물 에너지 관리 시스템(BEMS) 핵심 ML 서비스 개발 및 운영',
      'BentoML · MLflow · Docker · Airflow 기반 MLOps 파이프라인 구축',
      'Grafana · Prometheus 기반 실시간 모니터링 체계 구축',
      '에너지 예측, 재실 예측, 이상 탐지, HVAC 자동제어, LLM 챗봇 등 핵심 ML 서비스를 주도적으로 개발',
    ],
  },
  {
    company: '라임솔루션',
    period: '2023.05 ~ 2024.06',
    role: '공공SI사업부 · 사원 · Data Analyst (1년 2개월)',
    bullets: [
      '데이터 분석 및 AI 모델 개발, SOTA 논문 분석 및 PoC 적용',
      'Linux 기반 가상환경 서버 구축·운영, 기술 문서 작성',
      '공공 데이터 기반 저수지 수위 예측 서비스 개발 — 시계열 예측 모델과 실시간 예측 API 구축',
      '12시간 선행 예측으로 주민 대피 및 수문 운영 의사결정 지원',
    ],
  },
];

export type SkillCategory = { title: string; items: string[] };

export const skillCategories: SkillCategory[] = [
  {
    title: '프로그래밍 & ML',
    items: ['Python', 'PyTorch', 'Scikit-Learn', 'ML', 'DL', 'RL'],
  },
  {
    title: '데이터 처리',
    items: ['Pandas', 'NumPy', 'SQL'],
  },
  {
    title: 'MLOps & 인프라',
    items: [
      'BentoML',
      'mlflow',
      'Apache Airflow',
      'Docker',
      'AWS',
      'EC2',
      'ECS',
      'Apache Spark',
    ],
  },
  {
    title: '모니터링 & 협업',
    items: ['Grafana', 'Prometheus', 'Git'],
  },
];

export type Project = {
  name: string;
  subtitle: string;
  period: string;
  bullets: string[];
  highlight?: string;
};

export const projects: Project[] = [
  {
    name: 'Energy Prediction Service',
    subtitle: '건물 에너지 사용량 예측 서비스',
    period: '2025',
    bullets: [
      'XGBoost 기반 사용량·낭비량 듀얼 예측 모델 설계',
      'Optuna 하이퍼파라미터 최적화 및 MLflow 기반 모델 관리 체계 구축',
    ],
    highlight: 'R² 0.93 달성 · 11개 건물 배포',
  },
  {
    name: 'Occupancy Assumption Service',
    subtitle: '건물 재실 예측 서비스',
    period: '2024 ~ 2025',
    bullets: [
      'HMM · KMeans 이원화 알고리즘 설계',
      'BentoML 기반 REST API 개발 및 HVAC·조명 자동제어 연계',
    ],
    highlight: '9개 건물 프로덕션 배포',
  },
  {
    name: 'Anomaly Detection Service',
    subtitle: '건물 에너지·IAQ 이상 탐지 서비스',
    period: '2025',
    bullets: [
      'Hampel · IQR 앙상블 기반 이상 탐지 설계',
      '8,896개 이상 센서 실시간 병렬 처리 환경 구축',
    ],
    highlight: '오탐지 30~40% 감소',
  },
  {
    name: 'DQN-based HVAC Control',
    subtitle: 'DQN 기반 건물 HVAC 자동 제어 시스템',
    period: '2025 ~ 2026',
    bullets: [
      '강화학습 환경 설계부터 온라인 학습 파이프라인 구축까지 단독 수행',
      '보상 함수 반복 개선을 통해 10개 이상 유닛 안정 제어 시스템 구축',
    ],
    highlight: '실외기 전력량 14.9% 절감 (57.8 → 49.1 kWh/일)',
  },
  {
    name: 'Solution Summary Agent',
    subtitle: 'LLM 기반 건물 에너지 분석 챗봇',
    period: '2025',
    bullets: [
      'LangGraph 기반 SQL Agent 아키텍처 설계',
      'FastAPI REST API 개발로 자연어 데이터 조회 환경 구축',
    ],
    highlight: '비개발자 자연어 데이터 조회 환경 구축',
  },
  {
    name: 'Reservoir Level Prediction Service',
    subtitle: '저수지 수위 예측 서비스',
    period: '2023 ~ 2024',
    bullets: [
      '강우-수위 상관관계 분석 및 Lag 기반 파생변수·시계열 피처 엔지니어링',
      'Hampel Filter 이상치 탐지, AutoML·DLinear 듀얼 모델, FastAPI 실시간 예측 API 개발',
    ],
    highlight: '12시간 선행 예측 → 주민 대피 가능 시간 최대 12h 확보',
  },
];

export type Activity = {
  name: string;
  period: string;
  org?: string;
  bullets: string[];
  result?: string;
  tags?: string[];
};

export const activities: Activity[] = [
  {
    name: 'Dacon — 기업 성공 확률 예측 대회',
    period: '2025.04 ~ 2025.05',
    org: '기업 재무·조직·투자 정보를 활용해 성공 확률을 예측하는 회귀 모델 개발',
    bullets: [
      '범위형 기업가치 데이터를 중앙값으로 변환하는 전처리 로직 설계',
      '직원 수·매출·투자금 기반 파생변수 6개 생성',
      '결측치를 설립연도·인수여부·상장여부 기준 그룹 평균으로 대체',
      'Feature Importance 분석으로 저중요 변수 제거 후 5-Fold CV + GridSearch 최적화',
    ],
    result: '🥇 1위 / 592명 참가 · MAE 0.20265',
    tags: ['Python', 'RandomForest', 'scikit-learn', 'pandas', 'matplotlib'],
  },
  {
    name: 'Dacon — RF 하이퍼파라미터 최적화 챌린지',
    period: '2024.03 ~ 2024.04',
    org: '전처리 완료 데이터셋을 대상으로 RandomForest 성능을 극대화하는 튜닝 챌린지',
    bullets: [
      'Optuna 베이지안 최적화로 유망 탐색 구간 신속 축소 후 Grid Search로 미세 조정',
      '탐색 시간 대비 성능 효율성 및 검증 성능 안정성 기준으로 최종 파라미터 선정',
    ],
    result: '사전 평가 1위 / 359명 참가 · AUC 0.833',
    tags: ['Python', 'RandomForest', 'Optuna', 'scikit-learn'],
  },
  {
    name: 'Dacon — 대출 등급 분류 예측 대회',
    period: '2024.01 ~ 2024.02',
    org: '고객 금융 데이터를 분석해 대출 등급을 예측하는 분류 모델 개발',
    bullets: [
      '카이제곱 검정·ANOVA 기반 변수 유의성 평가 후 저중요 변수 제거',
      'Stratified 5-Fold CV로 클래스 비율을 유지하며 모델 안정성 평가',
      '학습 곡선 분석으로 과적합 여부 진단 후 하이퍼파라미터 튜닝',
    ],
    result: '최종 7위 / 사전 평가 2위 / 784명 참가 · Macro F1 0.94728',
    tags: ['Python', 'RandomForest', 'scikit-learn', 'pandas'],
  },
  {
    name: 'Dacon — 서울시 평균 기온 예측 대회',
    period: '2023.12 ~ 2024.01',
    org: '장기 기상 시계열 데이터를 활용해 서울시 평균 기온을 예측하는 모델 개발',
    bullets: [
      '히트맵·산점도 행렬 및 VIF 기반 다중공선성 진단으로 저효과 변수 제거',
      'Prophet으로 독립변수의 미래값을 예측한 뒤 XGBoost 입력으로 활용하는 하이브리드 파이프라인 설계',
    ],
    result: '4위 / 624명 참가 · MAE 2.55572',
    tags: ['Python', 'Prophet', 'XGBoost', 'scikit-learn', 'pandas'],
  },
  {
    name: 'Dacon — 학습 플랫폼 구독 갱신 예측 대회',
    period: '2023.11 ~ 2023.12',
    org: '학습 플랫폼 이용자 행동·속성 데이터를 분석해 구독 갱신 여부를 예측하는 분류 모델 개발',
    bullets: [
      '클래스별 분포 분석 및 Box Plot 기반 이상치 탐지',
      '범주형 변수에 Target Encoding 적용, PyTorch 기반 MLP 모델 설계 및 학습',
    ],
    result: '🥇 1위 / 380명 참가 · Macro F1 0.52642',
    tags: ['Python', 'PyTorch', 'scikit-learn', 'pandas'],
  },
  {
    name: 'NIA — 데이터 분석 청년인재 양성사업',
    period: '2022.05 ~ 2022.08',
    org: '데이터 분석 교육 520시간 수료 — 통계 이론, Python, SQL, QGIS',
    bullets: ['그린 허브 — 자동 분리수거 쓰레기통 개발 및 최적 입지 선정 프로젝트 참여'],
    tags: ['Python', 'SQL', 'QGIS', 'ResNet', 'TSP'],
  },
  {
    name: '교내 통계경진대회 — 유튜브 구독자수 회귀분석',
    period: '2021.10 ~ 2021.12',
    org: '유튜브 구독자수는 어떤 변수에 영향을 많이 받는가?',
    bullets: [
      '계통 추출 방식으로 유튜브 채널 표본 수집(n=278) 및 대표성 검토',
      'SPSS·Minitab 활용 다중공선성 진단, Best Subset Selection으로 최적 변수 조합 도출',
      '"Shorts" 콘텐츠 여부가 구독자 수에 미치는 유의미한 양(+)의 영향을 회귀계수 유의성 검정으로 실증',
    ],
    result: '🥇 최우수상 (1위)',
    tags: ['SPSS', 'Minitab'],
  },
];

export const howIWork: string[] = [
  '문제를 정확히 정의하는 것에서 시작해 가장 적합한 해결 방법을 선택합니다.',
  '완벽한 결과물보다 빠르게 검증하고 지속적으로 개선하는 방식을 지향합니다.',
  '처음 접하는 기술도 논문과 공식 문서를 학습해 실제 서비스에 직접 적용합니다.',
  '선택지가 많을수록 서비스 목적과 운영 환경을 먼저 고려해 후보를 빠르게 좁힙니다.',
  '기획, 운영, 개발 담당자와 지속적으로 소통하며 요구사항을 모델과 시스템 설계에 반영합니다.',
];

export type AboutMeSection = {
  id: 'intro' | 'strengths';
  title: string;
  paragraphs: string[];
};

export const aboutMeSections: AboutMeSection[] = [
  {
    id: 'intro',
    title: '자기소개',
    paragraphs: [
      '데이터를 분석하는 것에서 끝나는 것이 아니라, 실제 서비스에서 활용되어 고객과 비즈니스에 가치를 만들어내는 AI를 개발하는 데이터 사이언티스트 이재복입니다.',
      '2014년 IBM Watson이 빅데이터를 활용해 백혈병 환자의 치료를 지원한 사례를 접하며 데이터가 현실의 문제를 해결할 수 있다는 가능성에 큰 매력을 느꼈습니다. 이를 계기로 데이터 사이언티스트를 목표로 삼았고, 통계데이터사이언스를 전공하며 통계학과 머신러닝의 기반을 다졌습니다.',
      '이후 NIA 데이터 분석 청년인재 양성과정과 다양한 프로젝트를 수행하며 Python과 SQL 기반 데이터 분석 역량을 쌓았고, 데이터 분석 경진대회에서도 기업 성공 확률 예측 1위, 학습 플랫폼 구독 갱신 예측 1위, 머신러닝 모델 튜닝 챌린지 사전평가 1위 등의 성과를 거두며 데이터 전처리부터 모델 설계, 성능 검증까지 데이터 사이언티스트의 전 과정을 경험했습니다.',
      '라임솔루션에서는 공공 데이터를 활용한 저수지 수위 예측 서비스를 개발했습니다. 강우량과 수위 데이터를 분석해 시계열 예측 모델과 실시간 예측 API를 구축했으며, 최대 12시간 선행 예측이 가능한 시스템을 구현하여 주민 대피와 수문 운영 의사결정을 지원했습니다. 이 경험을 통해 데이터 분석은 단순히 모델의 정확도를 높이는 일이 아니라 사회와 현장에 실질적인 가치를 제공하는 일이라는 점을 체감했습니다.',
      '이후 이에이엔테크놀로지에서는 건물 에너지 관리 시스템(BEMS)의 핵심 AI 서비스를 개발했습니다. 데이터 전처리부터 모델 설계, API 개발, MLOps 구축, 운영 자동화와 모니터링까지 AI 서비스의 전 과정을 담당하며 실제 운영 환경에서 검증되는 서비스를 만들어 왔습니다. 에너지 사용량 예측 서비스에서는 Optuna 하이퍼파라미터 최적화와 MLflow 기반 모델 관리 체계를 구축해 R² 0.93의 성능으로 11개 건물에 서비스를 운영했고, 재실 예측 서비스에서는 HMM과 KMeans를 결합한 구조를 설계해 9개 건물의 HVAC 및 조명 자동제어에 적용했습니다. 또한 강화학습 기반 HVAC 자동제어 시스템을 단독으로 개발해 실외기 전력 사용량을 14.9% 절감했고, LangGraph 기반 SQL Agent를 개발해 비개발자도 자연어만으로 데이터를 조회할 수 있는 환경을 구축하며 AI 기술의 활용 범위를 확장했습니다.',
      '이러한 경험을 통해 데이터 사이언티스트의 역할은 높은 성능의 모델을 만드는 것이 아니라, 문제를 정확하게 정의하고 가장 적합한 방법을 선택하여 실제 서비스의 성과로 연결하는 것이라는 점을 배웠습니다. 새로운 모델을 적용하는 것보다 문제를 이해하는 것이 더 중요했고, 모델을 개발하는 것보다 운영 환경에서 지속적으로 개선하는 것이 더 큰 가치를 만든다는 사실을 실무를 통해 체득했습니다.',
      '저는 앞으로도 최신 AI 기술을 빠르게 습득하는 데 그치지 않고, 이를 실제 서비스에 적용하여 고객과 비즈니스에 의미 있는 변화를 만들어내는 데이터 사이언티스트가 되고 싶습니다. 데이터를 통해 의사결정을 지원하고, 서비스의 품질과 사용자 경험을 지속적으로 개선하며, 기술이 실제 가치로 이어지는 AI 서비스를 만드는 것이 저의 목표입니다.',
    ],
  },
  {
    id: 'strengths',
    title: '성격의 장단점',
    paragraphs: [
      '저는 다양한 직군과 원활하게 소통하며 협업하는 것을 중요하게 생각합니다. AI 서비스를 개발하면서 기획, 운영, 개발 담당자와 지속적으로 소통하며 요구사항을 조율하고 이를 모델과 시스템 설계에 반영했습니다. 주변에서도 "의사소통이 부드럽다"는 이야기를 자주 들으며, 여러 ML 서비스 개발 과정에서 요구사항을 신속하게 반영해 서비스 품질과 운영 안정성을 높이는 데 기여했습니다.',
      '저는 새로운 기술을 빠르게 습득해 실제 서비스에 적용하는 것을 즐깁니다. 강화학습, LangGraph, MLflow, Airflow 등 처음 접하는 기술도 논문과 기술 문서를 학습해 프로젝트에 직접 적용했습니다. DQN 기반 HVAC 제어 프로젝트에서는 초기 성능이 기대에 미치지 않았지만 보상 함수를 지속적으로 개선하고 반복 실험을 수행한 끝에 10개 이상의 유닛을 안정적으로 제어하는 시스템을 구축했으며, 실외기 전력 사용량을 14.9% 절감하는 성과를 달성했습니다.',
      '저의 단점은 결과물의 완성도를 높이기 위해 세부적인 부분까지 오래 고민하는 성향입니다. 재실 예측 서비스를 개발할 당시 기능적으로는 문제가 없는 코드였지만 구조를 더 개선하기 위해 리팩토링에 예상보다 많은 시간을 투자한 경험이 있습니다. 이를 통해 처음부터 완벽한 결과물을 만드는 것보다 빠르게 검증하고 지속적으로 개선하는 것이 더 중요하다는 점을 배웠고, 현재는 우선 운영 가능한 서비스를 구축한 뒤 운영 데이터를 기반으로 성능과 품질을 지속적으로 개선하는 방식으로 업무를 수행하고 있습니다.',
      '또한 여러 선택지가 있을 때 충분히 비교·검증하려는 성향으로 인해 의사결정에 시간이 다소 걸린다는 단점도 있습니다. 에너지 사용량 예측 서비스를 개발할 당시 여러 모델을 비교하며 성능뿐 아니라 학습 안정성, 추론 속도, 운영 비용까지 함께 검토하다 보니 초기 의사결정에 예상보다 많은 시간을 사용한 경험이 있습니다. 이후에는 서비스 목적과 운영 환경을 먼저 고려해 후보를 빠르게 좁힌 뒤 검증하는 방식으로 업무를 개선하며 개발 속도와 서비스 품질을 함께 높이고 있습니다.',
    ],
  },
];

export const navSections = [
  { id: 'home', label: 'Home' },
  { id: 'profile', label: 'Profile' },
  { id: 'career', label: 'Career' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'activities', label: 'Activities' },
  { id: 'about', label: 'About Me' },
] as const;

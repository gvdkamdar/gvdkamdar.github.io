export interface TimelineItem {
  type: "work" | "education";
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

export const timeline: TimelineItem[] = [
  {
    type: "work",
    title: "Graduate Research Assistant",
    company: "Visual Analytics and Imaging Lab",
    location: "Stony Brook, US",
    period: "Jan 2024 – Present",
    achievements: [
      "Designed ML workflow to extract human personas from aggregated socio-economic datasets under Prof. Klaus Mueller to provide actionable insights for policymakers and reducing analysis time by 65%.",
      "Built a modular data pipeline to extract datapoints from pattern files generated from in-house AK Analyst tool.",
      "Reduced noise by 40% using PCA, preserving 95% of variance in US county-wide data on opioid deaths spanning 20 years.",
      "Performed hierarchical clustering with Ward’s linkage criterion and Euclidean distance, improving interpretability by 35%.",
      "Visualized 35,000+ datapoints in 14 clusters using dendrograms. Enhanced persona accuracy by 25% through quantifying feature-specific percentage distribution, enabling targeted policymaking for opioid crisis management."
    ]
  },
  {
    type: "education",
    title: "Master of Science in Computer Science",
    company: "Stony Brook University",
    location: "New York, USA",
    period: "Aug 2023 - May 2025",
    achievements: [
      "GPA: 3.4/4.0",
      "Coursework: Machine Learning, Data Science, Database Systems, Visualization, Human-Computer Interaction, Principles of Programming Languages, Computing with Logic.",
      "Teaching Assistant: Programming Abstractions."
    ]
  },
  {
    type: "work",
    title: "Software Engineer",
    company: "Deloitte",
    location: "Mumbai, IN",
    period: "Sep 2022 – Aug 2023",
    achievements: [
      "Led the development of resource estimation tool for data migration tasks, automating generation of Request for Proposal, serving 100+ users & senior management.",
      "Boosted prediction accuracy for underrepresented objects by 45% through KNN-based data imputation and correlation analysis between data objects across multiple business modules.",
      "Optimized an XGBoost model via hyperparameter tuning with GridSearchCV, achieving R2 = 0.88 and RMSE = 2.7.",
      "Built and deployed the prototype using React.js, Flask, PostgreSQL, and Docker, providing a scalable API endpoint.",
      "Validated the tool prototype, demonstrating a potential 60% reduction in Request for Proposal preparation time and a 55% improvement in prediction accuracy compared to the Excel-based model, increasing client acquisition rates.",
      "Collaborated with a cross-functional team to build data migration pipelines for over 10 million records from SAP ECC to S/4HANA system using SAP DMC, Business Application Studio and BODS for the largest retail client of the company"
    ]
  },
  {
    type: "work",
    title: "Product Intern",
    company: "FrontRow",
    location: "Bangalore, IN",
    period: "Aug 2021 – Dec 2021",
    achievements: [
      "Designed SQL-based dashboards in Metabase and built event-driven tracking schemas in Mixpanel and CleverTap to analyze user behavior. Conducted funnel analysis, cohort retention studies, and segmentation to identify high-impact growth levers to boost user retention by 40%",
      "Built wireframes, led A/B testing and survival analysis to refine core user journeys that improved feature visibility by 45%. Defined event taxonomies and tracking plans for feature instrumentation",
      "Developed a freemium-to-paid model using LTV analysis, churn prediction, and pricing experiments, increasing paid user conversions by 15%. Launched online rap tournaments and live sessions, leveraging real-time analytics dashboards to scale engagement and increase MAUs"
    ]
  },
  {
    type: "work",
    title: "Treasury Analytics Intern",
    company: "Ernst & Young",
    location: "Mumbai, IN",
    period: "Jan 2021 – Apr 2021",
    achievements: [
      "Enhanced financial reporting by automating MS SQL Server workflows with Alteryx, optimizing data transformations, and improving Power BI dashboards, reducing manual processing time.",
      "Developed Python-based ETL pipelines using SQLAlchemy & pyodbc demonstrating a 20% reduction in data processing time on a test dataset, showcasing potential for scalability and cost reduction.",
    ]
  },
  {
    type: "work",
    title: "Software Development Intern",
    company: "Paramatrix Technologies",
    location: "Navi Mumbai, IN",
    period: "Dec 2019 – Jan 2020",
    achievements: [
      "Built an OCR web application for invoice management using Tesseract and OpenCV library with a React.js and Django to parse unstructured company invoices into a PostgreSQL database with an 80% reduction in data processing time."
    ]
  },
  {
    type: "education",
    title: "Bachelor of Engineering in Information Technology",
    company: "University of Mumbai",
    location: "Mumbai, India",
    period: "Aug 2018 - May 2022",
    achievements: [
      "GPA: 8.4/10",
      "Coursework: Data Structures & Algorithms, Object Oriented Programming, Operating Systems, NLP, AI, Cloud Computing"
    ]
  }
];

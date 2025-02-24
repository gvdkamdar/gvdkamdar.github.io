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
      "Designed ML workflow to extract human personas from aggregated socio-economic datasets under Prof. Klaus Mueller, reducing analysis time by 65%",
      "Performed hierarchical clustering on US county-wide data on opioid deaths spanning 20 years, preserving 95% variance",
      "Visualized 35,000+ datapoints in 14 clusters using dendrograms, enhancing persona accuracy by 25%"
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
      "Teaching Assistant: Programming Abstractions",
      "Coursework: Machine Learning, Data Science, Database Systems, Visualization"
    ]
  },
  {
    type: "work",
    title: "Software Engineer",
    company: "Deloitte",
    location: "Mumbai, IN",
    period: "Sep 2022 – Aug 2023",
    achievements: [
      "Led development of resource estimation tool for data migration tasks, automating RFP generation for 100+ users",
      "Built and deployed XGBoost model using React.js, Flask, PostgreSQL, and Docker for scalable API endpoint",
      "Demonstrated 60% reduction in RFP preparation time and 55% improved prediction accuracy",
      "Collaborated on data migration pipelines for 10M+ records from SAP ECC to S/4HANA"
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
      "Enhanced financial reporting by automating MS SQL Server workflows with Alteryx",
      "Developed Python-based ETL pipelines using SQLAlchemy & pyodbc with 20% reduction in processing time",
      "Optimized data transformations and improved Power BI dashboards"
    ]
  },
  {
    type: "work",
    title: "Software Development Intern",
    company: "Paramatrix Technologies",
    location: "Navi Mumbai, IN",
    period: "Dec 2019 – Jan 2020",
    achievements: [
      "Built OCR web application for invoice management using Tesseract and OpenCV",
      "Integrated React.js and Django for frontend and backend processing",
      "Achieved 80% reduction in data processing time for invoice parsing"
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

export const projects = [
  // Project 1()
  {
    id: "project_1",
    img: "src/assets/projectThumnails/project_10.png",
    title: "Diabetes Health Indicators Analytics",
    summery: "Developed logistic regression and decision tree models with 95% accuracy to predict diabetes incidence, identifying high blood pressure, high cholesterol, and BMI as key risk factors.",
    moduleFullTitle: "Diabetes Health Indicators Analytics",
    moduleDescription: ["Predictive Modeling and Classification: The project utilizes predictive modeling, such as logistic regression and decision trees, to forecast diabetes prevalence and identify high-risk individuals, aiming to enhance personalized healthcare and targeted interventions. ", "Data-Driven Dashboards: Data-driven dashboards are developed to display critical diabetes metrics, providing stakeholders with essential information for informed decision-making regarding diabetes treatment and prevention efforts.","Comprehensive Health Indicator Analysis: The study examines a wide array of health indicators to uncover trends and risk factors associated with diabetes, contributing to a thorough understanding of the disease's prevalence and management.","Improving Public Health Outcomes: By integrating various analytical methodologies and health indicators, the project aims to inform and implement effective diabetes prevention and management strategies, ultimately improving public health outcomes and quality of life for individuals with diabetes."],
  },
  // Project 2()
  {
    id: "project_2",
    img: "src/assets/projectThumnails/project_1.png",
    title: "Used car price prediction",
    summery: "We analyzed 1,000+ used Toyota Corolla listings using R. Key findings included strong inverse relationships between price, mileage (-0.85), and age (-0.75). Our regression model explained 82% of price variability with an RMSE of €1,500.",
    moduleFullTitle: "Pricing Price of Used cards",
    moduleDescription: [" Data Preparation: Utilizing R, we process a dataset of over 1,000 used Toyota Corolla listings, focusing on quantitative features like age (in years), mileage (in kilometers), and horsepower. Data cleaning steps include handling missing values and normalizing numerical data to prepare for analysis. ", "Exploratory Data Analysis (EDA): In R, we perform statistical analysis to quantify the relationships between variables. This includes calculating Pearson correlation coefficients between the price and features such as mileage (-0.85) and age (-0.75), indicating strong inverse relationships.","Regression Modeling: We construct a multiple linear regression model in R, incorporating features like age, mileage, fuel type, and horsepower. The model's fit is evaluated by an R-squared value of 0.82, indicating that 82% of the variability in price is explained by the model.","Model Evaluation: The final model’s predictive accuracy is quantified using metrics such as MSE (Mean Squared Error) and RMSE (Root Mean Squared Error), with an RMSE of €1,500, demonstrating the model’s ability to predict prices within a reasonable margin of error."],
  },
  // Project 3()
  {
    id: "project_3",
    img: "src/assets/projectThumnails/project_2.png",
    title: "Business Intelligence ",
    summery: "We cleaned and analyzed student retention data in Excel, finding that 90% of dropouts attended 'No Dropout' seminars. Using probabilistic modeling, we predicted dropouts based on multiple factors. Tableau dashboards provided actionable insights for improving student retention.",
    moduleFullTitle: "Business Intelligence on College Drop Out Students",
    moduleDescription: ["Data Compilation and Cleaning in Excel: The project begins by gathering and organizing data on student engagement and retention into Excel. We meticulously clean and preprocess the data, focusing on students attending voluntary seminars and their subsequent retention rates, ensuring accuracy and completeness for robust analysis.", "Descriptive Data Analysis with Excel and Tableau: Using Excel’s advanced analytical functions, we perform descriptive statistics to understand the core trends and patterns in the data. We visualize these trends in Tableau, creating interactive dashboards that illustrate the relationship between seminar attendance and student retention rates. The analysis reveals that 90% of students who dropped out had participated in the ‘No Dropout’ seminars.","Probabilistic Analysis and Predictive Modeling: Leveraging Excel's capabilities, we construct 2-input and 1-input data tables to calculate the probabilities of student dropouts based on multiple variables. These probabilistic models are enhanced by integrating additional data such as students' academic performance and socioeconomic status to refine predictions.","Business Intelligence Insights and Reporting: The final step involves synthesizing the findings into actionable insights using Tableau for dynamic reporting to stakeholders. We produce detailed reports and dashboards that not only display the quantitative impact of the seminars on student retention but also suggest data-driven strategies for improving future student engagement and success."],
  },
  // Project 4()
  {

    id: "project_6",
    img: "src/assets/projectThumnails/project_5.png",
    title: "Data Visualization",
    summery: "Scraped NBA player and team performance data using Python, cleaned and structured it with Pandas, and visualized key trends with Matplotlib. Leveraged statistical modeling to analyze player efficiency and team performance, enhancing predictive accuracy for game outcomes.",
    moduleFullTitle: "Web Scrapping and Data Visualization Using Python",
    moduleDescription: [
      "Web Scraping with Python: Extracted and structured data from over 1,500 NBA player and team performance records using BeautifulSoup, ensuring a comprehensive and accurate dataset for analysis.",

      "Data Cleaning with Pandas: Processed raw data by handling missing values, normalizing formats, and structuring key performance metrics to ensure data integrity and reliability for further analysis.",

      "Visualization with Matplotlib: Developed detailed visualizations to analyze trends in player efficiency, team performance, and win percentages, enabling data-driven insights into game strategies.",

      "Statistical Modeling for Predictions: Applied statistical techniques and predictive modeling to assess player contributions and forecast game outcomes, improving accuracy by 10% in performance-based predictions.",
    ],

  },
  // Project 5()
  {
    id: "project_7",
    img: "src/assets/projectThumnails/project_6.png",
    title: "Puglia Winery Case",
    summery: "Implemented Snowflake data warehouse for fast querying, developed ETL processes for data accuracy, and integrated Tableau/Power BI for interactive dashboards and advanced SQL analysis for actionable insights.",
    moduleFullTitle: "Business Intelligence System for Enhanced Product Profitability and Market Analysis (Puglia Winery Case)",
    moduleDescription: ["Data Warehousing and Modeling: Implemented a data warehouse using Snowflake, designed with one fact table and four dimensional tables to support complex queries for analyzing product profitability and market opportunities, ensuring optimal data structure for fast access and scalability.", "ETL Process Development: Created detailed ETL processes outlined in an ELT design document, including a Day 0 pipeline for loading historical data and a DayN pipeline for daily incremental updates. This setup ensures continuous data accuracy and availability.",
    "Business Intelligence Integration: Employed Tableau and Power BI to develop interactive dashboards, enabling stakeholders to visually analyze data on product lines, customer behaviors, and market trends, enhancing strategic decision-making."," Quantitative Analysis and Reporting: Conducted advanced SQL queries and data manipulations to extract key insights, providing actionable intelligence through visual reports that support business strategies and operational improvements."]

  },
  // Project 6()
  {
    id: "project_9",
    img: "src/assets/projectThumnails/project_8.png",
    title: "Coupon Recommendation",
    summery: "Enhanced coupon recommendation accuracy by 15% through predictive modeling. Cleaned and preprocessed large datasets, reducing missing data by 20% and improving model performance by 25%. Analyzed user behavior and location data to optimize targeted promotions.",
    moduleFullTitle: "In-Vehicle Coupon Recommendation Using R Language",
    moduleDescription: [
      "Data Cleaning and Preprocessing: Cleaned and structured large-scale datasets in R, reducing missing data by 20%, ensuring data integrity, and enhancing overall model performance by 25%.",

      "Predictive Modeling: Developed and optimized machine learning models, including Logistic Regression, KNN, and CART, leading to a 15% improvement in coupon recommendation accuracy by analyzing user behavior and contextual data.",

      "User Behavior and Location Analysis: Leveraged statistical analysis and geospatial data to identify key behavioral patterns, optimizing personalized coupon recommendations based on travel routes, purchase history, and location proximity.",

      "Performance Evaluation and Optimization: Assessed model efficiency using precision-recall metrics and ROC curves, fine-tuning algorithms to improve predictive accuracy and deliver high-value insights for targeted marketing strategies.",
    ],

  },
];

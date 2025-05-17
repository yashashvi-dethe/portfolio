const projectData = {
  project1: {
    title: "GCP BigQuery Analytics Dashboard",
    description: `
      Designed and deployed a real-time analytics dashboard leveraging Google BigQuery and Google Data Studio. 
      Processed datasets exceeding 10 million rows, creating automated insights for marketing and sales departments.
    `
  },
  project2: {
    title: "AWS Serverless Data Pipeline",
    description: `
      Developed a fully automated ETL pipeline utilizing AWS Lambda, S3, Glue, and Athena. 
      Streamlined the ingestion and transformation of transactional data, reducing processing time by 60%.
    `
  },
  project3: {
    title: "GCP Vertex AI Forecasting Model",
    description: `
      Trained a time-series forecasting model on Vertex AI using TensorFlow, predicting demand patterns. 
      Deployed the model via Cloud Functions and integrated it into dashboards.
    `
  }
};

function showDetails(id) {
  const details = projectData[id];
  if (details) {
    document.getElementById("project-content").innerHTML = `
      <h3>${details.title}</h3>
      <p>${details.description}</p>
    `;
    document.getElementById("project-details").style.display = "block";
  }
}

function closeDetails() {
  document.getElementById("project-details").style.display = "none";
}

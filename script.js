// Smooth scroll for section links (future-proofing for nav)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Enable horizontal scroll with mouse wheel
document.querySelectorAll('.scroll-container').forEach(container => {
  container.addEventListener('wheel', function (e) {
    if (e.deltaY !== 0) {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    }
  });
});

// Project data for pop-up display
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
  },
  project4: {
    title: "AWS SageMaker ML Deployment",
    description: `
      Built a classification model using AWS SageMaker, automating hyperparameter tuning and model evaluation. 
      Deployed using API Gateway and Lambda for real-time inference.
    `
  },
  project5: {
    title: "GCP Dataflow Streaming Pipeline",
    description: `
      Constructed a real-time streaming pipeline using Apache Beam on Google Dataflow. 
      Ingested data from Pub/Sub, transformed and stored outputs in BigQuery and Cloud Storage.
    `
  }
};

// Show project details in a modal/popup
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

// Close the modal/popup
function closeDetails() {
  document.getElementById("project-details").style.display = "none";
}

const projectData = {
  project1: {
    title: "GCP BigQuery Analytics Dashboard",
    description: `
      Designed and deployed a real-time analytics dashboard using Google BigQuery and Google Data Studio.
      Processed 10M+ rows to generate marketing and sales insights.
    `
  },
  project2: {
    title: "AWS Serverless Data Pipeline",
    description: `
      Built an automated ETL pipeline with Lambda, Glue, S3, and Athena. Reduced processing time by 60%.
    `
  },
  project3: {
    title: "Vertex AI Forecasting Model",
    description: `
      Created a time-series model in Vertex AI using TensorFlow and deployed via Cloud Functions for real-time prediction.
    `
  },
  project4: {
    title: "SageMaker ML Deployment",
    description: `
      Deployed classification model on SageMaker with automated training, CI/CD pipelines and Lambda integration.
    `
  },
  project5: {
    title: "GCP Dataflow Streaming Pipeline",
    description: `
      Implemented a streaming pipeline with Apache Beam on Dataflow. Integrated Pub/Sub, BigQuery and real-time alerting.
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
    document.getElementById("project-details").style.display = "flex";
  }
}

function closeDetails() {
  document.getElementById("project-details").style.display = "none";
}

// Allow horizontal scrolling with mouse wheel
document.querySelectorAll('.scroll-container').forEach(container => {
  container.addEventListener('wheel', function (e) {
    if (e.deltaY !== 0) {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    }
  });
});

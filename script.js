const projectData = {
  project1: {
    title: "GCP BigQuery Analytics Dashboard",
    description: `
      Designed and deployed a real-time analytics dashboard using Google BigQuery and Google Data Studio.
      Processed over 10 million records daily, enabling actionable insights for the marketing and sales teams.
      Technologies: BigQuery, Data Studio, Cloud Storage.
    `
  },
  project2: {
    title: "AWS Serverless Data Pipeline",
    description: `
      Architected and implemented an automated serverless ETL pipeline.
      Components included AWS Lambda (triggered on file upload), Glue for transformation, and Athena for querying results.
      Outcome: Reduced data latency by 60%, improved data quality with schema validation.
      Technologies: Lambda, S3, Glue, Athena, CloudWatch.
    `
  },
  project3: {
    title: "Vertex AI Forecasting Model",
    description: `
      Built and deployed a demand forecasting model using TensorFlow and Vertex AI.
      Integrated Cloud Functions for scheduled retraining and real-time prediction.
      Achieved 93% accuracy on test set using LSTM architecture.
      Technologies: Vertex AI, TensorFlow, Cloud Functions, GCS.
    `
  },
  project4: {
    title: "SageMaker ML Deployment",
    description: `
      Deployed a text classification model on SageMaker using real-time endpoints.
      Integrated CI/CD using AWS CodePipeline, enabled retraining and automated model versioning.
      Technologies: SageMaker, CodePipeline, Lambda, CloudFormation.
    `
  },
  project5: {
    title: "GCP Dataflow Streaming Pipeline",
    description: `
      Developed a streaming analytics pipeline using Apache Beam and Google Cloud Dataflow.
      Data ingested via Pub/Sub, processed in real-time, and stored in BigQuery.
      Alerts and monitoring set up via Stackdriver for anomaly detection.
      Technologies: Dataflow, Apache Beam, Pub/Sub, BigQuery, Stackdriver.
    `
  }
};

function showDetails(id) {
  const details = projectData[id];
  if (details) {
    document.getElementById("project-content").innerHTML = `
      <h3>${details.title}</h3>
      <p>${details.description.replace(/\\n/g, '<br/>')}</p>
    `;
    document.getElementById("project-details").style.display = "flex";
  }
}

function closeDetails() {
  document.getElementById("project-details").style.display = "none";
}

// Enable horizontal scroll on mouse wheel
document.querySelectorAll('.scroll-container').forEach(container => {
  container.addEventListener('wheel', function (e) {
    if (e.deltaY !== 0) {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    }
  });
});

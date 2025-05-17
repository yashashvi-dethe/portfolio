const projectData = {
  project1: {
    title: "GCP BigQuery Analytics Dashboard",
    description: `
      Designed and deployed a real-time analytics dashboard using Google BigQuery and Google Data Studio.<br/>
      Processed over 10 million records daily, enabling actionable insights for the marketing and sales teams.<br/>
      <strong>Technologies:</strong> BigQuery, Data Studio, Cloud Storage.
    `
  },
  project2: {
    title: "AWS Serverless Data Pipeline",
    description: `
      Architected and implemented an automated serverless ETL pipeline.<br/>
      Reduced data latency by 60%, improved data quality with schema validation.<br/>
      <strong>Technologies:</strong> Lambda, S3, Glue, Athena, CloudWatch.
    `
  },
  project3: {
    title: "Vertex AI Forecasting Model",
    description: `
      Built and deployed a demand forecasting model using TensorFlow and Vertex AI.<br/>
      Achieved 93% accuracy on test set using LSTM architecture.<br/>
      <strong>Technologies:</strong> Vertex AI, TensorFlow, Cloud Functions.
    `
  },
  project4: {
    title: "SageMaker ML Deployment",
    description: `
      Deployed a text classification model on SageMaker using real-time endpoints.<br/>
      Integrated CI/CD using AWS CodePipeline, enabled retraining and model versioning.<br/>
      <strong>Technologies:</strong> SageMaker, CodePipeline, Lambda.
    `
  },
  project5: {
    title: "GCP Dataflow Streaming Pipeline",
    description: `
      Developed a real-time streaming analytics pipeline using Apache Beam on GCP Dataflow.<br/>
      Alerts and monitoring were configured for anomaly detection.<br/>
      <strong>Technologies:</strong> Dataflow, Pub/Sub, BigQuery, Stackdriver.
    `
  }
};

function showDetails(id) {
  const details = projectData[id];
  if (details) {
    const popup = document.getElementById("project-details");
    const content = document.getElementById("project-content");

    content.innerHTML = `
      <h3>${details.title}</h3>
      <p>${details.description}</p>
    `;

    popup.classList.add("active");
    popup.style.display = "flex";

    setTimeout(() => popup.classList.add("visible"), 10); // animation
  }
}

function closeDetails() {
  const popup = document.getElementById("project-details");
  popup.classList.remove("visible");
  setTimeout(() => {
    popup.style.display = "none";
    popup.classList.remove("active");
  }, 200); // match transition duration
}

// Close popup with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeDetails();
  }
});

// Close popup on outside click
document.getElementById("project-details").addEventListener("click", (e) => {
  if (e.target.id === "project-details") {
    closeDetails();
  }
});

// Horizontal scroll support
document.querySelectorAll('.scroll-container').forEach(container => {
  container.addEventListener('wheel', function (e) {
    if (e.deltaY !== 0) {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    }
  });
});

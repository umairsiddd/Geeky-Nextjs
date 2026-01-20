---
industry_experience:
  - ''
---
# &#x20;Publications

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Publications</title>

<style>
/* =====================
   COLOR SYSTEM
===================== */
:root {
  --accent: #2bbec3; /* teal / greenish sky blue */
  --accent-soft: rgba(43, 190, 195, 0.15);
  --text-light: #111;
  --text-dark: #eaeaea;
  --bg-light: #ffffff;
  --bg-dark: #0f1115;
  --card-light: #f9f9f9;
  --card-dark: #161a22;
  --border-light: #dddddd;
  --border-dark: #2a2f3a;
}

/* Auto Dark / Light */
@media (prefers-color-scheme: dark) {
  body {
    background: var(--bg-dark);
    color: var(--text-dark);
  }
  .pub-card {
    background: var(--card-dark);
    border-color: var(--border-dark);
  }
}

@media (prefers-color-scheme: light) {
  body {
    background: var(--bg-light);
    color: var(--text-light);
  }
  .pub-card {
    background: var(--card-light);
    border-color: var(--border-light);
  }
}

/* =====================
   BASE STYLES
===================== */
body {
  font-family: Inter, Arial, sans-serif;
  margin: 0;
  padding: 24px;
  line-height: 1.55;
}

.publications {
  max-width: 900px;
  margin: auto;
}

.year {
  font-size: 22px;
  font-weight: 700;
  margin: 36px 0 12px;
  border-bottom: 2px solid var(--accent);
  display: inline-block;
  padding-bottom: 4px;
}

.pub-card {
  border: 1px solid;
  border-radius: 10px;
  padding: 16px 18px;
  margin-bottom: 14px;
}

.pub-title {
  font-weight: 600;
  font-size: 15.5px;
}

.pub-authors {
  font-size: 14px;
  opacity: 0.9;
  margin: 4px 0;
}

.pub-venue {
  font-size: 14px;
  margin-top: 2px;
}

/* =====================
   TAGS (Conference / Journal)
===================== */
.tag {
  display: inline-block;
  padding: 2px 8px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 999px;
  color: var(--accent);
  border: 1px solid var(--accent);
  background: var(--accent-soft);
  margin-left: 6px;
  vertical-align: middle;
}

/* =====================
   BUTTONS
===================== */
.pub-actions {
  margin-top: 10px;
}

.pub-actions a {
  display: inline-block;
  text-decoration: none;
  font-size: 13px;
  padding: 6px 12px;
  margin-right: 6px;
  border-radius: 6px;
  background: #ffffff;
  color: #000000;
  border: 1px solid var(--accent);
  transition: all 0.2s ease;
}

.pub-actions a:hover {
  background: var(--accent);
  color: #ffffff;
}

/* Dark mode button contrast fix */
@media (prefers-color-scheme: dark) {
  .pub-actions a {
    background: #ffffff;
    color: #000000;
  }
}
</style>
</head>

<body>

<div class="publications">

  <!-- =====================
       2020
  ===================== -->
  <div class="year">2020</div>

  <div class="pub-card">
    <div class="pub-title">
      Towards Anomaly Detection in Dashcam Videos.
    </div>
    <div class="pub-authors">
      S. Haresh, S. Kumar, <strong>M.Z. Zia</strong>, Q.H. Tran
    </div>
    <div class="pub-venue">
      31st IEEE Intelligent Vehicles Symposium 2020
      <span class="tag">Conference</span>
    </div>
    <div class="pub-actions">
      <a href="#">Download</a>
      <a href="#">Abstract</a>
      <a href="#">BibTeX</a>
    </div>
  </div>

  <!-- =====================
       2019
  ===================== -->
  <div class="year">2019</div>

  <div class="pub-card">
    <div class="pub-title">
      Domain-Specific Priors and Meta Learning for Low-shot First-Person Action Recognition.
    </div>
    <div class="pub-authors">
      H. Coskun, <strong>M.Z. Zia</strong>, B. Tekin, F. Bogo, N. Navab, F. Tombari, H. Sawhney
    </div>
    <div class="pub-venue">
      arXiv 2019
      <span class="tag">Technical Report</span>
    </div>
    <div class="pub-actions">
      <a href="#">Download</a>
      <a href="#">Abstract</a>
      <a href="#">BibTeX</a>
    </div>
  </div>

  <!-- =====================
       2018
  ===================== -->
  <div class="year">2018</div>

  <div class="pub-card">
    <div class="pub-title">
      Hierarchical Metric Learning and Matching for 2D and 3D Geometric Correspondences.
    </div>
    <div class="pub-authors">
      M.F. Salem, Q.H. Tran, <strong>M.Z. Zia</strong>, P. Vernaza, M. Chandraker
    </div>
    <div class="pub-venue">
      European Conference on Computer Vision (ECCV)
      <span class="tag">Conference</span>
    </div>
    <div class="pub-actions">
      <a href="#">Download</a>
      <a href="#">Abstract</a>
      <a href="#">BibTeX</a>
    </div>
  </div>

  <div class="pub-card">
    <div class="pub-title">
      Deep Supervision with Intermediate Concepts.
    </div>
    <div class="pub-authors">
      C. Li, <strong>M.Z. Zia</strong>, X. Yu, G. Hager, M. Chandraker
    </div>
    <div class="pub-venue">
      IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)
      <span class="tag">Journal</span>
    </div>
    <div class="pub-actions">
      <a href="#">Download</a>
      <a href="#">Abstract</a>
      <a href="#">BibTeX</a>
    </div>
  </div>

</div>

<script>
/* JS is optional here.
   Keeping minimal for embedded compatibility.
   You can later extend this for filters, toggles, etc. */
</script>

</body>
</html>



```

​

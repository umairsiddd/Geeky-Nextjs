---
industry_experience:
  - ''
---
# Publications

### 2020

* S. Haresh, S. Kumar, M.Z. Zia, Q.H. Tran.

**Towards Anomaly Detection in Dashcam Videos.**

_31st IEEE Intelligent Vehicles Symposium_ 2020  **Conference**

<PublicationButtons 
  downloadUrl="https://arxiv.org/pdf/2004.05261" 
  abstract="Inexpensive sensing and computation, as well as insurance innovations, have made smart dashboard cameras ubiquitous. Increasingly, simple model-driven computer vision algorithms focused on lane departures or safe following distances are finding their way into these devices. Unfortunately, the long-tailed distribution of road hazards means that these hand-crafted pipelines are inadequate for driver safety systems. We propose to apply data-driven anomaly detection ideas from deep learning to dashcam videos, which hold the promise of bridging this gap. Unfortunately, there exists almost no literature applying anomaly understanding to moving cameras, and correspondingly there is also a lack of relevant datasets. To counter this issue, we present a large and diverse dataset of truck dashcam videos, namely RetroTrucks, that includes normal and anomalous driving scenes. We apply:(i) one-class classification loss and (ii) reconstruction-based loss, for anomaly detection on RetroTrucks as well as on existing static-camera datasets. We introduce formulations for modeling object interactions in this context as priors. Our experiments indicate that our dataset is indeed more challenging than standard anomaly detection datasets, and previous anomaly detection methods do not perform well here out-of-the-box. In addition, we share insights into the behavior of these two important families of anomaly detection approaches on dashcam data." 
  bibtex={`@inproceedings{haresh20iv,
 author = {S. Haresh and S. Kumar and M.Z. Zia and Q.H. Tran},
 title = {Towards Anomaly Detection in Dashcam Videos},
 booktitle = {31st IEEE Intelligent Vehicles Symposium (IV)},
 year = {2020}
}`} 
/>

### 2019

* H. Coskun, M.Z. Zia, B. Tekin, F. Bogo, N. Navab, F. Tombari, H. Sawhney.

**Domain-Specific Priors and Meta Learning for Low-shot First-Person Action Recognition.**

_arXiv_ 2019  **Technical Report**

<PublicationButtons 
  downloadUrl="https://arxiv.org/pdf/1907.09382" 
  abstract="The lack of large-scale real datasets with annotations makes transfer learning a necessity for video activity understanding. Within this scope, we aim at developing an effective method for low-shot transfer learning for first-person action classification. We leverage independently trained local visual cues to learn representations that can be transferred from a source domain providing primitive action labels to a target domain with only a handful of examples. Such visual cues include object-object interactions, hand grasps and motion within regions that are a function of handlocations. We suggest a framework based on meta-learning to appropriately extract the distinctive and domain invariant components of the deployed visual cues, so to be able to transfer action classification models across public datasets captured with different scene configurations. We thoroughly evaluate our methodology and report promising results over state-of-the-art action classification approaches for both inter-class and inter-dataset transfer." 
  bibtex={`@inproceedings{coskun19arxiv,
 author = {H. Coskun and M.Z. Zia and B. Tekin and F. Bogo and N. Navab and F. Tombari and H. Sawhney},
 title = {Domain-Specific Priors and Meta Learning for Low-shot First-Person Action Recognition},
 booktitle = {arXiv:1907.09382},
 year = {2019}
}`} 
/>

### 2018

* M.F. Salem, Q.H. Tran, M.Z. Zia, P. Vernaza, M. Chandraker.

**Hierarchical Metric Learning and Matching for 2D and 3D Geometric Correspondences.**

_European Conference on Computer Vision (ECCV)_ 2018 **Conference**

<PublicationButtons 
  downloadUrl="https://arxiv.org/pdf/1803.07231" 
  abstract="Interest point descriptors have fueled progress on almost every problem in computer vision. Recent advances in deep neural networks have enabled task-specific learned descriptors that outperform hand-crafted descriptors on many problems. We demonstrate that commonly used metric learning approaches do not optimally leverage the feature hierarchies learned in a Convolutional Neural Network (CNN), especially when applied to the task of geometric feature matching. While a metric loss applied to the deepest layer of a CNN, is often expected to yield ideal features irrespective of the task, in fact the growing receptive field as well as striding effects cause shallower features to be better at high precision matching tasks. We leverage this insight together with explicit supervision at multiple levels of the feature hierarchy for better regularization, to learn more effective descriptors in the context of geometric matching tasks. Further, we propose to use activation maps at different layers of a CNN, as an effective and principled replacement for the multi-resolution image pyramids often used for matching tasks. We propose concrete CNN architectures employing these ideas, and evaluate them on multiple datasets for 2D and 3D geometric matching as well as optical flow, demonstrating state-of-the-art results and generalization across datasets." 
  bibtex={`@inproceedings{salem18arxiv,
 author = {M.F. Salem and Q.H. Tran and M.Z. Zia and P. Vernaza and M. Chandraker},
 title = {Hierarchical Metric Learning and Matching for 2D and 3D Geometric Correspondences},
 booktitle = {ECCV},
 year = {2018}
}`} 
/>

* C. Li, M.Z. Zia, X. Yu, G. Hager, M. Chandraker.

**Deep Supervision with Intermediate Concepts.**

_IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)_ 2018  **Journal**

<PublicationButtons 
  downloadUrl="https://arxiv.org/pdf/1801.03399" 
  abstract="Recent data-driven approaches to scene interpretation predominantly pose inference as an end-to-end black-box mapping, commonly performed by a Convolutional Neural Network (CNN). However, decades of work on perceptual organization in both human and machine vision suggests that there are often intermediate representations that are intrinsic to an inference task, and which provide essential structure to improve generalization. In this work, we explore an approach for injecting prior domain structure into neural network training by supervising hidden layers of a CNN with intermediate concepts that normally are not observed in practice. We formulate a probabilistic framework which formalizes these notions and predicts improved generalization via this deep supervision method. One advantage of this approach is that we are able to train only from synthetic CAD renderings of cluttered scenes, where concept values can be extracted, but apply the results to real images. Our implementation achieves the state-of-the-art performance of 2D/3D keypoint localization and image classification on real image benchmarks, including KITTI, PASCAL VOC, PASCAL3D+, IKEA, and CIFAR100. We provide additional evidence that our approach outperforms alternative forms of supervision, such as multi-task networks" 
  bibtex={`@inproceedings{li2018tpami,
 author = {C. Li and Q.H. Tran and M.Z. Zia and G. Hager and M. Chandraker},
 title = {Deep Supervision with Intermediate Concepts.},
 booktitle = {TPAMI},
 year = {2018}
}`} 
/>

### 2017

* C. Li, M.Z. Zia, X. Yu, G. Hager, M. Chandraker.

**Deep Supervision with Shape Concepts for Occlusion-Aware 3D Object Parsing.**

_IEEE Conference on Computer Vision and Pattern Recognition (CVPR)_ 2017  **Conference**

<PublicationButtons 
  downloadUrl="" 
  abstract="Add abstract text here..." 
  bibtex={`@inproceedings{li2017deep,
  title={Deep Supervision with Shape Concepts for Occlusion-Aware 3D Object Parsing},
  author={Li, C. and Zia, M.Z. and Yu, X. and Hager, G. and Chandraker, M.},
  booktitle={IEEE CVPR},
  year={2017}
}`} 
/>

### 2016

* F. Chayya, D. Reddy, S. Upadhyay, V. Chari, M.Z. Zia, K.M. Krishna.

**Monocular Reconstruction of Vehicles: Combining SLAM with Shape Priors.**

_International Conference on Robotics and Automation (ICRA)_ 2016  **Conference**

<PublicationButtons 
  downloadUrl="" 
  abstract="Add abstract text here..." 
  bibtex={`@inproceedings{chayya2016monocular,
  title={Monocular Reconstruction of Vehicles: Combining SLAM with Shape Priors},
  author={Chayya, F. and Reddy, D. and Upadhyay, S. and Chari, V. and Zia, M.Z. and Krishna, K.M.},
  booktitle={ICRA},
  year={2016}
}`} 
/>

* M.Z. Zia, L. Nardi, A. Jack, E. Vespa, Bruno Bodin, P.H.J. Kelly, A.J. Davison.

**Comparative Design Space Exploration of Dense and Semi-Dense SLAM.**

_International Conference on Robotics and Automation (ICRA)_ 2016  **Conference**

<PublicationButtons 
  downloadUrl="" 
  abstract="Add abstract text here..." 
  bibtex={`@inproceedings{zia2016comparative,
  title={Comparative Design Space Exploration of Dense and Semi-Dense SLAM},
  author={Zia, M.Z. and Nardi, L. and Jack, A. and Vespa, E. and Bodin, Bruno and Kelly, P.H.J. and Davison, A.J.},
  booktitle={ICRA},
  year={2016}
}`} 
/>

* B. Bodin, L. Nardi, M.Z. Zia, H. Wagstaff, G.S. Shenoy, M. Emani, J. Mawer, C. Kotselidis, A. Nisbet, M. Lujan, B. Franke, P.H.J. Kelly, M. O'Boyle.

**Integrating Algorithmic Parameters into Benchmarking and Design Space Exploration in 3D Scene Understanding.**

_International Conference on Parallel Architectures and Compilation Techniques (PACT)_ 2016  **Conference**

<PublicationButtons 
  downloadUrl="" 
  abstract="Add abstract text here..." 
  bibtex={`@inproceedings{bodin2016integrating,
  title={Integrating Algorithmic Parameters into Benchmarking and Design Space Exploration in 3D Scene Understanding},
  author={Bodin, B. and Nardi, L. and Zia, M.Z. and others},
  booktitle={PACT},
  year={2016}
}`} 
/>

### 2015

* L. Nardi, B. Bodin, M.Z. Zia, J. Mawer, A. Nisbet, P.H.J. Kelly, A.J. Davison, M. Lujan, M.F.P. O'Boyle, G. Riley, N. Topham, S. Furber.

**SLAMBench: A performance and accuracy benchmarking methodology for SLAM.**

_International Conference on Robotics and Automation (ICRA)_ 2015  **Conference**

<PublicationButtons 
  downloadUrl="https://arxiv.org/pdf/2004.05261" 
  abstract="Add abstract text here..." 
  bibtex={`@inproceedings{nardi2015slambench,
  title={SLAMBench: A performance and accuracy benchmarking methodology for SLAM},
  author={Nardi, L. and Bodin, B. and Zia, M.Z. and others},
  booktitle={ICRA},
  year={2015}
}`} 
/>

* M.Z. Zia, M. Stark, K. Schindler.

**Towards Scene Understanding with Detailed 3D Object Representations.**

_International Journal of Computer Vision (IJCV)_ 2015  **Journal**

<PublicationButtons 
  downloadUrl="" 
  abstract="Add abstract text here..." 
  bibtex={`@article{zia2015towards,
  title={Towards Scene Understanding with Detailed 3D Object Representations},
  author={Zia, M.Z. and Stark, M. and Schindler, K.},
  journal={IJCV},
  year={2015}
}`} 
/>

### 2014

* M.Z. Zia, M. Stark, K. Schindler.

**Are Cars Just 3D Boxes? - Jointly Estimating the 3D Shape of Multiple Objects.**

_IEEE Conference on Computer Vision and Pattern Recognition (CVPR)_ 2014  **Conference**

<PublicationButtons 
  downloadUrl="" 
  abstract="Add abstract text here..." 
  bibtex={`@inproceedings{zia2014cars,
  title={Are Cars Just 3D Boxes? - Jointly Estimating the 3D Shape of Multiple Objects},
  author={Zia, M.Z. and Stark, M. and Schindler, K.},
  booktitle={IEEE CVPR},
  year={2014}
}`} 
/>

* M.Z. Zia.

**High-Resolution 3D Layout from a Single View.**

_PhD Thesis, Swiss Federal Institute of Technology (ETH), Zurich._ 2014

_Committee: Konrad Schindler, Tinne Tuytelaars, Markus Rothacher._

<PublicationButtons 
  downloadUrl="" 
  abstract="Add abstract text here..." 
  bibtex={`@phdthesis{zia2014phd,
  title={High-Resolution 3D Layout from a Single View},
  author={Zia, M.Z.},
  school={ETH Zurich},
  year={2014}
}`} 
/>

### 2013

* M.Z. Zia, M. Stark, K. Schindler.

**Explicit Occlusion Modeling for 3D Object Class Representation.**

_IEEE Conference on Computer Vision and Pattern Recognition (CVPR)_ 2013  **Conference**

<PublicationButtons 
  downloadUrl="" 
  abstract="Add abstract text here..." 
  bibtex={`@inproceedings{zia2013explicit,
  title={Explicit Occlusion Modeling for 3D Object Class Representation},
  author={Zia, M.Z. and Stark, M. and Schindler, K.},
  booktitle={IEEE CVPR},
  year={2013}
}`} 
/>

* M.Z. Zia, M. Stark, B. Schiele, K. Schindler.

**Detailed 3D Representations for Object Modeling and Recognition.**

_IEEE Transaction on Pattern Analysis and Machine Intelligence (TPAMI)_ 2013  **Journal**

<PublicationButtons 
  downloadUrl="" 
  abstract="Add abstract text here..." 
  bibtex={`@article{zia2013detailed,
  title={Detailed 3D Representations for Object Modeling and Recognition},
  author={Zia, M.Z. and Stark, M. and Schiele, B. and Schindler, K.},
  journal={IEEE TPAMI},
  year={2013}
}`} 
/>

### 2011

* M.Z. Zia, M. Stark, B. Schiele, K. Schindler.

**Revisiting 3D geometric models for accurate object shape and pose.**

_IEEE Workshop on 3D Representation and Recognition (3dRR/ICCV WS)_ 2011  **Conference**

_Best Paper Award from Microsoft Research._

<PublicationButtons 
  downloadUrl="" 
  abstract="Add abstract text here..." 
  bibtex={`@inproceedings{zia2011revisiting,
  title={Revisiting 3D geometric models for accurate object shape and pose},
  author={Zia, M.Z. and Stark, M. and Schiele, B. and Schindler, K.},
  booktitle={3dRR/ICCV WS},
  year={2011},
  note={Best Paper Award from Microsoft Research}
}`} 
/>

### 2009

* U. Klank, M.Z. Zia, M. Beetz.

**3D Model Selection from an Internet Database for Robotic Vision.**

_International Conference on Robotics and Automation (ICRA)_ 2009  **Conference**

<PublicationButtons 
  downloadUrl="" 
  abstract="Add abstract text here..." 
  bibtex={`@inproceedings{klank20093d,
  title={3D Model Selection from an Internet Database for Robotic Vision},
  author={Klank, U. and Zia, M.Z. and Beetz, M.},
  booktitle={ICRA},
  year={2009}
}`} 
/>

* M.Z. Zia, U. Klank, M. Beetz.

**Acquisition of Dense 3D Model Database for Robotic Vision.**

_International Conference on Advanced Robotics (ICAR)_ 2009  **Conference**

<PublicationButtons 
  downloadUrl="" 
  abstract="Add abstract text here..." 
  bibtex={`@inproceedings{zia2009acquisition,
  title={Acquisition of Dense 3D Model Database for Robotic Vision},
  author={Zia, M.Z. and Klank, U. and Beetz, M.},
  booktitle={ICAR},
  year={2009}
}`} 
/>

* M.Z. Zia.

**Inside-Out Activity Analysis using 3D Hand, Object, and Scene Tracking.**

_MS Thesis, Munich University of Technology (TUM)._ 2009

_Advisor: Michael Beetz._

<PublicationButtons 
  downloadUrl="" 
  abstract="Add abstract text here..." 
  bibtex={`@mastersthesis{zia2009ms,
  title={Inside-Out Activity Analysis using 3D Hand, Object, and Scene Tracking},
  author={Zia, M.Z.},
  school={TUM},
  year={2009}
}`} 
/>

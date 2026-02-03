---
industry_experience:
  - ''
---
# Publications

### 2026

* Fawad J. Fateh, Umer Ahmed, Hamza Khan, M. Zeeshan Zia, Quoc-Huy Tran

**Video LLMs for Temporal Reasoning in Long Videos.**

_arXiv Preprint_ 2026 <span class="pub-badge technical-report">Technical Report</span>

<PublicationButtons 
  downloads={[
    {label: "Paper (PDF)", url: "https://arxiv.org/abs/2412.02930"}
  ]}
  abstract="We introduce TemporalVLM, a video large language model designed for temporal reasoning and fine-grained understanding in long videos. The model incorporates a time-aware clip encoder that divides long videos into short-term clips and jointly encodes frames with timestamps to capture time-sensitive local features. These features are then aggregated using a bidirectional long short-term memory (BiLSTM) module to model long-range temporal dependencies and global context. To facilitate evaluation, we present IndustryASM, a large-scale dataset of industry assembly processes with action labels and timestamps annotated by industrial engineers. Extensive experiments demonstrate that TemporalVLM outperforms prior video LLMs across multiple temporal reasoning tasks, including dense video captioning, temporal video grounding, video highlight detection, and temporal action segmentation. To the best of our knowledge, this work is the first to integrate LSTMs into video large language models." 
  bibtex={`@inproceedings{fateh26temporalvlm,
 author = {Fawad J. Fateh and Umer Ahmed and Hamza Khan and M. Zeeshan Zia and Quoc-Huy Tran},
 title = {Video LLMs for Temporal Reasoning in Long Videos},
 booktitle = {arXiv Preprint},
 year = {2026}
}`}
  video="https://youtu.be/lEUluMdNHcc"
/>

### 2025

* Syed Ahmed Mahmood, Ali Shah Ali, Umer Ahmed, Fawad Javed Fateh, M. Zeeshan Zia, Quoc-Huy Tran

**Procedure Learning via Regularized Gromov-Wasserstein Optimal Transport.**

_arXiv Preprint_ 2025 <span class="pub-badge technical-report">Technical Report</span>

<PublicationButtons 
  downloads={[
    {label: "Paper (PDF)", url: "https://arxiv.org/abs/2507.15540"}
  ]}
  abstract="This paper studies self-supervised procedure learning, which aims to discover key steps and their ordering from a collection of unlabeled instructional videos. Prior approaches typically rely on frame-to-frame video alignment, but their performance degrades in the presence of order variations, background or redundant frames, and repeated actions. To address these challenges, the proposed method introduces a self-supervised framework based on a fused Gromov-Wasserstein optimal transport formulation with a structural prior for temporal alignment. However, optimizing temporal alignment alone can lead to degenerate solutions where frame embeddings collapse into a single cluster. To prevent this, the framework integrates a contrastive regularization that encourages embedding diversity across frames. Extensive experiments on egocentric and third-person benchmarks demonstrate that the proposed regularized Gromov-Wasserstein optimal transport approach outperforms prior methods, including OPEL, while using a unified loss formulation that avoids balancing multiple competing objectives." 
  bibtex={`@inproceedings{mahmood25procedure,
 author = {Syed Ahmed Mahmood and Ali Shah Ali and Umer Ahmed and Fawad Javed Fateh and M. Zeeshan Zia and Quoc-Huy Tran},
 title = {Procedure Learning via Regularized Gromov-Wasserstein Optimal Transport},
 booktitle = {arXiv Preprint},
 year = {2025}
}`}
  video="https://youtu.be/UuTeflDyF-g"
/>

* Ali Shah Ali, Syed Ahmed Mahmood, Mubin Saeed, Andrey Konin, M. Zeeshan Zia, Quoc-Huy Tran

**Joint Self-Supervised Video Alignment and Action Segmentation.**

_arXiv Preprint_ 2025 <span class="pub-badge technical-report">Technical Report</span>

<PublicationButtons 
  downloads={[
    {label: "Paper (PDF)", url: "https://arxiv.org/abs/2503.16832"},
    {label: "Code (VAOT)", url: "https://github.com/trquhuytin/VAOT-ICCV25"},
    {label: "Code (VASOT)", url: "https://github.com/trquhuytin/VASOT-ICCV25"}
  ]}
  abstract="This paper introduces a unified self-supervised framework for jointly performing video alignment and action segmentation using optimal transport. The proposed approach formulates self-supervised video alignment through a fused Gromov–Wasserstein optimal transport model with structural priors, enabling efficient GPU-based training and rapid convergence. Building upon this, the method is extended into a unified optimal transport formulation that simultaneously addresses frame-to-frame video alignment and frame-to-action segmentation within a single model. The joint approach reduces both training time and memory requirements compared to training separate models for each task. Extensive experiments across multiple video alignment and action segmentation benchmarks demonstrate state-of-the-art performance in video alignment and superior results in action segmentation. To the best of our knowledge, this is the first work to unify self-supervised video alignment and action segmentation within a single learning framework." 
  bibtex={`@inproceedings{ali25joint,
 author = {Ali Shah Ali and Syed Ahmed Mahmood and Mubin Saeed and Andrey Konin and M. Zeeshan Zia and Quoc-Huy Tran},
 title = {Joint Self-Supervised Video Alignment and Action Segmentation},
 booktitle = {arXiv Preprint},
 year = {2025}
}`}
  video="https://youtu.be/dGT6UvGZQwI?si=VsvslcYMFLvmycFM"
/>

* Quoc-Huy Tran, Muhammad Ahmed, Murad Popattia, M. Hassan Ahmed, Andrey Konin, M. Zeeshan Zia

**Learning by Aligning 2D Skeleton Sequences and Multi-Modality Fusion.**

_arXiv Preprint_ 2025 <span class="pub-badge technical-report">Technical Report</span>

<PublicationButtons 
  downloads={[
    {label: "Paper (PDF)", url: "https://arxiv.org/pdf/2305.19480.pdf"},
    {label: "GitHub Code", url: "https://github.com/trquhuytin/LA2DS-ECCV24"}
  ]}
  abstract="This paper presents a self-supervised temporal video alignment framework for fine-grained human activity understanding that relies on 2D skeleton heatmaps instead of 3D skeleton coordinates. Unlike prior methods such as CASA, which operate on 3D skeletons and perform self-attention only in the temporal domain, the proposed approach converts 2D skeletons into heatmaps and employs a video transformer to perform self-attention in both spatial and temporal domains. Simple yet effective heatmap augmentation strategies are introduced to enable self-supervised learning. Despite lacking 3D information, the proposed method achieves higher accuracy and improved robustness to noisy and missing keypoints. Extensive evaluations on Penn Action, IKEA ASM, and H2O datasets demonstrate superior performance across multiple fine-grained activity understanding tasks. Furthermore, fusing 2D skeleton heatmaps with RGB videos establishes state-of-the-art results across all metrics and datasets." 
  bibtex={`@inproceedings{tran25la2ds,
 author = {Quoc-Huy Tran and Muhammad Ahmed and Murad Popattia and M. Hassan Ahmed and Andrey Konin and M. Zeeshan Zia},
 title = {Learning by Aligning 2D Skeleton Sequences and Multi-Modality Fusion},
 booktitle = {arXiv Preprint},
 year = {2025}
}`}
  video="https://youtu.be/k0ysYs6Yl6M"
/>

* Quoc-Huy Tran, Ahmed Mehmood, Muhammad Ahmed, Muhammad Naufil, Anas Zafar, Andrey Konin, M. Zeeshan Zia

**Permutation-Aware Activity Segmentation via Unsupervised Frame-to-Segment Alignment.**

_arXiv Preprint_ 2025 <span class="pub-badge technical-report">Technical Report</span>

<PublicationButtons 
  downloads={[
    {label: "Paper (PDF)", url: "https://arxiv.org/pdf/2305.19478.pdf"},
    {label: "GitHub Code", url: "https://github.com/trquhuytin/UFSA-WACV24"},
    {label: "Data Splits for Generalization Experiment", url: "https://drive.google.com/drive/folders/1CaYww3LELVy8u8UTdHdQTDjnvkaVy5kn?usp=sharing"}
  ]}
  abstract="This paper presents an unsupervised transformer-based framework for temporal activity segmentation that exploits both frame-level and segment-level cues. Unlike prior approaches that rely solely on frame-level information, the proposed method integrates a frame-level prediction module, a segment-level prediction module, and a frame-to-segment alignment module to produce permutation-aware segmentation results. Frame-level predictions are obtained using a transformer encoder trained with temporal optimal transport, while segment-level predictions are generated using a transformer decoder to estimate video transcripts. A frame-to-segment alignment module further matches frame-level and segment-level features to handle permutations of actions. To enable fully unsupervised training, the paper introduces simple yet effective pseudo labels inspired by temporal optimal transport. Extensive experiments on four public benchmarks—50 Salads, YouTube Instructions, Breakfast, and Desktop Assembly—demonstrate that the proposed approach achieves comparable or superior performance compared to existing unsupervised activity segmentation methods." 
  bibtex={`@inproceedings{tran25perm,
 author = {Quoc-Huy Tran and Ahmed Mehmood and Muhammad Ahmed and Muhammad Naufil and Anas Zafar and Andrey Konin and M. Zeeshan Zia},
 title = {Permutation-Aware Activity Segmentation via Unsupervised Frame-to-Segment Alignment},
 booktitle = {arXiv Preprint},
 year = {2025}
}`}
  video="https://youtu.be/ZgvbwD3h-fc"
/>

### 2024

* Syed Waleed Hyder, Muhammad Usama, Anas Zafar, Muhammad Naufil, Fawad Javed Fateh, Andrey Konin, M. Zeeshan Zia, Quoc-Huy Tran

**Action Segmentation Using 2D Skeleton Heatmaps and Multi-Modality Fusion.**

_arXiv Preprint_ 2024 <span class="pub-badge technical-report">Technical Report</span>

<PublicationButtons 
  downloads={[
    {label: "Paper (PDF)", url: "https://arxiv.org/pdf/2309.06462.pdf"},
    {label: "Labels and Poses for TUM-Kitchen", url: "https://drive.google.com/drive/folders/113H1p6FhvcpmDcsmXR0V2Wnq6Y2UF_MA"},
    {label: "Poses for Desktop Assembly", url: "https://drive.google.com/drive/folders/1cHrvnrzvPiqHC1S7Jnw8OiryYY0RKMPI"}
  ]}
  abstract="This paper presents a 2D skeleton-based action segmentation approach for fine-grained human activity understanding. Unlike prior methods that directly process sequences of 3D skeleton coordinates using Graph Convolutional Networks (GCNs), the proposed method converts 2D skeletons into heatmap sequences and applies Temporal Convolutional Networks (TCNs) to learn spatiotemporal features. Despite not using 3D information, the approach achieves comparable or superior performance and demonstrates greater robustness to missing keypoints. Performance is further improved through multi-modality fusion by jointly leveraging 2D skeleton heatmaps and RGB video inputs. To the best of our knowledge, this is the first work to employ 2D skeleton heatmap representations and the first to explore 2D skeleton and RGB fusion for action segmentation. Extensive experiments on UW-IOM, TUM-Kitchen, and Desktop Assembly datasets validate the effectiveness of the proposed method." 
  bibtex={`@inproceedings{hyder24actionseg,
 author = {Syed Waleed Hyder and Muhammad Usama and Anas Zafar and Muhammad Naufil and Fawad Javed Fateh and Andrey Konin and M. Zeeshan Zia and Quoc-Huy Tran},
 title = {Action Segmentation Using 2D Skeleton Heatmaps and Multi-Modality Fusion},
 booktitle = {arXiv Preprint},
 year = {2024}
}`}
/>

### 2023

* Sateesh Kumar, Sanjay Haresh, Awais Ahmed, Andrey Konin, M. Zeeshan Zia, Quoc-Huy Tran

**Unsupervised Action Segmentation by Joint Representation Learning and Online Clustering.**

_arXiv Preprint_ 2023 <span class="pub-badge technical-report">Technical Report</span>

<PublicationButtons 
  downloads={[
    {label: "Paper (PDF)", url: "https://arxiv.org/abs/2105.13353"},
    {label: "GitHub Code", url: "https://github.com/trquhuytin/TOT-CVPR22"},
    {label: "Video Dataset and Labels", url: "https://bit.ly/3JKm0JP"}
  ]}
  abstract="We present a novel approach for unsupervised activity segmentation that jointly performs representation learning and online clustering using video frame clustering as a pretext task. Unlike prior works that perform representation learning and clustering sequentially, our method unifies both processes into a single framework, enabling direct optimization for unsupervised activity segmentation. To leverage temporal information in videos, we introduce a temporal optimal transport module that preserves the temporal order of activities while computing pseudo-label cluster assignments. Furthermore, our approach operates in an online manner by processing one mini-batch at a time, significantly reducing memory requirements compared to offline clustering methods. Extensive experiments on public datasets including 50-Salads, YouTube Instructions, and Breakfast, as well as the Desktop Assembly dataset, demonstrate that our approach performs on par with or better than existing methods while being substantially more memory efficient." 
  bibtex={`@inproceedings{kumar23unsup,
 author = {Sateesh Kumar and Sanjay Haresh and Awais Ahmed and Andrey Konin and M. Zeeshan Zia and Quoc-Huy Tran},
 title = {Unsupervised Action Segmentation by Joint Representation Learning and Online Clustering},
 booktitle = {arXiv Preprint},
 year = {2023}
}`}
  video="https://youtu.be/i4Fh_3nzzUI"
/>

### 2022

* Hamza Khan, Sanjay Haresh, Awais Ahmed, Shakeeb Siddiqui, Andrey Konin, M. Zeeshan Zia, Quoc-Huy Tran

**Timestamp-Supervised Action Segmentation with Graph Convolutional Networks.**

_arXiv Preprint_ 2022 <span class="pub-badge technical-report">Technical Report</span>

<PublicationButtons 
  downloads={[
    {label: "Paper (PDF)", url: "https://arxiv.org/pdf/2206.15031.pdf"}
  ]}
  abstract="We introduce a novel approach for temporal activity segmentation under timestamp supervision, where only sparse frame-level annotations are provided for training. Our main contribution is a graph convolutional network that is trained end-to-end to exploit both frame features and connections between neighboring frames in order to generate dense framewise labels from sparse timestamp labels. These generated labels are then used to effectively train the segmentation model. In addition, we propose an alternating learning framework that first initializes and then iteratively refines both the segmentation model and the graph convolutional network. Extensive experiments on four public datasets—50 Salads, GTEA, Breakfast, and Desktop Assembly—demonstrate that the proposed method outperforms the multi-layer perceptron baseline and achieves performance on par with or better than state-of-the-art methods for timestamp-supervised temporal activity segmentation." 
  bibtex={`@inproceedings{khan22timestamp,
 author = {Hamza Khan and Sanjay Haresh and Awais Ahmed and Shakeeb Siddiqui and Andrey Konin and M. Zeeshan Zia and Quoc-Huy Tran},
 title = {Timestamp-Supervised Action Segmentation with Graph Convolutional Networks},
 booktitle = {arXiv Preprint},
 year = {2022}
}`}
  video="https://youtu.be/cohbnojdLQA"
/>

### 2021

* Sanjay Haresh, Sateesh Kumar, Huseyin Coskun, Shahram N. Syed, Andrey Konin, M. Zeeshan Zia, Quoc-Huy Tran

**Learning by Aligning Videos in Time.**

_IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)_ 2021 <span class="pub-badge conference">Conference</span>

<PublicationButtons 
  downloads={[
    {label: "Paper (PDF)", url: "https://openaccess.thecvf.com/content/CVPR2021/papers/Haresh_Learning_by_Aligning_Videos_in_Time_CVPR_2021_paper.pdf"},
    {label: "GitHub Code", url: "https://github.com/trquhuytin/LAV-CVPR21"}
  ]}
  abstract="We present a self-supervised approach for learning video representations using temporal video alignment as a pretext task, while exploiting both frame-level and video-level information. Our method leverages a novel combination of temporal alignment loss and temporal regularization as supervision signals for training an encoder network. Specifically, the temporal alignment loss based on Soft Dynamic Time Warping (Soft-DTW) minimizes the cost of temporally aligning videos in the embedding space. However, optimizing this objective alone can lead to trivial solutions where all frames collapse into a small region of the embedding space. To address this issue, we introduce a temporal regularization term, termed Contrastive-IDM, which encourages temporally distinct frames to be mapped to different embedding locations. Extensive evaluations on action phase classification, action phase progression, and fine-grained frame retrieval tasks across the Pouring, Penn Action, and IKEA ASM datasets demonstrate that the proposed approach outperforms state-of-the-art self-supervised video representation learning methods. Additionally, our method provides significant performance gains in scenarios with limited labeled data." 
  bibtex={`@inproceedings{haresh21lav,
 author = {Sanjay Haresh and Sateesh Kumar and Huseyin Coskun and Shahram N. Syed and Andrey Konin and M. Zeeshan Zia and Quoc-Huy Tran},
 title = {Learning by Aligning Videos in Time},
 booktitle = {IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
 year = {2021}
}`}
  video="https://youtu.be/nXAo6Nt56HQ"
/>

### 2020

* S. Haresh, S. Kumar, M.Z. Zia, Q.H. Tran.

**Towards Anomaly Detection in Dashcam Videos.**

_31st IEEE Intelligent Vehicles Symposium_ 2020 <span class="pub-badge conference">Conference</span>

<PublicationButtons 
  downloads={[
    {label: "Paper (PDF)", url: "https://arxiv.org/pdf/2004.05261.pdf"}
  ]}
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

_arXiv_ 2019 <span class="pub-badge technical-report">Technical Report</span>

<PublicationButtons 
  downloads={[
    {label: "Paper (PDF)", url: "https://arxiv.org/pdf/1907.09382.pdf"}
  ]}
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

_European Conference on Computer Vision (ECCV)_ 2018 <span class="pub-badge conference">Conference</span>

<PublicationButtons 
  downloads={[
    {label: "Paper (PDF)", url: "https://arxiv.org/pdf/1803.07231.pdf"}
  ]}
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

_IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)_ 2018 <span class="pub-badge journal">Journal</span>

<PublicationButtons 
  downloads={[
    {label: "Paper (PDF)", url: "https://arxiv.org/pdf/1801.03399.pdf"},
    {label: "KITTI-3D dataset (160MB)", url: "/dataset/KITTI3D_cvpr17.zip"},
    {label: "Labeled CAD models (1 GB)", url: "https://www.cs.jhu.edu/~cli53/data/CAD_cvpr17.zip"},
    {label: "Rendered Images (Chair+Sofa, 14 GB)", url: "https://www.cs.jhu.edu/~cli53/data/chair+sofa.tar.gz"},
    {label: "Rendered Images (Cars)", url: "http://www.nec-labs.com/~mas/DISCO/"}
  ]}
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

_IEEE Conference on Computer Vision and Pattern Recognition (CVPR)_ 2017 <span class="pub-badge conference">Conference</span>

<PublicationButtons 
  downloads={[
    {label: "Paper (PDF)", url: "https://arxiv.org/pdf/1612.02699.pdf"},
    {label: "KITTI-3D dataset (160MB)", url: "/dataset/KITTI3D_cvpr17.zip"},
    {label: "Labeled CAD models (1 GB)", url: "https://www.cs.jhu.edu/~cli53/data/CAD_cvpr17.zip"},
    {label: "Rendered Images (Chair+Sofa, 14 GB)", url: "https://www.cs.jhu.edu/~cli53/data/chair+sofa.tar.gz"},
    {label: "Rendered Images (Cars)", url: "http://www.nec-labs.com/~mas/DISCO/"}
  ]}
  abstract="Monocular 3D object parsing is highly desirable in various scenarios including occlusion reasoning and holistic scene interpretation. We present a deep convolutional neural network (CNN) architecture to localize semantic parts in 2D image and 3D space while inferring their visibility states, given a single RGB image. Our key insight is to exploit domain knowledge to regularize the network by deeply supervising its hidden layers, in order to sequentially infer intermediate concepts associated with the final task. To acquire training data in desired quantities with ground truth 3D shape and relevant concepts, we render 3D object CAD models to generate large-scale synthetic data and simulate challenging occlusion configurations between objects. We train the network only on synthetic data and demonstrate state-of-the-art performances on real image benchmarks including an extended version of KITTI, PASCAL VOC, PASCAL3D+ and IKEA for 2D and 3D keypoint localization and instance segmentation. The empirical results substantiate the utility of our deep supervision scheme by demonstrating effective transfer of knowledge from synthetic data to real images, resulting in less overfitting compared to standard end-to-end training." 
  bibtex={`@inproceedings{li2017cvpr,
 author = {C. Li and Q.H. Tran and M.Z. Zia and G. Hager and M. Chandraker},
 title = {Deep Supervision with Shape Concepts for Occlusion-Aware 3D Object Parsing},
 booktitle = {CVPR},
 year = {2017}
}`} 
/>

### 2016

* F. Chayya, D. Reddy, S. Upadhyay, V. Chari, M.Z. Zia, K.M. Krishna.

**Monocular Reconstruction of Vehicles: Combining SLAM with Shape Priors.**

_International Conference on Robotics and Automation (ICRA)_ 2016 <span class="pub-badge conference">Conference</span>

<PublicationButtons 
  downloads={[
    {label: "Paper (PDF)", url: "/pdf_files/chayya16icra.pdf"},
    {label: "Project Page and Supplementary Material", url: "http://tinyurl.com/falak-icra16"},
    {label: "Spotlight Talk", url: "https://youtu.be/pJ1BUNNVSsk"}
  ]}
  abstract="Reasoning about objects in images and videos using 3D representations is re-emerging as a popular paradigm in computer vision. Specifically, in the context of scene understanding for roads, 3D vehicle detection and tracking from monocular videos still needs a lot of attention to enable practical applications. Current approaches leverage two kinds of information to deal with the vehicle detection and tracking problem: (1) 3D representations (eg. wireframe models or voxel based or CAD models) for diverse vehicle skeletal structures learnt from data, and (2) classifiers trained to detect vehicles or vehicle parts in single images built on top of a basic feature extraction step. In this paper, we propose to extend current approaches in two ways. First, we extend detection to a multiple view setting. We show that leveraging information given by feature or part detectors in multiple images can lead to more accurate detection results than single image detection. Secondly, we show that given multiple images of a vehicle, we can also leverage 3D information from the scene generated using a unique structure from motion algorithm. This helps us localize the vehicle in 3D, and constrain the parameters of optimization for fitting the 3D model to image data. We show results on the KITTI dataset, and demonstrate superior results compared with recent state-of-the-art methods, with upto 14.64 % improvement in localization error." 
  bibtex={`@inproceedings{chayya16icra,
 author = {F. Chayya and D. Reddy and S. Upadhyay and V. Chari and M.Z. Zia and K.M. Krishna},
 title = {Monocular Reconstruction of Vehicles: Combining SLAM with Shape Priors},
 booktitle = {ICRA},
 year = {2016}
}`} 
/>

* M.Z. Zia, L. Nardi, A. Jack, E. Vespa, Bruno Bodin, P.H.J. Kelly, A.J. Davison.

**Comparative Design Space Exploration of Dense and Semi-Dense SLAM.**

_International Conference on Robotics and Automation (ICRA)_ 2016 <span class="pub-badge conference">Conference</span>

<PublicationButtons 
  downloads={[
    {label: "Paper (PDF)", url: "https://arxiv.org/pdf/1509.04648v1.pdf"},
    {label: "Slides (interactive session)", url: "/pdf_files/zia_icra16_interactive.pdf"},
    {label: "Slides (Spotlight session)", url: "/pdf_files/zia_icra16_spotlight.pdf"}
  ]}
  abstract="SLAM has matured significantly over the past few years, and is beginning to appear in serious commercial products. While new SLAM systems are being proposed at every conference, evaluation is often restricted to qualitative visualizations or accuracy estimation against a ground truth. This is due to the lack of benchmarking methodologies which can holistically and quantitatively evaluate these systems. Further investigation at the level of individual kernels and parameter spaces of SLAM pipelines is non-existent, which is absolutely essential for systems research and integration. We extend the recently introduced SLAMBench framework to allow comparing two state-of-the-art SLAM pipelines, namely KinectFusion and LSD-SLAM, along the metrics of accuracy, energy consumption, and processing frame rate on two different hardware platforms, namely a desktop and an embedded device. We also analyze the pipelines at the level of individual kernels and explore their algorithmic and hardware design spaces for the first time, yielding valuable insights." 
  bibtex={`@inproceedings{zia16icra,
 author = {M.Z. Zia and L. Nardi and A. Jack and E. Vespa and B. Bodin and P.H.J. Kelly and A.J. Davison},
 title = {Comparative Design Space Exploration of Dense and Semi-Dense SLAM},
 booktitle = {ICRA},
 year = {2016}
}`} 
/>

* B. Bodin, L. Nardi, M.Z. Zia, H. Wagstaff, G.S. Shenoy, M. Emani, J. Mawer, C. Kotselidis, A. Nisbet, M. Lujan, B. Franke, P.H.J. Kelly, M. O'Boyle.

**Integrating Algorithmic Parameters into Benchmarking and Design Space Exploration in 3D Scene Understanding.**

_International Conference on Parallel Architectures and Compilation Techniques (PACT)_ 2016 <span class="pub-badge conference">Conference</span>

<PublicationButtons 
  downloads={[
    {label: "Paper (PDF)", url: "/pdf_files/bodin16pact.pdf"}
  ]}
  abstract="System designers typically use well-studied benchmarks to evaluate and improve new architectures and compilers. We design tomorrow's systems based on yesterday's applications. In this paper we investigate an emerging application, 3D scene understanding, likely to be significant in the mobile space in the near future. Until now, this application could only run in real-time on desktop GPUs. In this work, we examine how it can be mapped to power constrained embedded systems. Key to our approach is the idea of incremental co-design exploration, where optimization choices that concern the domain layer are incrementally explored together with low-level compiler and architecture choices. The goal of this exploration is to reduce execution time while minimizing power and meeting our quality of result objective. As the design space is too large to exhaustively evaluate, we use active learning based on a random forest predictor to find good designs. We show that our approach can, for the first time, achieve dense 3D mapping and tracking in the real-time range within a 1W power budget on a popular embedded device. This is a 4.8x execution time improvement and a 2.8x power reduction compared to the state-of-the-art." 
  bibtex={`@inproceedings{bodin16pact,
 author = {B. Bodin and L. Nardi and M.Z. Zia and H. Wagstaff and G.S. Shenoy and M. Emani and J. Mawer and C. Kotselidis and A. Nisbet and M. Lujan and B. Franke and P.H.J. Kelly and M. OBoyle},
 title = {Integrating Algorithmic Parameters into Benchmarking and Design Space Exploration in 3D Scene Understanding},
 booktitle = {PACT},
 year = {2016}
}`} 
/>

### 2015

* L. Nardi, B. Bodin, M.Z. Zia, J. Mawer, A. Nisbet, P.H.J. Kelly, A.J. Davison, M. Lujan, M.F.P. O'Boyle, G. Riley, N. Topham, S. Furber.

**SLAMBench: A performance and accuracy benchmarking methodology for SLAM.**

_International Conference on Robotics and Automation (ICRA)_ 2015 <span class="pub-badge conference">Conference</span>

<PublicationButtons 
  downloads={[
    {label: "Paper (PDF)", url: "https://arxiv.org/pdf/1410.2167.pdf"},
    {label: "In Media: Jetson Hacks", url: "http://jetsonhacks.com/2014/10/09/nvidia-jetson-tk1-scores-well-slambench-introduction"},
    {label: "In Media: HiPEAC Newsletter", url: "https://www.hipeac.org/assets/public/publications/newsletter/hipeacinfo41.pdf"}
  ]}
  abstract="Real-time dense computer vision and SLAM offer great potential for a new level of scene modelling, tracking and real environmental interaction for many types of robot, but their high computational requirements mean that use on mass market embedded platforms is challenging. Meanwhile, trends in low-cost, low-power processing are towards massive parallelism and heterogeneity, making it difficult for robotics and vision researchers to implement their algorithms in a performance-portable way. In this paper we introduce SLAMBench, a publicly-available software framework which represents a starting point for quantitative, comparable and validatable experimental research to investigate trade-offs in performance, accuracy and energy consumption of a dense RGB-D SLAM system. SLAMBench provides a KinectFusion implementation in C++, OpenMP, OpenCL and CUDA, and harnesses the ICL-NUIM dataset of synthetic RGB-D sequences with trajectory and scene ground truth for reliable accuracy comparison of different implementation and algorithms. We present an analysis and breakdown of the constituent algorithmic elements of KinectFusion, and experimentally investigate their execution time on a variety of multicore and GPU accelerated platforms. For a popular embedded platform, we also present an analysis of energy efficiency for different configuration alternatives." 
  bibtex={`@inproceedings{nardi15icra,
 author = {L. Nardi and B. Bodin and M.Z. Zia and J. Mawer and A. Nisbet and P.H.J. Kelly and A.J. Davison and M. Lujan and M.F.P. OBoyle and G. Riley and N. Topham and S. Furber},
 title = {Introducing SLAMBench, a performance and accuracy benchmarking methodology for SLAM},
 booktitle = {ICRA},
 year = {2015}
}`} 
/>

* M.Z. Zia, M. Stark, K. Schindler.

**Towards Scene Understanding with Detailed 3D Object Representations.**

_International Journal of Computer Vision (IJCV)_ 2015 <span class="pub-badge journal">Journal</span>

<PublicationButtons 
  downloads={[
    {label: "Paper (PDF)", url: "https://arxiv.org/pdf/1411.5935.pdf"},
    {label: "Code", url: "/code_share/Zia_CVPR14_Code.zip"},
    {label: "Evaluation Script and Test Set", url: "/code_share/eval_cvpr14_zia_script.zip"}
  ]}
  abstract="Current approaches to semantic image and scene understanding typically employ rather simple object representations such as 2D or 3D bounding boxes. While such coarse models are robust and allow for reliable object detection, they discard much of the information about objects' 3D shape and pose, and thus do not lend themselves well to higher-level reasoning. Here, we propose to base scene understanding on a high-resolution object representation. An object class - in our case cars - is modeled as a deformable 3D wireframe, which enables fine-grained modeling at the level of individual vertices and faces. We augment that model to explicitly include vertex-level occlusion, and embed all instances in a common coordinate frame, in order to infer and exploit object-object interactions. Specifically, from a single view we jointly estimate the shapes and poses of multiple objects in a common 3D frame. A ground plane in that frame is estimated by consensus among different objects, which significantly stabilizes monocular 3D pose estimation. The fine-grained model, in conjunction with the explicit 3D scene model, further allows one to infer part-level occlusions between the modeled objects, as well as occlusions by other, unmodeled scene elements. To demonstrate the benefits of such detailed object class models in the context of scene understanding we systematically evaluate our approach on the challenging KITTI street scene dataset. The experiments show that the model's ability to utilize image evidence at the level of individual parts improves monocular 3D pose estimation w.r.t. both location and (continuous) viewpoint." 
  bibtex={`@inproceedings{zia15ijcv,
 author = {M.Z. Zia and M. Stark and K. Schindler},
 title = {Towards Scene Understanding with Detailed 3D Object Representations},
 booktitle = {IJCV},
 year = {2015}
}`} 
/>

### 2014

* M.Z. Zia, M. Stark, K. Schindler.

**Are Cars Just 3D Boxes? - Jointly Estimating the 3D Shape of Multiple Objects.**

_IEEE Conference on Computer Vision and Pattern Recognition (CVPR)_ 2014 <span class="pub-badge conference">Conference</span>

<PublicationButtons 
  downloads={[
    {label: "Paper (PDF)", url: "https://www.cv-foundation.org/openaccess/content_cvpr_2014/papers/Zia_Are_Cars_Just_2014_CVPR_paper.pdf"},
    {label: "Poster (PDF)", url: "/pdf_files/zia_cvpr14_poster.pdf"},
    {label: "Code", url: "/code_share/Zia_CVPR14_Code.zip"},
    {label: "Evaluation Script and Test Set", url: "/code_share/eval_cvpr14_zia_script.zip"}
  ]}
  abstract="Current systems for scene understanding typically represent objects as 2D or 3D bounding boxes. While these representations have proven robust in a variety of applications, they provide only coarse approximations to the true 2D and 3D extent of objects. As a result, object-object interactions, such as occlusions or ground-plane contact, can be represented only superficially. In this paper, we approach the problem of scene understanding from the perspective of 3D shape modeling, and design a 3D scene representation that reasons jointly about the 3D shape of multiple objects. This representation allows to express 3D geometry and occlusion on the fine detail level of individual vertices of 3D wireframe models, and makes it possible to treat dependencies between objects, such as occlusion reasoning, in a deterministic way. In our experiments, we demonstrate the benefit of jointly estimating the 3D shape of multiple objects in a scene over working with coarse boxes, on the recently proposed KITTI dataset of realistic street scenes." 
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
  downloads={[
    {label: "Abstract (PDF)", url: "https://www.research-collection.ethz.ch/bitstream/handle/20.500.11850/83721/eth-8610-01.pdf?sequence=1"},
    {label: "Full Thesis (PDF)", url: "/pdf_files/Thesis.pdf"},
    {label: "Slides (PDF)", url: "/pdf_files/Zia_PhD_defense.pdf"}
  ]}
  abstract="Scene understanding based on photographic images has been the holy grail of computer vision ever since the field came into existence some 50 years ago. Since computer vision comes from an Artificial Intelligence background, it is no surprise that most early efforts were directed at fine-grained interpretation of the underlying scene from image data. Unfortunately, the attempts proved far ahead of their time and were unsuccessful in tackling real-world noise and clutter, due to unavailability of vital building blocks that came into existence only decades later as well as severely limited computational resources. In this thesis, we consider the problem of detailed 3D scene level reasoning from a single view image in the light of modern developments in vision and adjoining fields. Bottom-up scene understanding relies on object detections, but unfortunately the hypotheses provided by most current object models are in the form of coarse 2D or 3D bounding boxes, which provide very little geometric information - not enough to model fine-grained interactions between object instances. On the other hand, a number of detailed 3D representations of object geometry were proposed in the early days of computer vision, which provided rich description of the modeled objects. At the time, they proved difficult to match robustly to real world images. However over the past decade or so, developments in local image descriptors, discriminative classification, and numerical optimization methods have made it possible to revive such approaches for 3D reasoning and apply them to challenging real-world images. Thus we revisit detailed 3D representations for object classes, and apply them to the task of scene-level reasoning." 
  bibtex={`@phdthesis{thesis,
 author = {M.Z. Zia},
 title = {High-Resolution 3D Layout from a Single View},
 school = {Swiss Federal Institute of Technology (ETH), Zurich},
 year = {2014}
}`} 
/>

### 2013

* M.Z. Zia, M. Stark, K. Schindler.

**Explicit Occlusion Modeling for 3D Object Class Representation.**

_IEEE Conference on Computer Vision and Pattern Recognition (CVPR)_ 2013 <span class="pub-badge conference">Conference</span>

<PublicationButtons 
  downloads={[
    {label: "Paper (PDF)", url: "https://www.cv-foundation.org/openaccess/content_cvpr_2013/papers/Zia_Explicit_Occlusion_Modeling_2013_CVPR_paper.pdf"},
    {label: "Supplemental Material (PDF)", url: "/pdf_files/zia13cvpr_supp.pdf"},
    {label: "Poster (PDF)", url: "/pdf_files/zia_cvpr13_poster.pdf"},
    {label: "Code", url: "/code_share/Zia_CVPR13_Code.zip"},
    {label: "Training Set (1.5 GB)", url: "/dataset/Train_CVPR13_Zia.zip"},
    {label: "Test Set (260 MB)", url: "/dataset/Testset_CVPR13_Zia.zip"}
  ]}
  abstract="Despite the success of current state-of-the-art object class detectors, severe occlusion remains a major challenge. This is particularly true for more geometrically expressive 3D object class representations. While these representations have attracted renewed interest for precise object pose estimation, the focus has mostly been on rather clean datasets, where occlusion is not an issue. In this paper, we tackle the challenge of modeling occlusion in the context of a 3D geometric object class model that is capable of fine-grained, part-level 3D object reconstruction. Following the intuition that 3D modeling should facilitate occlusion reasoning, we design an explicit representation of likely geometric occlusion patterns. Robustness is achieved by pooling image evidence from of a set of fixed part detectors as well as a non-parametric representation of part configurations in the spirit of poselets. We confirm the potential of our method on cars in a newly collected data set of inner-city street scenes with varying levels of occlusion, and demonstrate superior performance in occlusion estimation and part localization, compared to baselines that are unaware of occlusions." 
  bibtex={`@inproceedings{zia13cvpr,
 author = {M.Z. Zia and M. Stark and K. Schindler},
 title = {Explicit Occlusion Modeling for 3D Object Class Representation},
 booktitle = {CVPR},
 year = {2013}
}`} 
/>

* M.Z. Zia, M. Stark, B. Schiele, K. Schindler.

**Detailed 3D Representations for Object Modeling and Recognition.**

_IEEE Transaction on Pattern Analysis and Machine Intelligence (TPAMI)_ 2013 <span class="pub-badge journal">Journal</span>

<PublicationButtons 
  downloads={[
    {label: "Paper (PDF)", url: "/pdf_files/zia13pami.pdf"},
    {label: "Annotations", url: "/dataset/Zia_PAMI13_Annotations.zip"},
    {label: "Poster (PDF)", url: "/pdf_files/zia_cvpr13_poster.pdf"}
  ]}
  abstract="Geometric 3D reasoning at the level of objects has received renewed attention recently in the context of visual scene understanding. The level of geometric detail, however, is typically limited to qualitative representations or coarse boxes. This is linked to the fact that today's object class detectors are tuned toward robust 2D matching rather than accurate 3D geometry, encouraged by bounding-box-based benchmarks such as Pascal VOC. In this paper, we revisit ideas from the early days of computer vision, namely, detailed, 3D geometric object class representations for recognition. These representations can recover geometrically far more accurate object hypotheses than just bounding boxes, including continuous estimates of object pose and 3D wireframes with relative 3D positions of object parts. In combination with robust techniques for shape description and inference, we outperform state-of-the-art results in monocular 3D pose estimation. In a series of experiments, we analyze our approach in detail and demonstrate novel applications enabled by such an object class representation, such as fine-grained categorization of cars and bicycles, according to their 3D geometry, and ultrawide baseline matching." 
  bibtex={`@inproceedings{zia13tpami,
 author = {M.Z. Zia and M. Stark and B. Schiele and K. Schindler},
 title = {Detailed 3D Representations for Object Recognition and Modeling},
 booktitle = {TPAMI},
 year = {2013}
}`} 
/>

### 2011

* M.Z. Zia, M. Stark, B. Schiele, K. Schindler.

**Revisiting 3D geometric models for accurate object shape and pose.**

_IEEE Workshop on 3D Representation and Recognition (3dRR/ICCV WS)_ 2011 <span class="pub-badge conference">Conference</span>

_Best Paper Award from Microsoft Research._

<PublicationButtons 
  downloads={[
    {label: "Paper (PDF)", url: "/pdf_files/zia11iccv.pdf"},
    {label: "Slides (PDF)", url: "/pdf_files/3dRR-presentation.pdf"},
    {label: "Annotations", url: "/dataset/Zia_PAMI13_Annotations.zip"}
  ]}
  abstract="Geometric 3D reasoning has received renewed attention recently, in the context of visual scene understanding. The level of geometric detail, however, is typically limited to qualitative or coarse-grained quantitative representations. This is linked to the fact that today's object class detectors are tuned towards robust 2D matching rather than accurate 3D pose estimation, encouraged by 2D bounding box-based benchmarks such as Pascal VOC. In this paper, we therefore revisit ideas from the early days of computer vision, namely, 3D geometric object class representations for recognition. These representations can recover geometrically far more accurate object hypotheses than just 2D bounding boxes, including relative 3D positions of object parts. In combination with recent robust techniques for shape description and inference, our approach outperforms state-of-the-art results in 3D pose estimation, while at the same time improving 2D localization. In a series of experiments, we analyze our approach in detail, and demonstrate novel applications enabled by our geometric object class representation, such as fine-grained categorization of cars according to their 3D geometry and ultra-wide baseline matching." 
  bibtex={`@inproceedings{zia11iccvws,
 author = {M.Z. Zia and M. Stark and B. Schiele and K. Schindler},
 title = {Revisiting 3D Geometric Models for Accurate Object Shape and Pose},
 booktitle = {ICCV WS},
 year = {2011}
}`} 
/>

### 2009

* U. Klank, M.Z. Zia, M. Beetz.

**3D Model Selection from an Internet Database for Robotic Vision.**

_International Conference on Robotics and Automation (ICRA)_ 2009 <span class="pub-badge conference">Conference</span>

<PublicationButtons 
  downloads={[
    {label: "Paper (PDF)", url: "/pdf_files/zia09icra.pdf"}
  ]}
  abstract="We propose a new method for automatically accessing an internet database of 3D models that are searchable only by their user-annotated labels, for using them for vision and robotic manipulation purposes. Instead of having only a local database containing already seen objects, we want to use shared databases available over the internet. This approach while having the potential to dramatically increase the visual recognition capability of robots, also poses certain problems, like wrong annotation due to the open nature of the database, or overwhelming amounts of data (many 3D models) or the lack of relevant data (no models matching a specified label). To solve those problems we propose the following: First, we present an outlier/inlier classification method for reducing the number of results and discarding invalid 3D models that do not match our query. Second, we utilize an approach from computer graphics, the so called 'morphing', to this application to specialize the models, in order to describe more objects. Third, we search for 3D models using a restricted search space, as obtained from our knowledge of the environment. We show our classification and matching results and finally show how we can recover the correct scaling with the stereo setup of our robot." 
  bibtex={`@inproceedings{klank09icra,
 author = {U. Klank and M.Z. Zia and M. Beetz},
 title = {3D Model Selection from an Internet Database for Robotic Vision},
 booktitle = {ICRA},
 year = {2009}
}`} 
/>

* M.Z. Zia, U. Klank, M. Beetz.

**Acquisition of Dense 3D Model Database for Robotic Vision.**

_International Conference on Advanced Robotics (ICAR)_ 2009 <span class="pub-badge conference">Conference</span>

<PublicationButtons 
  downloads={[
    {label: "Paper (PDF)", url: "/pdf_files/zia09icar.pdf"},
    {label: "Slides (PDF)", url: "/pdf_files/ICAR09_presentation.pdf"}
  ]}
  abstract="Service Robots in real world environments need to have computer vision capability for detecting a large class of objects. We discuss how freely available 3D model databases can be used to enable robots to know the appearance of a wide variety of objects in human environments with special application to our Assistive Kitchen. However, the open and free nature of such databases pose problems for example the presence of incorrectly annotated 3D models, or objects for which very few models exist online. We have previously proposed techniques to automatically select the useful models from the search result, and utilizing such models to perform simple manipulation tasks. Here, we build upon that work, to describe a technique based on Morphing to form new 3D models if we only have a few models corresponding to a label. However, morphing in computer graphics requires a human operator and is computationally burdensome, due to which we present our own automatic morphing technique. We also present a simple technique to speed the matching process of 3D models against real scenes using Visibility culling. This technique can potentially speed-up the matching process by 2-3 times while using less memory, if we have some prior information model and world pose." 
  bibtex={`@inproceedings{zia09icar,
 author = {M.Z. Zia and U. Klank and M. Beetz},
 title = {Acquisition of Dense 3D Model Database for Robotic Vision},
 booktitle = {ICAR},
 year = {2009}
}`} 
/>

* M.Z. Zia.

**Inside-Out Activity Analysis using 3D Hand, Object, and Scene Tracking.**

_MS Thesis, Munich University of Technology (TUM)._ 2009

_Advisor: Michael Beetz._

<PublicationButtons 
  downloads={[
    {label: "Full Thesis (PDF)", url: "/pdf_files/zia09MSthesis.pdf"}
  ]}
  hideAbstract={true}
  hideBibtex={true}
/>

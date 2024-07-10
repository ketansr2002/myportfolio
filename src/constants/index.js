import ecomm from "../assets/ecomm.mp4";
import imageclassifier from "../assets/imageclassifier.mp4";
import chatting from "../assets/chatting.mp4";
import carpooling from "../assets/carpooling.mp4";
import heroImage from "../assets/ketan_pic.jpg";
import aboutImage from "../assets/about.jpg";

export const HERO_IMAGE = heroImage;
export const ABOUT_IMAGE = aboutImage;

export const HERO_CONTENT = `I am an enthusiastic computer science graduate with interest in full stack development and machine learning. With a solid foundation in front-end technologies like Reactjs , and back-end technologies such as Node.js, Express, and databases, I am eager to apply my skills to real-world projects. Additionally, I have a keen interest in machine learning, with knowledge of Python, pandas and scikit-learn to develop predictive models and data-driven applications. My goal is to combine my technical expertise and passion for innovation to contribute to cutting-edge projects and help drive technological advancements.`;

export const ABOUT_TEXT = `I am a dedicated and ambitious computer science graduate with a keen interest in full stack development and machine learning. My passion for understanding the intricacies of technology has also led me to explore the world of machine learning, where I have gained hands-on experience with Python, pandas and scikit-learn to create predictive models and data-driven applications. I thrive in collaborative environments, continuously seeking opportunities to learn and adapt to new challenges. Outside of coding, I enjoy staying active and exploring emerging technologies. My goal is to leverage my skills and enthusiasm to contribute to innovative projects and help drive technological advancements`;

export const EXPERIENCES = [
  {
    year: "2023 - 2023",
    role: "Data Science Intern",
    company: "dyota.ai",
    description: `Involved in the development of an image classification model specifically for the hospitality industry, Extracted positive and negative features from a churn prediction dataset, Successfully collaborated with other team members, each with unique skill sets and perspectives, on this project.`,
    technologies: ["Shap", "python", "matplotlib"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: ecomm,
    link: "https://ketan-ecomm-store.netlify.app",
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "express.js", "MongoDB"],
  },
  {
    title: "Car-pooling webapp (Group Project)",
    image: carpooling,
    link: "https://github.com/ketansr2002/Carpooling",
    description:
      " Developed full stack webapp where user can create ride, book ride and share with different people around them, used machine learning model for calculating fare price, depending upon numerous parameters",
    technologies: ["python", "machine learning", "reactjs", "google map APIs"],
  },
  {
    title: "Image Classifier",
    image: imageclassifier,
    link: "https://github.com/ketansr2002/image-classifier",
    description:
      " Built a CNN model using transfer learning on top of vgg16 which categorizes images into multiple classes, also developed UI for uploading images and showing prediction results",
    technologies: ["CNN", "vgg16", "HTML", "flask"],
  },
  {
    title: " Real-Time Chatting webapp ",
    image: chatting,
    link: "https://github.com/ketansr2002/mychatapp",
    description:
      " Real-time chatting web app which provides authentication, chatting, and manage friendship functionality to users, used socket.io web socket to establish real-time communication for instant message delivery and notifications",
    technologies: ["chakraUI", "socket.io", "react.js", "Express", "mongoDB"],
  },
];

export const CONTACT = {
  address: "Jhansi, Uttar Pradesh (284001)",
  phoneNo: "+91 9140962466",
  email: "ketanraja2002@gmail.com",
};

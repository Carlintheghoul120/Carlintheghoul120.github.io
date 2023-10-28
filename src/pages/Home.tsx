import React, { useState } from 'react';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonTextarea,
  IonCard,
} from '@ionic/react';
import emailjs from 'emailjs-com';
import './Home.css'; // Create a CSS file for your component's styles

const Home: React.FC = () => {
  const [to_name, setToName] = useState('');
  const [from_name, setFromName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [content, setContent] = useState([
    {
      title: 'Introduction',
      description:
        "Carlin Pauls is a motivated Data Analyst Intern at BUI,driven by a passion for data-driven insights \n and a strong desire to excel in the field. With a genuine enthusiasm for learning and a deep commitment to applying his analytical skills, Carlin is poised to contribute his talents and grow professionally as a valuable member of the team. His dedication to making data-driven decisions and his unwavering curiosity make him an asset to any data-focused project.",
    },
    {
      title: 'Web Development',
      description:
        "Proficiency in HTML, CSS, and JavaScript Strong understanding of front-end libraries and frameworks like React Backend development skills with Node.js, Python, or similar technologies Experience with responsive web design and cross-browser compatibility",
    },   {
      title: 'Mobile Development',
      description:
        "Mobile app development using React Native or Ionic React Creating mobile user interfaces and components Mobile app testing and debugging",
    },   {
      title: 'Version Control (Git)',
      description:
        "Proficiency in Git for code version control Collaborative development using Git repositories.",
    },   {
      title: 'Hosting',
      description:
        "Provide hosting...",
    },
    {
      title: 'Database administration',
      description:
        "Provide database adminstration on platform of choice except AWS",
    },
  ]);



  const sendEmail = () => {
    emailjs
      .send(
        'service_dj215h7', // Replace with your service ID
        'template_jkheuuw', // Replace with your template ID
        {
          to_name,
          from_name,
          subject,
          message,
        },
        'psj8aSrUqFFb-KMpL' // Replace with your user ID
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          // You can add your own success handling here
        },
        (error) => {
          console.error('Email could not be sent:', error.text);
          // You can handle errors here
        }
      );
  };

  return (
    <>
      <IonHeader>
        <IonToolbar color="primary"> {/* Add a background color */}
          <IonTitle>Welcome to My Website</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonList>
  {content.map((section, index) => (
    <IonItem key={index} className="fixed-width-card">
      <IonCard>
        <h2>{section.title}</h2>
        <p>{section.description}</p>
      </IonCard>
    </IonItem>
  ))}
</IonList>


        <IonList>
          <IonItem>
            <IonLabel position="floating">To:</IonLabel>
            <IonInput
              type="text"
              value={to_name}
              onIonChange={(e) => setToName(e.detail.value!)}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">From:</IonLabel>
            <IonInput
              type="text"
              value={from_name}
              onIonChange={(e) => setFromName(e.detail.value!)}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Subject:</IonLabel>
            <IonInput
              type="text"
              value={subject}
              onIonChange={(e) => setSubject(e.detail.value!)}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Message:</IonLabel>
            <IonTextarea
              value={message}
              onIonChange={(e) => setMessage(e.detail.value!)}
            />
          </IonItem>
        </IonList>
        <IonButton expand="full" color="primary" onClick={sendEmail}>
          Send Email
        </IonButton>
      </IonContent>
    </>
  );
};

export default Home;

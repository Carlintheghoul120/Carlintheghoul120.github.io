import React from 'react';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';
import { codeWorkingOutline, rocketOutline, layersOutline, mailOutline, hardwareChipOutline } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {
  const email = "carlinpauls@gmail.com";

  const expertise = [
    {
      title: 'Architectural Vision',
      subtitle: 'The Big Picture',
      icon: layersOutline,
      description: "As a Solutions Architect, I bridge the gap between complex business problems and technical execution. I design scalable, resilient ecosystems that align with long-term strategic goals."
    },
    {
      title: 'Development Agnostic',
      subtitle: 'Code to No-Code',
      icon: codeWorkingOutline,
      description: "I deliver results regardless of the medium. Whether it's high-performance plain code, rapid-prototyping with low-code/no-code platforms, or robust cross-platform mobile development using Ionic React."
    },
    {
      title: 'Full-Stack Ecosystems',
      subtitle: 'Web & Mobile',
      icon: rocketOutline,
      description: "Expertise in crafting unified experiences across web and mobile platforms, ensuring seamless data flow and consistent user journeys across all devices."
    },
    {
      title: 'Infrastructure & DevOps',
      subtitle: 'Hosting & Databases',
      icon: hardwareChipOutline,
      description: "Managing the lifecycle of applications through Git version control, tailored hosting solutions, and database administration across diverse environments."
    }
  ];

  return (
    <>
      <IonHeader className="ion-no-border">
        <IonToolbar color="dark">
          <IonTitle>Carlin Pauls | Solutions Architect</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        <div className="hero-section">
          <h1>Turning Complexity into Clarity.</h1>
          <p>Strategic architecture for modern digital products.</p>
        </div>

        <IonGrid>
          <IonRow>
            {expertise.map((item, index) => (
              <IonCol sizeLg="6" sizeMd="6" sizeSm="12" key={index}>
                <IonCard className="modern-card">
                  <IonCardHeader>
                    <div className="icon-container">
                      <IonIcon icon={item.icon} color="primary" />
                    </div>
                    <IonCardSubtitle>{item.subtitle}</IonCardSubtitle>
                    <IonCardTitle>{item.title}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>{item.description}</IonCardContent>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>

        <section className="contact-section ion-padding">
          <IonCard color="primary" className="contact-card">
            <IonCardHeader>
              <IonCardTitle className="ion-text-center">Start a Conversation</IonCardTitle>
            </IonCardHeader>
            <IonCardContent className="ion-text-center">
              <p>Ready to build? I am available for architectural consulting and full-stack development projects.</p>
              <IonButton 
                fill="light" 
                shape="round" 
                href={`mailto:${email}?subject=Project Inquiry`}
                className="ion-margin-top"
              >
                <IonIcon slot="start" icon={mailOutline} />
                {email}
              </IonButton>
            </IonCardContent>
          </IonCard>
        </section>
      </IonContent>
    </>
  );
};

export default Home;

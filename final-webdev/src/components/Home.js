import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Home = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Welcome to De La Salle Lipa</h2>
      <p style={styles.description}>
        De La Salle Lipa (DLSL) is a prestigious Catholic educational institution in Lipa City, Batangas, dedicated to nurturing the academic, moral, and spiritual development of its students. Established in 1962, the school upholds the Lasallian values of faith, zeal for service, and communion in mission, providing a comprehensive education from preschool to graduate studies. DLSL is committed to shaping future leaders who are not only skilled and knowledgeable but also compassionate and socially responsible individuals. With state-of-the-art facilities, a wide range of academic and extracurricular programs, and a focus on holistic development, DLSL is recognized for producing graduates who excel in their chosen fields and make significant contributions to society. As a member of the global Lasallian network, the institution continues to build on its legacy of excellence in education, preparing students to face the challenges of the future with integrity and purpose.
      </p>

      {/* Our Campus Section */}
      <section style={styles.section}>
        <h3 style={styles.subTitle}>Our Campus</h3>
        <p style={styles.text}>
          Explore the beauty and facilities of De La Salle Lipa's campus.
        </p>
        <div style={styles.imageContainer}>
          <img
            src={`${process.env.PUBLIC_URL}/dlsl/20170210_114314.jpg`}
            alt="DLSL Facade"
            style={styles.image}
          />
          <img
            src={`${process.env.PUBLIC_URL}/dlsl/DSC_4822.jpg`}
            alt="DLSL Academic Hall"
            style={styles.image}
          />
        </div>
      </section>

      {/* Mission Section */}
      <section style={styles.section}>
        <h3 style={styles.subTitle}>Mission</h3>
        <p style={styles.text}>
          De La Salle Lipa is a Catholic institution of higher learning whose mission is to provide quality
          education that responds to the needs of society through the development of human resources for the service
          of God, country, and humanity.
        </p>
      </section>

      {/* Vision Section */}
      <section style={styles.section}>
        <h3 style={styles.subTitle}>Vision</h3>
        <p style={styles.text}>
          De La Salle Lipa envisions itself as a world-class institution of higher learning, fostering a culture of
          excellence, transformative education, and meaningful community engagement.
        </p>
      </section>

      {/* Enrollment Link Section */}
      <section style={styles.enrollmentLinkContainer}>
        <Link to="/enroll" style={styles.enrollmentLink}>
          Click here to inquire or enroll at De La Salle Lipa
        </Link>
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
    background: '#f4f6f7',
    borderRadius: '10px',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
    animation: 'fadeIn 1s ease-in',
    maxWidth: '1100px',
    margin: '0 auto',
    fontFamily: '"Lora", serif', // Changed font to Lora for a classic look
  },
  title: {
    color: '#2c3e50',
    textAlign: 'center',
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '30px',
    letterSpacing: '1px',
    fontFamily: '"Poppins", sans-serif', // Changed font to Poppins for the title
  },
  description: {
    fontSize: '18px',
    lineHeight: '1.8',
    textAlign: 'justify',
    marginBottom: '40px',
    color: '#34495e',
    fontFamily: '"Lora", serif', // Font for the description section
  },
  section: {
    marginBottom: '40px',
  },
  subTitle: {
    color: '#2c3e50',
    fontSize: '26px',
    marginBottom: '15px',
    textAlign: 'center',
    fontWeight: '600',
    letterSpacing: '1px',
    fontFamily: '"Poppins", sans-serif', // Font for subtitles
  },
  text: {
    fontSize: '18px',
    lineHeight: '1.8',
    textAlign: 'justify',
    marginBottom: '25px',
    color: '#7f8c8d',
    fontFamily: '"Lora", serif', // Font for text content
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '25px',
    marginTop: '20px',
    flexWrap: 'wrap',
    justifyItems: 'center',
  },
  image: {
    width: '48%',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  },
  enrollmentLinkContainer: {
    textAlign: 'center',
    marginTop: '40px',
  },
  enrollmentLink: {
    fontSize: '20px',
    color: '#3498db',
    textDecoration: 'none',
    fontWeight: 'bold',
    padding: '15px 25px',
    borderRadius: '8px',
    backgroundColor: '#ecf0f1',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    fontFamily: '"Poppins", sans-serif', // Font for the link
  },
  enrollmentLinkHover: {
    backgroundColor: '#d5dbdb',
    transform: 'scale(1.05)',
  },
};

export default Home;

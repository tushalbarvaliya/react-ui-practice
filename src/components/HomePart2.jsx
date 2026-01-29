const styles = {
  heading: {
    background: "linear-gradient(to top, #facc15, #f87171)", 
    WebkitBackgroundClip: "text",
    color: "transparent",
    textAlign: "center",
    fontSize: "1.875rem", 
    fontWeight: "bold",
  },
  mainHeading: {
    textAlign: "center",
    color: "white",
    fontSize: "3.75rem", 
  },
  subHeading: {
    background: "linear-gradient(to top, #facc15, #f87171)", 
    WebkitBackgroundClip: "text",
    color: "transparent",
    textAlign: "center",
    fontSize: "3.75rem", 
    fontWeight: "bold",
  },
  paragraphContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1rem", 
  },
  paragraph: {
    color: "#9ca3af", 
    fontSize: "1.125rem", 
    fontWeight: "600", 
    width: "50%", 
    textAlign: "center",
  },
};

export const HomePart2 = () => {
  return (
    <div>
      <h2 style={styles.heading}>Our Mission</h2>
      <h1 style={styles.mainHeading}>Lorem ipsum dolor sit amet</h1>
      <h1 style={styles.subHeading}>consectetur adipisicing</h1>
      <div style={styles.paragraphContainer}>
        <p style={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolores,
          animi repudiandae exercitationem illo corporis excepturi aut ipsum
          aspernatur inventore dolor possimus facere, itaque praesentium iusto.
          Quasi voluptatum ratione dolorum.
        </p>
      </div>
    </div>
  );
};

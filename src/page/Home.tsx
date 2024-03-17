import "../style/index.css";

function Home() {
  return (
    <>
      <div className="container-fluid">
        <img className="img" src="./src/img/Passport.png" alt="Amirul Anwar" />
        <h1>Amirul Anwar bin Mohd Solong</h1>
        <p>
          I am a Civil Engineer at Perunding SHASH. I'm joining Online Coding
          Bootcamp to become a Professional Software Developer one day. I will
          make sure I will learn a lot of development skills!
        </p>
        <p>
          Email:{" "}
          <a href="mailto:anwar_solong@yahoo.com.my">
            anwar_solong@yahoo.com.my
          </a>
        </p>
        <p>Location: Bandar Sri Damansara, Kuala Lumpur</p>
        <p>Phone: per Requested</p>
      </div>
    </>
  );
}

export default Home;

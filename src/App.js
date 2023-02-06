import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./imgs/alexa.png";
import CortanaImage from "./imgs/cortana.png";
import SiriImage from "./imgs/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
                description="Alexa was created by Amazon and sells your information"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={CortanaImage}
                description="Cortana was made by Microsoft and was disabled by every user"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                image={SiriImage}
                description="Siri was made by apple which is a terrible company"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

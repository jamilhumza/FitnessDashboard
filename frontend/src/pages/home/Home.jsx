import Info from "../../components/info/Info";
import "./home.css";
import Smallcard from "../../components/smallcard/Smallcard";
import Bigcard from "../../components/bigcard/Bigcard";

export default function Home() {
  return (
    <div className="home">
      <Info />
      <div className="homeWidgets">
        <Smallcard/>
        <Bigcard/>
      </div>
    </div>
  );
}
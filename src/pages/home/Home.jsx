// import { useLocation } from "react-router";
import Header from "../../header/Header";
import Posts from "../../posts/Posts";
import Sidebar from "../../sidebar/Sidebar";
import "./home.css";

const Home = () => {
  // const location = useLocation();
  // console.log(location);
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;

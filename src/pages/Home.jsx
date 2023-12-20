import { Outlet, Link } from "react-router-dom";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
import VideoItem from "../components/videoItem/VideoItem";

export default function Home() {
  return (
    <div className="container">
      {/* {transcripts.map((item) => (
        <div className="">
          <VideoItem item={item} />
        </div>
      ))} */}
      {/* <Header /> */}
      {/* <div className="">
        <Link className="page-button" to="/about-idea">
          იდეის შესახებ
        </Link>
      </div> */}
      {/* <div className="">
        <Link className="page-button" to="/game">
          თამაში
        </Link>
      </div>
      <div className="">
        <Link className="page-button" to="/about-game">
          თამაშის შესახებ
        </Link>
      </div> */}
      {/* <Footer /> */}
    </div>
  );
}

import { Link } from "react-router-dom";
import '../App.css';

const Finish = () => {
    return (
        <div className = "App">
            <p>ご応募ありがとうございます！</p>

            <Link to="/"><button>トップページへ</button></Link>
        </div>
    );
};

export default Finish;
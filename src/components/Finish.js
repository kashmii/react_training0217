import { Link } from "react-router-dom";

const Finish = () => {
    return (
        <div>
            <p>ご応募ありがとうございます！</p>

            <Link to="/"><button>トップページへ</button></Link>
        </div>
    );
};

export default Finish;
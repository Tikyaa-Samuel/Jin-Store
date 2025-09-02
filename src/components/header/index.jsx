import './index.css';
const Header = ()=>{
    return (
        <>
            <div className="delivery">
                <p>FREE delivery and 40% discount for next three orders! Place your first order in.</p>
                <div className="endofsale">
                    <p className="timelimit">Until the end of the sale:<span className="time">47</span>days<span className="time">06</span>hours<span className="time">46</span>minutes<span className="time">51</span>seconds</p>
                </div>
            </div>
        </>
    )
}

export default Header;
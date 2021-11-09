import './index.css';

const ItemListContainer = (props) => {
    return (
        <section className="landing-wrapper">
            <div className="landing-container"> 
                <h1 className="landing-text">{props.title}</h1>
                <h2 className="landing-text">{props.subTitle}</h2>
                <h3 className="landing-text">{props.location}</h3>
                <p className="landing-text">{props.greeting}</p>
            </div>
        </section>
        
    );
};

export default ItemListContainer;
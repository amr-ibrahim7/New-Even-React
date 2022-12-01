import items from "./data";

const renderItems = () => {

    return items.map((item,index) => {
        return (
            <div key={index}>
                <h2 >{item}</h2>
            </div>
        );
    });
};

export default renderItems;
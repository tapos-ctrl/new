import React from 'react';
import Phone from '../Phone/Phone'

const Home = () => {
    const style = {
        // margin: '7px',
        justifyContent: 'space-between'
    }
    const phones = [{ "id": 1, "Name": "Joel", "image": "https://i.ibb.co/HNNmQML/5a96fd70aae605c0028b4595.jpg" },
    { "id": 2, "Name": "Symphony", "image": "https://i.ibb.co/zF9bpsQ/138581-v4-oneplus-8t-mobile-phone-large-1.jpg" },
    { "id": 3, "Name": "Faye", "image": "https://i.ibb.co/HNWqSYs/akrales-181019-3014-0770.jpg" },
    { "id": 3, "Name": "Faye", "image": "https://i.ibb.co/HNWqSYs/akrales-181019-3014-0770.jpg" },
    { "id": 3, "Name": "Faye", "image": "https://i.ibb.co/HNWqSYs/akrales-181019-3014-0770.jpg" },
    { "id": 3, "Name": "Faye", "image": "https://i.ibb.co/HNWqSYs/akrales-181019-3014-0770.jpg" },
    { "id": 3, "Name": "Faye", "image": "https://i.ibb.co/HNWqSYs/akrales-181019-3014-0770.jpg" },
    { "id": 3, "Name": "Faye", "image": "https://i.ibb.co/HNWqSYs/akrales-181019-3014-0770.jpg" },
    { "id": 3, "Name": "Faye", "image": "https://i.ibb.co/HNWqSYs/akrales-181019-3014-0770.jpg" },
    { "id": 3, "Name": "Faye", "image": "https://i.ibb.co/HNWqSYs/akrales-181019-3014-0770.jpg" },
    { "id": 4, "Name": "Klement", "image": "https://i.ibb.co/ZKJ1DD0/images.jpg" }]
    return (
        <div style={style}>
            <div className="container">
                <div className="row">
                        {
                            phones.map(phone => <Phone phone={phone}></Phone>)
                        }
                </div>
            </div>
        </div>
    );
};

export default Home;
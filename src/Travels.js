import React from "react";
import Travel from "./Travel";


const trips = [
    {
        photo: "https://www.smartertravel.com/uploads/2018/03/shutterstock_519559273-1400x500.jpg",
        destination: "Honolulu",
        country: "U.S.A.",
        distance: "12,588 km"
    },
    {
        photo: "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Africa/South%20Africa/Cape%20Town/cape-town-guides-lead.jpg?imwidth=450",
        destination: "Cape Town",
        country: "South Africa",
        distance: "8,562 km"
    },
    {
        photo: "https://www.smartertravel.com/uploads/2018/03/shutterstock_519559273-1400x500.jpg",
        destination: "Honolulu",
        country: "U.S.A.",
        distance: "12,588 km"
    },
    {
        photo: "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Africa/South%20Africa/Cape%20Town/cape-town-guides-lead.jpg?imwidth=450",
        destination: "Cape Town",
        country: "South Africa",
        distance: "8,562 km"
    },
    {
        photo: "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Africa/South%20Africa/Cape%20Town/cape-town-guides-lead.jpg?imwidth=450",
        destination: "Cape Town",
        country: "South Africa",
        distance: "8,562 km"
    },
];

const Travels = () => (
<div>
{trips.map(trip => (
    <Travel tripInfo={trip}/>
))}
</div>
);

export default Travels;
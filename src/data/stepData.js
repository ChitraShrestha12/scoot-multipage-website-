import locateImg from "../assets/Images/locate.svg";
import pickupImg from "../assets/Images/ride.svg";
import enjoyRideImg from "../assets/Images/scooter.svg";

const stepData = [
  {
    img: locateImg,
    imgName: "Locate with app Image",
    title: "Locate with app",
    description:
      "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.",
  },
  {
    img: pickupImg,
    imgName: "Pick your scooter Image",
    title: "Pick your scooter",
    description:
      "We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.",
  },

  {
    img: enjoyRideImg,
    imgName: "Enjoy the ride",
    title: "Enjoy the ride",
    description:
      "Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.",
  },
];
export default stepData;

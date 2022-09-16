import { 
    faAlignLeft,
    faAllergies,
    faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../shared/assets/ourPrograms/firstday-1.jpg';
import Logo1 from '../../../shared/assets/ourPrograms/firstday-2.jpg';
import Logo2 from '../../../shared/assets/ourPrograms/firstday-3.jpg';

const ourProgramsData = [
    {
        id:1,
        icon: faUserGroup,
        time: "09.00 Am",
        roomNumber: 240,
        name: "By Jenny Green",
        img: Logo,
        alt: "image1",
        title: "Introduction to Design",
        description: "Quisque ut libero sapien. Integer tellus nisl,efficitur sed dolor at,vehicula finibus massa. Sed tincidunt metus sed eleifend suscipit.",
    },
    {
        id:2,
        icon: faAllergies,
        time: "10.00 Am",
        roomNumber: 360,
        alt: "image2",
        name: "By Johnathan mark",
        img: Logo1,
        title: "Introduction to Design",
        description: "Quisque ut libero sapien. Integer tellus nisl,efficitur sed dolor at,vehicula finibus massa. Sed tincidunt metus sed eleifend suscipit.",
    },
    {
        id:3,
        icon: faAlignLeft,
        time: "11.00 Am",
        roomNumber: 450,
        alt: "image3",
        name: "By Johnathan Doe",
        img: Logo2,
        title: "Introduction to Design",
        description: "Quisque ut libero sapien. Integer tellus nisl,efficitur sed dolor at,vehicula finibus massa. Sed tincidunt metus sed eleifend suscipit.",
    },
]

export default ourProgramsData;

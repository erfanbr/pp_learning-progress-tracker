import {GiBookCover, GiPlatform} from "react-icons/gi";
import {
    MdLibraryBooks,
    MdSpaceDashboard,
    MdEvent,
    MdSpeakerNotes,
    MdSettingsApplications,
    MdCategory
} from "react-icons/md";
import {CgPerformance} from "react-icons/cg";
import {IoHardwareChip} from "react-icons/io5";
import {GiPathDistance} from "react-icons/gi";


const navBarLinks = [
    {label: "Overview", href: "/", icon: MdSpaceDashboard},
    {label: "Learning Paths", href: "/learning_paths", icon: GiPathDistance},
    {label: "Courses", href: "/courses", icon: MdLibraryBooks},
    // {label: "Courses Overview", href: "/courses", icon: MdLibraryBooks, parentCategory: "courses"},
    {label: "Platforms", href: "/platforms", icon: GiPlatform, parentCategory: "courses"},
    {label: "Categories", href: "/categories", icon: MdCategory, parentCategory: "courses"},
    {label: "Technologies", href: "/technologies", icon: IoHardwareChip, parentCategory: "courses"},
    // {label: "Schedule", href: "/schedule", icon: MdEvent},
    // {label: "Performance", href: "/performance", icon: CgPerformance},
    // {label: "Notes", href: "/notes", icon: MdSpeakerNotes},
    // {label: "Settings", href: "/settings", icon: MdSettingsApplications},
]

export default navBarLinks;
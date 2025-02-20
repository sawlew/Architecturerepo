import LearnMore from "../LearnMore";

const Images = [
    {
        src: require("../../assets/1.jpg"),
        width: 600,
        height: 212,
        customOverlay: (
        <div className="bg-black h-full bg-opacity-30">
            <div className="text-white flex justify-end pr-5 pt-2">
                <LearnMore />
            </div>
        </div>
        ),
    },
    {
        src: require("../../assets/2.jpg"),
        width: 600,
        height: 212,
        customOverlay: (
        <div className="bg-black h-full bg-opacity-30">
            <div className="text-white flex justify-end pr-5 pt-2">
                <LearnMore />
            </div>
        </div>
        ),
    },
    {
        src: require("../../assets/3.jpg"),
        width: 600,
        height: 212,
        customOverlay: (
        <div className="bg-black h-full bg-opacity-30">
            <div className="text-white flex justify-end pr-5 pt-2">
                <LearnMore />
            </div>
        </div>
        ),
    },
    {
        src: require("../../assets/4.jpg"),
        width: 900,
        height: 212,
        customOverlay: (
        <div className="bg-black h-full bg-opacity-30">
            <div className="text-white flex justify-end pr-5 pt-2">
                <LearnMore />
            </div>
        </div>
        ),
    },
    {
        src: require("../../assets/5.jpg"),
        width: 900,
        height: 212,
        customOverlay: (
        <div className="bg-black h-full bg-opacity-30">
            <div className="text-white flex justify-end pr-5 pt-2">
                <LearnMore />
            </div>
        </div>
        ),
    }
]

export default Images;
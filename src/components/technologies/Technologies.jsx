import { use } from "react";
import Technology from "./Technology";

const Technologies = ({ technologiesPromise }) => {
    const technologies = use(technologiesPromise);
    console.log("tech", technologies);
    return (
        <div>
            <Technology technologies={technologies}></Technology>
        </div>
    );
};

export default Technologies;
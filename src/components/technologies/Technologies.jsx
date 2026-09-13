import { use , useState } from "react";
import Technology from "./Technology";
import { toast } from "react-toastify";

const Technologies = ({ technologiesPromise }) => {
    const technologies = use(technologiesPromise);
    const [selectedTechnologies, setSelectedTechnologies] = useState([]);
    
    // Add technology
    const handleAddToStack = (technology) => {
        setSelectedTechnologies((prev) => [...prev, technology]);
        toast.success(`${technology.name} added to your stack!`);
    };

    // Remove one technology
    const handleRemoveFromStack = (id) => {
        const technology = selectedTechnologies.find((item) => item.id === id);
        setSelectedTechnologies((prev) =>
            prev.filter((technology) => technology.id !== id),
        );
        toast.info(`${technology.name} removed from your stack!`);
    };

    // Remove all technologies
    const handleRemoveAll = () => {
        setSelectedTechnologies([]);
        toast.info("All technologies removed!");
    };


    return (
        <Technology
            technologies={technologies}
            selectedTechnologies={selectedTechnologies}
            onAddToStack={handleAddToStack}
            onRemoveFromStack={handleRemoveFromStack}
            onRemoveAll={handleRemoveAll}
        />
    );
};

export default Technologies;
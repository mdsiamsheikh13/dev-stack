import { CiStar } from "react-icons/ci";

const Technology = ({
    technologies,
    selectedTechnologies,
    onAddToStack,
    onRemoveFromStack,
    onRemoveAll,
}) => {
    return (
        <section className="container mx-auto px-5 py-10">

            <div className="my-10">
                <h2 className="text-4xl font-extrabold">
                    Explore{" "}
                    <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                        Technologies
                    </span>
                </h2>
                <p className="mt-2">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

            <div className="flex flex-col justify-between lg:flex-row gap-10">
                <div className="w-full lg:w-2/3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                        {technologies.map((technology) => {
                            const isSelected = selectedTechnologies.some(
                                (item) => item.id === technology.id,
                            );

                            return (
                                <div
                                    key={technology.id}
                                    className="border border-slate-100 rounded-lg p-5 hover:shadow-md transition"
                                >

                                    <div className="flex justify-between items-center">
                                        <img
                                            src={technology.icon}
                                            alt={technology.name}
                                            className="w-12 h-12 object-contain mb-4"
                                        />
                                    </div>

                                    <h2 className="text-lg font-semibold">
                                        {technology.name}
                                    </h2>

                                    <p className="text-[#64748B] text-[14px] py-2">
                                        {technology.description}
                                    </p>

                                    <hr className="mt-8 border-gray-100" />

                                    <div className="flex justify-between items-center">
                                        <p className="text-sm text-[#64748B] mt-2 bg-[#0ea4e918] py-1 px-2 rounded-lg">
                                            {technology.category}
                                        </p>

                                        <p className="text-sm text-[#64748B] mt-2">
                                            {technology.difficulty}
                                        </p>

                                        <p className="text-[14px] flex items-center gap-1">
                                            <CiStar className="text-yellow-500" />
                                            {technology.rating}
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => onAddToStack(technology)}
                                        disabled={isSelected}
                                        className={`w-full text-xl py-2 rounded-lg mt-5 transition ${isSelected
                                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                            : "bg-black text-white hover:bg-slate-600"
                                            }`}
                                    >
                                        {isSelected ? "Added to Stack" : "Add to Stack"}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="w-full lg:w-1/4">
                    <div className="border border-slate-100 rounded-lg p-5">
                        <div className="flex justify-between items-center">
                            <h3 className="text-black text-xl font-semibold">
                                Your Stack
                            </h3>
                        </div>

                        <p className="text-[#64748B] text-sm mt-1">
                            {selectedTechnologies.length === 0
                                ? "No technologies selected yet."
                                : `${selectedTechnologies.length} technology${selectedTechnologies.length > 1 ? "ies" : ""
                                } selected.`}
                        </p>

                        {selectedTechnologies.length === 0 ? (
                            <div className="border border-dashed border-slate-200 rounded-lg p-5 mt-5 text-center">
                                <p className="text-[#64748B] text-sm">
                                    Your Stack is empty
                                </p>
                            </div>
                        ) : (
                            <div className="mt-5 space-y-3">
                                {selectedTechnologies.map((technology) => (
                                    <div
                                        key={technology.id}
                                        className="flex items-center justify-between border border-slate-100 rounded-lg p-3"
                                    >
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={technology.icon}
                                                alt={technology.name}
                                                className="w-8 h-8 object-contain"
                                            />

                                            <div>
                                                <p className="font-semibold text-sm">
                                                    {technology.name}
                                                </p>

                                                <p className="text-xs text-[#64748B]">
                                                    {technology.category}
                                                </p>
                                            </div>

                                        </div>

                                        {/* technology Delete */}
                                        <button
                                            onClick={() =>
                                                onRemoveFromStack(technology.id)
                                            }
                                            className="text-red-500 hover:text-red-700 text-sm font-semibold"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {selectedTechnologies.length > 0 && (
                            <button
                                onClick={onRemoveAll}
                                className="text-sm w-full mt-5 text-red-500 bg-red-50 py-2 rounded-lg font-semibold"
                            >
                                Remove All
                            </button>
                        )}
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Technology;
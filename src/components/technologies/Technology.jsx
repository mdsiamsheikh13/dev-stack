import React from "react";

const Technology = ({ technologies }) => {
    return (
        <section className="container mx-auto px-5 py-10">
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-2/3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                        {technologies.map((technology) => {
                            return (
                                <div
                                    key={technology.id}
                                    className="border border-slate-100 rounded-lg p-5 hover:shadow-md transition"
                                >
                                    <img
                                        src={technology.icon}
                                        alt={technology.name}
                                        className="w-12 h-12 object-contain mb-4"
                                    />

                                    <h2 className="text-lg font-semibold">{technology.name}</h2>

                                    <p className="text-sm text-[#64748B] mt-2">
                                        {technology.category}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="w-full lg:w-1/4">
                    <div className="border border-slate-100 rounded-lg p-5">
                        <h3 className="text-black text-xl font-semibold">Your Stack</h3>

                        <p className="text-[#64748B] text-sm mt-1">
                            No technologies selected yet.
                        </p>

                        <div className="border border-dashed border-slate-200 rounded-lg p-5 mt-5 text-center">
                            <p className="text-[#64748B] text-sm">Your Stack is empty</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technology;
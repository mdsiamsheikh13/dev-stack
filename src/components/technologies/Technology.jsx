import React from "react";
import { CiStar } from "react-icons/ci";

const Technology = ({ technologies }) => {
    return (
        <section className="container mx-auto px-5 py-10">
            
            <div className="my-10">
                <h2 className="text-4xl font-extrabold">
                    Explore the{" "}
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
                                        <button className="bg-[#0ea4e918] text-[#64748B] text-sm py-1 px-3 rounded-xl">
                                            {technology.badge}
                                        </button>
                                    </div>
                                    <h2 className="text-lg font-semibold ">{technology.name}</h2>

                                    
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
                                    <button className=" w-full bg-black text-white text-xl py-2 rounded-lg hover:bg-slate-600 mt-5">
                                        Add to Stack
                                    </button>
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
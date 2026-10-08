import Sparkle from "../assets/icon-sparkle.svg";
import Plus from "../assets/icon-plus.svg";
import Arrow from "../assets/icon-arrow-right.svg";
import Trending from "../assets/icon-trending-up.svg";

export function Main() {
    return (
        <div className="flex flex-col md:flex-row min-h-0 flex-1 md:overflow-hidden font-inter text-white">
            <div className="flex w-full flex-col justify-center px-12 pt-12 text-wrap">
                <h1 className="text-6xl font-medium">A classroom for every child.</h1>
                <p className="py-12 font-normal text-lg text-blue-200">We fund the schools, train the teachers, and measure what works - so every child we reach today becomes a graduate tomorrow.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full">
                <div className="flex flex-col h-80 md:h-auto p-10 border justify-between border-blue-500 hover:bg-blue-500/25">
                    <div className="flex justify-between">
                        <img src={Sparkle} alt="Sparkle" />
                        <h1 className="font-inter font-medium text-4xl">2.4M</h1>
                    </div>
                    <div>
                        <h2 className="font-medium text-xl">Students reached</h2>
                        <p className="font-normal text-blue-200">Across 31 countries since 2011.</p>
                    </div>
                </div>
                <div className="flex flex-col h-80 md:h-auto p-10 border justify-between border-blue-500 hover:bg-blue-500/25">
                    <div className="flex justify-between">
                        <img src={Plus} alt="Plus" />
                        <h1 className="font-inter font-medium text-4xl">1,284</h1>
                    </div>
                    <div>
                        <h2 className="font-medium text-xl">Schools partnered</h2>
                        <p className="font-normal text-blue-200">In 14 countries, from Kenya to Guatemala.</p>
                    </div>
                </div>
                <div className="flex flex-col h-80 md:h-auto p-10 border justify-between border-blue-500 hover:bg-blue-500/25">
                    <div className="flex justify-between">
                        <img src={Arrow} alt="Arrow" />
                        <h1 className="font-inter font-medium text-4xl">38K</h1>
                    </div>
                    <div>
                        <h2 className="font-medium text-xl">Teachers trained</h2>
                        <p className="font-normal text-blue-200">Equipped with modern tools and methodology.</p>
                    </div>
                </div>
                <div className="flex flex-col h-80 md:h-auto p-10 border justify-between border-blue-500 hover:bg-blue-500/25">
                    <div className="flex justify-between">
                        <img src={Trending} alt="Trending" />
                        <h1 className="font-inter font-medium text-4xl">3.1x</h1>
                    </div>
                    <div>
                        <h2 className="font-medium text-xl">Graduation lift</h2>
                        <p className="font-normal text-blue-200">Partner schools outperform national averages 3x.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
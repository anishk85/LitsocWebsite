import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import s from "../assets/s.svg";
import l from "../assets/l.svg";
import Cursor from "../components/Cursor"

const HomePage = () => {
    const [data, setData] = useState({ posts: [] });

    const getAllData = async () => {
        try {
            const result = await fetch(`${process.env.REACT_APP_BASE_URL}/getAllPosts`);
            const response = await result.json();
            toast.success("Data fetched successfully");
            setData(response);
        } catch (error) {
            toast.error("Some issue has occurred");
            console.log(error.message);
        }
    };

    useEffect(() => {
        getAllData();
    }, []);

    console.log(data);

    return (
        <div className='w-full min-h-screen bg-black text-white overflow-hidden rounded-r-[60px]'>
            <Cursor/>
            <div className='h-full grid grid-cols-1 md:grid-cols-[1fr_400px]'>
                {/* First Box */}
                <div className="h-[300px] border-t-2 border-white self-end text-[80px] md:text-[133px] font-bricolage font-[500px] flex items-baseline flex-wrap px-4">
                    <div className='flex'>
                    <span className='font-normal leading-[100px] md:leading-[159.59px] sm:leading-[80px] -tracking-wider'>
                        <img src={l} alt="" className="w-16 md:w-24" />
                    </span>
                    <span className='leading-[100px] md:leading-[159.59px] -tracking-wider sm:leading-[80px]'>iterary</span>
                    </div>
                    <div className="flex">
                        <span className='md:pl-[1.2rem] leading-[100px] md:leading-[159.59px] sm:leading-[80px] -tracking-wider sm:-tracking-wide'>
                            <img src={s} alt="" className="w-16 md:w-24" />
                        </span>
                        <span className='leading-[100px] md:leading-[159.59px] -tracking-wider sm:leading-[80px]'>ociety</span>
                    </div>
                    <div className="hidden md:block -mt-[80px] text-[153.17px] leading-[183.81px] -tracking-wider">
                        Griffinsight
                    </div>

                </div>

                {/* Second Box */}
                <div className="border-l-2 border-white flex flex-col p-4">
                    {/* Upcoming Events */}
                    <div className="font-bricolage font-[700px] text-[28px] md:text-[38px] leading-[35px] md:leading-[45.6px] -tracking-wider px-4">
                        Upcoming Events
                    </div>

                    <div>
                        {data.posts.map((post) => {
                            const postDate = new Date(post.postTime);
                            const date = postDate.toLocaleDateString();
                            const time = postDate.toLocaleTimeString();
                            return (
                                <div key={post._id} className='flex flex-col border-[2px] border-white mx-2 md:mx-4 my-2 md:my-3 p-2'>
                                    <h3 className='font-poppins text-[20px] md:text-[28.22px] font-medium leading-[30px] md:leading-[42.33px] tracking-[-0.05em] text-left px-2'>
                                        {post.heading}
                                    </h3>
                                    <div className="flex justify-between">
                                        <p className='mt-2 md:mt-4 font-poppins text-[14px] md:text-[17.64px] font-light leading-[20px] md:leading-[26.46px] tracking-[-0.05em] text-left px-2'>
                                            {post.clubName}
                                        </p>
                                        <div className="flex flex-col">
                                            <p className='font-poppins text-[13px] md:text-[15.87px] font-light leading-[20px] md:leading-[23.81px] tracking-[-0.05em] text-right px-1'>
                                                {time}
                                            </p>
                                            <p className='font-poppins text-[13px] md:text-[15.87px] font-light leading-[20px] md:leading-[23.81px] tracking-[-0.05em] text-right px-1'>
                                                {date}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Achievements Section */}
                    <div className="flex flex-col mt-4">
                        <p className='font-poppins text-[15px] md:text-[17.64px] font-light leading-[22px] md:leading-[26.46px] tracking-[0.05em] text-left pl-2 md:pl-[2rem]'>
                            Explore
                        </p>
                        <p className='font-bricolage text-[40px] md:text-[57.87px] font-[500] leading-[50px] md:leading-[63.44px] tracking-[-0.05em] text-left pl-2 md:pl-[2rem]'>
                            Who are we
                            <br /> Achievements
                            <br /> Clubs
                            <br /> Gallery
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HomePage;